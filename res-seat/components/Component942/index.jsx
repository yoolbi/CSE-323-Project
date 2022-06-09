import React from "react";
import "./Component942.css";

function Component942(props) {
  const { iconStar, className } = props;

  return (
    <div className={`component-10-3 ${className || ""}`}>
      <div className="overlap-group2-522">
        <div className="nearest-4 inter-normal-spicy-pink-16px">Nearest</div>
      </div>
      <div className="overlap-group-1151">
        <div className="rectangle-32-4"></div>
        <div className="rating-174 inter-normal-white-16px-2">
          <span className="span-262 inter-normal-spicy-pink-16px">Rating</span>
          <span className="span-262 inter-normal-white-16px"></span>
        </div>
        <img className="icon-star-442" src={iconStar} />
      </div>
      <div className="overlap-group1-669">
        <div className="avalilable-seats-4 inter-normal-spicy-pink-13px">
          Avalilable
          <br />
          Seats
        </div>
      </div>
      <div className="overlap-group3-474">
        <div className="waiting-5 inter-normal-spicy-pink-16px">Waiting</div>
      </div>
    </div>
  );
}

export default Component942;
