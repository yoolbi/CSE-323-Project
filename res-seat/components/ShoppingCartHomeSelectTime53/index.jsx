import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime53.css";

function ShoppingCartHomeSelectTime53(props) {
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
    lessThan1,
    completePreOrder,
    component132Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime52 screen">
        <div className="flex-col-268">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-3">
              <img className="arrow-back-6" src={arrowBack} />
              <div className="menu-18 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-58" src={line1} />
          <div className="shopping-cart-7 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-64" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-12">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-36">
                <img className="outline-101" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-6 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-226 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-5">{total}</div>
            <div className="x15200-won-72">{x15200Won}</div>
          </div>
          <img className="line-5-14" src={line5} />
        </div>
        <div className="flex-row-227 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-45">{weAre}</div>
          <div className="group-13-31">
            <Link to="/shopping-cart-home-selecttime5-11">
              <div className="group-7-115">
                <img className="outline-101" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-45">{people}</div>
        </div>
        <div className="flex-row-228">
          <div className="well-be-in-45 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-138">
            <div className="overlap-group2-179 border-1px-flamingo">
              <div className="group-14-15 border-1px-flamingo"></div>
            </div>
            <div className="mins-45 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-51" src={line6} />
            <Link to="/shopping-cart-home-selecttime-11">
              <img className="arrow-drop-down-45" src={arrowDropDown} />
            </Link>
            <div className="select-21 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-3 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home-11">
          <div className="group-28-40">
            <div className="overlap-group-581">
              <div className="complete-pre-order-5 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime53;
