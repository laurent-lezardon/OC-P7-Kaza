import React from "react";
import "../styles/Error.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="error">
        <div className="error-center">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
