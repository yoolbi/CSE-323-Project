import React from "react";
import { Link } from "react-router-dom";
import "./Component93.css";

function Component93(props) {
  const { nearest, spanText1, spanText2, iconStar, avalilableSeats, waiting } = props;

  return (
    <div className="component-10-1">
      <div className="overlap-group3-472">
        <div className="nearest-2 inter-normal-spicy-pink-16px">{nearest}</div>
      </div>
      <div className="overlap-group-1148">
        <div className="rectangle-32-3"></div>
        <div className="rating-172 inter-normal-white-16px-2">
          <span className="inter-normal-spicy-pink-16px">{spanText1}</span>
          <span className="inter-normal-white-16px">{spanText2}</span>
        </div>
        <img className="icon-star-440" src={iconStar} />
      </div>
      <div className="overlap-group1-667">
        <div className="avalilable-seats-2 inter-normal-spicy-pink-13px">{avalilableSeats}</div>
      </div>
      <div className="overlap-group2-520">
        <div className="waiting-2 inter-normal-spicy-pink-16px">{waiting}</div>
      </div>
      <Link to="/yool-bi">
        <div className="rectangle-35-1"></div>
      </Link>
    </div>
  );
}

export default Component93;
