import { Link } from "react-router-dom";
import { cocktails } from "../../cocktails";
import { useCart } from "../context/CartContext";
function CocktailCard(){
  const {addToCart} = useCart();
  return(
    <>
       <div className="cocktail-container">
      {cocktails.map((cocktail) => (
        <Link
          key={cocktail.id} 
          to={`/menu/${cocktail.id}`}
          className="cocktail-link"
          >
          <div className="cocktail-card">
            <img
            src={cocktail.link}
            alt={cocktail.name}
            className="image"
          />
            <p className="name">{cocktail.name}</p>
            <p className="price">GHS {cocktail.price.toFixed(2)}</p>
            <button className="add-btn"
              onClick={(e) => {
                e.preventDefault();
                addToCart(cocktail)
              }}
            >
              Add to Tray
            </button>
            </div>
        </Link>
      ))}
    </div>
    </>
  )
}
export default CocktailCard;