import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

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
