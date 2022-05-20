import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group11 from "../Group11";
import "./IPhone1313ProHaEunPark6.css";

function IPhone1313ProHaEunPark6(props) {
  const {
    menu,
    shoppingCart,
    easyFrenchOnionSoup3062131Hero012A9,
    loadedBakedPotatoSoupRecipe31,
    addMoreMenu,
    total,
    x45200Won,
    weAre,
    number,
    people,
    wellBeIn,
    mins,
    select,
    completePreOrder,
    component131Props,
    component132Props,
    component133Props,
    group111Props,
    group112Props,
    group113Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-haeun-park4 screen">
        <div className="flex-col-80">
          <div className="flex-row-133">
            <Link to="/restaurant-details-menu2">
              <img className="arrow-back-10" src="/img/arrow-back-2@2x.svg" />
            </Link>
            <div className="menu-23 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-21" src="/img/line-1@2x.svg" />
          <div className="shopping-cart-10 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-21" src="/img/line-1@2x.svg" />
          <Component13
            pumkinSoup={component131Props.pumkinSoup}
            image8={component131Props.image8}
            x15200Won={component131Props.x15200Won}
            className={component131Props.className}
          />
          <div className="overlap-group-127">
            <Component13
              pumkinSoup={component132Props.pumkinSoup}
              image8={component132Props.image8}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="easy-french-onion-so-5" src={easyFrenchOnionSoup3062131Hero012A9} />
          </div>
          <div className="overlap-group-127">
            <Component13
              pumkinSoup={component133Props.pumkinSoup}
              image8={component133Props.image8}
              x15200Won={component133Props.x15200Won}
              className={component133Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-1-2" src={loadedBakedPotatoSoupRecipe31} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-10">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-10 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-134 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-10">{total}</div>
            <div className="x45200-won-3">{x45200Won}</div>
          </div>
          <img className="line-5-21" src="/img/line-5@2x.svg" />
        </div>
        <div className="flex-row-135">
          <div className="we-are-10 applesdgothicneob00-regular-normal-black-25px">{weAre}</div>
          <div className="group-13-12">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <div className="overlap-group-128">
              <div className="group-9-12"></div>
              <div className="number-52 applesdgothicneob00-regular-normal-black-23px">{number}</div>
            </div>
            <Group11 src={group113Props.src} className={group113Props.className} />
          </div>
          <div className="people-10 applesdgothicneob00-regular-normal-black-25px">{people}</div>
        </div>
        <div className="flex-row-136">
          <div className="well-be-in-10 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-43">
            <div className="group-11-18 border-1px-flamingo"></div>
            <div className="mins-10 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-11" src="/img/line-6@2x.svg" />
            <Link to="/shopping-cart-home-selecttime">
              <img className="arrow-drop-down-14" src="/img/arrow-drop-down@2x.svg" />
            </Link>
            <div className="select-10 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-8">
            <div className="overlap-group-129">
              <div className="complete-pre-order-9 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark6;
