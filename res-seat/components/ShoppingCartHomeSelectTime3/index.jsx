import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime3.css";

function ShoppingCartHomeSelectTime3(props) {
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
    completePreOrder,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan1,
    lessThan5,
    lessThan10,
    lessThan15,
    wellBeIn,
    component132Props,
    group10Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime2 screen">
        <div className="flex-col-277">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-3">
              <img className="arrow-back-15" src={arrowBack} />
              <div className="menu-27 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-67" src={line1} />
          <div className="shopping-cart-16 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-73" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
            className={component132Props.className}
          />
          <div className="group-12-17">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-46">
                <img className="outline-110" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-15 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-252 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-14">{total}</div>
            <div className="x15200-won-77">{x15200Won}</div>
          </div>
          <img className="line-5-23" src={line5} />
        </div>
        <div className="flex-row-253 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-54">{weAre}</div>
          <div className="group-13-40">
            <Link to="/shopping-carthomeselecttime6">
              <div className="group-7-124">
                <img className="outline-110" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cart-home-selecttime-11">
              <div className="group-8-149">
                <img className="outline-110" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-54">{people}</div>
        </div>
        <div className="overlap-group4-112">
          <div className="overlap-group3-147">
            <div className="overlap-group-590">
              <div className="complete-pre-order-14 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-47 border-1px-flamingo"></div>
            <div className="mins-54 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-60" src={line6} />
            <img className="arrow-drop-down-54" src={arrowDropDown} />
            <div className="select-30 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group2-184">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-cart-home-selecttime5-11">
                <div className="less-than-1-6 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-cart-home-selecttime5-11">
                <div className="less-than-5-18 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-cart-home-selecttime10-23">
                <div className="less-than-10-22 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime10">
                <div className="less-than-15-22 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-54 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime3;
