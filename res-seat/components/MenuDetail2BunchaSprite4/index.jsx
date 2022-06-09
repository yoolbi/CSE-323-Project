import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail2BunchaSprite4.css";

function MenuDetail2BunchaSprite4(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchasprite3 screen">
        <div className="flex-row-523">
          <Link to="/uncle-s-details-menu1">
            <img className="vector-572" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-97 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-379">
          <img className="image-20-13" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-120" src={line20} />
        <Link to="/uncle-s-details-bc">
          <div className="group-25-116">
            <div className="overlap-group-996">
              <div className="price-115 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-115 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaSprite4;
