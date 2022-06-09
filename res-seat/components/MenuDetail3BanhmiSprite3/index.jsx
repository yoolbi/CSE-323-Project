import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail3BanhmiSprite3.css";

function MenuDetail3BanhmiSprite3(props) {
  const { uncles, image21, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3banhmisprite2 screen">
        <div className="flex-row-470">
          <Link to="/uncle-s-details-bc">
            <img className="vector-334" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-70 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-276">
          <img className="image-21-7" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-65" src={line20} />
        <Link to="/uncle-s-details-bc-bm">
          <div className="group-25-69">
            <div className="overlap-group-833">
              <div className="price-68 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-68 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiSprite3;
