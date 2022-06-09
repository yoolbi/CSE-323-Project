import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime15.css";

function ShoppingCartHomeSelectTime15(props) {
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
    component1321Props,
    component1322Props,
    component1323Props,
    group111Props,
    group10Props,
    group112Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-home-selecttime screen">
        <div className="flex-col-470">
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-53-13">
              <img className="arrow-back-61" src={arrowBack} />
              <div className="menu-97 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-135" src={line1} />
          <div className="shopping-cart-62 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-161" src={line2} />
          <Component132
            image8={component1321Props.image8}
            pumkinSoup={component1321Props.pumkinSoup}
            x15200Won={component1321Props.x15200Won}
            className={component1321Props.className}
          />
          <div className="overlap-group-1112">
            <Component132
              image8={component1322Props.image8}
              pumkinSoup={component1322Props.pumkinSoup}
              x15200Won={component1322Props.x15200Won}
              className={component1322Props.className}
            />
            <img className="image-11-7" src={image11} />
          </div>
          <div className="overlap-group-1112">
            <Component132
              image8={component1323Props.image8}
              pumkinSoup={component1323Props.pumkinSoup}
              x15200Won={component1323Props.x15200Won}
              className={component1323Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-2-8" src={loadedBakedPotatoSoupRecipe32} />
          </div>
          <div className="group-12-48">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-114">
                <img className="outline_add_black_24dp-1-60" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-61 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-559 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-60">{total}</div>
            <div className="x45600-won-2">{x45600Won}</div>
          </div>
          <img className="line-5-91" src={line5} />
        </div>
        <div className="flex-row-560 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-100">{weAre}</div>
          <div className="group-13-86">
            <Group11 src={group111Props.src} className={group111Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-100">{people}</div>
        </div>
        <div className="overlap-group8-48">
          <div className="overlap-group6-96">
            <div className="overlap-group-1113">
              <div className="complete-pre-order-60 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-115 border-1px-flamingo"></div>
            <div className="mins-100 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-106" src={line6} />
            <img className="arrow-drop-down-100" src={arrowDropDown} />
            <div className="select-76 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group4-267 inter-extra-bold-black-15px">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <div className="less-than-1-24">{lessThan1}</div>
              <Link to="/shopping-cart-home-selecttime5">
                <div className="less-than-5-28 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-cart-home-selecttime10">
                <div className="less-than-10-40 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <div className="less-than-15-40">{lessThan15}</div>
            </div>
          </div>
          <div className="well-be-in-100 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime15;
