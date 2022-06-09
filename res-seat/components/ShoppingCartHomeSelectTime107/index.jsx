import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime107.css";

function ShoppingCartHomeSelectTime107(props) {
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
    lessThan15,
    completePreOrder,
    component132Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime106 screen">
        <div className="flex-col-275">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-7">
              <img className="arrow-back-13" src={arrowBack} />
              <div className="menu-25 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-65" src={line1} />
          <div className="shopping-cart-14 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-71" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-16">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-44">
                <img className="outline-108" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-13 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-246 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-12">{total}</div>
            <div className="x15200-won-76">{x15200Won}</div>
          </div>
          <img className="line-5-21" src={line5} />
        </div>
        <div className="flex-row-247 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-52">{weAre}</div>
          <div className="group-13-38">
            <Link to="/shopping-carthomeselecttime10">
              <div className="group-7-122">
                <img className="outline-108" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-52">{people}</div>
        </div>
        <div className="flex-row-248">
          <div className="well-be-in-52 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-145">
            <div className="overlap-group2-183 border-1px-flamingo">
              <div className="group-14-21 border-1px-flamingo"></div>
            </div>
            <div className="mins-52 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-58" src={line6} />
            <img className="arrow-drop-down-52" src={arrowDropDown} />
            <div className="select-28 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-cart-home-selecttime-11">
              <div className="less-than-15-20 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <Link to="/completed-preorder-home-11">
          <div className="group-28-46">
            <div className="overlap-group-588">
              <div className="complete-pre-order-12 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime107;
