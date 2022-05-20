import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component24 from "../Component24";
import Component25 from "../Component25";
import Component20 from "../Component20";
import Component21 from "../Component21";
import Group262 from "../Group262";
import "./MenuDetail3PorkLib.css";

function MenuDetail3PorkLib(props) {
  const {
    hanamBbq,
    loadedBakedPotatoSoupRecipe34,
    addSideMenu,
    line19,
    quantity,
    number,
    component28Props,
    component24Props,
    component251Props,
    component252Props,
    component253Props,
    component20Props,
    component21Props,
    group262Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-porklib screen">
        <div className="flex-row-9">
          <Link to="/restaurant-details-menu3">
            <img className="vector-16" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-2 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <img className="loaded-baked-potato-soup-recipe-3-4" src={loadedBakedPotatoSoupRecipe34} />
        <Component28 porkBelly={component28Props.porkBelly} theSavoryPorkBell={component28Props.theSavoryPorkBell} />
        <div className="add-side-menu-2 inter-semi-bold-flamingo-28px">{addSideMenu}</div>
        <Component24 vegetable={component24Props.vegetable} />
        <Component25 friedKimchi={component251Props.friedKimchi} spanText2={component251Props.spanText2} />
        <Component25
          friedKimchi={component252Props.friedKimchi}
          spanText2={component252Props.spanText2}
          className={component252Props.className}
        />
        <Component25
          friedKimchi={component253Props.friedKimchi}
          spanText2={component253Props.spanText2}
          className={component253Props.className}
        />
        <div className="overlap-group5-4">
          <div className="overlap-group4-6">
            <img className="line-19-2" src={line19} />
            <Component20 className={component20Props.className} />
          </div>
          <div className="quantity-2 inter-normal-black-18px">{quantity}</div>
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-4">
            <div className="number-4 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Group262 text4={group262Props.text4} />
      </div>
    </div>
  );
}

export default MenuDetail3PorkLib;
