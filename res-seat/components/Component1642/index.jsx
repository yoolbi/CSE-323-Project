import React from "react";
import "./Component1642.css";

function Component1642(props) {
  const { star1, className } = props;

  return (
    <div className={`component-18 ${className || ""}`}>
      <div className="a-soup-shop-8 inter-semi-bold-black-20px">Shake Shack</div>
      <div className="overlap-group-419">
        <div className="x250m-47-18-are-going inter-normal-black-20px">
          <span className="span-85 inter-normal-black-20px">100m |&nbsp;&nbsp;&nbsp;&nbsp; 4.5 | </span>
          <span className="span1-51 arial">12</span>
          <span className="span-85 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="icon-star-251" src={star1} />
      </div>
    </div>
  );
}

export default Component1642;
