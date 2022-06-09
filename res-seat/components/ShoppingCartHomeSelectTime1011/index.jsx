import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHomeSelectTime1011.css";

function ShoppingCartHomeSelectTime1011(props) {
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
    lessThan10,
    completePreOrder,
    component1321Props,
    component1322Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1010 screen">
        <div className="flex-col-286">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-11">
              <img className="arrow-back-21" src={arrowBack} />
              <div className="menu-33 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-73" src={line1} />
          <div className="shopping-cart-22 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-92" src={line2} />
          <div className="group-195">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-157">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-30" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-5">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-54">
                  <img className="outline-116" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
              <div className="add-more-menu-21 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-282 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-20">{total}</div>
              <div className="x30400-won-5">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-29" src={line5} />
        </div>
        <div className="flex-row-283 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-60">{weAre}</div>
          <div className="group-13-46">
            <Link to="/shopping-carthomeselecttime103">
              <div className="group-7-130">
                <img className="outline-116" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-60">{people}</div>
        </div>
        <div className="flex-row-284">
          <div className="well-be-in-60 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-99">
            <div className="overlap-group4-122 border-1px-flamingo">
              <div className="group-14-27 border-1px-flamingo"></div>
            </div>
            <div className="mins-60 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-66" src={line6} />
            <Link to="/shopping-carthomeselecttime">
              <img className="arrow-drop-down-60" src={arrowDropDown} />
            </Link>
            <div className="select-36 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-24 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <div className="group-28-53">
          <div className="overlap-group-609">
            <div className="complete-pre-order-20 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1011;
