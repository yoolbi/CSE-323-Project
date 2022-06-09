import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail1TomahawkSprite4.css";

function MenuDetail1TomahawkSprite4(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawksprite3 screen">
        <div className="flex-row-521">
          <Link to="/uncle-s-details-menu1">
            <img className="vector-570" src="/img/vector-6@2x.png" />
          </Link>
          <Link to="/uncle-s-details-menu1">
            <div className="uncles-95 inter-bold-flamingo-28px">{uncles}</div>
          </Link>
        </div>
        <div className="overlap-group3-377">
          <img className="image-18-13" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-118" src={line20} />
        <Link to="/uncle-s-details-tc">
          <div className="group-25-114">
            <div className="overlap-group-994">
              <div className="price-113 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-113 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkSprite4;
