import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime108.css";

function ShoppingCartHomeSelectTime108(props) {
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
    lessThan15,
    completePreOrder,
    component1321Props,
    component1322Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime107 screen">
        <div className="flex-col-276">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-8">
              <img className="arrow-back-14" src={arrowBack} />
              <div className="menu-26 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-66" src={line1} />
          <div className="shopping-cart-15 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-72" src={line2} />
          <div className="group-191">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-146">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-6" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-3">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-45">
                  <img className="outline-109" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-14 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-249 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-13">{total}</div>
              <div className="x30400-won-3">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-22" src={line5} />
        </div>
        <div className="flex-row-250 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-53">{weAre}</div>
          <div className="group-13-39">
            <Link to="/shopping-carthomeselecttime1015">
              <div className="group-7-123">
                <img className="outline-109" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1011">
              <div className="group-8-148">
                <img className="outline-109" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-53">{people}</div>
        </div>
        <div className="flex-row-251">
          <div className="well-be-in-53 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-80">
            <div className="overlap-group4-111 border-1px-flamingo">
              <div className="group-14-22 border-1px-flamingo"></div>
            </div>
            <div className="mins-53 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-59" src={line6} />
            <img className="arrow-drop-down-53" src={arrowDropDown} />
            <div className="select-29 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime3">
              <div className="less-than-15-21 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <div className="group-28-47">
          <div className="overlap-group-589">
            <div className="complete-pre-order-13 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime108;
