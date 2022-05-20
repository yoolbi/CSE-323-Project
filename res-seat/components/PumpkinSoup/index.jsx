import React from "react";
import { Link } from "react-router-dom";
import "./PumpkinSoup.css";

function PumpkinSoup(props) {
  const { children, className } = props;

  return (
    <Link to="/menu-detail3-porklib">
      <div className={`pumpkin-soup-1 ${className || ""}`}>
        <div className="pork-lib inter-light-black-24px">{children}</div>
      </div>
    </Link>
  );
}

export default PumpkinSoup;
