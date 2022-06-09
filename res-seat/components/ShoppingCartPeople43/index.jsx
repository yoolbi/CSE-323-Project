import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople43.css";

function ShoppingCartPeople43(props) {
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
    completePreOrder,
    component1321Props,
    component1322Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople42 screen">
        <div className="flex-col-374">
          <Link to="/restaurant-details-menu1">
            <div className="group-52-59">
              <img className="arrow-back-50" src={arrowBack} />
              <div className="menu-65 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-105" src={line1} />
          <div className="shopping-cart-51 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-130" src={line2} />
          <div className="group-176">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-190">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-51" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-16">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-95">
                  <img className="outline-139" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
              <div className="add-more-menu-50 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-378 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-49">{total}</div>
              <div className="x30400-won-16">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-61" src={line5} />
        </div>
        <div className="flex-row-379 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-89">{weAre}</div>
          <div className="group-13-75">
            <Link to="/shopping-cartpeople3">
              <div className="group-7-153">
                <img className="outline-139" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-89">{people}</div>
        </div>
        <div className="flex-row-380">
          <div className="well-be-in-89 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-156">
            <div className="group-11-96 border-1px-flamingo"></div>
            <div className="mins-89 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-95" src={line6} />
            <img className="arrow-drop-down-89" src={arrowDropDown} />
            <div className="select-65 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <div className="group-28-76">
          <div className="overlap-group-704">
            <div className="complete-pre-order-49 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople43;
