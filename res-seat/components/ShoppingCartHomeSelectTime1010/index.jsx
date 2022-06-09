import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1010.css";

function ShoppingCartHomeSelectTime1010(props) {
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
      <div className="shopping-carthomeselecttime109 screen">
        <div className="flex-col-281">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-10">
              <img className="arrow-back-18" src={arrowBack} />
              <div className="menu-30 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-70" src={line1} />
          <div className="shopping-cart-19 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-79" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-20">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-50">
                <img className="outline-113" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-18 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-263 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-17">{total}</div>
            <div className="x15200-won-80">{x15200Won}</div>
          </div>
          <img className="line-5-26" src={line5} />
        </div>
        <div className="flex-row-264 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-57">{weAre}</div>
          <div className="group-13-43">
            <Link to="/shopping-carthomeselecttime1017">
              <div className="group-7-127">
                <img className="outline-113" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime10">
              <div className="group-8-152">
                <img className="outline-113" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-57">{people}</div>
        </div>
        <div className="flex-row-265">
          <div className="well-be-in-57 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-151">
            <div className="overlap-group2-196 border-1px-flamingo">
              <div className="group-14-25 border-1px-flamingo"></div>
            </div>
            <div className="mins-57 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-63" src={line6} />
            <img className="arrow-drop-down-57" src={arrowDropDown} />
            <div className="select-33 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime6">
              <div className="less-than-15-23 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <div className="group-28-50">
          <div className="overlap-group-596">
            <div className="complete-pre-order-17 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1010;
