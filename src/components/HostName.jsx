import React from "react";
import "../styles/HostName.css";
const HostName = ({ name }) => {
  return (
    <div className="appartment-hostname">
      <div className="appartment-name">
        <p>{name.split(" ")[0]}</p>
        <p>{name.split(" ")[1]}</p>
      </div>

      <span className="disk"></span>
    </div>
  );
};

export default HostName;
