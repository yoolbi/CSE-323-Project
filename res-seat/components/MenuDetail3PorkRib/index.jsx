import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import "./MenuDetail3PorkRib.css";

function MenuDetail3PorkRib(props) {
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
      <div className="menu-detail3-porkrib-11 screen">
        <div className="flex-row-362">
          <Link to="/hanam-details-pb-pn">
            <img className="vector-245" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-78 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-181">
          <img className="loaded-baked-potato-soup-recipe-3-5" src={loadedBakedPotatoSoupRecipe35} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group4-147">
          <Component36 text32={component36Props.text32} text33={component36Props.text33} />
          <Link to="/menu-detail3porkrib3">
            <img className="icon-check_mark" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-6" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-1">
            <div className="overlap-group-644">
              <div className="price inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkRib;
