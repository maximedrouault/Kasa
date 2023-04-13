import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ id, title, cover }) {
  return (
      <Link to={`/housing/${id}`} className="housing-card">
        <article>
          <img src={cover} alt={title} />
          <h2 className="housing-card-title">{title}</h2>
        </article>
      </Link>
  );
}