import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import Component23 from "../Component23";
import "./MenuOrCart2.css";

function MenuOrCart2(props) {
  const {
    image14,
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
    text345,
    hanamBbq,
    vector2,
    rectangle55,
    component20Props,
    component21Props,
    component23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-or-cart2 screen">
        <div className="overlap-group5-184">
          <img className="image-14-16" src={image14} />
          <div className="rectangle-40-1"></div>
          <img className="line-19-12" src={line19} />
          <div className="pumpkin-soup-7 inter-semi-bold-black-28px">{pumpkinSoup}</div>
          <div className="x15000-won-6 inter-semi-bold-black-20px">{x15000Won}</div>
          <div className="add-side-menu-3 inter-semibolditalic-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="rectangle-45-1 border-1px-orange"></div>
          <div className="rectangle-48-17"></div>
          <div className="rectangle-46-1 border-1px-orange"></div>
          <div className="rectangle-47-1 border-1px-orange"></div>
          <div className="croutons-2 inter-medium-black-16px">{croutons}</div>
          <div className="parsley-2 inter-medium-black-16px">{parsley}</div>
          <div className="baked-bacon-1 inter-medium-black-16px">{bakedBacon}</div>
          <div className="bread-stick-1 inter-medium-black-16px">{breadStick}</div>
          <div className="x200-won-6 arial">
            <span className="arial">{spanText1}</span>
            <span className="span1-233 inter-medium-black-16px">{spanText2}</span>
          </div>
          <div className="x100-won-6 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-233 inter-medium-black-16px">{spanText4}</span>
          </div>
          <div className="x500-won-1 arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-233 inter-medium-black-16px">{spanText6}</span>
          </div>
          <div className="x1000-won-1 arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-233 inter-medium-black-16px">{spanText8}</span>
          </div>
          <div className="quantity-3 inter-normal-black-18px">{quantity}</div>
          <Component20 className={component20Props.className} />
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-495">
            <div className="number-244 inter-normal-black-20px">{number}</div>
          </div>
          <img className="vector-775" src="/img/vector-3@2x.png" />
          <p className="sweet-healthy-tast-2 inter-thinitalic-thin-black-15px">{sweetHealthyTast}</p>
          <div className="overlap-group3-449">
            <div className="add-to-cart-137 inter-extra-bold-white-20px">{addToCart}</div>
            <div className="text-345 inter-semi-bold-white-16px">{text345}</div>
          </div>
          <div className="hanam-bbq-151 inter-bold-flamingo-28px">{hanamBbq}</div>
          <Link to="/hanam-details-menu-pb">
            <img className="vector-776" src={vector2} />
          </Link>
          <img className="rectangle-55-1" src={rectangle55} />
          <Component23 className={component23Props.className} />
        </div>
      </div>
    </div>
  );
}

export default MenuOrCart2;
