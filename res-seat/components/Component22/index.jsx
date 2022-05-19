import React from "react";
import "./Component22.css";

function Component22(props) {
  const { cookingDoneAttenti, iconUser, color, yesterday, iconStar, star8, star9, star10, star11, seeDetail } = props;

  return (
    <div className="component-22">
      <div className="overlap-group5-14">
        <div className="rectangle-51"></div>
        <p className="cooking-done-attenti-2 inter-medium-black-14px">{cookingDoneAttenti}</p>
        <img className="icon-user-1" src={iconUser} />
        <div className="color-1 inter-medium-black-16px">{color}</div>
        <div className="yesterday inter-normal-dove-gray-12px">{yesterday}</div>
        <img className="icon-star-16" src={iconStar} />
        <img className="star-8" src={star8} />
        <img className="star-9" src={star9} />
        <img className="star-10" src={star10} />
        <img className="star-11" src={star11} />
        <div className="see-detail-1 inter-normal-suva-gray-10px">{seeDetail}</div>
      </div>
    </div>
  );
}

export default Component22;
