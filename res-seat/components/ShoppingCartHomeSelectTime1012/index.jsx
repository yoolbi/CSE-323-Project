import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime1012.css";

function ShoppingCartHomeSelectTime1012(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    loadedBakedPotatoSoupRecipe34,
    outline_Add_Black_24Dp1,
    addMoreMenu,
    total,
    x30400Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan15,
    completePreOrder,
    component1321Props,
    component1322Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1011 screen">
        <div className="flex-col-289">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-12">
              <img className="arrow-back-24" src={arrowBack} />
              <div className="menu-36 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-76" src={line1} />
          <div className="shopping-cart-25 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-95" src={line2} />
          <div className="group-196">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-160">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-33" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-7">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-59">
                  <img className="outline-119" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
              <div className="add-more-menu-24 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-289 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-23">{total}</div>
              <div className="x30400-won-7">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-32" src={line5} />
        </div>
        <div className="flex-row-290 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-63">{weAre}</div>
          <div className="group-13-49">
            <Link to="/shopping-carthomeselecttime107">
              <div className="group-7-133">
                <img className="outline-119" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-63">{people}</div>
        </div>
        <div className="flex-row-291">
          <div className="well-be-in-63 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-101">
            <div className="overlap-group4-125 border-1px-flamingo">
              <div className="group-14-28 border-1px-flamingo"></div>
            </div>
            <div className="mins-63 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-69" src={line6} />
            <img className="arrow-drop-down-63" src={arrowDropDown} />
            <div className="select-39 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime">
              <div className="less-than-15-26 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <div className="group-28-54">
          <div className="overlap-group-612">
            <div className="complete-pre-order-23 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1012;
