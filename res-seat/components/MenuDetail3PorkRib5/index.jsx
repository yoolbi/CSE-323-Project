import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import "./MenuDetail3PorkRib5.css";

function MenuDetail3PorkRib5(props) {
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
      <div className="menu-detail3porkrib4 screen">
        <div className="flex-row-444">
          <Link to="/hanam-details-menu-pb">
            <img className="vector-304" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-92 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-185">
          <img className="loaded-baked-potato-soup-recipe-3-5-4" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group3-244">
          <Component362 text34={component362Props.text34} text35={component362Props.text35} />
          <Link to="/menu-detail3porkrib6">
            <img className="icon-check_mark-86" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-40" src={line20} />
        <Link to="/hanam-details-pb-pl">
          <div className="group-25-47">
            <div className="overlap-group-805">
              <div className="price-46 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-46 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib5;
