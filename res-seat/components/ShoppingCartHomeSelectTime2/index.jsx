import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime2.css";

function ShoppingCartHomeSelectTime2(props) {
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
    group11Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime screen">
        <div className="flex-col-270">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-2">
              <img className="arrow-back-8" src={arrowBack} />
              <div className="menu-20 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-60" src={line1} />
          <div className="shopping-cart-9 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-66" src={line2} />
          <div className="group-192">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-140">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-2" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-1">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-38">
                  <img className="outline-103" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
              <div className="add-more-menu-8 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-232 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-7">{total}</div>
              <div className="x30400-won-1">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-16" src={line5} />
        </div>
        <div className="flex-row-233 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-47">{weAre}</div>
          <div className="group-13-33">
            <Link to="/shopping-carthomeselecttime3">
              <div className="group-7-117">
                <img className="outline-103" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-47">{people}</div>
        </div>
        <div className="overlap-group5-78">
          <div className="overlap-group4-107">
            <div className="overlap-group-583">
              <div className="complete-pre-order-7 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-39 border-1px-flamingo"></div>
            <div className="mins-47 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-53" src={line6} />
            <img className="arrow-drop-down-47" src={arrowDropDown} />
            <div className="select-23 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-309">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime55">
                <div className="less-than-1-5 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime55">
                <div className="less-than-5-17 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1010">
                <div className="less-than-10-18 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1011">
                <div className="less-than-15-18 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-47 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime2;
