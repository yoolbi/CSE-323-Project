import React from "react";
import "./Component22.css";

function Component22(props) {
  const { cookingDoneAttenti, iconUser, color, yesterday, iconStar, star8, star9, star10, star11, seeDetail } = props;

  return (
    <div className="component-22">
      <div className="overlap-group6-7">
        <div className="rectangle-51"></div>
        <p className="cooking-done-attenti-1 inter-medium-black-14px">{cookingDoneAttenti}</p>
        <img className="icon-user-3" src={iconUser} />
        <div className="color-3 inter-medium-black-16px">{color}</div>
        <div className="yesterday-1 inter-normal-dove-gray-12px">{yesterday}</div>
        <img className="icon-star-58" src={iconStar} />
        <img className="icon-star-59" src={star8} />
        <img className="icon-star-60" src={star9} />
        <img className="icon-star-61" src={star10} />
        <img className="icon-star-62" src={star11} />
        <div className="see-detail-3 inter-normal-suva-gray-10px">{seeDetail}</div>
      </div>
    </div>
  );
}

export default Component22;
