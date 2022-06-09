import React from "react";
import { Link } from "react-router-dom";
import "./Component23.css";

function Component23(props) {
  const { className } = props;

  return (
    <div className={`component-23-5 ${className || ""}`}>
      <div className="overlap-group4-257">
        <div className="rectangle-56"></div>
        <div className="this-menu-added-to-cart inter-semi-bold-flamingo-24px">This Menu Added to Cart</div>
        <div className="rectangle-57"></div>
        <Link to="/shopping-cart-home">
          <div className="rectangle-23-18"></div>
        </Link>
        <div className="rectangle-27-145 border-1px-orange"></div>
        <div className="menu-90 inter-semi-bold-flamingo-16px">
          <span className="span-215 inter-semi-bold-flamingo-16px">&nbsp;</span>
          <span className="span-215 inter-semi-bold-flamingo-18px">MENU</span>
        </div>
        <div className="cart inter-semi-bold-derby-15px">
          <span className="span-215 inter-semi-bold-derby-15px">&nbsp;</span>
          <span className="span-215 inter-semi-bold-derby-18px">CART</span>
        </div>
      </div>
    </div>
  );
}

export default Component23;
