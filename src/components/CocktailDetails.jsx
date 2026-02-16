import { useParams, useNavigate } from "react-router-dom";
import { cocktails } from "../../cocktails";
import "./CocktailDetails.css";

function CocktailDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cocktail = cocktails.find((c) => c.id === id);

  if (!cocktail) {
    return <h2 style={{ textAlign: "center" }}>Cocktail not found</h2>;
  }

  return (
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
          <p className="details-price">GHS {cocktail.price}</p>

          <h3>Ingredients</h3>
          <ul>
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <button className="add-btn" onClick={(e) => {
                e.preventDefault();
                console.log("Added to tray");
              }}
              >
            Add to Tray
          </button>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetails;
