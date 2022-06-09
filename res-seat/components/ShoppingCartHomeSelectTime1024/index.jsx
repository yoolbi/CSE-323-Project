import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1024.css";

function ShoppingCartHomeSelectTime1024(props) {
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
    x15200Won,
    line5,
    weAre,
    outline_Add_Black_24Dp12,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan15,
    completePreOrder,
    component132Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1023 screen">
        <div className="flex-col-391">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-24">
              <img className="arrow-back-56" src={arrowBack} />
              <div className="menu-71 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-111" src={line1} />
          <div className="shopping-cart-57 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-139" src={line2} />
          <div className="overlap-group2-263">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-57" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-43">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-105">
                <img className="outline_add_black_24dp-1-58" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-56 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-397 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-55">{total}</div>
            <div className="x15200-won-237">{x15200Won}</div>
          </div>
          <img className="line-5-67" src={line5} />
        </div>
        <div className="flex-row-398 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-95">{weAre}</div>
          <div className="group-13-81">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1019">
              <div className="group-8-180">
                <img className="outline_add_black_24dp-1-58" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-95">{people}</div>
        </div>
        <div className="flex-row-399">
          <div className="well-be-in-95 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-166">
            <div className="overlap-group3-200 border-1px-flamingo">
              <div className="group-14-46 border-1px-flamingo"></div>
            </div>
            <div className="mins-95 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-101" src={line6} />
            <img className="arrow-drop-down-95" src={arrowDropDown} />
            <div className="select-71 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime13">
              <div className="less-than-15-38 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderhome11">
          <div className="group-28-80">
            <div className="overlap-group-716">
              <div className="complete-pre-order-55 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1024;
