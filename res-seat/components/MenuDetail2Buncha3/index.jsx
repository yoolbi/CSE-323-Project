import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2Buncha3.css";

function MenuDetail2Buncha3(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2buncha2 screen">
        <div className="flex-row-504">
          <Link to="/uncle-s-details-bm">
            <img className="vector-469" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-86 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-338">
          <img className="image-20-10" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-99" src={line20} />
        <Link to="/uncle-s-details-bc-bm">
          <div className="group-25-99">
            <div className="overlap-group-924">
              <div className="price-98 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-98 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2Buncha3;
