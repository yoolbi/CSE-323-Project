import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail1Tomahawk2.css";

function MenuDetail1Tomahawk2(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawk screen">
        <div className="flex-row-500">
          <Link to="/uncle-s-details-bc">
            <img className="vector-462" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-82 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-333">
          <img className="image-18-9" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-95" src={line20} />
        <Link to="/uncle-s-details-tc-bc">
          <div className="group-25-96">
            <div className="overlap-group-920">
              <div className="price-95 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-95 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1Tomahawk2;
