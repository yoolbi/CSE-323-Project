import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime58.css";

function ShoppingCartHomeSelectTime58(props) {
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
    outline_Remove_Black_24Dp1,
    outline_Add_Black_24Dp12,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime57 screen">
        <div className="flex-col-291">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-8">
              <img className="arrow-back-26" src={arrowBack} />
              <div className="menu-38 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-78" src={line1} />
          <div className="shopping-cart-27 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-97" src={line2} />
          <div className="overlap-group2-207">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-35" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-23">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-61">
                <img className="outline-121" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-26 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-295 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-25">{total}</div>
            <div className="x15200-won-83">{x15200Won}</div>
          </div>
          <img className="line-5-34" src={line5} />
        </div>
        <div className="flex-row-296 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-65">{weAre}</div>
          <div className="group-13-51">
            <Link to="/shopping-carthomeselecttime59">
              <div className="group-7-135">
                <img className="outline-121" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime5">
              <div className="group-8-155">
                <img className="outline-121" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-65">{people}</div>
        </div>
        <div className="flex-row-297">
          <div className="well-be-in-65 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-127">
            <div className="overlap-group3-162 border-1px-flamingo">
              <div className="group-14-30 border-1px-flamingo"></div>
            </div>
            <div className="mins-65 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-71" src={line6} />
            <Link to="/shopping-carthomeselecttime7">
              <img className="arrow-drop-down-65" src={arrowDropDown} />
            </Link>
            <div className="select-41 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-12 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome9">
          <div className="group-28-56">
            <div className="overlap-group-614">
              <div className="complete-pre-order-25 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime58;
