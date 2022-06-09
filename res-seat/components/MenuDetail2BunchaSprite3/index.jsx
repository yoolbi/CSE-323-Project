import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail2BunchaSprite3.css";

function MenuDetail2BunchaSprite3(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchasprite2 screen">
        <div className="flex-row-474">
          <Link to="/uncle-s-details-bm">
            <img className="vector-340" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-76 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-282">
          <img className="image-20-7" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-69" src={line20} />
        <Link to="/uncle-s-details-bc-bm">
          <div className="group-25-73">
            <div className="overlap-group-839">
              <div className="price-72 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-72 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaSprite3;
