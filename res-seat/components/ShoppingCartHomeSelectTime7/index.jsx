import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime7.css";

function ShoppingCartHomeSelectTime7(props) {
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
      <div className="shopping-carthomeselecttime6 screen">
        <div className="flex-col-295">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-6">
              <img className="arrow-back-30" src={arrowBack} />
              <div className="menu-42 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-82" src={line1} />
          <div className="shopping-cart-31 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-101" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-26">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-65">
                <img className="outline-125" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-30 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-307 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-29">{total}</div>
            <div className="x15200-won-86">{x15200Won}</div>
          </div>
          <img className="line-5-38" src={line5} />
        </div>
        <div className="flex-row-308 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-69">{weAre}</div>
          <div className="group-13-55">
            <Link to="/shopping-carthomeselecttime9">
              <div className="group-7-139">
                <img className="outline-125" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime2">
              <div className="group-8-159">
                <img className="outline-125" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-69">{people}</div>
        </div>
        <div className="overlap-group4-131">
          <div className="overlap-group3-166">
            <div className="overlap-group-618">
              <div className="complete-pre-order-29 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-66 border-1px-flamingo"></div>
            <div className="mins-69 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-75" src={line6} />
            <img className="arrow-drop-down-69" src={arrowDropDown} />
            <div className="select-45 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group2-210">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime54">
                <div className="less-than-1-13 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime54">
                <div className="less-than-5-21 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime108">
                <div className="less-than-10-29 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime109">
                <div className="less-than-15-28 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-69 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime7;
