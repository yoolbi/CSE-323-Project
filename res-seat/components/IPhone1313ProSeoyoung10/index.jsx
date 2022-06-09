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
    text370,
    component20Props,
    component21Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-10 screen">
        <div className="flex-col-491">
          <div className="flex-row-616">
            <Link to="/menu-detail1porkbelly2">
              <img className="vector-882" src="/img/vector-4@2x.png" />
            </Link>
            <div className="a-soup-shop-116 inter-bold-black-28px">{aSoupShop}</div>
          </div>
          <img className="line-7-52" src={line7} />
          <img className="image-3-50" src={image3} />
          <img className="line-18-12" src={line18} />
          <div className="overlap-group5-201">
            <div className="pumpkin-soup-13 inter-semi-bold-black-28px">{pumpkinSoup}</div>
            <p className="sweet-healthy-tast-5 inter-thinitalic-thin-black-15px">{sweetHealthyTast}</p>
            <div className="x15000-won-11 inter-semi-bold-black-20px">{x15000Won}</div>
          </div>
          <div className="add-side-menu-11 inter-semibolditalic-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="flex-row-617">
            <div className="overlap-group4-290">
              <img className="vector-883" src={vector2} />
            </div>
            <div className="croutons-5 inter-medium-black-16px">{croutons}</div>
            <div className="x200-won-11 arial">
              <span className="arial">{spanText1}</span>
              <span className="span1-266 inter-medium-black-16px">{spanText2}</span>
            </div>
          </div>
        </div>
        <div className="flex-row-618">
          <div className="rectangle-4-8 border-1px-orange"></div>
          <div className="parsley-5 inter-medium-black-16px">{parsley}</div>
          <div className="x100-won-11 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-266 inter-medium-black-16px">{spanText4}</span>
          </div>
        </div>
        <div className="flex-row-615">
          <div className="rectangle-4-8 border-1px-orange"></div>
          <div className="baked-bacon-4 inter-medium-black-16px">{bakedBacon}</div>
          <div className="x00-won-3 arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-266 inter-medium-black-16px">{spanText6}</span>
          </div>
        </div>
        <div className="flex-row-615">
          <div className="rectangle-4-8 border-1px-orange"></div>
          <div className="bread-stick-4 inter-medium-black-16px">{breadStick}</div>
          <div className="x00-won-3 arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-266 inter-medium-black-16px">{spanText8}</span>
          </div>
        </div>
        <div className="overlap-group7-82">
          <div className="overlap-group6-111">
            <img className="line-19-25" src={line19} />
            <Component20 className={component20Props.className} />
            <Component21 className={component21Props.className} />
          </div>
          <div className="quantity-11 inter-normal-black-18px">{quantity}</div>
          <div className="overlap-group2-517">
            <div className="number-260 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Link to="/menu-or-cart1">
          <div className="group-26-18">
            <div className="overlap-group3-469">
              <div className="add-to-cart-143 inter-extra-bold-white-20px">{addToCart}</div>
              <div className="text-370 inter-semi-bold-white-16px">{text370}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung10;
