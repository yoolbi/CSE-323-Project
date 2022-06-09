import React from "react";
import { Link } from "react-router-dom";
import "./Component364.css";

function Component364(props) {
  const { text86, text87, className } = props;

  return (
    <div className={`component-37-13 ${className || ""}`}>
      <div className="flex-col-393">
        <Link to="/menu-detail3-porkrib-11">
          <div className="rectangle-104-36 border-1px-orange"></div>
        </Link>
        <Link to="/menu-detail3porkrib">
          <div className="rectangle-105-37 border-1px-orange"></div>
        </Link>
      </div>
      <div className="overlap-group2-331 inter-normal-black-30px">
        <div className="sprite-99">Sprite</div>
        <div className="coke-99">Coke</div>
        <div className="text-86">{text86}</div>
        <div className="text-87">{text87}</div>
      </div>
    </div>
  );
}

export default Component364;
