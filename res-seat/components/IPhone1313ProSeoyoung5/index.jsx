import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component24 from "../Component24";
import Component25 from "../Component25";
import Component20 from "../Component20";
import Component21 from "../Component21";
import "./IPhone1313ProSeoyoung5.css";

function IPhone1313ProSeoyoung5(props) {
  const {
    aSoupShop,
    line7,
    image4,
    line18,
    addSideMenu,
    line19,
    quantity,
    number,
    addToCart,
    text30,
    component28Props,
    component24Props,
    component251Props,
    component252Props,
    component253Props,
    component20Props,
    component21Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-5 screen">
        <div className="flex-row-92">
          <Link to="/restaurant-details-menu1">
            <img className="vector-171" src="/img/vector-4@2x.png" />
          </Link>
          <div className="a-soup-shop-44 inter-bold-black-28px">{aSoupShop}</div>
        </div>
        <img className="line-7-3" src={line7} />
        <img className="image-4" src={image4} />
        <img className="line-18-4" src={line18} />
        <Component28
          porkBelly={component28Props.porkBelly}
          theSavoryPorkBell={component28Props.theSavoryPorkBell}
          className={component28Props.className}
        />
        <div className="add-side-menu-10 inter-semi-bold-flamingo-28px">{addSideMenu}</div>
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
        <div className="overlap-group5-27">
          <div className="overlap-group4-36">
            <img className="line-19-13" src={line19} />
            <Component20 className={component20Props.className} />
            <Component21 className={component21Props.className} />
          </div>
          <div className="quantity-10 inter-normal-black-18px">{quantity}</div>
          <div className="overlap-group2-28">
            <div className="number-39 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Link to="/menu-or-cart1">
          <div className="group-25-3">
            <div className="overlap-group3-35">
              <div className="add-to-cart-10 inter-extra-bold-white-20px">{addToCart}</div>
              <div className="text-30 inter-semi-bold-white-16px">{text30}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung5;
