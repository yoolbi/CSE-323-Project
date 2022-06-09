import React from "react";
import { Link } from "react-router-dom";
import "./Component362.css";

function Component362(props) {
  const { text34, text35, className } = props;

  return (
    <div className={`component-37-3 ${className || ""}`}>
      <div className="flex-col-329">
        <Link to="/menu-detail3porkrib2">
          <div className="rectangle-104-1 border-1px-orange"></div>
        </Link>
        <div className="rectangle-105-1"></div>
      </div>
      <div className="overlap-group2-249 inter-normal-black-30px">
        <div className="sprite-33">Sprite</div>
        <div className="coke-33">Coke</div>
        <div className="text-34">{text34}</div>
        <div className="text-35">{text35}</div>
      </div>
    </div>
  );
}

export default Component362;
