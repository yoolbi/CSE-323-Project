import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import "./MenuDetail1PorkBelly6.css";

function MenuDetail1PorkBelly6(props) {
  const { hanamBbq, image8, iconCheck_Mark, line20, price, addToCart, component28Props, component36Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1porkbelly5 screen">
        <div className="flex-row-508">
          <Link to="/restaurant-details-menu1">
            <img className="vector-526" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-119 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-356">
          <img className="image-8-114" src={image8} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group4-223">
          <Component36 text32={component36Props.text32} text33={component36Props.text33} />
          <Link to="/menu-detail1porkbelly2">
            <img className="icon-check_mark-115" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-105" src={line20} />
        <Link to="/hanam-details-menu-pb">
          <div className="group-25-103">
            <div className="overlap-group-968">
              <div className="price-102 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-102 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly6;
