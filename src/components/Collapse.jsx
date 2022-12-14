import React, { useState } from "react";
import { ReactComponent as Vector } from "../assets/images/vector-collapse.svg";

import "../styles/Collapse.css";

const Collapse = ({ classname, title, content }) => {
  const [visible, setVisible] = useState(true);
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
