import React, { useEffect, useState } from "react";
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
  const [widthPicture, setWidthPicture] = useState(0);
  const numberOfPictures = pictures.length;
  const resizeImage = (e) => {
    // console.log(e);
    let originalWidth = e.target.naturalWidth;
    let originalHeight = e.target.naturalHeight;
    let carouselHeight = e.target.clientHeight;
    console.log(
      "originalHeight",
      originalHeight,
      "originalWidth",
      originalWidth,
      "carouselHeight",
      carouselHeight
    );
  };

  // fonctions de modification de l'index de l'image affichée
  const nextImage = () =>
    setActivePicture((activePicture + 1) % numberOfPictures);
  const previousImage = () =>
    setActivePicture((activePicture + numberOfPictures - 1) % numberOfPictures);

  const widthTest = "100px";

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
        onLoad={resizeImage}
        // style={{ width: widthTest }}
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
