import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import "./MenuDetail3PorkLibSide.css";

function MenuDetail3PorkLibSide(props) {
  const {
    hanamBbq,
    loadedBakedPotatoSoupRecipe35,
    porkLib,
    theSavoryPorkLibThatAllAgesLove,
    x15000Won,
    addSideMenu,
    vector2,
    vegetable,
    spanText1,
    spanText2,
    friedKimchi,
    spanText3,
    spanText4,
    mushrooms,
    spanText5,
    spanText6,
    friedRice,
    spanText7,
    spanText8,
    line19,
    quantity,
    number,
    addToCart,
    text337,
    component20Props,
    component21Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-porklib-side screen">
        <div className="flex-col-465">
          <div className="flex-row-546">
            <Link to="/restaurant-details-menu3">
              <img className="vector-766" src="/img/vector-6@2x.png" />
            </Link>
            <div className="hanam-bbq-147 inter-bold-flamingo-28px">{hanamBbq}</div>
          </div>
          <img className="loaded-baked-potato-soup-recipe-3-5-13" src={loadedBakedPotatoSoupRecipe35} />
          <div className="overlap-group5-179">
            <div className="pork-lib-7 inter-semi-bold-black-28px">{porkLib}</div>
            <p className="the-savory-pork-lib-that-all-ages-love inter-thinitalic-thin-black-15px">
              {theSavoryPorkLibThatAllAgesLove}
            </p>
            <div className="x15000-won-1 inter-semi-bold-black-20px">{x15000Won}</div>
          </div>
          <div className="add-side-menu-1 inter-semibolditalic-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="flex-row-547">
            <div className="overlap-group6-91">
              <img className="vector-767" src={vector2} />
            </div>
            <div className="vegetable inter-medium-black-16px">{vegetable}</div>
            <div className="x200-won-1 arial">
              <span className="arial">{spanText1}</span>
              <span className="span1-224 inter-medium-black-16px">{spanText2}</span>
            </div>
          </div>
        </div>
        <div className="flex-row-548">
          <div className="rectangle-4-1 border-1px-orange"></div>
          <div className="fried-kimchi inter-medium-black-16px">{friedKimchi}</div>
          <div className="x100-won-1 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-224 inter-medium-black-16px">{spanText4}</span>
          </div>
        </div>
        <div className="flex-row-545">
          <div className="rectangle-4-1 border-1px-orange"></div>
          <div className="mushrooms inter-medium-black-16px">{mushrooms}</div>
          <div className="x00-won arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-224 inter-medium-black-16px">{spanText6}</span>
          </div>
        </div>
        <div className="flex-row-545">
          <div className="rectangle-4-1 border-1px-orange"></div>
          <div className="fried-rice inter-medium-black-16px">{friedRice}</div>
          <div className="x00-won arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-224 inter-medium-black-16px">{spanText8}</span>
          </div>
        </div>
        <div className="overlap-group7-61">
          <div className="overlap-group4-262">
            <img className="line-19-10" src={line19} />
            <Component20 className={component20Props.className} />
          </div>
          <div className="quantity-1 inter-normal-black-18px">{quantity}</div>
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-490">
            <div className="number-239 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Link to="/menu-or-cart3">
          <div className="group-26-8">
            <div className="overlap-group3-442">
              <div className="add-to-cart-133 inter-extra-bold-white-20px">{addToCart}</div>
              <div className="text-337 inter-semi-bold-white-16px">{text337}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3PorkLibSide;
