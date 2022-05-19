import React from "react";
import "./Component163.css";

function Component163(props) {
  const { aSoupShop, spanText1, spanText2, spanText3, spanText4, star1, className } = props;

  return (
    <div className={`component-19 ${className || ""}`}>
      <div className="a-soup-shop-16 inter-semi-bold-black-20px">{aSoupShop}</div>
      <div className="x35-seats-left-6 arial">
        <span className="span0-27 arial">{spanText1}</span>
        <span className="span1-41 inter-normal-black-20px">{spanText2}</span>
      </div>
      <div className="overlap-group1-26">
        <div className="x250m-47-18-are-going-14 inter-normal-black-20px">
          <span className="span-26 inter-normal-black-20px">{spanText3}</span>
          <span className="span1-42 arial">{spanText4}</span>
          <span className="span-26 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="star-1-14" src={star1} />
      </div>
    </div>
  );
}

export default Component163;
