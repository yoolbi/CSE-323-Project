import React from "react";
import "./Component168.css";

function Component168(props) {
  const { aSoupShop, spanText1, spanText2, spanText3, spanText4, spanText5, spanText6, iconStar } = props;

  return (
    <div className="component-17-10">
      <div className="a-soup-shop-48 inter-semi-bold-black-20px">{aSoupShop}</div>
      <div className="x35-seats-left-8 arial">
        <span className="span0-58 arial">{spanText1}</span>
        <span className="span1-103 arial">{spanText2}</span>
        <span className="span2-7 inter-normal-black-20px">{spanText3}</span>
      </div>
      <div className="overlap-group4-38">
        <div className="x250m-47-18-are-going-44 inter-normal-white-20px">
          <span className="inter-normal-black-20px">{spanText4}</span>
          <span className="span1-104 arial">{spanText5}</span>
          <span className="inter-normal-black-20px">{spanText6}</span>
        </div>
        <img className="icon-star-27" src={iconStar} />
      </div>
    </div>
  );
}

export default Component168;
