import React from "react";
import { useParams } from "react-router-dom";
import Kasas from "../datas/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import "../styles/Appartment.css";

const Appartment = () => {
  const appartmentId = useParams();

  const appartment = Kasas.filter((k) => k.id === appartmentId.id);
  if (appartment.length === 0) {
  } else {
    console.log(appartment[0]);
    // const description = ["description"];
    return (
      <div>
        <Header />
        <div className="appartment-presentation">
          <div className="appartment-title">
            <h1>{appartment[0].title}</h1>
            <p>{appartment[0].location}</p>
            <ul className="appartment-tag">
              {appartment[0].tags.map((t, key) => (
                <li key={`tag-${key}-${appartment[0].id}`}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="appartment-adds">
            <span>{appartment[0].host.name}</span>
            <span className="disk"></span>
            <Stars rating={appartment[0].rating} />
          </div>
        </div>
        <Collapse
          title="Description"
          content={appartment[0].description.split("@")}
        />
        <Collapse title="Equipements" content={appartment[0].equipments} />

        <Footer />
      </div>
    );
  }
};

export default Appartment;
