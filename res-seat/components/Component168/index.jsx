import React from "react";
import "./Component168.css";

function Component168(props) {
  const { aSoupShop, spanText1, spanText2, spanText3, spanText4, spanText5, spanText6, iconStar } = props;

  return (
    <div className="component-17-6">
      <div className="a-soup-shop-112 inter-semi-bold-black-20px">{aSoupShop}</div>
      <div className="x35-seats-left-51 arial">
        <span className="span0-115 arial">{spanText1}</span>
        <span className="span1-264 arial">{spanText2}</span>
        <span className="span2-17 inter-normal-black-20px">{spanText3}</span>
      </div>
      <div className="overlap-group4-286">
        <div className="x250m-47-18-are-going-100 inter-normal-white-20px">
          <span className="inter-normal-black-20px">{spanText4}</span>
          <span className="span1-265 arial">{spanText5}</span>
          <span className="inter-normal-black-20px">{spanText6}</span>
        </div>
        <img className="icon-star-435" src={iconStar} />
      </div>
    </div>
  );
}

export default Component168;
