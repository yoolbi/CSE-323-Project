import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail2BunchaCoke3.css";

function MenuDetail2BunchaCoke3(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchacoke2 screen">
        <div className="flex-row-473">
          <Link to="/uncle-s-details-bm">
            <img className="vector-339" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-75 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-281">
          <img className="image-20-6" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-68" src={line20} />
        <Link to="/uncle-s-details-bc-bm">
          <div className="group-25-72">
            <div className="overlap-group-838">
              <div className="price-71 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-71 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaCoke3;
