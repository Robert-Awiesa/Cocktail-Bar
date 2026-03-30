import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import "./OrderTracking.css";

const OrderTracking = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;

    const unsub = onSnapshot(doc(db, "orders", orderId), (docSnap) => {
      if (docSnap.exists()) {
        setOrder({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    });

    return () => unsub();
  }, [orderId]);

  // FIX: Changed orderData to order to match your state name
  useEffect(() => {
    if (order?.status === "completed") {
      localStorage.removeItem("lastOrderId");
    }
  }, [order?.status]); // Added ? safety check

  if (loading) return <div className="loader">Chilling the glasses... 🧊</div>;

  if (!order)
    return (
      <div className="tracking-container">
        <div className="error">Order not found. Check your receipt!</div>
        <Link to="/" className="back-home">
          Go Back Home
        </Link>
      </div>
    );

  // Logic for the Progress Bar width
  const statusSteps = { pending: 20, preparing: 50, ready: 80, completed: 100 };
  const progressWidth = statusSteps[order.status] || 0;

  return (
    <div className="tracking-container">
      <div className="tracking-card">
        <h2>Order #{order.id.slice(-5)}</h2>
        <p className="thanks-msg">Thanks, {order.customerName}! We're on it.</p>

        <div className="status-visual">
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          <div className="status-labels">
            <span className={order.status === "pending" ? "active" : ""}>
              Received
            </span>
            <span className={order.status === "preparing" ? "active" : ""}>
              Squeezing
            </span>
            <span className={order.status === "ready" ? "active" : ""}>
              Ready!
            </span>
          </div>
        </div>

        <div className="order-details-box">
          <h4>Your Items:</h4>
          {/* Added safety check for items array */}
          {order.items?.map((item, i) => (
            <p key={i}>
              {item.quantity}x {item.name}
            </p>
          ))}
          <hr />
          <p className="delivery-note">
            {order.type === "delivery"
              ? `🚚 Delivering to: ${order.address}`
              : "🛍️ Ready for pickup at the bar"}
          </p>
        </div>

        {order.status === "ready" && (
          <div className="ready-alert">
            <h3>🎉 It's Fresh & Ready!</h3>
            <p>Come grab your sips at the counter.</p>
          </div>
        )}

        <Link to="/" className="back-home">
          Order More Sips
        </Link>
      </div>
    </div>
  );
};

export default OrderTracking;
