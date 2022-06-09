import React from "react";
import "./Component167.css";

function Component167(props) {
  const { aSoupShop, spanText1, spanText2, spanText3, spanText4, className } = props;

  return (
    <div className={`component-17-3 ${className || ""}`}>
      <div className="a-soup-shop-111 inter-semi-bold-black-20px">{aSoupShop}</div>
      <div className="x35-seats-left-50 arial">
        <span className="span0-114 arial">{spanText1}</span>
        <span className="span1-263 inter-normal-black-20px">{spanText2}</span>
      </div>
      <div className="overlap-group1-661">
        <div className="x250m-47-18-are-going-99 inter-normal-white-20px">
          <span className="span-249 inter-normal-black-20px">{spanText3}</span>
          <span className="span-250 arial">{spanText4}</span>
          <span className="span-249 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="icon-star-434" src="/img/star-1@2x.png" />
      </div>
    </div>
  );
}

export default Component167;
