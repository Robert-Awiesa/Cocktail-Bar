import { Link } from "react-router-dom";
import { cocktails } from "../../cocktails";
import './Cocktails.css';

function Cocktails(){
  return(
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
            <p className="price">GHS {cocktail.price}</p>
            <button className="add-btn"
              onClick={(e) => {
                e.preventDefault();
                console.log("Added to tray");
              }}
            >
              Add to Tray
            </button>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Cocktails;
