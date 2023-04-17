import App from "../../App";
import Carousel from "../../components/Carousel/Carousel";
import housings from "../../datas/datas.json";
import { useParams } from "react-router-dom";

export default function Housing() {
// Utilisation de useParams pour récupérer l'id dans l'URL
const { id } = useParams();

// Trouver la maison dans le tableau des logements en fonction de l'id
const housing = housings.find((housing) => housing.id === id);

return (
        <App>
            <Carousel pictures={housing.pictures} />
        </App>
    );
}