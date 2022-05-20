import React from "react";
import Component1 from "../Component1";
import "./Group23.css";

function Group23(props) {
  const { component11Props, component12Props, component13Props } = props;

  return (
    <div className="group-23">
      <Component1 porkBelly={component11Props.porkBelly} />
      <Component1 porkBelly={component12Props.porkBelly} />
      <Component1 porkBelly={component13Props.porkBelly} />
    </div>
  );
}

export default Group23;
