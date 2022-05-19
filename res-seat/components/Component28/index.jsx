import React from "react";
import "./Component28.css";

function Component28(props) {
  const { porkBelly, theSavoryPorkBell, className } = props;

  return (
    <div className={`component-28 ${className || ""}`}>
      <div className="pork-belly-1 inter-semi-bold-black-28px">{porkBelly}</div>
      <p className="the-savory-pork-bell inter-thin-black-15px">{theSavoryPorkBell}</p>
      <div className="x15000-won-2 inter-semi-bold-black-20px">15,000 won</div>
    </div>
  );
}

export default Component28;
