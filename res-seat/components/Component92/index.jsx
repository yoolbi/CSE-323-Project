import React from "react";
import { Link } from "react-router-dom";
import "./Component92.css";

function Component92(props) {
  const { nearest, spanText1, spanText2, iconStar, avalilableSeats, waiting } = props;

  return (
    <div className="component-19-6">
      <div className="overlap-group9-14">
        <div className="nearest-1 inter-normal-white-16px">{nearest}</div>
      </div>
      <div className="overlap-group6-27">
        <div className="rectangle-32-6"></div>
        <div className="rating-19 inter-normal-white-16px-2">
          <span className="inter-normal-spicy-pink-16px">{spanText1}</span>
          <span className="inter-normal-white-16px">{spanText2}</span>
        </div>
        <img className="icon-star-24" src={iconStar} />
      </div>
      <div className="overlap-group7-28">
        <div className="avalilable-seats-1 inter-normal-spicy-pink-13px">{avalilableSeats}</div>
      </div>
      <div className="overlap-group8-20">
        <div className="waiting-1 inter-normal-spicy-pink-16px">{waiting}</div>
      </div>
      <Link to="/yool-bi">
        <div className="rectangle-35"></div>
      </Link>
    </div>
  );
}

export default Component92;