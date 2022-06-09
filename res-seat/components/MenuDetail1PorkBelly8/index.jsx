import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import "./MenuDetail1PorkBelly8.css";

function MenuDetail1PorkBelly8(props) {
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
      <div className="menu-detail1porkbelly7 screen">
        <div className="flex-row-526">
          <Link to="/restaurant-details-menu1">
            <img className="vector-654" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-131 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-402">
          <img className="image-8-116" src={image8} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group4-240">
          <Component363 text58={component363Props.text58} text59={component363Props.text59} />
          <Link to="/menu-detail1porkbelly5">
            <img className="icon-check_mark-121" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail1porkbelly6">
            <img className="icon-check_mark-122" src={iconCheck_Mark2} />
          </Link>
        </div>
        <img className="line-20-123" src={line20} />
        <Link to="/hanam-details-menu-pb">
          <div className="group-25-119">
            <div className="overlap-group-1036">
              <div className="price-118 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-118 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly8;
