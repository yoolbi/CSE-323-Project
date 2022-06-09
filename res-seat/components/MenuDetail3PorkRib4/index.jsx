import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail3PorkRib4.css";

function MenuDetail3PorkRib4(props) {
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
      <div className="menu-detail3porkrib3 screen">
        <div className="flex-row-420">
          <Link to="/hanam-details-pb-pn">
            <img className="vector-281" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-87 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-221">
          <img className="loaded-baked-potato-soup-recipe-3-5-3" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364 text86={component364Props.text86} text87={component364Props.text87} />
        <img className="line-20-23" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-18">
            <div className="overlap-group-768">
              <div className="price-17 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-17 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib4;
