import React from "react";
import "./Group318.css";

function Group318(props) {
  const { children, className } = props;

  return (
    <div className={`group-318 ${className || ""}`}>
      <div className="ellipse-20 border-1px-black"></div>
      <div className="kyochon inter-medium-black-8px">{children}</div>
    </div>
  );
}

export default Group318;
