import React from "react";
import { Link } from "react-router-dom";
// Style du composant
import "../styles/Navigation.css";

/**
 * Création de la navigation
 * @param {String} page  permet de personnaliser le lien de la page en cours
 * @returns {HTMLElement}
 */
const Navigation = ({ page }) => {
  console.log("page", page);
  return (
    <nav>
      <Link
        className={page !== "home" ? "page-not-selected" : "nav-link"}
        to="/"
      >
        Accueil
      </Link>
      <Link
        className={page !== "a-propos" ? "page-not-selected" : "nav-link"}
        to="/a-propos"
      >
        A Propos
      </Link>
    </nav>
  );
};

export default Navigation;
