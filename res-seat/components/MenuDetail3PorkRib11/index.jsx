import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import "./MenuDetail3PorkRib11.css";

function MenuDetail3PorkRib11(props) {
  const {
    hanamBbq,
    loadedBakedPotatoSoupRecipe35,
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
      <div className="menu-detail3porkrib10 screen">
        <div className="flex-row-529">
          <Link to="/restaurant-details-menu1">
            <img className="vector-664" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-134 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-243">
          <img className="loaded-baked-potato-soup-recipe-3-5-10" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group3-406">
          <Component363 text58={component363Props.text58} text59={component363Props.text59} />
          <Link to="/menu-detail3porkrib8">
            <img className="icon-check_mark-125" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail3porkrib9">
            <img className="icon-check_mark-126" src={iconCheck_Mark2} />
          </Link>
        </div>
        <img className="line-20-126" src={line20} />
        <Link to="/hanam-details-pl">
          <div className="group-25-120">
            <div className="overlap-group-1041">
              <div className="price-119 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-119 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib11;
