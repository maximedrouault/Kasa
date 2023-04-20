import "./housing.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import App from "../../App";
import Carousel from "../../components/Carousel/Carousel";
import FetchDatas from "../../services";
import Collapse from "../../components/Collapse/Collapse";
import HousingInfos from "../../components/HousingInfos/HousingInfos";
import HousingHostInfos from "../../components/HousingHostInfos/HousingHostInfos";
import HousingRate from "../../components/HousingRate/HousingRate";

export default function Housing() {
  
  // Import des données
  const [housings] = useState(FetchDatas());

  // Utilisation de useParams pour récupérer l'id dans l'URL
  const { id } = useParams();

  // Trouver la maison dans le tableau des logements en fonction de l'id
  const [housing] = useState(housings.find((housing) => housing.id === id));

  return (
    <App>
      <Carousel pictures={housing.pictures} />
      <section>
        <div className="housing-container">
          <HousingInfos housing={housing} />
          <div className="housing-subcontainer-right">
            <HousingHostInfos housing={housing} />
            <HousingRate rating={housing.rating} />
          </div>
        </div>

        <div className="housing-informations-container">
          <Collapse title={"Description"}>
            <p>{housing.description}</p>
          </Collapse>
          <Collapse title={"Équipements"}>
            <ul>
              {housing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </App>
  );
}
