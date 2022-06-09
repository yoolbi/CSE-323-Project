import React from "react";
import Component1 from "../Component1";
import "./Frame22.css";

function Frame22(props) {
  const { component1Props } = props;

  return (
    <div className="frame-2-4">
      <div className="group-23-1">
        <Component1 porkBelly={component1Props.porkBelly} className={component1Props.className} />
      </div>
    </div>
  );
}

export default Frame22;
