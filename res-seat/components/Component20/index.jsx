import React from "react";
import "./Component20.css";

function Component20(props) {
  const { className } = props;

  return (
    <div className={`component-20 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="rectangle-48-1"></div>
        <div className="minus inter-light-black-40px">-</div>
      </div>
    </div>
  );
}

export default Component20;
