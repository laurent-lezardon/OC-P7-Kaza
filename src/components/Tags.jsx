import React from "react";
import "../styles/Tags.css";

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
