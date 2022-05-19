import React from "react";
import "./Component164.css";

function Component164(props) {
  const { star1, className } = props;

  return (
    <div className={`component-18 ${className || ""}`}>
      <div className="a-soup-shop-17 inter-semi-bold-black-20px">Shake Shack</div>
      <div className="overlap-group4-22">
        <div className="x250m-47-18-are-going-25 inter-normal-black-20px">
          <span className="span-37 inter-normal-black-20px">100m |&nbsp;&nbsp;&nbsp;&nbsp; 4.5 | </span>
          <span className="span1-63 arial">12</span>
          <span className="span-37 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="star-1-25" src={star1} />
      </div>
    </div>
  );
}

export default Component164;
