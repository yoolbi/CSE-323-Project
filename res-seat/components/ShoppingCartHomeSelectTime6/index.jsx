import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime6.css";

function ShoppingCartHomeSelectTime6(props) {
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
    component132Props,
    group10Props,
    group11Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime4 screen">
        <div className="flex-col-288">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-5">
              <img className="arrow-back-23" src={arrowBack} />
              <div className="menu-35 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-75" src={line1} />
          <div className="shopping-cart-24 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-94" src={line2} />
          <div className="overlap-group2-206">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-32" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-22">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-57">
                <img className="outline-118" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-23 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-287 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-22">{total}</div>
            <div className="x15200-won-82">{x15200Won}</div>
          </div>
          <img className="line-5-31" src={line5} />
        </div>
        <div className="flex-row-288 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-62">{weAre}</div>
          <div className="group-13-48">
            <Link to="/shopping-carthomeselecttime7">
              <div className="group-7-132">
                <img className="outline-118" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-62">{people}</div>
        </div>
        <div className="overlap-group4-124">
          <div className="overlap-group3-159">
            <div className="overlap-group-611">
              <div className="complete-pre-order-22 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-58 border-1px-flamingo"></div>
            <div className="mins-62 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-68" src={line6} />
            <img className="arrow-drop-down-62" src={arrowDropDown} />
            <div className="select-38 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-324">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime5">
                <div className="less-than-1-10 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime5">
                <div className="less-than-5-20 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime102">
                <div className="less-than-10-26 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime105">
                <div className="less-than-15-25 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-62 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime6;
