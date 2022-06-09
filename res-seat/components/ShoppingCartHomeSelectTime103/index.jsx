import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime103.css";

function ShoppingCartHomeSelectTime103(props) {
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
    lessThan10,
    completePreOrder,
    component132Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime102 screen">
        <div className="flex-col-271">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-3">
              <img className="arrow-back-9" src={arrowBack} />
              <div className="menu-21 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-61" src={line1} />
          <div className="shopping-cart-10 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-67" src={line2} />
          <div className="overlap-group2-180">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-3" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-13">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-40">
                <img className="outline-104" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-9 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-234 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-8">{total}</div>
            <div className="x15200-won-73">{x15200Won}</div>
          </div>
          <img className="line-5-17" src={line5} />
        </div>
        <div className="flex-row-235 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-48">{weAre}</div>
          <div className="group-13-34">
            <Link to="/shopping-carthomeselecttime1012">
              <div className="group-7-118">
                <img className="outline-104" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-48">{people}</div>
        </div>
        <div className="flex-row-236">
          <div className="well-be-in-48 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-108">
            <div className="overlap-group3-141 border-1px-flamingo">
              <div className="group-14-17 border-1px-flamingo"></div>
            </div>
            <div className="mins-48 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-54" src={line6} />
            <Link to="/shopping-carthomeselecttime4">
              <img className="arrow-drop-down-48" src={arrowDropDown} />
            </Link>
            <div className="select-24 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-19 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <div className="group-28-42">
          <div className="overlap-group-584">
            <div className="complete-pre-order-8 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime103;
