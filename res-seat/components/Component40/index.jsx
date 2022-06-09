import React from "react";
import { Link } from "react-router-dom";
import Component36 from "../Component36";
import "./Component40.css";

function Component40(props) {
  const { className, component36Props } = props;

  return (
    <div className={`component-42 ${className || ""}`}>
      <div className="overlap-group2-264">
        <Component36
          text32={component36Props.text32}
          text33={component36Props.text33}
          className={component36Props.className}
        />
        <Link to="/menu-detail3-salad-3">
          <img className="icon-check_mark-4" src="/img/vector-127@2x.png" />
        </Link>
      </div>
    </div>
  );
}

export default Component40;
