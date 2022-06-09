import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import "./MenuDetail3PorkRib3.css";

function MenuDetail3PorkRib3(props) {
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
      <div className="menu-detail3porkrib2 screen">
        <div className="flex-row-419">
          <Link to="/hanam-details-pb-pn">
            <img className="vector-280" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-86 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-176">
          <img className="loaded-baked-potato-soup-recipe-3-5-2" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group3-220">
          <Component363 text58={component363Props.text58} text59={component363Props.text59} />
          <Link to="/menu-detail3-porkrib-11">
            <img className="icon-check_mark-51" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail3porkrib">
            <img className="icon-check_mark-52" src={iconCheck_Mark2} />
          </Link>
        </div>
        <img className="line-20-22" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-17">
            <div className="overlap-group-743">
              <div className="price-16 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-16 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib3;
