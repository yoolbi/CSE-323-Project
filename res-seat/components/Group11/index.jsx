import React from "react";
import "./Group11.css";

function Group11(props) {
  const { src, className } = props;

  return (
    <div className={`group-8-11 ${className || ""}`}>
      <img className="outline_add_black_24dp-1" src={src} />
    </div>
  );
}

export default Group11;
