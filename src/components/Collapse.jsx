import React, { useState } from "react";
import { ReactComponent as Vector } from "../assets/images/vector-collapse.svg";

import "../styles/Collapse.css";

const Collapse = ({ title, content }) => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div className="collapse" onClick={() => setVisible(!visible)}>
        <span>{title}</span>
        <Vector className="vector" />
      </div>
      <ul className={!visible && "hidden-ul"}>
        {<li className="li-collapse">{content}</li>}
      </ul>
    </div>
  );
};

export default Collapse;
