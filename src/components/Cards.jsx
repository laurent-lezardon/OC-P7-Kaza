import Kasas from "../datas/logements.json";
import React from "react";
import "../styles/Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  // console.log(Kasas.map((k) => k.host.name));
  return (
    <ul className="cards">
      {Kasas.map((kaza, index) => (
        <Link to={`/appartment/${kaza.id}`} key={kaza.id}>
          <li className="card" key={kaza.id}>
            <span>{kaza.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Cards;
