import React from "react";
import "./Group252.css";

function Group252(props) {
  const { line6, line7, line8, className } = props;

  return (
    <div className={`group-252 border-1px-flamingo ${className || ""}`}>
      <img className="line-6-5" src={line6} />
      <img className="line-8" src={line7} />
      <img className="line-8 variant-1" src={line8} />
    </div>
  );
}

export default Group252;
