import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime105.css";

function ShoppingCartHomeSelectTime105(props) {
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
    lessThan10,
    completePreOrder,
    component132Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime104 screen">
        <div className="flex-col-273">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-5">
              <img className="arrow-back-11" src={arrowBack} />
              <div className="menu-23 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-63" src={line1} />
          <div className="shopping-cart-12 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-69" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-14">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-42">
                <img className="outline-106" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-11 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-240 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-10">{total}</div>
            <div className="x15200-won-74">{x15200Won}</div>
          </div>
          <img className="line-5-19" src={line5} />
        </div>
        <div className="flex-row-241 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-50">{weAre}</div>
          <div className="group-13-36">
            <Link to="/shopping-cart-home-selecttime10-23">
              <div className="group-7-120">
                <img className="outline-106" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-50">{people}</div>
        </div>
        <div className="flex-row-242">
          <div className="well-be-in-50 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-143">
            <div className="overlap-group2-181 border-1px-flamingo">
              <div className="group-14-19 border-1px-flamingo"></div>
            </div>
            <div className="mins-50 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-56" src={line6} />
            <Link to="/shopping-cart-home-selecttime-11">
              <img className="arrow-drop-down-50" src={arrowDropDown} />
            </Link>
            <div className="select-26 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-21 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home-11">
          <div className="group-28-44">
            <div className="overlap-group-586">
              <div className="complete-pre-order-10 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime105;
