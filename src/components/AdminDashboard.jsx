import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState("active");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //authentication
  useEffect(() => {
    const adminAuth = sessionStorage.getItem("admin_access");
    if (adminAuth === "true") {
      setIsAuthenticated(true);
    } else {
      const pass = prompt("Enter Barista Access Code:");
      if (pass === "sips2026") {
        sessionStorage.setItem("admin_access", "true");
        setIsAuthenticated(true);
      } else {
        alert("Access Denied");
        window.location.href = "/";
      }
    }
  }, []);

  // fetch data
  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);
  //plays sound
  useEffect(() => {
    if (orders.length > 0) {
      const latestOrder = orders[0];
      const isRecent = new Date() - latestOrder.createdAt?.toDate() < 10000;

      if (latestOrder.status === "pending" && isRecent) {
        const audio = new Audio(
          "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
        );
        audio
          .play()
          .catch((e) =>
            console.log("Audio play blocked until user interaction"),
          );
      }
    }
  }, [orders.length]);

  if (!isAuthenticated) return null;

  // --- STATS CALCULATIONS ---
  const pendingCount = orders.filter((o) => o.status === "pending").length;
  const processingCount = orders.filter((o) => o.status === "preparing").length;
  const deliveryCount = orders.filter((o) => o.type === "delivery").length;
  const pickupCount = orders.filter((o) => o.type === "pickup").length;

  // --- FILTERED LIST ---
  const filteredOrders = orders.filter((o) =>
    view === "active" ? o.status !== "completed" : o.status === "completed",
  );

  const updateStatus = async (orderId, newStatus) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-stats-bar">
        <div className="stat-card">
          <h3>{pendingCount}</h3>
          <p>Pending</p>
        </div>
        <div className="stat-card">
          <h3>{processingCount}</h3>
          <p>Processing</p>
        </div>
        <div className="stat-card">
          <h3>{deliveryCount}</h3>
          <p>Deliveries</p>
        </div>
        <div className="stat-card">
          <h3>{pickupCount}</h3>
          <p>Pickups</p>
        </div>
      </header>

      <nav className="view-tabs">
        <button
          className={view === "active" ? "active" : ""}
          onClick={() => setView("active")}
        >
          Active Orders
        </button>
        <button
          className={view === "completed" ? "active" : ""}
          onClick={() => setView("completed")}
        >
          History
        </button>
      </nav>

      <div className="orders-grid">
        {filteredOrders.length === 0 ? (
          <p className="no-orders">No orders found in this category.</p>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className={`order-card ${order.status}`}>
              <div className="card-header">
                <span>#{order.id.slice(-5)} </span>
                <div className="order-timing">
                  <span className="order-date">
                    {order.createdAt?.toDate().toLocaleDateString([], {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                  </span>
                  <span className="timestamp">
                    {order.createdAt?.toDate().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>

              <div className="cust-detail">
                <h3>{order.customerName}</h3>
                <p>📞 {order.phone}</p>
                <p>
                  {order.type === "delivery"
                    ? `🚚 ${order.address}`
                    : "🛍️ Pickup"}
                </p>
              </div>

              <div className="items-list">
                {order.items?.map((item, idx) => (
                  <div key={idx} className="order-item-row">
                    {item.quantity}x {item.name}
                  </div>
                ))}
              </div>

              <div className="order-actions">
                {order.status === "pending" && (
                  <button
                    onClick={() => updateStatus(order.id, "preparing")}
                    className="btn-prep"
                  >
                    Accept & Process
                  </button>
                )}
                {order.status === "preparing" && (
                  <button
                    onClick={() => updateStatus(order.id, "ready")}
                    className="btn-ready"
                  >
                    Ready for Customer
                  </button>
                )}
                {order.status === "ready" && (
                  <button
                    onClick={() => updateStatus(order.id, "completed")}
                    className="btn-done"
                  >
                    Mark Completed
                  </button>
                )}
                {order.status === "completed" && (
                  <span className="completed-label">✅ Order Finished</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
