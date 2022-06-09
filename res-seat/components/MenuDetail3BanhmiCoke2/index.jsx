import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail3BanhmiCoke2.css";

function MenuDetail3BanhmiCoke2(props) {
  const { uncles, image21, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3banhmicoke screen">
        <div className="flex-row-465">
          <Link to="/uncle-s-details-tc">
            <img className="vector-328" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-65 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-270">
          <img className="image-21-4" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component40 className={component40Props.className} component36Props={component40Props.component36Props} />
        <img className="line-20-60" src={line20} />
        <Link to="/uncle-s-details-tc-bm">
          <div className="group-25-64">
            <div className="overlap-group-827">
              <div className="price-63 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-63 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiCoke2;
