import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime109.css";

function ShoppingCartHomeSelectTime109(props) {
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
    lessThan10,
    completePreOrder,
    component132Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime108 screen">
        <div className="flex-col-280">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-9">
              <img className="arrow-back-17" src={arrowBack} />
              <div className="menu-29 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-69" src={line1} />
          <div className="shopping-cart-18 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-77" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-19">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-49">
                <img className="outline-112" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-17 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-259 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-16">{total}</div>
            <div className="x15200-won-79">{x15200Won}</div>
          </div>
          <img className="line-5-25" src={line5} />
        </div>
        <div className="flex-row-260 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-56">{weAre}</div>
          <div className="group-13-42">
            <Link to="/shopping-carthomeselecttime1016">
              <div className="group-7-126">
                <img className="outline-112" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cart-home-selecttime10-23">
              <div className="group-8-151">
                <img className="outline-112" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-56">{people}</div>
        </div>
        <div className="flex-row-261">
          <div className="well-be-in-56 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-150">
            <div className="overlap-group2-194 border-1px-flamingo">
              <div className="group-14-24 border-1px-flamingo"></div>
            </div>
            <div className="mins-56 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-62" src={line6} />
            <Link to="/shopping-carthomeselecttime6">
              <img className="arrow-drop-down-56" src={arrowDropDown} />
            </Link>
            <div className="select-32 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-23 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <div className="group-28-49">
          <div className="overlap-group-594">
            <div className="complete-pre-order-16 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime109;
