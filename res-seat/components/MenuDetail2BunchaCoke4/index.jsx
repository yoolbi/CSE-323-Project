import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail2BunchaCoke4.css";

function MenuDetail2BunchaCoke4(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchacoke3 screen">
        <div className="flex-row-522">
          <Link to="/uncle-s-details-menu1">
            <img className="vector-571" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-96 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-378">
          <img className="image-20-12" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-119" src={line20} />
        <Link to="/uncle-s-details-bc">
          <div className="group-25-115">
            <div className="overlap-group-995">
              <div className="price-114 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-114 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaCoke4;
