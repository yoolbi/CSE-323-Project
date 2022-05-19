import React from "react";
import "./Bubble5.css";

function Bubble5(props) {
  const { bubble, spanText1, spanText2, spanText3, spanText4, spanText5, spanText6 } = props;

  return (
    <div className="bubble-7" style={{ backgroundImage: `url(${bubble})` }}>
      <div className="sushi-best-5 inter-extra-bold-black-10px">
        <span className="inter-extra-bold-black-10px">{spanText1}</span>
        <span className="inter-extra-bold-black-13px">{spanText2}</span>
      </div>
      <div className="overlap-group6-35">
        <div className="seat-left-19 inter-bold-black-8px">
          <span className="inter-bold-black-8px">{spanText3}</span>
          <span className="span1-106">{spanText4}</span>
        </div>
        <div className="text-45 inter-extra-bold-white-20px-2">
          <span className="inter-extra-bold-saffron-20px">{spanText5}</span>
          <span className="inter-extra-bold-black-20px">{spanText6}</span>
        </div>
      </div>
      <div className="ellipse-1-18 border-1px-black"></div>
    </div>
  );
}

export default Bubble5;
