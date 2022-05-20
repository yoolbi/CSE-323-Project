import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import Component23 from "../Component23";
import "./MenuOrCart1.css";

function MenuOrCart1(props) {
  const {
    image8,
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
    iconCheck_Mark,
    sweetHealthyTast,
    addToCart,
    text18,
    hanamBbq,
    rectangle55,
    component23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-or-cart1 screen">
        <div className="overlap-group5-20">
          <img className="image-8-14" src={image8} />
          <div className="rectangle-40-2"></div>
          <img className="line-19-7" src={line19} />
          <div className="pumpkin-soup-8 inter-semi-bold-black-28px">{pumpkinSoup}</div>
          <div className="x15000-won-8 inter-semi-bold-black-20px">{x15000Won}</div>
          <div className="add-side-menu-6 inter-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="rectangle-45-2 border-1px-orange"></div>
          <div className="rectangle-48-18"></div>
          <div className="rectangle-46-2 border-1px-orange"></div>
          <div className="rectangle-47-2 border-1px-orange"></div>
          <div className="croutons-3 inter-medium-black-16px">Vegetable</div>
          <div className="parsley-3 inter-medium-black-16px">Fried Kimchi</div>
          <div className="baked-bacon-2 inter-medium-black-16px">Mushrooms</div>
          <div className="bread-stick-2 inter-medium-black-16px">Fried Rice</div>
          <div className="x200-won-8 arial">
            <span className="arial">{spanText1}</span>
            <span className="span1-75 inter-medium-black-16px">{spanText2}</span>
          </div>
          <div className="x100-won-8 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-75 inter-medium-black-16px">{spanText4}</span>
          </div>
          <div className="x500-won-2 arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-75 inter-medium-black-16px">{spanText6}</span>
          </div>
          <div className="x1000-won-2 arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-75 inter-medium-black-16px">{spanText8}</span>
          </div>
          <div className="quantity-6 inter-normal-black-18px">{quantity}</div>
          <Component20 />
          <Component21 />
          <div className="overlap-group2-16">
            <div className="number-33 inter-normal-black-20px">{number}</div>
          </div>
          <img className="icon-check_mark" src={iconCheck_Mark} />
          <p className="sweet-healthy-tast-3 inter-thin-black-15px">{sweetHealthyTast}</p>
          <div className="overlap-group3-21">
            <div className="add-to-cart-7 inter-extra-bold-white-20px">{addToCart}</div>
            <div className="text-18 inter-semi-bold-white-16px">{text18}</div>
          </div>
          <div className="hanam-bbq-13 inter-bold-flamingo-28px">{hanamBbq}</div>
          <Link to="/restaurant-details-menu1">
            <img className="vector-59" src="/img/vector-6@2x.png" />
          </Link>
          <img className="rectangle-55-2" src={rectangle55} />
          <Component23 className={component23Props.className} />
        </div>
      </div>
    </div>
  );
}

export default MenuOrCart1;
