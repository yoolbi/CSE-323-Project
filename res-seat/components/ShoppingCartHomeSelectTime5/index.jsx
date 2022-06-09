import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime5.css";

function ShoppingCartHomeSelectTime5(props) {
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
      <div className="shopping-cart-home-selecttime5-11 screen">
        <div className="flex-col-126">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-1">
              <img className="arrow-back-1" src={arrowBack} />
              <div className="menu-13 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-53" src={line1} />
          <div className="shopping-cart-2 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-57" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-7">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-30">
                <img className="outline-27" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-1 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-144 applesdgothicneob00-regular-normal-black-28px">
            <div className="total">{total}</div>
            <div className="x15200-won">{x15200Won}</div>
          </div>
          <img className="line-5-9" src={line5} />
        </div>
        <div className="flex-row-145 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-40">{weAre}</div>
          <div className="group-13-26">
            <Link to="/shopping-carthomeselecttime54">
              <div className="group-7-8">
                <img className="outline-27" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime52">
              <div className="group-8-74">
                <img className="outline-27" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-40">{people}</div>
        </div>
        <div className="flex-row-146">
          <div className="well-be-in-40 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-132">
            <div className="overlap-group2-173 border-1px-flamingo">
              <div className="group-14-11 border-1px-flamingo"></div>
            </div>
            <div className="mins-40 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-46" src={line6} />
            <Link to="/shopping-carthomeselecttime2">
              <img className="arrow-drop-down-40" src={arrowDropDown} />
            </Link>
            <div className="select-16 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <div className="group-28-36">
          <div className="overlap-group-478">
            <div className="complete-pre-order applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime5;
