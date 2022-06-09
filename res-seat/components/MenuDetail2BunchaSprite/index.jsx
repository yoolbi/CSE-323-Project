import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail2BunchaSprite.css";

function MenuDetail2BunchaSprite(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-buncha-sprite-3 screen">
        <div className="flex-row-416">
          <Link to="/uncle-s-details-tc-bm">
            <img className="vector-274" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-50 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-214">
          <img className="image-20-1" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-19" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-14">
            <div className="overlap-group-737">
              <div className="price-13 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-13 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaSprite;
