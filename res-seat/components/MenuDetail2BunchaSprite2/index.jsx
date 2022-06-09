import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail2BunchaSprite2.css";

function MenuDetail2BunchaSprite2(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchasprite screen">
        <div className="flex-row-464">
          <a href="javascript:history.back()">
            <img className="vector-327" src="/img/vector-6@2x.png" />
          </a>
          <div className="uncles-64 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-269">
          <img className="image-20-5" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-59" src={line20} />
        <Link to="/uncle-s-details-tc-bc">
          <div className="group-25-63">
            <div className="overlap-group-826">
              <div className="price-62 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-62 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaSprite2;
