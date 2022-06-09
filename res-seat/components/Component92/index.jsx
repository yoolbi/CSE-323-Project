import React from "react";
import { Link } from "react-router-dom";
import "./Component92.css";

function Component92(props) {
  const { nearest, spanText1, spanText2, iconStar, avalilableSeats, waiting } = props;

  return (
    <div className="component-19-19">
      <div className="overlap-group9-58">
        <div className="nearest-1 inter-normal-white-16px">{nearest}</div>
      </div>
      <div className="overlap-group6-107">
        <div className="rectangle-32-2"></div>
        <div className="rating-171 inter-normal-white-16px-2">
          <span className="inter-normal-spicy-pink-16px">{spanText1}</span>
          <span className="inter-normal-white-16px">{spanText2}</span>
        </div>
        <img className="icon-star-432" src={iconStar} />
      </div>
      <div className="overlap-group7-78">
        <div className="avalilable-seats-1 inter-normal-spicy-pink-13px">{avalilableSeats}</div>
      </div>
      <div className="overlap-group8-54">
        <div className="waiting-1 inter-normal-spicy-pink-16px">{waiting}</div>
      </div>
      <Link to="/yool-bi">
        <div className="rectangle-35"></div>
      </Link>
    </div>
  );
}

export default Component92;
