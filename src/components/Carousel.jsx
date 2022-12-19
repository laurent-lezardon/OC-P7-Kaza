import React, { useState } from "react";
// Style du composant
import "../styles/Carousel.css";
import arrow from "../assets/images/left-arrow.png";

/**
 * Composant Carousel
 * @param {[String],String}
 * picture: tableau contenant les adresses images
 * alt : string servant de base au texte alternatif des images
 * @returns {HTMLElement}
 */
const Carousel = ({ pictures, alt }) => {
  // index de l'image à afficher
  const [activePicture, setActivePicture] = useState(parseInt(0));
  const numberOfPictures = pictures.length;
  // fonctions de modification de l'index de l'image affichée (next et previous)
  const nextImage = () =>
    setActivePicture((activePicture + 1) % numberOfPictures);
  const previousImage = () =>
    setActivePicture((activePicture + numberOfPictures - 1) % numberOfPictures);

  return (
    <div className="carousel">
      <img
        src={arrow}
        alt="carousel flêche gauche"
        className={numberOfPictures === 1 ? "hidden" : "arrow"}
        id="left-arrow"
        onClick={previousImage}
      />
      <img
        src={arrow}
        alt="carousel flêche droite"
        className={numberOfPictures === 1 ? "hidden" : "arrow"}
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

/* Paramétrage du Collapse ****************************/
/* classe envoyée dans les props : .exemple-collapse */

// Parmètres généraux -------------------------------
// .exemple-collapse {
//   font-size: 18px;
//   border-radius: 10px;
//   width: 47%;
//   margin-top: 24px;
// }
// Hauteur et padding du collapse -------------------
// .exemple-collapse .collapse {
//   height: 52px;
//   padding: 3px 3.4%;
// }
//
// padding du content --------------------------------
// .exemple .collapse-ul {
//   padding: 31px 3.4%;
// }
