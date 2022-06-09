import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime106.css";

function ShoppingCartHomeSelectTime106(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    loadedBakedPotatoSoupRecipe34,
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
      <div className="shopping-carthomeselecttime105 screen">
        <div className="flex-col-274">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-6">
              <img className="arrow-back-12" src={arrowBack} />
              <div className="menu-24 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-64" src={line1} />
          <div className="shopping-cart-13 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-70" src={line2} />
          <div className="overlap-group2-182">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-5" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-15">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-43">
                <img className="outline-107" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-12 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-243 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-11">{total}</div>
            <div className="x15200-won-75">{x15200Won}</div>
          </div>
          <img className="line-5-20" src={line5} />
        </div>
        <div className="flex-row-244 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-51">{weAre}</div>
          <div className="group-13-37">
            <Link to="/shopping-carthomeselecttime1013">
              <div className="group-7-121">
                <img className="outline-107" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-51">{people}</div>
        </div>
        <div className="flex-row-245">
          <div className="well-be-in-51 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-110">
            <div className="overlap-group3-144 border-1px-flamingo">
              <div className="group-14-20 border-1px-flamingo"></div>
            </div>
            <div className="mins-51 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-57" src={line6} />
            <img className="arrow-drop-down-51" src={arrowDropDown} />
            <div className="select-27 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime4">
              <div className="less-than-15-19 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <div className="group-28-45">
          <div className="overlap-group-587">
            <div className="complete-pre-order-11 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime106;
