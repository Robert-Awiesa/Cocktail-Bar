import { useState } from "react";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./CheckoutForm.css"; // The CSS we just wrote
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cartItems, totalAmount }) => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderType: "pickup",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Disable button to prevent double-clicks

  //   try {
  //     const orderRef = await addDoc(collection(db, "orders"), orderData);
  //     navigate(`/track/${orderRef.id}`)

  //     alert(`Order placed successfully! Order ID: ${orderRef.id.slice(0,5)}`);
  //     // Optional: Clear cart or redirect here

  //   } catch (error) {
  //     console.error("Error adding order: ", error);
  //     alert("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        customerName: formData.name,
        phone: formData.phone,
        type: formData.orderType,
        address: formData.orderType === "delivery" ? formData.address : "N/A",
        items: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: totalAmount,
        status: "pending",
        createdAt: serverTimestamp(),
      };

      const orderRef = await addDoc(collection(db, "orders"), orderData);
      // Save current order to local storage
      localStorage.setItem("lastOrderId", orderRef.id);
      clearCart();
      navigate(`/track/${orderRef.id}`);
    } catch (error) {
      console.error("Error adding order: ", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Finish Your Order</h3>

        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <div className="order-type-toggle">
          <button
            type="button"
            className={formData.orderType === "pickup" ? "active" : ""}
            onClick={() => setFormData({ ...formData, orderType: "pickup" })}
          >
            Pickup
          </button>

          <button
            type="button"
            className={formData.orderType === "delivery" ? "active" : ""}
            onClick={() => setFormData({ ...formData, orderType: "delivery" })}
          >
            Delivery
          </button>
        </div>

        {formData.orderType === "delivery" && (
          <textarea
            placeholder="Enter Delivery Address / Location"
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        )}

        <button type="submit" className="place-order-btn" disabled={loading}>
          {loading ? "Processing..." : "Confirm Order"}
        </button>
      </form>
    </div>
  );
};
export default CheckoutForm;
