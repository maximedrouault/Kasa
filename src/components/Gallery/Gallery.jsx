import "./gallery.css";
import { useState, useEffect } from "react";
import FetchDatas from "../../services";
import Card from "../Card/Card";

export default function Gallery() {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    async function loadHousings() {
      const datas = await FetchDatas();
      setHousings(datas);
    }

    loadHousings();
  }, []);

  return (
    <section className="housings-container">
      {housings.map((housing) => (
        <Card key={housing.id} id={housing.id} title={housing.title} cover={housing.cover} />
      ))}
    </section>
  );
}