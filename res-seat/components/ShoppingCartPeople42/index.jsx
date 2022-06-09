import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople42.css";

function ShoppingCartPeople42(props) {
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
    <div className="shopping-cartpeople4 screen">
      <div className="group-40-3">
        <div className="flex-col-303">
          <Link to="/restaurant-details-menu1">
            <div className="group-52-54">
              <img className="arrow-back-36" src={arrowBack} />
              <div className="menu-48 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-88" src={line1} />
          <div className="shopping-cart-37 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-114" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-31">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-73">
                <img className="outline-128" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-36 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-331 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-35">{total}</div>
            <div className="x15200-won-91">{x15200Won}</div>
          </div>
          <img className="line-5-44" src={line5} />
        </div>
        <div className="flex-row-332 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-75">{weAre}</div>
          <div className="group-13-61">
            <Link to="/shopping-cart-people3-2">
              <div className="group-7-142">
                <img className="outline-128" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-75">{people}</div>
        </div>
        <div className="flex-row-333">
          <div className="well-be-in-75 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group2-220">
            <div className="group-11-74 border-1px-flamingo"></div>
            <div className="mins-75 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-81" src={line6} />
            <img className="arrow-drop-down-75" src={arrowDropDown} />
            <div className="select-51 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home-11">
          <div className="group-28-65">
            <div className="overlap-group-631">
              <div className="complete-pre-order-35 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartPeople42;
