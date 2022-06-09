import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail3Banhmi.css";

function MenuDetail3Banhmi(props) {
  const { uncles, image21, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-banhmi-3 screen">
        <div className="flex-row-436">
          <Link to="/uncle-s-details-tc-bc">
            <img className="vector-296" src="/img/vector-6@2x.png" />
          </Link>
          <Link to="/uncle-s-details-tc-bc">
            <div className="uncles-57 inter-bold-flamingo-28px">{uncles}</div>
          </Link>
        </div>
        <div className="overlap-group3-236">
          <img className="image-21-2" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-32" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-27">
            <div className="overlap-group-785">
              <div className="price-26 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-26 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3Banhmi;
