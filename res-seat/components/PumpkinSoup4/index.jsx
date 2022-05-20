import React from "react";
import { Link } from "react-router-dom";
import "./PumpkinSoup4.css";

function PumpkinSoup4(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5, spanText6, spanText7, spanText8, spanText9 } = props;

  return (
    <Link to="/menu-detail1-porkbelly">
      <div className="info-tab-1">
        <div className="pumpkin-soup-12 inter-light-black-24px">
          <span className="inter-light-black-24px">{spanText1}</span>
          <span className="inter-light-black-24px">{spanText2}</span>
          <span className="inter-light-black-24px">{spanText3}</span>
          <span className="inter-light-black-24px">{spanText4}</span>
          <span className="inter-light-black-24px">{spanText5}</span>
          <span className="inter-light-black-24px">{spanText6}</span>
          <span className="inter-light-black-24px">{spanText7}</span>
          <span className="inter-light-black-20px">{spanText8}</span>
          <span className="inter-light-black-24px">{spanText9}</span>
        </div>
      </div>
    </Link>
  );
}

export default PumpkinSoup4;
