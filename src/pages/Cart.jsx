import "./Cart.css";
import { useCart } from "../context/CartContext";
function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
    tax,
    total,
    totalItems
  } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})</h1>

      <div className="cart-container">

        {/* Cart Items */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.link} alt={item.name} />

                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>GHS {item.price.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>

                <div className="item-total">
                  GHS {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>GHS {subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Tax (10%)</span>
            <span>GHS {tax.toFixed(2)}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>GHS {total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
