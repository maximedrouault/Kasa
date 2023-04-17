import "./carousel.css"
import { useState } from "react";
import Arrow from "../../assets/arrow-carousel.svg"

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfPictures = pictures.length;

  function nextImage() {
    setCurrentIndex((currentIndex + 1) % numberOfPictures);
  }

  function prevImage() {
    setCurrentIndex((currentIndex + numberOfPictures - 1) % numberOfPictures);
  }

  return (
    <section className="carousel">
      
      <img src={pictures[currentIndex]} alt={`CarrouselImage N°${currentIndex}`} className="carousel-pictures" />
      
      <button onClick={prevImage} className="carousel-button-previous">
        <img src={Arrow} alt="Bouton précédent" />
      </button>
      
      <p className="carousel-index-pictures">{currentIndex+1}/{numberOfPictures}</p>
      
      <button onClick={nextImage} className="carousel-button-next">
        <img src={Arrow} alt="Bouton suivant" />
      </button>

    </section>
  );
}