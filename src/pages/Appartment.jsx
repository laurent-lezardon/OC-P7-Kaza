import React from "react";
import { useParams } from "react-router-dom";

const Appartment = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h1>Appartment</h1>
    </div>
  );
};

export default Appartment;
