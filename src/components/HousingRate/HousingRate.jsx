import "./housingrate.css";
import RedStar from "../../assets/red-star.svg";
import GreyStar from "../../assets/grey-star.svg";

export default function HousingRate({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        src={i < rating ? RedStar : GreyStar}
        alt={i < rating ? "Étoile rouge" : "Étoile grise"}
        key={i}
      />
    );
  }

  return (
   	<div className="housing-rate-container">{stars}</div>
  );
}