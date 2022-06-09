import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2Buncha4.css";

function MenuDetail2Buncha4(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2buncha3 screen">
        <div className="flex-row-539">
          <Link to="/uncle-s-details-menu1">
            <img className="vector-674" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-106 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-416">
          <img className="image-20-14" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-136" src={line20} />
        <Link to="/uncle-s-details-bc">
          <div className="group-25-129">
            <div className="overlap-group-1050">
              <div className="price-128 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-128 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2Buncha4;
