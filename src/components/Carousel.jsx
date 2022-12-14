import React, { useState } from "react";
import "../styles/Carousel.css";
import arrow from "../assets/images/left-arrow.png";

/**
 * Composant Carousel
 * @param {[String],String}
 * picture:tableau des sources des images
 * cover : string contenant l'index de picture pour l'image par défaut
 * @returns HTMLElement
 */
const Carousel = ({ pictures, cover, alt }) => {
  // index de l'image à afficher
  const [activePicture, setActivePicture] = useState(parseInt(cover));
  const numberOfPictures = pictures.length;

  // fonctions de modification de l'index de l'image affichée
  const nextImage = () =>
    setActivePicture((activePicture + 1) % numberOfPictures);
  const previousImage = () =>
    setActivePicture((activePicture + numberOfPictures - 1) % numberOfPictures);

  return (
    <div className="carousel">
      <img
        src={arrow}
        alt="carousel flêche gauche"
        className="arrow"
        id="left-arrow"
        onClick={previousImage}
      />
      <img
        src={arrow}
        alt="carousel flêche droite"
        className="arrow"
        id="right-arrow"
        onClick={nextImage}
      />
      <img
        className="carousel-image"
        src={pictures[activePicture]}
        alt={`${alt} numéro ${activePicture + 1}`}
      />
      <span className="carousel-span">
        {activePicture + 1}/{numberOfPictures}
      </span>
    </div>
  );
};

export default Carousel;
