import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail1TomahawkSprite.css";

function MenuDetail1TomahawkSprite(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1-tomahawk-sprite-3 screen">
        <div className="flex-row-418">
          <Link to="/uncle-s-details-bc-bm">
            <img className="vector-279" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-55 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-219">
          <img className="image-18-1" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-21" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-16">
            <div className="overlap-group-742">
              <div className="price-15 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-15 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkSprite;
