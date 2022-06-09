import React from "react";
import { Link } from "react-router-dom";
import "./Component36.css";

function Component36(props) {
  const { text32, text33, className } = props;

  return (
    <div className={`component-37 ${className || ""}`}>
      <div className="flex-col-318">
        <div className="rectangle-104"></div>
        <Link to="/menu-detail3porkrib2">
          <div className="rectangle-105 border-1px-orange"></div>
        </Link>
      </div>
      <div className="overlap-group2-243 inter-normal-black-30px">
        <div className="sprite">Sprite</div>
        <div className="coke">Coke</div>
        <div className="text-32">{text32}</div>
        <div className="text-33">{text33}</div>
      </div>
    </div>
  );
}

export default Component36;
