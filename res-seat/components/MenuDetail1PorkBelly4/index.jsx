import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import "./MenuDetail1PorkBelly4.css";

function MenuDetail1PorkBelly4(props) {
  const {
    hanamBbq,
    image8,
    iconCheck_Mark1,
    iconCheck_Mark2,
    line20,
    price,
    addToCart,
    component28Props,
    component363Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1porkbelly3 screen">
        <div className="flex-row-480">
          <Link to="/hanam-details-pl">
            <img className="vector-427" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-107 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-210">
          <img className="image-8-112" src={image8} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group3-309">
          <Component363 text58={component363Props.text58} text59={component363Props.text59} />
          <Link to="/menu-detail1-porkbelly-7">
            <img className="icon-check_mark-96" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail1porkbelly">
            <img className="icon-check_mark-97" src={iconCheck_Mark2} />
          </Link>
        </div>
        <img className="line-20-75" src={line20} />
        <Link to="/hanam-details-pb-pl">
          <div className="group-25-79">
            <div className="overlap-group-894">
              <div className="price-78 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-78 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly4;
