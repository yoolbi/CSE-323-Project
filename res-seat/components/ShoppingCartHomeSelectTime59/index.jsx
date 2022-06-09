import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime59.css";

function ShoppingCartHomeSelectTime59(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
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
    lessThan1,
    completePreOrder,
    component132Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime58 screen">
        <div className="flex-col-298">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-9">
              <img className="arrow-back-32" src={arrowBack} />
              <div className="menu-44 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-84" src={line1} />
          <div className="shopping-cart-33 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-104" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-27">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-68">
                <img className="outline_add_black_24dp-1-47" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-32 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-313 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-31">{total}</div>
            <div className="x15200-won-87">{x15200Won}</div>
          </div>
          <img className="line-5-40" src={line5} />
        </div>
        <div className="flex-row-314 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-71">{weAre}</div>
          <div className="group-13-57">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime54">
              <div className="group-8-161">
                <img className="outline_add_black_24dp-1-47" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-71">{people}</div>
        </div>
        <div className="flex-row-315">
          <div className="well-be-in-71 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-169">
            <div className="overlap-group2-211 border-1px-flamingo">
              <div className="group-14-35 border-1px-flamingo"></div>
            </div>
            <div className="mins-71 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-77" src={line6} />
            <Link to="/shopping-carthomeselecttime9">
              <img className="arrow-drop-down-71" src={arrowDropDown} />
            </Link>
            <div className="select-47 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-14 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <div className="group-28-61">
          <div className="overlap-group-621">
            <div className="complete-pre-order-31 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime59;
