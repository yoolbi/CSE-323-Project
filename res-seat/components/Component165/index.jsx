import React from "react";
import { Link } from "react-router-dom";
import "./Component165.css";

function Component165(props) {
  const { image3, aSoupShop, spanText3, star1, className } = props;

  return (
    <div className={`component-20-19 ${className || ""}`}>
      <img className="image-3-8" src={image3} />
      <div className="flex-col-50">
        <div className="a-soup-shop-33 inter-semi-bold-black-20px">{aSoupShop}</div>
        <div className="address-11 arial">
          <span className="span0-31 arial">35</span>
          <span className="span1-76 inter-normal-black-20px"> Seats Left</span>
        </div>
        <div className="overlap-group-89">
          <div className="x250m-47-18-are-going-36 inter-normal-white-20px">
            <span className="span-48 inter-normal-black-20px">{spanText3}</span>
            <span className="span1-77 arial">18</span>
            <span className="span-48 inter-normal-black-20px"> Are Going</span>
          </div>
          <img className="star-1-36" src={star1} />
        </div>
      </div>
    </div>
  );
}

export default Component165;
