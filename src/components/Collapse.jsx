import React, { useState } from "react";
import { ReactComponent as Vector } from "../assets/images/vector-collapse.svg";

import "../styles/Collapse.css";

const Collapse = ({ title, content }) => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="collapse-container">
      <div className="collapse" onClick={() => setVisible(!visible)}>
        <span>{title}</span>
        <Vector className="vector" />
      </div>
      {visible && (
        <ul>
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
