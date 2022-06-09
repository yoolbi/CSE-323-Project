import React from "react";
import { Link } from "react-router-dom";
import Component363 from "../Component363";
import "./Component422.css";

function Component422(props) {
  const { className, component363Props } = props;

  return (
    <div className={`component-45 ${className || ""}`}>
      <div className="overlap-group1-483">
        <Component363
          text58={component363Props.text58}
          text59={component363Props.text59}
          className={component363Props.className}
        />
        <Link to="/menu-detail3-salad-coke-3">
          <img className="icon-check_mark-56" src="/img/vector-127@2x.png" />
        </Link>
      </div>
    </div>
  );
}

export default Component422;
