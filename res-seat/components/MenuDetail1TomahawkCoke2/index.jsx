import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail1TomahawkCoke2.css";

function MenuDetail1TomahawkCoke2(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawkcoke screen">
        <div className="flex-row-467">
          <Link to="/uncle-s-details-bc">
            <img className="vector-331" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-67 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-273">
          <img className="image-18-4" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-62" src={line20} />
        <Link to="/uncle-s-details-tc-bc">
          <div className="group-25-66">
            <div className="overlap-group-830">
              <div className="price-65 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-65 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkCoke2;
