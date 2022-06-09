import React from "react";
import { Link } from "react-router-dom";
import Group10 from "../Group10";
import Group11 from "../Group11";
import Component132 from "../Component132";
import "./ShoppingCartPeople4.css";

function ShoppingCartPeople4(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    outline_Add_Black_24Dp1,
    addMoreMenu,
    total,
    x15200Won,
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
    loadedBakedPotatoSoupRecipe34,
    group10Props,
    group11Props,
    component132Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-people4-2 screen">
        <div className="group-container-107">
          <div className="group-40-2">
            <div className="flex-col-302">
              <Link to="/restaurant-details-menu1">
                <div className="group-52-53">
                  <img className="arrow-back-35" src={arrowBack} />
                  <div className="menu-47 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-87" src={line1} />
              <div className="shopping-cart-36 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-113" src={line2} />
              <div className="group-12-30">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-71">
                    <img className="outline-127" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-35 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-328 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-34">{total}</div>
                <div className="x15200-won-90">{x15200Won}</div>
              </div>
              <img className="line-5-43" src={line5} />
            </div>
            <div className="flex-row-329 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-74">{weAre}</div>
              <div className="group-13-60">
                <Link to="/shopping-cartpeople32">
                  <div className="group-7-141">
                    <img className="outline-127" src={outline_Remove_Black_24Dp1} />
                  </div>
                </Link>
                <Group10>{group10Props.children}</Group10>
                <Group11 src={group11Props.src} className={group11Props.className} />
              </div>
              <div className="people-74">{people}</div>
            </div>
            <div className="flex-row-330">
              <div className="well-be-in-74 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group1-332">
                <div className="group-11-72 border-1px-flamingo"></div>
                <div className="mins-74 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-80" src={line6} />
                <img className="arrow-drop-down-74" src={arrowDropDown} />
                <div className="select-50 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <div className="group-28-64">
              <div className="overlap-group-630">
                <div className="complete-pre-order-34 applesdgothicneob00-regular-normal-flamingo-23px">
                  {completePreOrder}
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group2-219">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-40" src={loadedBakedPotatoSoupRecipe34} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople4;
