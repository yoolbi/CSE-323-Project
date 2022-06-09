import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail3BanhmiSprite.css";

function MenuDetail3BanhmiSprite(props) {
  const { uncles, image21, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-banhmi-sprite-3 screen">
        <div className="flex-row-414">
          <Link to="/uncle-s-details-tc-bc">
            <img className="vector-272" src="/img/vector-6@2x.png" />
          </Link>
          <Link to="/uncle-s-details-tc-bc">
            <div className="uncles-48 inter-bold-flamingo-28px">{uncles}</div>
          </Link>
        </div>
        <div className="overlap-group3-212">
          <img className="image-21-1" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-17" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-12">
            <div className="overlap-group-735">
              <div className="price-11 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-11 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiSprite;
