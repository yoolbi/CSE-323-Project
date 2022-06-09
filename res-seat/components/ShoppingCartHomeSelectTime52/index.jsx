import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime52.css";

function ShoppingCartHomeSelectTime52(props) {
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
    lessThan1,
    completePreOrder,
    component132Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime5 screen">
        <div className="flex-col-267">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-2">
              <img className="arrow-back-5" src={arrowBack} />
              <div className="menu-17 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-57" src={line1} />
          <div className="shopping-cart-6 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-63" src={line2} />
          <div className="overlap-group2-178">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-11">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-35">
                <img className="outline-100" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-5 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-223 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-4">{total}</div>
            <div className="x15200-won-71">{x15200Won}</div>
          </div>
          <img className="line-5-13" src={line5} />
        </div>
        <div className="flex-row-224 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-44">{weAre}</div>
          <div className="group-13-30">
            <Link to="/shopping-carthomeselecttime57">
              <div className="group-7-114">
                <img className="outline-100" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-44">{people}</div>
        </div>
        <div className="flex-row-225">
          <div className="well-be-in-44 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-105">
            <div className="overlap-group3-137 border-1px-flamingo">
              <div className="group-14-14 border-1px-flamingo"></div>
            </div>
            <div className="mins-44 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-50" src={line6} />
            <Link to="/shopping-carthomeselecttime4">
              <img className="arrow-drop-down-44" src={arrowDropDown} />
            </Link>
            <div className="select-20 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-2 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <div className="group-28-39">
          <div className="overlap-group-580">
            <div className="complete-pre-order-4 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime52;
