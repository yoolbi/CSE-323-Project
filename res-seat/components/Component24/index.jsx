import React from "react";
import { Link } from "react-router-dom";
import "./Component24.css";

function Component24(props) {
  const { vegetable } = props;

  return (
    <div className="component-24-4">
      <Link to="/menu-detail3-porklib-side">
        <div className="rectangle-48-13 border-1px-orange"></div>
      </Link>
      <div className="vegetable-1 inter-medium-black-16px">{vegetable}</div>
      <div className="x200-won-2 arial">
        <span className="arial">+</span>
        <span className="span1-225 inter-medium-black-16px"> 200 won</span>
      </div>
    </div>
  );
}

export default Component24;
