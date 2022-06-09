import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group252 from "../Group252";
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
    component1321Props,
    component1322Props,
    component1323Props,
    group111Props,
    group112Props,
    group113Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-ha-eun-park-4 screen">
        <div className="flex-col-498">
          <div className="flex-row-640">
            <img className="arrow-back-68" src="/img/arrow-back@2x.svg" />
            <div className="menu-112 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-150" src="/img/line-1@2x.svg" />
          <div className="shopping-cart-69 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-175" src="/img/line-1@2x.svg" />
          <Component132
            pumkinSoup={component1321Props.pumkinSoup}
            image8={component1321Props.image8}
            x15200Won={component1321Props.x15200Won}
            className={component1321Props.className}
          />
          <Component132
            pumkinSoup={component1322Props.pumkinSoup}
            image8={component1322Props.image8}
            x15200Won={component1322Props.x15200Won}
            className={component1322Props.className}
          />
          <div className="overlap-group6-119">
            <Component132
              pumkinSoup={component1323Props.pumkinSoup}
              image8={component1323Props.image8}
              x15200Won={component1323Props.x15200Won}
              className={component1323Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-2-13" src={loadedBakedPotatoSoupRecipe32} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-55">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-68 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-641 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-67">{total}</div>
            <div className="x45200-won-2">{x45200Won}</div>
          </div>
          <img className="line-5-106" src="/img/line-5@2x.svg" />
        </div>
        <div className="flex-row-642">
          <div className="we-are-107 applesdgothicneob00-regular-normal-black-25px">{weAre}</div>
          <div className="group-13-95">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <div className="overlap-group-1157">
              <div className="group-9-110"></div>
              <div className="number-266 applesdgothicneob00-regular-normal-black-23px">{number}</div>
            </div>
            <Group11 src={group113Props.src} className={group113Props.className} />
          </div>
          <div className="people-107 applesdgothicneob00-regular-normal-black-25px">{people}</div>
        </div>
        <div className="overlap-group7-87">
          <div className="overlap-group5-209">
            <Link to="/completed-preorder-home">
              <div className="group-28-89">
                <div className="overlap-group-1158">
                  <div className="comple-pre-order applesdgothicneob00-regular-normal-flamingo-23px">
                    {complePreOrder}
                  </div>
                </div>
              </div>
            </Link>
            <div className="group-11-123 border-1px-flamingo"></div>
            <div className="mins-107 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-113" src="/img/line-6@2x.svg" />
            <img className="arrow-drop-down-111" src="/img/arrow-drop-down@2x.svg" />
            <div className="select-83 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group4-296 inter-extra-bold-black-15px">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <div className="less-than-1-25">{lessThan1}</div>
              <Link to="/shopping-cart-home-selecttime5">
                <div className="less-than-5-31 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <div className="less-than-10-42">{lessThan10}</div>
              <div className="less-than-15-41">{lessThan15}</div>
            </div>
          </div>
          <div className="well-be-in-107 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark5;
