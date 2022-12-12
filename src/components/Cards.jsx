import Kasas from "../datas/logements.json";
import React from "react";
import "../styles/Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <ul className="cards">
      {Kasas.map((kaza) => (
        <Link className="nav-link" to={`/appartment/${kaza.id}`}>
          <li className="card" key={`title${kaza.id}`}>
            <span>{kaza.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Cards;
