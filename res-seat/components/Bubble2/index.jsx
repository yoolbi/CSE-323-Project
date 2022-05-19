import React from "react";
import "./Bubble2.css";

function Bubble2(props) {
  const {
    bubble,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    areGoing,
  } = props;

  return (
    <div className="bubble-3" style={{ backgroundImage: `url(${bubble})` }}>
      <div className="sushi-best-2 inter-extra-bold-black-10px">
        <span className="inter-extra-bold-black-10px">{spanText1}</span>
        <span className="inter-extra-bold-black-13px">{spanText2}</span>
      </div>
      <div className="overlap-group6-26">
        <div className="seat-left-11 inter-thin-black-8px">
          <span className="inter-thin-black-8px">{spanText3}</span>
          <span className="inter-thin-black-10px">{spanText4}</span>
        </div>
        <div className="x10-3-2 inter-extra-bold-white-20px-2">
          <span className="inter-extra-bold-saffron-20px">{spanText5}</span>
          <span className="inter-extra-bold-black-20px">{spanText6}</span>
          <span className="inter-thin-black-20px">{spanText7}</span>
          <span className="inter-extra-bold-black-20px">{spanText8}</span>
          <span className="inter-extra-bold-apple-20px">{spanText9}</span>
        </div>
        <div className="are-going-8 inter-thin-black-8px">{areGoing}</div>
      </div>
      <div className="ellipse-1-13 border-1px-black"></div>
    </div>
  );
}

export default Bubble2;
