import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import Component23 from "../Component23";
import "./MenuOrCart3.css";

function MenuOrCart3(props) {
  const {
    loadedBakedPotatoSoupRecipe35,
    line19,
    pumpkinSoup,
    x15000Won,
    addSideMenu,
    croutons,
    parsley,
    bakedBacon,
    breadStick,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    quantity,
    number,
    sweetHealthyTast,
    addToCart,
    text1,
    hanamBbq,
    vector2,
    rectangle55,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-or-cart3 screen">
        <div className="overlap-group5">
          <img className="loaded-baked-potato-soup-recipe-3-5" src={loadedBakedPotatoSoupRecipe35} />
          <div className="rectangle-40"></div>
          <img className="line-19" src={line19} />
          <div className="pumpkin-soup inter-semi-bold-black-28px">{pumpkinSoup}</div>
          <div className="x15000-won inter-semi-bold-black-20px">{x15000Won}</div>
          <div className="add-side-menu inter-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="rectangle-45 border-1px-orange"></div>
          <div className="rectangle-48"></div>
          <div className="rectangle-46 border-1px-orange"></div>
          <div className="rectangle-47 border-1px-orange"></div>
          <div className="croutons inter-medium-black-16px">Vegetable</div>
          <div className="parsley inter-medium-black-16px">Fried Kimchi</div>
          <div className="baked-bacon inter-medium-black-16px">Mushrooms</div>
          <div className="bread-stick inter-medium-black-16px">Fried Rice</div>
          <div className="x200-won arial">
            <span className="arial">{spanText1}</span>
            <span className="span1 inter-medium-black-16px">{spanText2}</span>
          </div>
          <div className="x100-won arial">
            <span className="arial">{spanText3}</span>
            <span className="span1 inter-medium-black-16px">{spanText4}</span>
          </div>
          <div className="x500-won arial">
            <span className="arial">{spanText5}</span>
            <span className="span1 inter-medium-black-16px">{spanText6}</span>
          </div>
          <div className="x1000-won arial">
            <span className="arial">{spanText7}</span>
            <span className="span1 inter-medium-black-16px">{spanText8}</span>
          </div>
          <div className="quantity inter-normal-black-18px">{quantity}</div>
          <Component20 />
          <Component21 />
          <div className="overlap-group2">
            <div className="number inter-normal-black-20px">{number}</div>
          </div>
          <img className="vector-5" src="/img/vector-3@2x.png" />
          <p className="sweet-healthy-tast inter-thin-black-15px">{sweetHealthyTast}</p>
          <div className="overlap-group3">
            <div className="add-to-cart inter-extra-bold-white-20px">{addToCart}</div>
            <div className="text-1 inter-semi-bold-white-16px">{text1}</div>
          </div>
          <div className="hanam-bbq inter-bold-flamingo-28px">{hanamBbq}</div>
          <Link to="/restaurant-details-menu3">
            <img className="vector-6" src={vector2} />
          </Link>
          <img className="rectangle-55" src={rectangle55} />
          <Component23 />
        </div>
      </div>
    </div>
  );
}

export default MenuOrCart3;
