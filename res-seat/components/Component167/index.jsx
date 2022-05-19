import React from "react";
import "./Component167.css";

function Component167(props) {
  const { aSoupShop, spanText1, spanText2, spanText3, spanText4, className } = props;

  return (
    <div className={`component-17-7 ${className || ""}`}>
      <div className="a-soup-shop-47 inter-semi-bold-black-20px">{aSoupShop}</div>
      <div className="x35-seats-left-7 arial">
        <span className="span0-57 arial">{spanText1}</span>
        <span className="span1-102 inter-normal-black-20px">{spanText2}</span>
      </div>
      <div className="overlap-group1-49">
        <div className="x250m-47-18-are-going-43 inter-normal-white-20px">
          <span className="span-69 inter-normal-black-20px">{spanText3}</span>
          <span className="span-70 arial">{spanText4}</span>
          <span className="span-69 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="icon-star-26" src="/img/star-1@2x.png" />
      </div>
    </div>
  );
}

export default Component167;
