import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group17 from "../Group17";
import "./ShoppingCartHomeSelectTime.css";

function ShoppingCartHomeSelectTime(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    image11,
    loadedBakedPotatoSoupRecipe32,
    outline_Add_Black_24Dp1,
    addMoreMenu,
    total,
    x45600Won,
    line5,
    weAre,
    people,
    completePreOrder,
    mins,
    line6,
    arrowDropDown,
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
    group10Props,
    group112Props,
    group17Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-home-selecttime screen">
        <div className="flex-col-34">
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-53">
              <img className="arrow-back-2" src={arrowBack} />
              <div className="menu-7 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-5" src={line1} />
          <div className="shopping-cart-2 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-4" src={line2} />
          <Component13
            image8={component131Props.image8}
            pumkinSoup={component131Props.pumkinSoup}
            x15200Won={component131Props.x15200Won}
          />
          <div className="overlap-group-63">
            <Component13
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="image-11-4" src={image11} />
          </div>
          <div className="overlap-group-63">
            <Component13
              image8={component133Props.image8}
              pumkinSoup={component133Props.pumkinSoup}
              x15200Won={component133Props.x15200Won}
              className={component133Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-2-1" src={loadedBakedPotatoSoupRecipe32} />
          </div>
          <div className="group-12-2">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-8">
                <img className="outline_add_black_24dp-1-5" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-2 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-30 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-2">{total}</div>
            <div className="x45600-won-2">{x45600Won}</div>
          </div>
          <img className="line-5-5" src={line5} />
        </div>
        <div className="flex-row-31 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-2">{weAre}</div>
          <div className="group-13-2">
            <Group11 src={group111Props.src} className={group111Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} />
          </div>
          <div className="people-2">{people}</div>
        </div>
        <div className="overlap-group8-6">
          <div className="overlap-group6-8">
            <div className="overlap-group-64">
              <div className="complete-pre-order-2 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-9 border-1px-flamingo"></div>
            <div className="mins-2 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-2" src={line6} />
            <img className="arrow-drop-down-2" src={arrowDropDown} />
            <div className="select-2 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group4-11 inter-extra-bold-black-15px">
              <Group17 line6={group17Props.line6} line7={group17Props.line7} line8={group17Props.line8} />
              <div className="less-than-1">{lessThan1}</div>
              <Link to="/shopping-cart-home-selecttime5">
                <div className="less-than-5 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-cart-home-selecttime10">
                <div className="less-than-10 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <div className="less-than-15">{lessThan15}</div>
            </div>
          </div>
          <div className="well-be-in-2 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime;
