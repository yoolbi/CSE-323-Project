import React from "react";
import "./Bubble3.css";

function Bubble3(props) {
  const { bubble, sushiBest, spanText3, spanText4, spanText5, spanText8, className } = props;

  return (
    <div className={`bubble-4 ${className || ""}`} style={{ backgroundImage: `url(${bubble})` }}>
      <div className="sushi-best-4 inter-extra-bold-black-10px">{sushiBest}</div>
      <div className="overlap-group7-27">
        <div className="seat-left-13 inter-thin-black-8px">
          <span className="span-65 inter-thin-black-8px">Seat left</span>
          <span className="span-65 inter-thin-black-10px"></span>
        </div>
        <div className="x10-3-4 inter-extra-bold-white-20px-2">
          <span className="span-65 inter-extra-bold-persian-red-20px">{spanText3}</span>
          <span className="span-65 inter-extra-bold-saffron-20px">{spanText4}</span>
          <span className="span-65 inter-extra-bold-black-20px">{spanText5}</span>
          <span className="span-65 inter-thin-black-20px">|</span>
          <span className="span-65 inter-extra-bold-black-20px">&nbsp;&nbsp; </span>
          <span className="span-65 inter-extra-bold-persian-red-20px">{spanText8}</span>
        </div>
        <div className="are-going-10 inter-thin-black-8px">are going</div>
      </div>
      <div className="ellipse-1-15 border-1px-black"></div>
    </div>
  );
}

export default Bubble3;
