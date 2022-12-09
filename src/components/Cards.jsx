import Kasas from "../datas/logements.json";
import React from "react";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <ul className="cards">
      {Kasas.map((kaza) => (
        <li className="card" key={`title${kaza.id}`}>
          <span>{kaza.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
