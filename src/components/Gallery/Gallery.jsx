import "./gallery.css"
import { useState } from "react";
import FetchDatas from "../../services";
import Card from "../Card/Card";

export default function Gallery() {

// Import des données
const [housings] = useState(FetchDatas());

  return (
    <section className="housings-container">
        {housings.map((housing) => (
          <Card
            key={housing.id}
            id={housing.id}
            title={housing.title}
            cover={housing.cover} />
          ))}
    </section>
  );
}