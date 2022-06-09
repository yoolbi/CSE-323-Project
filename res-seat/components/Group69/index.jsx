import React from "react";
import Component1 from "../Component1";
import "./Group69.css";

function Group69(props) {
  const { className, component11Props, component12Props } = props;

  return (
    <div className={`group-77 ${className || ""}`}>
      <Component1 porkBelly={component11Props.porkBelly} className={component11Props.className} />
      <div className="overlap-group4-100">
        <Component1 porkBelly={component12Props.porkBelly} className={component12Props.className} />
        <img className="loaded-baked-potato-soup-recipe-3-2-2" src="/img/loaded-baked-potato-soup-recipe-3-2@2x.png" />
      </div>
    </div>
  );
}

export default Group69;
