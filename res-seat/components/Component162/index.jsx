import React from "react";
import "./Component162.css";

function Component162(props) {
  const { star1, className } = props;

  return (
    <div className={`component-22-2 ${className || ""}`}>
      <div className="a-soup-shop-105 inter-semi-bold-black-20px">Sean’s Restaurant</div>
      <div className="x35-seats-left-47 arial">
        <span className="span0-104 arial">30</span>
        <span className="span1-250 arial">&nbsp;</span>
        <span className="span2-14 inter-normal-black-20px">min Waiting</span>
      </div>
      <div className="overlap-group2-502">
        <div className="x250m-47-18-are-going-96 inter-normal-black-20px">
          <span className="span-233 inter-normal-black-20px">270m |&nbsp;&nbsp;&nbsp;&nbsp; 4.9 | </span>
          <span className="span1-251 arial">5</span>
          <span className="span-233 inter-normal-black-20px"> Are Going</span>
        </div>
        <img className="star-1-13" src={star1} />
      </div>
    </div>
  );
}

export default Component162;
