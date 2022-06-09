import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartPeople141.css";

function ShoppingCartPeople141(props) {
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
    outline_Add_Black_24Dp12,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    completePreOrder,
    component132Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="shopping-cart-people1-2 screen">
      <div className="group-40-6">
        <div className="flex-col-360">
          <Link to="/restaurant-details-menu1">
            <div className="group-52-58">
              <img className="arrow-back-49" src={arrowBack} />
              <div className="menu-64 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-104" src={line1} />
          <div className="shopping-cart-50 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-129" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-39">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-93">
                <img className="outline_add_black_24dp-1-54" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-49 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-375 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-48">{total}</div>
            <div className="x15200-won-233">{x15200Won}</div>
          </div>
          <img className="line-5-60" src={line5} />
        </div>
        <div className="flex-row-376 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-88">{weAre}</div>
          <div className="group-13-74">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cart-people2-2">
              <div className="group-8-175">
                <img className="outline_add_black_24dp-1-54" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-88">{people}</div>
        </div>
        <div className="flex-row-377">
          <div className="well-be-in-88 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group2-258">
            <div className="group-11-94 border-1px-flamingo"></div>
            <div className="mins-88 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-94" src={line6} />
            <Link to="/shopping-carthomeselecttime9">
              <img className="arrow-drop-down-88" src={arrowDropDown} />
            </Link>
            <div className="select-64 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <div className="group-28-75">
          <div className="overlap-group-703">
            <div className="complete-pre-order-48 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople141;
