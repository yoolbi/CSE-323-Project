import React from "react";
import { Link } from "react-router-dom";
import "./PumpkinSoup3.css";

function PumpkinSoup3(props) {
  const { children } = props;

  return (
    <Link to="/menu-detail1-porkbelly">
      <div className="pumpkin-soup-10">
        <div className="pumpkin-soup-11 inter-light-flamingo-24px">{children}</div>
      </div>
    </Link>
  );
}

export default PumpkinSoup3;
