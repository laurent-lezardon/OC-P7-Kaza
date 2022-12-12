import React from "react";
import { ReactComponent as EmptyStar } from "../assets/images/emptyStar.svg";
import { ReactComponent as FullStar } from "../assets/images/fullStar.svg";

const Stars = ({ rating }) => {
  console.log(rating);

  return (
    <div>
      {parseInt(rating) > 0 ? <FullStar /> : <EmptyStar />}
      {parseInt(rating) > 1 ? <FullStar /> : <EmptyStar />}
      {parseInt(rating) > 2 ? <FullStar /> : <EmptyStar />}
      {parseInt(rating) > 3 ? <FullStar /> : <EmptyStar />}
      {parseInt(rating) > 4 ? <FullStar /> : <EmptyStar />}
    </div>
  );
};

export default Stars;
