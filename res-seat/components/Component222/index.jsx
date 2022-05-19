import React from "react";
import "./Component222.css";

function Component222(props) {
  const { user, color, yesterday, star7, iconStar1, iconStar2 } = props;

  return (
    <div className="component-22-7">
      <div className="overlap-group5-34">
        <div className="rectangle-51-1"></div>
        <img className="user-1" src={user} />
        <div className="color-4 inter-medium-black-16px">{color}</div>
        <div className="yesterday-1 inter-normal-black-14px">{yesterday}</div>
        <img className="star-7-2" src={star7} />
        <img className="icon-star-30" src={iconStar1} />
        <img className="icon-star-31" src={iconStar2} />
      </div>
    </div>
  );
}

export default Component222;
