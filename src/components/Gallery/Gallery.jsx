import "./gallery.css"
import housings from "../../datas/datas.json";
import Card from "../Card/Card";

// import FetchData from "../../services";

export default function Gallery() {

// FetchData()

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