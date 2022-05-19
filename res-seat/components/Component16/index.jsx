import React from "react";
import "./Component16.css";

function Component16(props) {
  const { image3, star1, className } = props;

  return (
    <div className={`component-21-12 ${className || ""}`}>
      <img className="image-3" src={image3} />
      <div className="flex-col-6">
        <div className="a-soup-shop-1 inter-semi-bold-black-20px">Hanam BBQ</div>
        <div className="address arial">
          <span className="span0-10 arial">35</span>
          <span className="span1-10 inter-normal-black-20px"> Seats Left</span>
        </div>
        <div className="overlap-group-16">
          <div className="x250m-47-18-are-going inter-normal-black-20px">
            <span className="span-5 inter-normal-black-20px">180m |&nbsp;&nbsp;&nbsp;&nbsp; 4.7 | </span>
            <span className="span1-11 arial">18</span>
            <span className="span-5 inter-normal-black-20px"> Are Going</span>
          </div>
          <img className="star-1" src={star1} />
        </div>
      </div>
    </div>
  );
}

export default Component16;
