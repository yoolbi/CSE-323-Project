import React from "react";
import "./PumpkinSoup2.css";

function PumpkinSoup2(props) {
  const { spanText1, spanText2, spanText3 } = props;

  return (
    <div className="info-tab">
      <div className="pork-lib-4 inter-light-black-20px">
        <span className="inter-light-black-20px">{spanText1}</span>
        <span className="inter-light-black-20px">{spanText2}</span>
        <span className="inter-light-black-24px">{spanText3}</span>
      </div>
    </div>
  );
}

export default PumpkinSoup2;
