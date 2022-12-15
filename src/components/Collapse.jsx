import React, { useState } from "react";
import { ReactComponent as Vector } from "../assets/images/vector-collapse.svg";
import "../styles/Collapse.css";

/**
 *
 * @param {String,String,[String]} param0
 * @returns
 */
const Collapse = ({ classname, title, content }) => {
  const [visible, setVisible] = useState(true);
  // transforme en entrée 'content' de type texte en tableau
  if (!Array.isArray(content)) {
    content = Array.of(content);
  }
  return (
    <div className={classname}>
      <div className="collapse" onClick={() => setVisible(!visible)}>
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
