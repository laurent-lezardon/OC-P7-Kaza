import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link
        className="nav-link,{nav => nav.isActive && nav-link-active} "
        to="/"
      >
        Accueil
      </Link>
      <Link to="/a-propos">A Propos</Link>
    </nav>
  );
};

export default Navigation;
