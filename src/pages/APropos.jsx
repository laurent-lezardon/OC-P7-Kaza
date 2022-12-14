import React from "react";
// import des composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
// Style de la page
import "../styles/APropos.css";

const APropos = () => {
  // Contenus a afficher
  const fiabiliteText =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const respectTxt =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const serviceTxt =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const securiteTxt =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <div className="display-footer">
      <div className="main-container">
        <Header page="a-propos" />
        <div className="banner-a-propos"></div>
        <div className="a-propos__collapse">
          <Collapse
            classname="a-propos-collapse"
            title="Fiabilité"
            content={fiabiliteText}
          />
          <Collapse
            classname="a-propos-collapse"
            title="Respect"
            content={respectTxt}
          />
          <Collapse
            classname="a-propos-collapse"
            title="Service"
            content={serviceTxt}
          />
          <Collapse
            classname="a-propos-collapse"
            title="Sécurité"
            content={securiteTxt}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default APropos;
