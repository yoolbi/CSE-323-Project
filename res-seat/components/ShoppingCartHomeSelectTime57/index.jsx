import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime57.css";

function ShoppingCartHomeSelectTime57(props) {
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
    x30400Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
    outline_Add_Black_24Dp12,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan1,
    completePreOrder,
    component1321Props,
    component1322Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime56 screen">
        <div className="flex-col-290">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-7">
              <img className="arrow-back-25" src={arrowBack} />
              <div className="menu-37 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-77" src={line1} />
          <div className="shopping-cart-26 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-96" src={line2} />
          <div className="group-184">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-161">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-34" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-8">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-60">
                  <img className="outline-120" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-25 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-292 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-24">{total}</div>
              <div className="x30400-won-8">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-33" src={line5} />
        </div>
        <div className="flex-row-293 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-64">{weAre}</div>
          <div className="group-13-50">
            <Link to="/shopping-carthomeselecttime510">
              <div className="group-7-134">
                <img className="outline-120" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime53">
              <div className="group-8-154">
                <img className="outline-120" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-64">{people}</div>
        </div>
        <div className="flex-row-294">
          <div className="well-be-in-64 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-102">
            <div className="overlap-group4-126 border-1px-flamingo">
              <div className="group-14-29 border-1px-flamingo"></div>
            </div>
            <div className="mins-64 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-70" src={line6} />
            <Link to="/shopping-carthomeselecttime8">
              <img className="arrow-drop-down-64" src={arrowDropDown} />
            </Link>
            <div className="select-40 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-11 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <div className="group-28-55">
          <div className="overlap-group-613">
            <div className="complete-pre-order-24 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime57;
