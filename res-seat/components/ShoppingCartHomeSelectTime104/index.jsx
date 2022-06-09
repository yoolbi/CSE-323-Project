import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime104.css";

function ShoppingCartHomeSelectTime104(props) {
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
      <div className="shopping-carthomeselecttime103 screen">
        <div className="flex-col-272">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-4">
              <img className="arrow-back-10" src={arrowBack} />
              <div className="menu-22 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-62" src={line1} />
          <div className="shopping-cart-11 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-68" src={line2} />
          <div className="group-190">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-142">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-4" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-2">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-41">
                  <img className="outline-105" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-10 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-237 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-9">{total}</div>
              <div className="x30400-won-2">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-18" src={line5} />
        </div>
        <div className="flex-row-238 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-49">{weAre}</div>
          <div className="group-13-35">
            <Link to="/shopping-carthomeselecttime1014">
              <div className="group-7-119">
                <img className="outline-105" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1010">
              <div className="group-8-147">
                <img className="outline-105" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-49">{people}</div>
        </div>
        <div className="flex-row-239">
          <div className="well-be-in-49 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-79">
            <div className="overlap-group4-109 border-1px-flamingo">
              <div className="group-14-18 border-1px-flamingo"></div>
            </div>
            <div className="mins-49 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-55" src={line6} />
            <Link to="/shopping-carthomeselecttime3">
              <img className="arrow-drop-down-49" src={arrowDropDown} />
            </Link>
            <div className="select-25 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-20 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <div className="group-28-43">
          <div className="overlap-group-585">
            <div className="complete-pre-order-9 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime104;
