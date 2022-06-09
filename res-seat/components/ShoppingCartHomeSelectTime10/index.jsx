import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime10.css";

function ShoppingCartHomeSelectTime10(props) {
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
      <div className="shopping-cart-home-selecttime10-23 screen">
        <div className="flex-col-182">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-1">
              <img className="arrow-back-3" src={arrowBack} />
              <div className="menu-15 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-55" src={line1} />
          <div className="shopping-cart-4 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-59" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-9">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-33">
                <img className="outline-98" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-3 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-216 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-2">{total}</div>
            <div className="x15200-won-29">{x15200Won}</div>
          </div>
          <img className="line-5-11" src={line5} />
        </div>
        <div className="flex-row-217 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-42">{weAre}</div>
          <div className="group-13-28">
            <Link to="/shopping-carthomeselecttime108">
              <div className="group-7-112">
                <img className="outline-98" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime104">
              <div className="group-8-144">
                <img className="outline-98" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-42">{people}</div>
        </div>
        <div className="flex-row-218">
          <div className="well-be-in-42 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-134">
            <div className="overlap-group2-175 border-1px-flamingo">
              <div className="group-14-12 border-1px-flamingo"></div>
            </div>
            <div className="mins-42 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-48" src={line6} />
            <Link to="/shopping-carthomeselecttime2">
              <img className="arrow-drop-down-42" src={arrowDropDown} />
            </Link>
            <div className="select-18 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-17 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <div className="group-28-37">
          <div className="overlap-group-534">
            <div className="complete-pre-order-2 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime10;
