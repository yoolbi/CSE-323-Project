import React from "react";
import "./Component94.css";

function Component94(props) {
  const { nearest, spanText1, spanText2, iconStar, avalilableSeats, waiting, group, spanText3, spanText4 } = props;

  return (
    <div className="component-10-2">
      <div className="overlap-group3-473">
        <div className="rectangle-30-7"></div>
        <div className="nearest-3 inter-normal-spicy-pink-16px">{nearest}</div>
      </div>
      <div className="overlap-group-1149">
        <div className="rectangle-3-2"></div>
        <div className="rating-173 inter-normal-white-16px-2">
          <span className="inter-normal-spicy-pink-16px">{spanText1}</span>
          <span className="inter-normal-white-16px">{spanText2}</span>
        </div>
        <img className="icon-star-441" src={iconStar} />
      </div>
      <div className="overlap-group4-293">
        <div className="avalilable-seats-3 inter-normal-white-13px">{avalilableSeats}</div>
      </div>
      <div className="overlap-group1-668">
        <div className="waiting-3 inter-normal-spicy-pink-16px">{waiting}</div>
      </div>
      <div className="overlap-group2-521">
        <div className="group-113 inter-normal-spicy-pink-16px">{group}</div>
        <div className="rectangle-3-2"></div>
        <div className="group-113 inter-normal-white-16px-2">
          <span className="inter-normal-spicy-pink-16px">{spanText3}</span>
          <span className="inter-normal-white-16px">{spanText4}</span>
        </div>
      </div>
    </div>
  );
}

export default Component94;
