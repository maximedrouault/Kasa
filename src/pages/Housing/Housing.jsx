import "./housing.css";
import { useParams, useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "../../App";
import Carousel from "../../components/Carousel/Carousel";
import FetchDatas from "../../services";
import Collapse from "../../components/Collapse/Collapse";
import HousingInfos from "../../components/HousingInfos/HousingInfos";
import HousingHostInfos from "../../components/HousingHostInfos/HousingHostInfos";
import HousingRate from "../../components/HousingRate/HousingRate";

export default function Housing() {

  // Utilisation de useParams pour récupérer l'id dans l'URL
  const { id } = useParams();
  // Intialisation du State "housingId"
  const [housingId, setHousingId] = useState(null);
  // Initialisation de useNavigate pour rediriger vers la page NotFound si l'ID n'existe pas
  const navigate = useNavigate();


  useEffect(() => {

    // Définition de la fonction permettant la sélection du logement via l'ID
    async function selectHousing() {
      // Récupération des données
      const housings = await FetchDatas();
      // Recherche du logement via l'ID récupéré dans l'URL par useParam
      const selectedHousing = housings.find((housing) => housing.id === id);
      // Mise à jour du State "HOUSING" avec l'id récupéré
      setHousingId(selectedHousing);
      // Redirection vers la pages "NotFound" si l'ID est inexistant
      if (!selectedHousing) {
        navigate("/notfound");
      }
    }

    selectHousing();

  }, [id, navigate]);

  // Si le state "housingId" est null ou undefined, renvoi vers la page NotFound
  if (!housingId) {
    return null;
  }

  // Sinon, génération de la page Housing
  return (
    <App>
      <Carousel pictures={housingId.pictures} />
      <section>
        <div className="housing-container">
          <HousingInfos housing={housingId} />
          <div className="housing-subcontainer-right">
            <HousingHostInfos housing={housingId} />
            <HousingRate rating={housingId.rating} />
          </div>
        </div>

        <div className="housing-informations-container">
          <Collapse title={"Description"}>
            <p>{housingId.description}</p>
          </Collapse>
          <Collapse title={"Équipements"}>
            <ul>
              {housingId.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </App>
  );
}