import React from "react";
import "./Component164.css";

function Component164(props) {
  const { image3, aSoupShop, spanText1, spanText2, spanText3, spanText4, iconStar, className } = props;

  return (
    <div className={`component-21-10-1 ${className || ""}`}>
      <img className="image-3-10" src={image3} />
      <div className="flex-col-122">
        <div className="a-soup-shop-59 inter-semi-bold-black-20px">{aSoupShop}</div>
        <div className="x35-seats-left-36 arial">
          <span className="span0-58 arial">{spanText1}</span>
          <span className="span1-143 inter-normal-black-20px">{spanText2}</span>
        </div>
        <div className="overlap-group-468">
          <div className="x250m-47-18-are-going-58 inter-normal-black-20px">
            <span className="span-143 inter-normal-black-20px">{spanText3}</span>
            <span className="span1-144 arial">{spanText4}</span>
            <span className="span-143 inter-normal-black-20px"> Are Going</span>
          </div>
          <img className="icon-star-296" src={iconStar} />
        </div>
      </div>
    </div>
  );
}

export default Component164;
