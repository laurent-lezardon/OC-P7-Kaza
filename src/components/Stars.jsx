import React from "react";
import { ReactComponent as EmptyStar } from "../assets/images/emptyStar.svg";
import { ReactComponent as FullStar } from "../assets/images/fullStar.svg";
// Style du composant
import "../styles/Stars.css";

/**
 * Création de la note sous forme d'étoiles
 * @param {String} rating nombre d'étoiles sur cinq attribuée au logement
 * @returns {HTMLElement} cinq étoiles plines ou vides selon la note
 */
const Stars = ({ rating }) => {
  console.log(rating);

  return (
    <div>
      {parseInt(rating) > 0 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 1 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 2 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 3 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 4 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
    </div>
  );
};

export default Stars;
