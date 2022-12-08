import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        Accueil
      </Link>
      <Link className="nav-link" to="/a-propos">
        A Propos
      </Link>
    </nav>
  );
};

export default Navigation;
