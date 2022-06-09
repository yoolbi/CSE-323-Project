import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime56.css";

function ShoppingCartHomeSelectTime56(props) {
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
    x30400Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
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
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime55 screen">
        <div className="flex-col-285">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-6">
              <img className="arrow-back-20" src={arrowBack} />
              <div className="menu-32 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-72" src={line1} />
          <div className="shopping-cart-21 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-91" src={line2} />
          <div className="group-193">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-156">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-29" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-4">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-53">
                  <img className="outline-115" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
              <div className="add-more-menu-20 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-279 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-19">{total}</div>
              <div className="x30400-won-4">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-28" src={line5} />
        </div>
        <div className="flex-row-280 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-59">{weAre}</div>
          <div className="group-13-45">
            <Link to="/shopping-carthomeselecttime53">
              <div className="group-7-129">
                <img className="outline-115" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-59">{people}</div>
        </div>
        <div className="flex-row-281">
          <div className="well-be-in-59 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-98">
            <div className="overlap-group4-121 border-1px-flamingo">
              <div className="group-14-26 border-1px-flamingo"></div>
            </div>
            <div className="mins-59 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-65" src={line6} />
            <Link to="/shopping-carthomeselecttime">
              <img className="arrow-drop-down-59" src={arrowDropDown} />
            </Link>
            <div className="select-35 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-8 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <div className="group-28-52">
          <div className="overlap-group-608">
            <div className="complete-pre-order-19 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime56;
