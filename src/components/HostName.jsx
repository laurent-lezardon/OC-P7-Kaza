import React from "react";
import "../styles/HostName.css";
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
