import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail1TomahawkCoke3.css";

function MenuDetail1TomahawkCoke3(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawkcoke2 screen">
        <div className="flex-row-472">
          <Link to="/uncle-s-details-bm">
            <img className="vector-338" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-74 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-280">
          <img className="image-18-7" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-67" src={line20} />
        <Link to="/uncle-s-details-tc-bm">
          <div className="group-25-71">
            <div className="overlap-group-837">
              <div className="price-70 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-70 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkCoke3;
