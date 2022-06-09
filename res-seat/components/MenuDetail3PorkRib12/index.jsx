import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail3PorkRib12.css";

function MenuDetail3PorkRib12(props) {
  const {
    hanamBbq,
    loadedBakedPotatoSoupRecipe35,
    line20,
    price,
    addToCart,
    component28Props,
    component364Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3porkrib11 screen">
        <div className="flex-row-530">
          <Link to="/restaurant-details-menu1">
            <img className="vector-665" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-135 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-407">
          <img className="loaded-baked-potato-soup-recipe-3-5-11" src={loadedBakedPotatoSoupRecipe35} />
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
        <img className="line-20-127" src={line20} />
        <Link to="/hanam-details-pl">
          <div className="group-25-121">
            <div className="overlap-group-1042">
              <div className="price-120 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-120 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib12;
