import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import "./MenuDetail3PorkRib2.css";

function MenuDetail3PorkRib2(props) {
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
      <div className="menu-detail3porkrib screen">
        <div className="flex-row-368">
          <Link to="/hanam-details-pb-pn">
            <img className="vector-246" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-79 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-184">
          <img className="loaded-baked-potato-soup-recipe-3-5-1" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group4-150">
          <Component362 text34={component362Props.text34} text35={component362Props.text35} />
          <Link to="/menu-detail3porkrib3">
            <img className="icon-check_mark-1" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-7" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-2">
            <div className="overlap-group-671">
              <div className="price-1 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-1 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib2;
