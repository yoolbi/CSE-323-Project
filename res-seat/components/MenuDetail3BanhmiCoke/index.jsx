import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail3BanhmiCoke.css";

function MenuDetail3BanhmiCoke(props) {
  const { uncles, image21, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-banhmi-coke-3 screen">
        <div className="flex-row-413">
          <Link to="/uncle-s-details-tc-bc">
            <img className="vector-271" src="/img/vector-6@2x.png" />
          </Link>
          <Link to="/uncle-s-details-tc-bc">
            <div className="uncles-47 inter-bold-flamingo-28px">{uncles}</div>
          </Link>
        </div>
        <div className="overlap-group3-211">
          <img className="image-21" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-16" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-11">
            <div className="overlap-group-734">
              <div className="price-10 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-10 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiCoke;
