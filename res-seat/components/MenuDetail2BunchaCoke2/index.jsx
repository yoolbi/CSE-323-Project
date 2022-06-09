import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail2BunchaCoke2.css";

function MenuDetail2BunchaCoke2(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchacoke screen">
        <div className="flex-row-463">
          <a href="javascript:history.back()">
            <img className="vector-326" src="/img/vector-6@2x.png" />
          </a>
          <div className="uncles-63 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-268">
          <img className="image-20-4" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-58" src={line20} />
        <Link to="/uncle-s-details-tc-bc">
          <div className="group-25-62">
            <div className="overlap-group-825">
              <div className="price-61 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-61 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaCoke2;
