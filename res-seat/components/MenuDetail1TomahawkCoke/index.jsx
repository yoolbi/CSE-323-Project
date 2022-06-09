import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail1TomahawkCoke.css";

function MenuDetail1TomahawkCoke(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1-tomahawk-coke-3 screen">
        <div className="flex-row-417">
          <Link to="/uncle-s-details-bc-bm">
            <img className="vector-278" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-54 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-218">
          <img className="image-18" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-20" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-15">
            <div className="overlap-group-741">
              <div className="price-14 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-14 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkCoke;
