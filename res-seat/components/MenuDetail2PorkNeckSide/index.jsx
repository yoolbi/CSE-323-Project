import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import "./MenuDetail2PorkNeckSide.css";

function MenuDetail2PorkNeckSide(props) {
  const {
    hanamBbq,
    image14,
    porkNeck,
    theSavoryPorkNeckThatAllAgesLove,
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
    text346,
    component20Props,
    component21Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-porkneck-side screen">
        <div className="flex-col-471">
          <div className="flex-row-562">
            <Link to="/hanam-details-menu-pb">
              <img className="vector-777" src="/img/vector-6@2x.png" />
            </Link>
            <div className="hanam-bbq-152 inter-bold-flamingo-28px">{hanamBbq}</div>
          </div>
          <img className="image-14-17" src={image14} />
          <div className="overlap-group4-268">
            <div className="pork-neck-9 inter-semi-bold-black-28px">{porkNeck}</div>
            <p className="the-savory-pork-neck-that-all-ages-love inter-thinitalic-thin-black-15px">
              {theSavoryPorkNeckThatAllAgesLove}
            </p>
            <div className="x15000-won-7 inter-semi-bold-black-20px">{x15000Won}</div>
          </div>
          <div className="add-side-menu-4 inter-semibolditalic-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="flex-row-563">
            <div className="overlap-group5-185">
              <img className="vector-778" src={vector2} />
            </div>
            <div className="vegetable-4 inter-medium-black-16px">{vegetable}</div>
            <div className="x200-won-7 arial">
              <span className="arial">{spanText1}</span>
              <span className="span1-234 inter-medium-black-16px">{spanText2}</span>
            </div>
          </div>
        </div>
        <div className="flex-row-564">
          <div className="rectangle-4-6 border-1px-orange"></div>
          <div className="fried-kimchi-4 inter-medium-black-16px">{friedKimchi}</div>
          <div className="x100-won-7 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-234 inter-medium-black-16px">{spanText4}</span>
          </div>
        </div>
        <div className="flex-row-561">
          <div className="rectangle-4-6 border-1px-orange"></div>
          <div className="mushrooms-1 inter-medium-black-16px">{mushrooms}</div>
          <div className="x00-won-1 arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-234 inter-medium-black-16px">{spanText6}</span>
          </div>
        </div>
        <div className="flex-row-561">
          <div className="rectangle-4-6 border-1px-orange"></div>
          <div className="fried-rice-1 inter-medium-black-16px">{friedRice}</div>
          <div className="x00-won-1 arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-234 inter-medium-black-16px">{spanText8}</span>
          </div>
        </div>
        <div className="overlap-group7-68">
          <div className="overlap-group6-97">
            <img className="line-19-13" src={line19} />
            <Component20 className={component20Props.className} />
          </div>
          <div className="quantity-4 inter-normal-black-18px">{quantity}</div>
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-496">
            <div className="number-245 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Link to="/menu-or-cart2">
          <div className="group-26-12">
            <div className="overlap-group3-450">
              <div className="add-to-cart-138 inter-extra-bold-white-20px">{addToCart}</div>
              <div className="text-346 inter-semi-bold-white-16px">{text346}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2PorkNeckSide;
