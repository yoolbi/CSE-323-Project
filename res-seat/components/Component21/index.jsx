import React from "react";
import "./Component21.css";

function Component21(props) {
  const { className } = props;

  return (
    <div className={`component-21 ${className || ""}`}>
      <div className="overlap-group1-1">
        <div className="rectangle-50"></div>
        <div className="plus inter-normal-black-27px">+</div>
      </div>
    </div>
  );
}

export default Component21;
