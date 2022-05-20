import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import "./IPhone1313ProSeoyoung10.css";

function IPhone1313ProSeoyoung10(props) {
  const {
    aSoupShop,
    line7,
    image3,
    line18,
    pumpkinSoup,
    sweetHealthyTast,
    x15000Won,
    addSideMenu,
    vector2,
    croutons,
    spanText1,
    spanText2,
    parsley,
    spanText3,
    spanText4,
    bakedBacon,
    spanText5,
    spanText6,
    breadStick,
    spanText7,
    spanText8,
    line19,
    quantity,
    number,
    addToCart,
    text39,
    component20Props,
    component21Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-10 screen">
        <div className="flex-col-68">

            <Link to="/menu-detail1-porkbelly">
              <img className="vector-190" src="/img/vector-4@2x.png" />
            </Link>

          <img className="line-7-4" src={line7} />
          <img className="image-3-16" src={image3} />
          <img className="line-18-6" src={line18} />
          <div className="overlap-group5-33">
            <div className="pumpkin-soup-13 inter-semi-bold-black-28px">{pumpkinSoup}</div>
            <p className="sweet-healthy-tast-5 inter-thin-black-15px">{sweetHealthyTast}</p>
            <div className="x15000-won-11 inter-semi-bold-black-20px">{x15000Won}</div>
          </div>
          <div className="add-side-menu-11 inter-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="flex-row-104">
            <div className="overlap-group6-30">
              <img className="vector-191" src={vector2} />
            </div>
            <div className="croutons-5 inter-medium-black-16px">Vegetable</div>
            <div className="x200-won-11 arial">
              <span className="arial">{spanText1}</span>
              <span className="span1-105 inter-medium-black-16px">{spanText2}</span>
            </div>
          </div>
        </div>
        <div className="flex-row-105">
          <div className="rectangle-4-7 border-1px-orange"></div>
          <div className="parsley-5 inter-medium-black-16px">{parsley}</div>
          <div className="x100-won-11 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-105 inter-medium-black-16px">{spanText4}</span>
          </div>
        </div>
        <div className="flex-row-102">
          <div className="rectangle-4-7 border-1px-orange"></div>
          <div className="baked-bacon-4 inter-medium-black-16px">{bakedBacon}</div>
          <div className="x00-won-3 arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-105 inter-medium-black-16px">{spanText6}</span>
          </div>
        </div>
        <div className="flex-row-102">
          <div className="rectangle-4-7 border-1px-orange"></div>
          <div className="bread-stick-4 inter-medium-black-16px">{breadStick}</div>
          <div className="x00-won-3 arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-105 inter-medium-black-16px">{spanText8}</span>
          </div>
        </div>
        <div className="overlap-group7-32">
          <div className="overlap-group4-42">
            <img className="line-19-16" src={line19} />
            <Component20 className={component20Props.className} />
            <Component21 className={component21Props.className} />
          </div>
          <div className="quantity-11 inter-normal-black-18px">{quantity}</div>
          <div className="overlap-group2-33">
            <div className="number-44 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Link to="/menu-or-cart1">
          <div className="group-26-10">
            <div className="overlap-group3-40">
              <div className="add-to-cart-11 inter-extra-bold-white-20px">{addToCart}</div>
              <div className="text-39 inter-semi-bold-white-16px">{text39}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung10;
