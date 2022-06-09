import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component423 from "../Component423";
import Component422 from "../Component422";
import "./MenuDetail3BanhmiBoth3.css";

function MenuDetail3BanhmiBoth3(props) {
  const {
    image211,
    price1,
    addToCart1,
    uncles1,
    line201,
    vector2,
    uncles2,
    image212,
    line202,
    price2,
    addToCart2,
    iconCheck_Mark,
    component281Props,
    component282Props,
    component422Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3banhmiboth2 screen">
        <div className="overlap-group4-218">
          <img className="image-21-12" src={image211} />
          <div className="overlap-group-928">
            <div className="price-101 inter-semi-bold-white-20px">{price1}</div>
            <div className="add-to-cart-101 inter-extra-bold-white-25px">{addToCart1}</div>
          </div>
          <img className="vector-473" src="/img/vector-6@2x.png" />
          <div className="uncles-90 inter-bold-flamingo-28px">{uncles1}</div>
          <img className="line-20-103" src={line201} />
          <Component28
            porkBelly={component281Props.porkBelly}
            x15200Won={component281Props.x15200Won}
            theSavoryPorkBell={component281Props.theSavoryPorkBell}
            className={component281Props.className}
          />
          <div className="menu-detail3_-banhmi_-sprite-1">
            <div className="flex-row-507">
              <Link to="/uncle-s-details-bc">
                <img className="vector-474" src={vector2} />
              </Link>
              <div className="uncles-91 inter-bold-flamingo-28px">{uncles2}</div>
            </div>
            <div className="overlap-group2-421">
              <img className="image-21-13" src={image212} />
              <Component28
                porkBelly={component282Props.porkBelly}
                x15200Won={component282Props.x15200Won}
                theSavoryPorkBell={component282Props.theSavoryPorkBell}
                className={component282Props.className}
              />
            </div>
            <Component423 />
            <img className="line-20-104" src={line202} />
            <Link to="/uncle-s-details-bc-bm">
              <div className="group-25-102">
                <div className="overlap-group-929">
                  <div className="price-101 inter-semi-bold-white-20px">{price2}</div>
                  <div className="add-to-cart-101 inter-extra-bold-white-25px">{addToCart2}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group3-341">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail3banhmisprite2">
              <img className="icon-check_mark-114" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiBoth3;
