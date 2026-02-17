import { useParams, useNavigate } from "react-router-dom";
import { cocktails } from "../../cocktails";
import "./CocktailDetails.css";
import DetailsCard from "./DetailsCard";

function CocktailDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cocktail = cocktails.find((c) => c.id === id);

  if (!cocktail) {
    return <h2 style={{ textAlign: "center" }}>Cocktail not found</h2>;
  }

  return (
    <DetailsCard
      cocktail={cocktail}
      navigate={navigate}
    />
  );
}

export default CocktailDetails;
