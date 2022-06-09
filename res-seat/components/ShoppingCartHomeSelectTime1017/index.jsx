import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1017.css";

function ShoppingCartHomeSelectTime1017(props) {
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
    lessThan10,
    completePreOrder,
    component132Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1016 screen">
        <div className="flex-col-299">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-17">
              <img className="arrow-back-33" src={arrowBack} />
              <div className="menu-45 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-85" src={line1} />
          <div className="shopping-cart-34 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-106" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-28">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-69">
                <img className="outline_add_black_24dp-1-48" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-33 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-317 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-32">{total}</div>
            <div className="x15200-won-88">{x15200Won}</div>
          </div>
          <img className="line-5-41" src={line5} />
        </div>
        <div className="flex-row-318 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-72">{weAre}</div>
          <div className="group-13-58">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime108">
              <div className="group-8-162">
                <img className="outline_add_black_24dp-1-48" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-72">{people}</div>
        </div>
        <div className="flex-row-319">
          <div className="well-be-in-72 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-170">
            <div className="overlap-group2-213 border-1px-flamingo">
              <div className="group-14-36 border-1px-flamingo"></div>
            </div>
            <div className="mins-72 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-78" src={line6} />
            <Link to="/shopping-carthomeselecttime9">
              <img className="arrow-drop-down-72" src={arrowDropDown} />
            </Link>
            <div className="select-48 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-30 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <div className="group-28-62">
          <div className="overlap-group-623">
            <div className="complete-pre-order-32 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1017;
