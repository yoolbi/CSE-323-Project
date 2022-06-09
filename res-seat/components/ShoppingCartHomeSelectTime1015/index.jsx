import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1015.css";

function ShoppingCartHomeSelectTime1015(props) {
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
    lessThan10,
    completePreOrder,
    component1321Props,
    component1322Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1014 screen">
        <div className="flex-col-294">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-15">
              <img className="arrow-back-29" src={arrowBack} />
              <div className="menu-41 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-81" src={line1} />
          <div className="shopping-cart-30 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-100" src={line2} />
          <div className="group-183">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-165">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-38" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-9">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-64">
                  <img className="outline-124" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-29 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-304 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-28">{total}</div>
              <div className="x30400-won-9">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-37" src={line5} />
        </div>
        <div className="flex-row-305 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-68">{weAre}</div>
          <div className="group-13-54">
            <Link to="/shopping-carthomeselecttime1020">
              <div className="group-7-138">
                <img className="outline-124" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime103">
              <div className="group-8-158">
                <img className="outline-124" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-68">{people}</div>
        </div>
        <div className="flex-row-306">
          <div className="well-be-in-68 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-103">
            <div className="overlap-group4-130 border-1px-flamingo">
              <div className="group-14-33 border-1px-flamingo"></div>
            </div>
            <div className="mins-68 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-74" src={line6} />
            <Link to="/shopping-carthomeselecttime8">
              <img className="arrow-drop-down-68" src={arrowDropDown} />
            </Link>
            <div className="select-44 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-28 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <div className="group-28-59">
          <div className="overlap-group-617">
            <div className="complete-pre-order-28 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1015;
