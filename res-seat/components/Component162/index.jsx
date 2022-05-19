import React from "react";
import "./Component162.css";

function Component162(props) {
  const { star1, className } = props;

  return (
    <div className={`component-22-1 ${className || ""}`}>
      <div className="a-soup-shop-10 inter-semi-bold-black-20px">Sean’s Restaurant</div>
      <div className="x35-seats-left arial">
        <span className="span0-21 arial">30</span>
        <span className="span1-29 arial">&nbsp;</span>
        <span className="span2 inter-normal-black-20px">min Waiting</span>
      </div>
      <div className="overlap-group-78">
        <div className="x250m-47-18-are-going-8 inter-normal-black-20px">
          <span className="span-20 inter-normal-black-20px">270m |&nbsp;&nbsp;&nbsp;&nbsp; 4.9 | </span>
          <span className="span1-30 arial">5</span>
          <span className="span-20 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="star-1-8" src={star1} />
      </div>
    </div>
  );
}

export default Component162;
