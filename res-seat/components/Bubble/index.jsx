import React from "react";
import { Link } from "react-router-dom";
import "./Bubble.css";

function Bubble(props) {
  const { bubble, sushiBest, spanText3, spanText4, spanText5, spanText6, spanText7, className } = props;

  return (
    <div className={`bubble ${className || ""}`} style={{ backgroundImage: `url(${bubble})` }}>
      <div className="sushi-best inter-extra-bold-black-10px">{sushiBest}</div>
      <div className="overlap-group-103">
        <div className="seat-left-9 inter-thin-black-8px">
          <span className="span-62 inter-thin-black-8px">Seat left</span>
          <span className="span-62 inter-thin-black-10px"></span>
        </div>
        <div className="x10-3 inter-extra-bold-white-20px-2">
          <span className="span-62 inter-extra-bold-apple-20px">{spanText3}</span>
          <span className="span-62 inter-extra-bold-black-20px">{spanText4}</span>
          <span className="span-62 inter-thin-black-20px">{spanText5}</span>
          <span className="span-62 inter-extra-bold-black-20px">{spanText6}</span>
          <span className="span-62 inter-extra-bold-persian-red-20px">{spanText7}</span>
        </div>
        <div className="are-going-6 inter-thin-black-8px">are going</div>
      </div>
      <div className="ellipse-1-12 border-1px-black"></div>
    </div>
  );
}

export default Bubble;
