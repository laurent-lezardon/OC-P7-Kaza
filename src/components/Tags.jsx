import React from "react";
// Style du composant
import "../styles/Tags.css";

/**
 * Renvoi les tags sous forme d'une liste personnalisée
 * @param {[String]} intitulés des 'tags'
 * @returns {HTMLElement}
 */
const Tags = ({ tags }) => {
  return (
    <ul className="appartment-tag">
      {tags.map((t, key) => (
        <li key={`tag-${key}`}>{t}</li>
      ))}
    </ul>
  );
};

export default Tags;
