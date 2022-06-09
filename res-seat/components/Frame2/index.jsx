import React from "react";
import Component1 from "../Component1";
import "./Frame2.css";

function Frame2(props) {
  const { component1Props } = props;

  return (
    <div className="frame-2">
      <div className="overlap-group2-157">
        <Component1 porkBelly={component1Props.porkBelly} />
      </div>
    </div>
  );
}

export default Frame2;
