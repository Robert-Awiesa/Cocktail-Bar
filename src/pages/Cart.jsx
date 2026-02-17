import "./Cart.css";
import { cocktails } from "../../cocktails";

function Cart() {
  const item1 = cocktails[0];
  const item2 = cocktails[1];

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          <div className="cart-item">
            <img src={item1.link} alt={item1.name} />
            
            <div className="item-info">
              <h3>{item1.name}</h3>
              <p>GHS {item1.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="remove-btn">Remove</button>
            </div>

            <div className="item-total">
              GHS {item1.price.toFixed(2)}
            </div>
          </div>


          <div className="cart-item">
            <img src={item2.link} alt={item2.name} />
            
            <div className="item-info">
              <h3>{item2.name}</h3>
              <p>GHS {item2.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>

              <button className="remove-btn">Remove</button>
            </div>

            <div className="item-total">
              GHS {(item2.price * 2).toFixed(2)}
            </div>
          </div>

        </div>

       
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>GHS 120.00</span>
          </div>

          <div className="summary-row">
            <span>Tax (10%)</span>
            <span>GHS 12.00</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>GHS 132.00</span>
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
