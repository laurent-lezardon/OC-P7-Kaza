import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo-header.svg";
import Navigation from "./Navigation";
// Style du composant
import "../styles/Header.css";

/**
 * Construction du Header
 * @param {String} page envoyé par le composant router avec le nom de la page
 * @returns {HTMLElement}
 */
const Header = ({ page }) => {
  return (
    <header>
      <Logo className="header-logo" />
      <Navigation page={page} />
    </header>
  );
};

export default Header;
