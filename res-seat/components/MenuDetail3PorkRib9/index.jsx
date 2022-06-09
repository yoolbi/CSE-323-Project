import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import "./MenuDetail3PorkRib9.css";

function MenuDetail3PorkRib9(props) {
  const {
    hanamBbq,
    loadedBakedPotatoSoupRecipe35,
    iconCheck_Mark,
    line20,
    price,
    addToCart,
    component28Props,
    component36Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3porkrib8 screen">
        <div className="flex-row-512">
          <Link to="/restaurant-details-menu1">
            <img className="vector-537" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-124 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-362">
          <img className="loaded-baked-potato-soup-recipe-3-5-8" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group4-228">
          <Component36 text32={component36Props.text32} text33={component36Props.text33} />
          <Link to="/menu-detail3porkrib11">
            <img className="icon-check_mark-119" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-109" src={line20} />
        <Link to="/hanam-details-pl">
          <div className="group-25-105">
            <div className="overlap-group-973">
              <div className="price-104 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-104 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib9;
