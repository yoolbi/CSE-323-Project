import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople2.css";

function ShoppingCartPeople2(props) {
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
    component132Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="shopping-cart-people2-2 screen">
      <div className="group-40-4">
        <div className="flex-col-309">
          <Link to="/restaurant-details-menu1">
            <div className="group-52-56">
              <img className="arrow-back-38" src={arrowBack} />
              <div className="menu-50 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-90" src={line1} />
          <div className="shopping-cart-39 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-116" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-32">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-77">
                <img className="outline-132" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-38 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-339 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-37">{total}</div>
            <div className="x15200-won-94">{x15200Won}</div>
          </div>
          <img className="line-5-46" src={line5} />
        </div>
        <div className="flex-row-340 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-77">{weAre}</div>
          <Link to="/shopping-cart-people3-2">
            <div className="group-13-63">
              <Link to="/shopping-cart-people1-2">
                <div className="group-7-146">
                  <img className="outline-132" src={outline_Remove_Black_24Dp1} />
                </div>
              </Link>
              <Group10>{group10Props.children}</Group10>
              <Group11 src={group11Props.src} className={group11Props.className} />
            </div>
          </Link>
          <div className="people-77">{people}</div>
        </div>
        <div className="flex-row-341">
          <div className="well-be-in-77 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group2-222">
            <div className="group-11-78 border-1px-flamingo"></div>
            <div className="mins-77 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-83" src={line6} />
            <Link to="/shopping-carthomeselecttime6">
              <img className="arrow-drop-down-77" src={arrowDropDown} />
            </Link>
            <div className="select-53 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <div className="group-28-67">
          <div className="overlap-group-635">
            <div className="complete-pre-order-37 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople2;
