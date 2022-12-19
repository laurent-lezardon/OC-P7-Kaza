// Fichier JSON contenant les données
import Kasas from "../datas/logements.json";
import React from "react";
import { Link } from "react-router-dom";
// style du composant
import "../styles/Cards.css";

/**
 * Creation de vignettes cliquables a partir des données d'un' fichier JSON
 * @returns {HTMLElement}
 */
const Cards = () => {
  // console.log(Kasas.map((k) => k.host.name));
  return (
    <ul className="cards">
      {Kasas.map((kaza, index) => (
        <Link to={`/appartment/${kaza.id}`} key={kaza.id}>
          <li className="card" key={kaza.id}>
            <img src={kaza.cover} alt={kaza.title} />
            <span>{kaza.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Cards;
