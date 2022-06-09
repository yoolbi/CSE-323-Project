import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime4.css";

function ShoppingCartHomeSelectTime4(props) {
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
    completePreOrder,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan1,
    lessThan5,
    lessThan10,
    lessThan15,
    wellBeIn,
    component1321Props,
    component1322Props,
    group10Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime3 screen">
        <div className="flex-col-287">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-4">
              <img className="arrow-back-22" src={arrowBack} />
              <div className="menu-34 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-74" src={line1} />
          <div className="shopping-cart-23 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-93" src={line2} />
          <div className="group-187">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-158">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-31" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-6">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-55">
                  <img className="outline-117" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-22 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-285 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-21">{total}</div>
              <div className="x30400-won-6">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-30" src={line5} />
        </div>
        <div className="flex-row-286 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-61">{weAre}</div>
          <div className="group-13-47">
            <Link to="/shopping-carthomeselecttime8">
              <div className="group-7-131">
                <img className="outline-117" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime">
              <div className="group-8-153">
                <img className="outline-117" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-61">{people}</div>
        </div>
        <div className="overlap-group5-100">
          <div className="overlap-group4-123">
            <div className="overlap-group-610">
              <div className="complete-pre-order-21 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-56 border-1px-flamingo"></div>
            <div className="mins-61 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-67" src={line6} />
            <img className="arrow-drop-down-61" src={arrowDropDown} />
            <div className="select-37 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-323">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime53">
                <div className="less-than-1-9 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime53">
                <div className="less-than-5-19 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime103">
                <div className="less-than-10-25 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime107">
                <div className="less-than-15-24 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-61 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime4;
