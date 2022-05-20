import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group11 from "../Group11";
import Group17 from "../Group17";
import "./IPhone1313ProHaEunPark5.css";

function IPhone1313ProHaEunPark5(props) {
  const {
    menu,
    shoppingCart,
    loadedBakedPotatoSoupRecipe32,
    addMoreMenu,
    total,
    x45200Won,
    weAre,
    number,
    people,
    complePreOrder,
    mins,
    select,
    lessThan1,
    lessThan5,
    lessThan10,
    lessThan15,
    wellBeIn,
    component131Props,
    component132Props,
    component133Props,
    group111Props,
    group112Props,
    group113Props,
    group17Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-ha-eun-park-4 screen">
        <div className="flex-col-77">
          <div className="flex-row-128">
            <img className="arrow-back-9" src="/img/arrow-back@2x.svg" />
            <div className="menu-22 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-20" src="/img/line-1@2x.svg" />
          <div className="shopping-cart-9 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-20" src="/img/line-1@2x.svg" />
          <Component13
            pumkinSoup={component131Props.pumkinSoup}
            image8={component131Props.image8}
            x15200Won={component131Props.x15200Won}
            className={component131Props.className}
          />
          <Component13
            pumkinSoup={component132Props.pumkinSoup}
            image8={component132Props.image8}
            x15200Won={component132Props.x15200Won}
            className={component132Props.className}
          />
          <div className="overlap-group6-38">
            <Component13
              pumkinSoup={component133Props.pumkinSoup}
              image8={component133Props.image8}
              x15200Won={component133Props.x15200Won}
              className={component133Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-2-6" src={loadedBakedPotatoSoupRecipe32} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-9">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-9 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-129 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-9">{total}</div>
            <div className="x45200-won-2">{x45200Won}</div>
          </div>
          <img className="line-5-20" src="/img/line-5@2x.svg" />
        </div>
        <div className="flex-row-130">
          <div className="we-are-9 applesdgothicneob00-regular-normal-black-25px">{weAre}</div>
          <div className="group-13-11">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <div className="overlap-group-125">
              <div className="group-9-11"></div>
              <div className="number-51 applesdgothicneob00-regular-normal-black-23px">{number}</div>
            </div>
            <Group11 src={group113Props.src} className={group113Props.className} />
          </div>
          <div className="people-9 applesdgothicneob00-regular-normal-black-25px">{people}</div>
        </div>
        <div className="overlap-group7-38">
          <div className="overlap-group5-41">
            <Link to="/completed-preorder-home">
              <div className="group-28-7">
                <div className="overlap-group-126">
                  <div className="comple-pre-order applesdgothicneob00-regular-normal-flamingo-23px">
                    {complePreOrder}
                  </div>
                </div>
              </div>
            </Link>
            <div className="group-11-17 border-1px-flamingo"></div>
            <div className="mins-9 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-10" src="/img/line-6@2x.svg" />
            <img className="arrow-drop-down-13" src="/img/arrow-drop-down@2x.svg" />
            <div className="select-9 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group4-48 inter-extra-bold-black-15px">
              <Group17
                line6={group17Props.line6}
                line7={group17Props.line7}
                line8={group17Props.line8}
                className={group17Props.className}
              />
              <div className="less-than-1-1">{lessThan1}</div>
              <Link to="/shopping-cart-home-selecttime5">
                <div className="less-than-5-3 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <div className="less-than-10-2">{lessThan10}</div>
              <div className="less-than-15-1">{lessThan15}</div>
            </div>
          </div>
          <div className="well-be-in-9 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark5;
