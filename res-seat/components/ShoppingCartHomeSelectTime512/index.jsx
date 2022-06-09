import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime512.css";

function ShoppingCartHomeSelectTime512(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    loadedBakedPotatoSoupRecipe34,
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
    lessThan1,
    completePreOrder,
    component132Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime511 screen">
        <div className="flex-col-384">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-12">
              <img className="arrow-back-53" src={arrowBack} />
              <div className="menu-68 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-108" src={line1} />
          <div className="shopping-cart-54 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-133" src={line2} />
          <div className="overlap-group2-260">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-54" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-41">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-101">
                <img className="outline_add_black_24dp-1-55" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-53 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-386 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-52">{total}</div>
            <div className="x15200-won-235">{x15200Won}</div>
          </div>
          <img className="line-5-64" src={line5} />
        </div>
        <div className="flex-row-387 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-92">{weAre}</div>
          <div className="group-13-78">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime59">
              <div className="group-8-177">
                <img className="outline_add_black_24dp-1-55" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-92">{people}</div>
        </div>
        <div className="flex-row-388">
          <div className="well-be-in-92 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-159">
            <div className="overlap-group3-193 border-1px-flamingo">
              <div className="group-14-44 border-1px-flamingo"></div>
            </div>
            <div className="mins-92 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-98" src={line6} />
            <Link to="/shopping-carthomeselecttime13">
              <img className="arrow-drop-down-92" src={arrowDropDown} />
            </Link>
            <div className="select-68 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-21 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome11">
          <div className="group-28-78">
            <div className="overlap-group-707">
              <div className="complete-pre-order-52 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime512;
