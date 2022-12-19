// import React, { useEffect } from "react";

import { useParams, Navigate } from "react-router-dom";
import Kasas from "../datas/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import HostName from "../components/HostName";
import "../styles/Appartment.css";
import Tags from "../components/Tags";
import Carousel from "../components/Carousel";

const Appartment = () => {
  // récupération de l'id
  const appartmentId = useParams();
  // recherche de l'objet correspondant dans la base de données
  const appartArray = Kasas.filter((k) => k.id === appartmentId.id);
  // Contrôle : l'id correspond à un et un seul appartement ?
  const appartment = appartArray.length === 1 ? appartArray[0] : null;
  // cherche l'index correspondant à l'image de présentation dans le tableau des images
  const cover = (array, string) => {
    return array.indexOf(string) === -1 ? 0 : array.indexOf(string);
  };

  return appartment ? (
    // si l'appartement existe, affichage
    <div className="display-footer">
      <div className="main-container">
        <Header />
        <Carousel
          pictures={appartment.pictures}
          // cover renvoi l'index de l'image de présentation dans le tableau des images
          cover={cover(appartment.pictures, appartment.cover)}
          // alt sert pour créer le texte alternatif des images du carousel
          alt={appartment.title}
        />
        <div className="appartment-presentation">
          <div className="appartment-title">
            <h1>{appartment.title}</h1>
            <p>{appartment.location}</p>
            <Tags tags={appartment.tags} />
          </div>
          <div className="appartment-adds">
            <HostName
              name={appartment.host.name}
              picture={appartment.host.picture}
            />
            <Stars rating={appartment.rating} />
          </div>
        </div>
        <div className="twoCollapses">
          <Collapse
            classname="appartment-collapse"
            title="Description"
            content={Array.of(appartment.description)}
          />
          <Collapse
            classname="appartment-collapse"
            title="Equipements"
            content={appartment.equipments}
          />
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    // renvoi vers la page d'erreur
    <Navigate to="/error-page" />
  );
};

export default Appartment;
