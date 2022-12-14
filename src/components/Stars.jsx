import React from "react";
import { ReactComponent as EmptyStar } from "../assets/images/emptyStar.svg";
import { ReactComponent as FullStar } from "../assets/images/fullStar.svg";
import "../styles/Stars.css";

const Stars = ({ rating }) => {
  console.log(rating);

  return (
    <div>
      {parseInt(rating) > 0 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 1 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 2 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 3 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
      {parseInt(rating) > 4 ? (
        <FullStar className="star" />
      ) : (
        <EmptyStar className="star" />
      )}
    </div>
  );
};

export default Stars;
