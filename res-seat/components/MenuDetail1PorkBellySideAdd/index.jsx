import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import "./MenuDetail1PorkBellySideAdd.css";

function MenuDetail1PorkBellySideAdd(props) {
  const {
    hanamBbq,
    line18,
    line7,
    image3,
    image8,
    porkBelly,
    theSavoryPorkBell,
    x15000Won,
    addSideMenu,
    iconCheck_Mark,
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
    text356,
    component20Props,
    component21Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1-porkbelly-sideadd screen">
        <div className="flex-col-483">
          <div className="flex-row-592">
            <Link to="/restaurant-details-menu1">
              <img className="vector-831" src="/img/vector-6@2x.png" />
            </Link>
            <div className="hanam-bbq-159 inter-bold-flamingo-28px">{hanamBbq}</div>
          </div>
          <div className="overlap-group7-75">
            <img className="line-18-8" src={line18} />
            <img className="line-7-49" src={line7} />
            <img className="image-3-48" src={image3} />
            <img className="image-8-119" src={image8} />
          </div>
          <div className="overlap-group5-193">
            <div className="pork-belly-190 inter-semi-bold-black-28px">{porkBelly}</div>
            <p className="the-savory-pork-bell-136 inter-thinitalic-thin-black-15px">{theSavoryPorkBell}</p>
            <div className="x15000-won-9 inter-semi-bold-black-20px">{x15000Won}</div>
          </div>
          <div className="add-side-menu-7 inter-semibolditalic-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="flex-row-593">
            <div className="overlap-group4-279">
              <img className="icon-check_mark-134" src={iconCheck_Mark} />
            </div>
            <div className="vegetable-5 inter-medium-black-16px">{vegetable}</div>
            <div className="x200-won-9 arial">
              <span className="arial">{spanText1}</span>
              <span className="span1-256 inter-medium-black-16px">{spanText2}</span>
            </div>
          </div>
        </div>
        <div className="flex-row-594">
          <div className="rectangle-4-7 border-1px-orange"></div>
          <div className="fried-kimchi-5 inter-medium-black-16px">{friedKimchi}</div>
          <div className="x100-won-9 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-256 inter-medium-black-16px">{spanText4}</span>
          </div>
        </div>
        <div className="flex-row-591">
          <div className="rectangle-4-7 border-1px-orange"></div>
          <div className="mushrooms-2 inter-medium-black-16px">{mushrooms}</div>
          <div className="x00-won-2 arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-256 inter-medium-black-16px">{spanText6}</span>
          </div>
        </div>
        <div className="flex-row-591">
          <div className="rectangle-4-7 border-1px-orange"></div>
          <div className="fried-rice-2 inter-medium-black-16px">{friedRice}</div>
          <div className="x00-won-2 arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-256 inter-medium-black-16px">{spanText8}</span>
          </div>
        </div>
        <div className="overlap-group8-51">
          <div className="overlap-group6-103">
            <img className="line-19-19" src={line19} />
            <Component20 className={component20Props.className} />
          </div>
          <div className="quantity-7 inter-normal-black-18px">{quantity}</div>
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-507">
            <div className="number-252 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Link to="/menu-or-cart1">
          <div className="group-26-13">
            <div className="overlap-group3-459">
              <div className="add-to-cart-140 inter-extra-bold-white-20px">{addToCart}</div>
              <div className="text-356 inter-semi-bold-white-16px">{text356}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBellySideAdd;
