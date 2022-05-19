import React from "react";
import "./Component166.css";

function Component166(props) {
  const { aSoupShop, spanText1, spanText2, spanText3, iconStar } = props;

  return (
    <div className="component-17-6">
      <div className="a-soup-shop-46 inter-semi-bold-black-20px">{aSoupShop}</div>
      <div className="overlap-group-105">
        <div className="x250m-47-18-are-going-42 inter-normal-white-20px">
          <span className="inter-normal-black-20px">{spanText1}</span>
          <span className="span1-101 arial">{spanText2}</span>
          <span className="inter-normal-black-20px">{spanText3}</span>
        </div>
        <img className="icon-star-25" src={iconStar} />
      </div>
    </div>
  );
}

export default Component166;
