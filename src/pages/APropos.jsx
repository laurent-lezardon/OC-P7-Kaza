import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/APropos.css";
import Collapse from "../components/Collapse";

const APropos = () => {
  const fiabiliteText = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  ];
  const respectTxt = [
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  ];
  const serviceTxt = [
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  ];

  const securiteTxt = [
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  return (
    <div>
      <Header page="a-propos" />
      <div className="banner-a-propos"></div>
      <div className="a-propos__collapse">
        <Collapse title="Fiabilité" content={fiabiliteText} />
        <Collapse title="Respect" content={respectTxt} />
        <Collapse title="Service" content={serviceTxt} />
        <Collapse title="Sécurité" content={securiteTxt} />
      </div>

      <Footer />
    </div>
  );
};

export default APropos;
