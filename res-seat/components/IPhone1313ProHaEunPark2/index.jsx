import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
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
    component1321Props,
    component1322Props,
    component1323Props,
    group111Props,
    group112Props,
    group10Props,
    group113Props,
  } = props;

  return (
    <div className="iphone-13-13-pro-haeun-park screen">
      <div className="group-40-12">
        <div className="flex-col-490">
          <div className="flex-row-608">
            <Link to="/hanam-details-menu-pb">
              <img className="arrow-back-66" src={arrowBack} />
            </Link>
            <div className="menu-106 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-144" src={line1} />
          <div className="shopping-cart-67 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-170" src={line2} />
          <Component132
            x15200Won={component1321Props.x15200Won}
            image8={component1321Props.image8}
            pumkinSoup={component1321Props.pumkinSoup}
            className={component1321Props.className}
          />
          <div className="overlap-group-1140">
            <Component132
              x15200Won={component1322Props.x15200Won}
              image8={component1322Props.image8}
              pumkinSoup={component1322Props.pumkinSoup}
              className={component1322Props.className}
            />
            <img className="easy-french-onion-so-4" src={easyFrenchOnionSoup3062131Hero012A9} />
          </div>
          <div className="overlap-group-1140">
            <Component132
              x15200Won={component1323Props.x15200Won}
              image8={component1323Props.image8}
              pumkinSoup={component1323Props.pumkinSoup}
              className={component1323Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-1-1" src={loadedBakedPotatoSoupRecipe31} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-53">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-66 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-609 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-65">{total}</div>
            <div className="x45200-won">{x45200Won}</div>
          </div>
          <img className="line-5-100" src={line5} />
        </div>
        <div className="flex-row-610 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-105">{weAre}</div>
          <div className="group-13-91">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group113Props.src} className={group113Props.className} />
          </div>
          <div className="people-105">{people}</div>
        </div>
        <div className="flex-row-611">
          <div className="well-be-in-105 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-288">
            <div className="group-11-122 border-1px-flamingo"></div>
            <div className="mins-105 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-111" src={line6} />
            <Link to="/shopping-cart-home-selecttime">
              <img className="arrow-drop-down-105" src={arrowDropDown} />
            </Link>
            <div className="select-81 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-87">
            <div className="overlap-group-1141">
              <div className="complete-pre-order-65 applesdgothicneob00-regular-normal-flamingo-23px">
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
