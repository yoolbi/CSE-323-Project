import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail1TomahawkSprite2.css";

function MenuDetail1TomahawkSprite2(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawksprite screen">
        <div className="flex-row-468">
          <Link to="/uncle-s-details-bc">
            <img className="vector-332" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-68 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-274">
          <img className="image-18-5" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-63" src={line20} />
        <Link to="/uncle-s-details-tc-bc">
          <div className="group-25-67">
            <div className="overlap-group-831">
              <div className="price-66 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-66 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkSprite2;
