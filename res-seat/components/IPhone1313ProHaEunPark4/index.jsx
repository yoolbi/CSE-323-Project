import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Component133 from "../Component133";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./IPhone1313ProHaEunPark4.css";

function IPhone1313ProHaEunPark4(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    loadedBakedPotatoSoupRecipe33,
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
    lessThan5,
    completePreOrder,
    component1321Props,
    component1322Props,
    component133Props,
    group111Props,
    group112Props,
    group10Props,
    group113Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-haeun-park3 screen">
        <div className="flex-col-497">
          <div className="flex-row-632">
            <Link to="/hanam-details-menu-pb">
              <img className="arrow-back-67" src={arrowBack} />
            </Link>
            <div className="menu-111 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-149" src={line1} />
          <div className="shopping-cart-68 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-173" src={line2} />
          <Component132
            x15200Won={component1321Props.x15200Won}
            image8={component1321Props.image8}
            pumkinSoup={component1321Props.pumkinSoup}
            className={component1321Props.className}
          />
          <Component132
            x15200Won={component1322Props.x15200Won}
            image8={component1322Props.image8}
            pumkinSoup={component1322Props.pumkinSoup}
            className={component1322Props.className}
          />
          <div className="overlap-group5-207">
            <Component133 pumkinSoup={component133Props.pumkinSoup} className={component133Props.className} />
            <img className="loaded-baked-potato-soup-recipe-3-3-4" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-54">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-67 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-633 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-66">{total}</div>
            <div className="x45200-won-1">{x45200Won}</div>
          </div>
          <img className="line-5-105" src={line5} />
        </div>
        <div className="flex-row-634 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-106">{weAre}</div>
          <div className="group-13-93">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group113Props.src} className={group113Props.className} />
          </div>
          <div className="people-106">{people}</div>
        </div>
        <div className="flex-row-635">
          <div className="well-be-in-106 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-295">
            <div className="overlap-group3-477 border-1px-flamingo">
              <div className="group-14-49 border-1px-flamingo"></div>
            </div>
            <div className="mins-106 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-112" src={line6} />
            <img className="arrow-drop-down-108" src={arrowDropDown} />
            <div className="select-82 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-5-30 inter-extra-bold-black-15px">{lessThan5}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-88">
            <div className="overlap-group-1155">
              <div className="complete-pre-order-66 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark4;
