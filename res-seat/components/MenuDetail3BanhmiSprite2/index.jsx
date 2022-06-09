import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail3BanhmiSprite2.css";

function MenuDetail3BanhmiSprite2(props) {
  const { uncles, image21, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3banhmisprite screen">
        <div className="flex-row-466">
          <Link to="/uncle-s-details-tc">
            <img className="vector-329" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-66 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-271">
          <img className="image-21-5" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-61" src={line20} />
        <Link to="/uncle-s-details-tc-bm">
          <div className="group-25-65">
            <div className="overlap-group-828">
              <div className="price-64 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-64 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiSprite2;
