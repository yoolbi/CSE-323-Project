import React from "react";
import Component1 from "../Component1";
import "./Frame3.css";

function Frame3(props) {
  const { component1Props } = props;

  return (
    <div className="frame-3-1">
      <div className="overlap-group5-81">
        <Component1 porkBelly={component1Props.porkBelly} className={component1Props.className} />
        <img className="image-12" src="/img/image-12@2x.png" />
        <img className="loaded-baked-potato-soup-recipe-3-4-7" src="/img/loaded-baked-potato-soup-recipe-3-2@2x.png" />
      </div>
    </div>
  );
}

export default Frame3;
