import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime102.css";

function ShoppingCartHomeSelectTime102(props) {
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
    lessThan15,
    completePreOrder,
    component132Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime10 screen">
        <div className="flex-col-184">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-2">
              <img className="arrow-back-4" src={arrowBack} />
              <div className="menu-16 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-56" src={line1} />
          <div className="shopping-cart-5 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-60" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-10">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-34">
                <img className="outline-99" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-4 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-219 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-3">{total}</div>
            <div className="x15200-won-70">{x15200Won}</div>
          </div>
          <img className="line-5-12" src={line5} />
        </div>
        <div className="flex-row-220 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-43">{weAre}</div>
          <div className="group-13-29">
            <Link to="/shopping-carthomeselecttime109">
              <div className="group-7-113">
                <img className="outline-99" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime106">
              <div className="group-8-145">
                <img className="outline-99" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-43">{people}</div>
        </div>
        <div className="flex-row-221">
          <div className="well-be-in-43 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-135">
            <div className="overlap-group2-176 border-1px-flamingo">
              <div className="group-14-13 border-1px-flamingo"></div>
            </div>
            <div className="mins-43 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-49" src={line6} />
            <img className="arrow-drop-down-43" src={arrowDropDown} />
            <div className="select-19 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime2">
              <div className="less-than-15-17 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <div className="group-28-38">
          <div className="overlap-group-536">
            <div className="complete-pre-order-3 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime102;
