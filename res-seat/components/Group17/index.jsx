import React from "react";
import "./Group17.css";

function Group17(props) {
  const { line6, line7, line8, className } = props;

  return (
    <div className={`group-17 border-1px-flamingo ${className || ""}`}>
      <img className="line-6-3" src={line6} />
      <img className="line" src={line7} />
      <img className="line variant-1" src={line8} />
    </div>
  );
}

export default Group17;
