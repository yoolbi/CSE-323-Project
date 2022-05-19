import React from "react";
import "./Component25.css";

function Component25(props) {
  const { friedKimchi, spanText2, className } = props;

  return (
    <div className={`component-25 ${className || ""}`}>
      <div className="rectangle-4-1 border-1px-orange"></div>
      <div className="fried-kimchi-1 inter-medium-black-16px">{friedKimchi}</div>
      <div className="x100-won-2 arial">
        <span className="span0-6 arial">+</span>
        <span className="span1-6 inter-medium-black-16px">{spanText2}</span>
      </div>
    </div>
  );
}

export default Component25;
