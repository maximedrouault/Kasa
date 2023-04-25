import "./carousel.css";
import { useState, useEffect } from "react";
import Arrow from "../../assets/arrow-carousel.svg";

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfPictures] = useState(pictures.length);

  function nextImage() {
    if (numberOfPictures > 1) {
      setCurrentIndex((currentIndex + 1) % numberOfPictures);
    };
  };
  

  function prevImage() {
    setCurrentIndex((currentIndex + numberOfPictures - 1) % numberOfPictures);
  };

  // Effet défilement auto carrousel

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <section className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide carrousel N°${currentIndex + 1}`}
        className="carousel-pictures"
      />

      {numberOfPictures > 1 && (
        <button onClick={prevImage} className="carousel-button-previous">
          <img src={Arrow} alt="Bouton précédent" />
        </button>
      )}

      {numberOfPictures > 1 && (
        <p className="carousel-index-pictures">
          {currentIndex + 1}/{numberOfPictures}
        </p>
      )}

      {numberOfPictures > 1 && (
        <button onClick={nextImage} className="carousel-button-next">
          <img src={Arrow} alt="Bouton suivant" />
        </button>
      )}
    </section>
  );
};