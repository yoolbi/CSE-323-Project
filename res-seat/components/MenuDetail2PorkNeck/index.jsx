import React from "react";
import { Link } from "react-router-dom";
import Component283 from "../Component283";
import Component24 from "../Component24";
import Component25 from "../Component25";
import Component20 from "../Component20";
import Component21 from "../Component21";
import Group26 from "../Group26";
import "./MenuDetail2PorkNeck.css";

function MenuDetail2PorkNeck(props) {
  const {
    hanamBbq,
    image13,
    theSavoryPorkBell,
    addSideMenu,
    line19,
    quantity,
    number,
    component283Props,
    component24Props,
    component251Props,
    component252Props,
    component253Props,
    component20Props,
    component21Props,
    group26Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-porkneck screen">
        <div className="flex-row-576">
          <Link to="/hanam-details-menu-pb">
            <img className="vector-782" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-155 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <img className="image-13" src={image13} />
        <div className="overlap-group4-273">
          <Component283
            porkBelly={component283Props.porkBelly}
            theSavoryPorkBell={component283Props.theSavoryPorkBell}
            className={component283Props.className}
          />
          <p className="the-savory-pork-bell-135 inter-thinitalic-thin-black-15px">{theSavoryPorkBell}</p>
        </div>
        <div className="add-side-menu-5 inter-semibolditalic-semi-bold-flamingo-28px">{addSideMenu}</div>
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
        <div className="overlap-group6-101">
          <div className="overlap-group5-188">
            <img className="line-19-15" src={line19} />
            <Component20 className={component20Props.className} />
          </div>
          <div className="quantity-5 inter-normal-black-18px">{quantity}</div>
          <Component21 className={component21Props.className} />
          <div className="overlap-group2-498">
            <div className="number-248 inter-normal-black-20px">{number}</div>
          </div>
        </div>
        <Group26 text4={group26Props.text4} />
      </div>
    </div>
  );
}

export default MenuDetail2PorkNeck;
