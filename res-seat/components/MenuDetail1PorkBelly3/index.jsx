import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail1PorkBelly3.css";

function MenuDetail1PorkBelly3(props) {
  const { hanamBbq, image8, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1porkbelly2 screen">
        <div className="flex-row-477">
          <Link to="/restaurant-details-menu1">
            <img className="vector-416" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-104 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-304">
          <img className="image-8-111" src={image8} />
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
        <img className="line-20-72" src={line20} />
        <Link to="/hanam-details-menu-pb">
          <div className="group-25-76">
            <div className="overlap-group-890">
              <div className="price-75 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-75 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly3;
