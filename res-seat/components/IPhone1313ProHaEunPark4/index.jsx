import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Component132 from "../Component132";
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
    component131Props,
    component132Props,
    component132Props2,
    group111Props,
    group112Props,
    group10Props,
    group113Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-haeun-park3 screen">
        <div className="flex-col-74">
          <div className="flex-row-119">
            <Link to="/restaurant-details-menu2">
              <img className="arrow-back-8" src={arrowBack} />
            </Link>
            <div className="menu-21 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-19" src={line1} />
          <div className="shopping-cart-8 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-18" src={line2} />
          <Component13
            x15200Won={component131Props.x15200Won}
            image8={component131Props.image8}
            pumkinSoup={component131Props.pumkinSoup}
            className={component131Props.className}
          />
          <Component13
            x15200Won={component132Props.x15200Won}
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            className={component132Props.className}
          />
          <div className="overlap-group4-47">
            <Component132
              pumkinSoup={component132Props2.pumkinSoup}
              x15200Won={component132Props2.x15200Won}
              outline_Remove_Black_24Dp1={component132Props2.outline_Remove_Black_24Dp1}
              number={component132Props2.number}
              outline_Close_Black_24Dp1={component132Props2.outline_Close_Black_24Dp1}
              outline_Add_Black_24Dp1={component132Props2.outline_Add_Black_24Dp1}
            />
            <img className="loaded-baked-potato-soup-recipe-3-3-4" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-8">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-8 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-120 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-8">{total}</div>
            <div className="x45200-won-1">{x45200Won}</div>
          </div>
          <img className="line-5-19" src={line5} />
        </div>
        <div className="flex-row-121 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-8">{weAre}</div>
          <div className="group-13-9">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group113Props.src} />
          </div>
          <div className="people-8">{people}</div>
        </div>
        <div className="flex-row-122">
          <div className="well-be-in-8 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-39">
            <div className="overlap-group3-48 border-1px-flamingo">
              <div className="group-14-2 border-1px-flamingo"></div>
            </div>
            <div className="mins-8 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-9" src={line6} />
            <img className="arrow-drop-down-10" src={arrowDropDown} />
            <div className="select-8 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-5-2 inter-extra-bold-black-15px">{lessThan5}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-6">
            <div className="overlap-group-122">
              <div className="complete-pre-order-8 applesdgothicneob00-regular-normal-flamingo-23px">
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
