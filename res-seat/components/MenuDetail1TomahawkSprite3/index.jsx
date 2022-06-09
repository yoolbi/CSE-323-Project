import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail1TomahawkSprite3.css";

function MenuDetail1TomahawkSprite3(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawksprite2 screen">
        <div className="flex-row-471">
          <Link to="/uncle-s-details-bm">
            <img className="vector-337" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-73 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-279">
          <img className="image-18-6" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-66" src={line20} />
        <Link to="/uncle-s-details-tc-bm">
          <div className="group-25-70">
            <div className="overlap-group-836">
              <div className="price-69 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-69 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkSprite3;
