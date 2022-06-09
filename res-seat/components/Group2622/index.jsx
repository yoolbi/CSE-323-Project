import React from "react";
import "./Group2622.css";

function Group2622(props) {
  const { src, className } = props;

  return (
    <div className={`group-26-1 ${className || ""}`}>
      <img className="icon-cart" src={src} />
    </div>
  );
}

export default Group2622;
