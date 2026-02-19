import { useCart } from "../context/CartContext";
function DetailsCard({cocktail, navigate}){
  const {addToCart} = useCart();
  return(
    <>
      <div className="cocktail-details">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back to Menu
      </button>

      <div className="details-card">
        <img
          src={cocktail.link}
          alt={cocktail.name}
          className="details-image"
        />

        <div className="details-info">
          <h1>{cocktail.name}</h1>
          <p className="details-price">GHS {cocktail.price.toFixed(2)}</p>

          <h3>Ingredients</h3>
          <ul>
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <button className="add-btn" onClick={() => addToCart(cocktail)}
              >
            Add to Tray
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
export default DetailsCard;