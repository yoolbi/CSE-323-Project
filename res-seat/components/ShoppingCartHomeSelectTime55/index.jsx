import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime55.css";

function ShoppingCartHomeSelectTime55(props) {
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
      <div className="shopping-carthomeselecttime54 screen">
        <div className="flex-col-279">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-5">
              <img className="arrow-back-16" src={arrowBack} />
              <div className="menu-28 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-68" src={line1} />
          <div className="shopping-cart-17 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-75" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-18">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-48">
                <img className="outline-111" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-16 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-255 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-15">{total}</div>
            <div className="x15200-won-78">{x15200Won}</div>
          </div>
          <img className="line-5-24" src={line5} />
        </div>
        <div className="flex-row-256 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-55">{weAre}</div>
          <div className="group-13-41">
            <Link to="/shopping-carthomeselecttime58">
              <div className="group-7-125">
                <img className="outline-111" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cart-home-selecttime5-11">
              <div className="group-8-150">
                <img className="outline-111" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-55">{people}</div>
        </div>
        <div className="flex-row-257">
          <div className="well-be-in-55 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-149">
            <div className="overlap-group2-185 border-1px-flamingo">
              <div className="group-14-23 border-1px-flamingo"></div>
            </div>
            <div className="mins-55 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-61" src={line6} />
            <Link to="/shopping-carthomeselecttime6">
              <img className="arrow-drop-down-55" src={arrowDropDown} />
            </Link>
            <div className="select-31 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-7 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <div className="group-28-48">
          <div className="overlap-group-592">
            <div className="complete-pre-order-15 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime55;
