import React from "react";

import { useParams } from "react-router-dom";
import Kasas from "../datas/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import HostName from "../components/HostName";
import "../styles/Appartment.css";
import Tags from "../components/Tags";
import Error from "../pages/Error";
import Carousel from "../components/Carousel";

const Appartment = () => {
  const appartmentId = useParams();
  const appartArray = Kasas.filter((k) => k.id === appartmentId.id);
  const appartment = appartArray[0];
  console.log(appartment);
  /**
   *
   * @param {*} appartment
   * @returns
   */
  const coverIndex = (appartment) => {
    return appartment.pictures.indexOf(appartment.cover);
  };

  // console.log(coverIndex(appartment));
  return appartArray.length === 1 ? (
    <div>
      <div className="main-container">
        <Header />
        <Carousel
          pictures={appartment.pictures}
          cover="0"
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
    <Error />
  );
};

export default Appartment;
