import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople3.css";

function ShoppingCartPeople3(props) {
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
    <div className="shopping-cart-people3-2 screen">
      <div className="group-40-1">
        <div className="flex-col-284">
          <Link to="/restaurant-details-menu1">
            <div className="group-52-52">
              <img className="arrow-back-19" src={arrowBack} />
              <div className="menu-31 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-71" src={line1} />
          <div className="shopping-cart-20 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-90" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-21">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-51">
                <img className="outline-114" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-19 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-276 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-18">{total}</div>
            <div className="x15200-won-81">{x15200Won}</div>
          </div>
          <img className="line-5-27" src={line5} />
        </div>
        <div className="flex-row-277 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-58">{weAre}</div>
          <Link to="/shopping-cartpeople4">
            <div className="group-13-44">
              <Link to="/shopping-cart-people2-2">
                <div className="group-7-128">
                  <img className="outline-114" src={outline_Remove_Black_24Dp1} />
                </div>
              </Link>
              <Group10>{group10Props.children}</Group10>
              <Group11 src={group11Props.src} className={group11Props.className} />
            </div>
          </Link>
          <div className="people-58">{people}</div>
        </div>
        <div className="flex-row-278">
          <div className="well-be-in-58 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group2-205">
            <div className="group-11-52 border-1px-flamingo"></div>
            <div className="mins-58 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-64" src={line6} />
            <Link to="/shopping-carthomeselecttime2">
              <img className="arrow-drop-down-58" src={arrowDropDown} />
            </Link>
            <div className="select-34 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <div className="group-28-51">
          <div className="overlap-group-607">
            <div className="complete-pre-order-18 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople3;
