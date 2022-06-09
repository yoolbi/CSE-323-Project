import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import "./MenuDetail3PorkRib10.css";

function MenuDetail3PorkRib10(props) {
  const {
    hanamBbq,
    loadedBakedPotatoSoupRecipe35,
    iconCheck_Mark,
    line20,
    price,
    addToCart,
    component28Props,
    component362Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3porkrib9 screen">
        <div className="flex-row-513">
          <Link to="/restaurant-details-menu1">
            <img className="vector-544" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-125 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-229">
          <img className="loaded-baked-potato-soup-recipe-3-5-9" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group3-365">
          <Component362 text34={component362Props.text34} text35={component362Props.text35} />
          <Link to="/menu-detail3porkrib11">
            <img className="icon-check_mark-120" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-110" src={line20} />
        <Link to="/hanam-details-pl">
          <div className="group-25-106">
            <div className="overlap-group-979">
              <div className="price-105 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-105 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib10;
