import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component24 from "../Component24";
import Component25 from "../Component25";
import Component20 from "../Component20";
import Component21 from "../Component21";
import Group262 from "../Group262";
import "./MenuDetail1PorkBelly.css";

function MenuDetail1PorkBelly(props) {
  const {
    hanamBbq,
    image8,
    addSideMenu,
    line19,
    quantity,
    number,
    component28Props,
    component24Props,
    component251Props,
    component252Props,
    component253Props,
    component20Props,
    component21Props,
    group262Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1-porkbelly screen">
        <div className="flex-row-83">
          <Link to="/restaurant-details-menu1">
            <img className="vector-140" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-20 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <img className="image-8-17" src={image8} />
        <Component28
          porkBelly={component28Props.porkBelly}
          theSavoryPorkBell={component28Props.theSavoryPorkBell}
          className={component28Props.className}
        />
        <div className="add-side-menu-8 inter-semi-bold-flamingo-28px">{addSideMenu}</div>
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
        <div className="overlap-group5-25">
          <div className="overlap-group4-32">
            <img className="line-19-11" src={line19} />
            <Component20 className={component20Props.className} />
          </div>
          <div className="quantity-8 inter-normal-black-18px">{quantity}</div>
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-25">
            <div className="number-37 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Group262 text4={group262Props.text4} />
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly;
