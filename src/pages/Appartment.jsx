import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import Kasas from "../datas/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import HostName from "../components/HostName";
import "../styles/Appartment.css";

const Appartment = () => {
  const appartmentId = useParams();
  const navigate = useNavigate();
  const appartment = Kasas.filter((k) => k.id === appartmentId.id)[0];
  if (appartment.length === 0) {
    navigate("/");
  } else {
    console.log(appartment);
    // const description = ["description"];
    return (
      <div>
        <Header />
        <div className="appartment-presentation">
          <div className="appartment-title">
            <h1>{appartment.title}</h1>
            <p>{appartment.location}</p>
            <ul className="appartment-tag">
              {appartment.tags.map((t, key) => (
                <li key={`tag-${key}-${appartment.id}`}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="appartment-adds">
            <HostName name={appartment.host.name} />
            <Stars rating={appartment.rating} />
          </div>
        </div>
        <Collapse
          title="Description"
          content={appartment.description.split("@")}
        />
        <Collapse title="Equipements" content={appartment.equipments} />

        <Footer />
      </div>
    );
  }
};

export default Appartment;
