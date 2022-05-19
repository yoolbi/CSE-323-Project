import React from "react";
import "./Component942.css";

function Component942(props) {
  const { iconStar, className } = props;

  return (
    <div className={`component-10-3 ${className || ""}`}>
      <div className="overlap-group2-38">
        <div className="nearest-4 inter-normal-spicy-pink-16px">Nearest</div>
      </div>
      <div className="overlap-group-118">
        <div className="rectangle-32-8"></div>
        <div className="rating-22 inter-normal-white-16px-2">
          <span className="span-82 inter-normal-spicy-pink-16px">Rating</span>
          <span className="span-82 inter-normal-white-16px"></span>
        </div>
        <img className="icon-star-34" src={iconStar} />
      </div>
      <div className="overlap-group1-57">
        <div className="avalilable-seats-4 inter-normal-spicy-pink-13px">
          Avalilable
          <br />
          Seats
        </div>
      </div>
      <div className="overlap-group3-45">
        <div className="waiting-5 inter-normal-spicy-pink-16px">Waiting</div>
      </div>
    </div>
  );
}

export default Component942;
