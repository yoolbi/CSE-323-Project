import React from "react";
import "./Group320.css";

function Group320(props) {
  const { className } = props;

  return (
    <div className={`group-320 ${className || ""}`}>
      <div className="ellipse-6 border-1px-black"></div>
      <div className="bhc inter-medium-black-8px">BHC</div>
    </div>
  );
}

export default Group320;
