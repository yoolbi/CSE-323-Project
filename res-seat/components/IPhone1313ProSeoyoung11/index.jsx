import React from "react";
import { Link } from "react-router-dom";
import Component20 from "../Component20";
import Component21 from "../Component21";
import Component23 from "../Component23";
import "./IPhone1313ProSeoyoung11.css";

function IPhone1313ProSeoyoung11(props) {
  const {
    line18,
    line19,
    pumpkinSoup,
    x15000Won,
    aSoupShop,
    line7,
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
    image3,
    sweetHealthyTast,
    addToCart,
    text29,
    vector2,
    rectangle55,
    component20Props,
    component21Props,
    component23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-11 screen">
        <div className="overlap-group5-26">
          <div className="rectangle-40-3"></div>
          <img className="line-18-3" src={line18} />
          <img className="line-19-12" src={line19} />
          <div className="pumpkin-soup-9 inter-semi-bold-black-28px">{pumpkinSoup}</div>
          <div className="x15000-won-10 inter-semi-bold-black-20px">{x15000Won}</div>
          <div className="a-soup-shop-43 inter-bold-black-28px">{aSoupShop}</div>
          <img className="line-7-2" src={line7} />
          <div className="add-side-menu-9 inter-semi-bold-flamingo-28px">{addSideMenu}</div>
          <div className="rectangle-45-3 border-1px-orange"></div>
          <div className="rectangle-48-19"></div>
          <div className="rectangle-46-3 border-1px-orange"></div>
          <div className="rectangle-47-3 border-1px-orange"></div>
          <div className="croutons-4 inter-medium-black-16px">Vegetable</div>
          <div className="parsley-4 inter-medium-black-16px">Fried Kimchi</div>
          <div className="baked-bacon-3 inter-medium-black-16px">Mushrooms</div>
          <div className="bread-stick-3 inter-medium-black-16px">Fried Rice</div>
          <div className="x200-won-10 arial">
            <span className="arial">{spanText1}</span>
            <span className="span1-99 inter-medium-black-16px">{spanText2}</span>
          </div>
          <div className="x100-won-10 arial">
            <span className="arial">{spanText3}</span>
            <span className="span1-99 inter-medium-black-16px">{spanText4}</span>
          </div>
          <div className="x500-won-3 arial">
            <span className="arial">{spanText5}</span>
            <span className="span1-99 inter-medium-black-16px">{spanText6}</span>
          </div>
          <div className="x1000-won-3 arial">
            <span className="arial">{spanText7}</span>
            <span className="span1-99 inter-medium-black-16px">{spanText8}</span>
          </div>
          <div className="quantity-9 inter-normal-black-18px">{quantity}</div>
          <Component20 className={component20Props.className} />
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-27">
            <div className="number-38 inter-normal-black-20px">{number}</div>
          </div>
          <img className="image-3-15" src={image3} />
          <img className="vector-169" src="/img/vector-3@2x.png" />
          <p className="sweet-healthy-tast-4 inter-thin-black-15px">{sweetHealthyTast}</p>
          <div className="overlap-group3-34">
            <div className="add-to-cart-9 inter-extra-bold-white-20px">{addToCart}</div>
            <div className="text-29 inter-semi-bold-white-16px">{text29}</div>
          </div>
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-170" src={vector2} />
          </Link>
          <img className="rectangle-55-3" src={rectangle55} />
          <Component23 className={component23Props.className} />
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung11;
