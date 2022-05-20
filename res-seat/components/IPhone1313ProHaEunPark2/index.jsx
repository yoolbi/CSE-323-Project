import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./IPhone1313ProHaEunPark2.css";

function IPhone1313ProHaEunPark2(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    easyFrenchOnionSoup3062131Hero012A9,
    loadedBakedPotatoSoupRecipe31,
    addMoreMenu,
    total,
    x45200Won,
    line5,
    weAre,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    completePreOrder,
    component131Props,
    component132Props,
    component133Props,
    group111Props,
    group112Props,
    group10Props,
    group113Props,
  } = props;

  return (
    <div className="iphone-13-13-pro-haeun-park screen">
      <div className="group-40-4">
        <div className="flex-col-67">
          <div className="flex-row-95">
            <Link to="/restaurant-details-menu2">
              <img className="arrow-back-7" src={arrowBack} />
            </Link>
            <div className="menu-16 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-14" src={line1} />
          <div className="shopping-cart-7 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-15" src={line2} />
          <Component13
            x15200Won={component131Props.x15200Won}
            image8={component131Props.image8}
            pumkinSoup={component131Props.pumkinSoup}
            className={component131Props.className}
          />
          <div className="overlap-group-107">
            <Component13
              x15200Won={component132Props.x15200Won}
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              className={component132Props.className}
            />
            <img className="easy-french-onion-so-4" src={easyFrenchOnionSoup3062131Hero012A9} />
          </div>
          <div className="overlap-group-107">
            <Component13
              x15200Won={component133Props.x15200Won}
              image8={component133Props.image8}
              pumkinSoup={component133Props.pumkinSoup}
              className={component133Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-1-1" src={loadedBakedPotatoSoupRecipe31} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-7">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-7 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-96 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-7">{total}</div>
            <div className="x45200-won">{x45200Won}</div>
          </div>
          <img className="line-5-14" src={line5} />
        </div>
        <div className="flex-row-97 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-7">{weAre}</div>
          <div className="group-13-7">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group113Props.src} />
          </div>
          <div className="people-7">{people}</div>
        </div>
        <div className="flex-row-98">
          <div className="well-be-in-7 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-30">
            <div className="group-11-16 border-1px-flamingo"></div>
            <div className="mins-7 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-8" src={line6} />
            <Link to="/shopping-cart-home-selecttime">
              <img className="arrow-drop-down-7" src={arrowDropDown} />
            </Link>
            <div className="select-7 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-5">
            <div className="overlap-group-108">
              <div className="complete-pre-order-7 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark2;
