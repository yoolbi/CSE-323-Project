import React from "react";
import "./Component1632.css";

function Component1632(props) {
  const { aSoupShop, spanText1, spanText2, spanText3, spanText4, star1, className } = props;

  return (
    <div className={`component-19 ${className || ""}`}>
      <div className="a-soup-shop-32 inter-semi-bold-black-20px">{aSoupShop}</div>
      <div className="x35-seats-left-9 arial">
        <span className="span0-31 arial">{spanText1}</span>
        <span className="span1-75 inter-normal-black-20px">{spanText2}</span>
      </div>
      <div className="overlap-group-441">
        <div className="x250m-47-18-are-going-24 inter-normal-black-20px">
          <span className="span-109 inter-normal-black-20px">{spanText3}</span>
          <span className="span1-76 arial">{spanText4}</span>
          <span className="span-109 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="icon-star-269" src={star1} />
      </div>
    </div>
  );
}

export default Component1632;
