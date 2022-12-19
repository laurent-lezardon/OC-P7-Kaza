import React, { useState } from "react";
import { ReactComponent as Vector } from "../assets/images/vector-collapse.svg";
// style du composant
import "../styles/Collapse.css";

/**
 *
 * @param {String,String,[String]} param0
 * classname : classe reçue et gérée (css) par le composant parent permettant la personnalisation
 * title : intiutlé apparaissant sur le collapse
 * content : contenus à afficher lorsque le collapse est ouvert
 * @returns {HTMLElement}
 */
const Collapse = ({ classname, title, content }) => {
  const [visible, setVisible] = useState(false);
  // transforme en entrée 'content' de type texte en tableau
  if (!Array.isArray(content)) {
    content = Array.of(content);
  }
  return (
    <div className={classname}>
      <div
        className="collapse"
        id={visible ? "collapse-visible" : null}
        onClick={() => setVisible(!visible)}
      >
        <span>{title}</span>
        <Vector className={visible ? "vector-up" : "vector"} />
      </div>
      {visible && (
        <ul className="collapse-ul">
          {content.map((cont, key) => (
            <li key={`content-${key}`} className="collapse-li">
              {cont}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collapse;

/* Paramétrage du Collapse ****************************/
/* classe envoyée dans les props : .exemple-collapse */

// Parmètres généraux -------------------------------
// .exemple-collapse {
//   font-size: 18px;
//   border-radius: 10px;
//   width: 47%;
//   margin-top: 24px;
// }
// Hauteur et padding du collapse -------------------
// .exemple-collapse .collapse {
//   height: 52px;
//   padding: 3px 3.4%;
// }
//
// padding du content --------------------------------
// .exemple .collapse-ul {
//   padding: 31px 3.4%;
// }
