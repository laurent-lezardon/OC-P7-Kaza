import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/APropos.css";
import Collapse from "../components/Collapse";

const APropos = () => {
  const respectTxt =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  return (
    <div className="a-propos">
      <Header />
      <div className="banner-a-propos"></div>
      <Collapse title="Salut" content={respectTxt} />
      <Footer />
    </div>
  );
};

export default APropos;
