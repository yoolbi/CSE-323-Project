import React from "react";
import { Link } from "react-router-dom";
import "./Component23.css";

function Component23(props) {
  const { className } = props;
  let link = "/restaurant-details-menu2";
  let url = window.location.href.split('/')[3];

  console.log(url);
  if(url == "menu-or-cart2"){
    link = "/restaurant-details-menu3";
  }else if (url == "menu-or-cart3"){
    link = "/restaurant-details-menu4";
  }

  return (
    <div className={`component-23-1 ${className || ""}`}>
      <div className="overlap-group4">
        <div className="rectangle-56"></div>
        <div className="this-menu-added-to-cart inter-semi-bold-flamingo-24px">This Menu Added to Cart</div>
        <div className="rectangle-57"></div>
        <Link to="/shopping-cart-home">
          <div className="rectangle-23"></div>
        </Link>
        <div className="rectangle-27 border-1px-orange"></div>
        <div className="menu inter-semi-bold-flamingo-16px">
          <span className="span inter-semi-bold-flamingo-16px">&nbsp;</span>
          <Link to = {link}>
          <span className="span inter-semi-bold-flamingo-18px">MENU</span>
          </Link>
          </div>
        <div className="cart inter-semi-bold-derby-15px">
          <span className="span inter-semi-bold-derby-15px">&nbsp;</span>
          <span className="span inter-semi-bold-derby-18px">CART</span>
        </div>
      </div>
    </div>
  );
}

export default Component23;
