import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import "./MenuDetail3PorkRib8.css";

function MenuDetail3PorkRib8(props) {
  const {
    hanamBbq,
    loadedBakedPotatoSoupRecipe35,
    iconCheck_Mark1,
    iconCheck_Mark2,
    vector2,
    line20,
    price,
    addToCart,
    component28Props,
    component363Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3porkrib7 screen">
        <div className="flex-row-479">
          <Link to="/restaurant-details-menu1">
            <img className="vector-425" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-106 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-308">
          <img className="loaded-baked-potato-soup-recipe-3-5-7" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group4-209">
          <Component363 text58={component363Props.text58} text59={component363Props.text59} />
          <Link to="/menu-detail3porkrib4">
            <img className="icon-check_mark-94" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail3porkrib5">
            <img className="icon-check_mark-95" src={iconCheck_Mark2} />
          </Link>
          <Link to="/menu-detail2collarbutt">
            <img className="vector-426" src={vector2} />
          </Link>
        </div>
        <img className="line-20-74" src={line20} />
        <Link to="/hanam-details-pb-pl">
          <div className="group-25-78">
            <div className="overlap-group-893">
              <div className="price-77 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-77 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib8;
