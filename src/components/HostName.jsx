import React from "react";
// Style du composant
import "../styles/HostName.css";

/**
 * Crée une vignette prénom, nom photo
 * @param {String, String} name, picture
 * name : prénom nom
 * picture : chemin du fichier de la photo
 * @returns
 */
const HostName = ({ name, picture }) => {
  return (
    <div className="appartment-hostname">
      <div className="appartment-name">
        <p>{name.split(" ")[0]}</p>
        <p>{name.split(" ")[1]}</p>
      </div>

      <img className="disk" src={picture} alt="" />
    </div>
  );
};

export default HostName;
