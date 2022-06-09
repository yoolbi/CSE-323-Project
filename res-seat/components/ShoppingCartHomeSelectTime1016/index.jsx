import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1016.css";

function ShoppingCartHomeSelectTime1016(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    loadedBakedPotatoSoupRecipe34,
    outline_Add_Black_24Dp11,
    addMoreMenu,
    total,
    x30400Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
    outline_Add_Black_24Dp12,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1015 screen">
        <div className="flex-col-296">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-16">
              <img className="arrow-back-31" src={arrowBack} />
              <div className="menu-43 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-83" src={line1} />
          <div className="shopping-cart-32 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-102" src={line2} />
          <div className="group-182">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-167">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-39" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-10">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-67">
                  <img className="outline-126" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-31 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-309 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-30">{total}</div>
              <div className="x30400-won-10">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-39" src={line5} />
        </div>
        <div className="flex-row-310 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-70">{weAre}</div>
          <div className="group-13-56">
            <Link to="/shopping-carthomeselecttime1021">
              <div className="group-7-140">
                <img className="outline-126" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime107">
              <div className="group-8-160">
                <img className="outline-126" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-70">{people}</div>
        </div>
        <div className="flex-row-311">
          <div className="well-be-in-70 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-104">
            <div className="overlap-group4-132 border-1px-flamingo">
              <div className="group-14-34 border-1px-flamingo"></div>
            </div>
            <div className="mins-70 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-76" src={line6} />
            <img className="arrow-drop-down-70" src={arrowDropDown} />
            <div className="select-46 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime8">
              <div className="less-than-15-29 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <div className="group-28-60">
          <div className="overlap-group-619">
            <div className="complete-pre-order-30 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1016;
