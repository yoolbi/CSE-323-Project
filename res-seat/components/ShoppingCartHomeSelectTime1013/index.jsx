import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1013.css";

function ShoppingCartHomeSelectTime1013(props) {
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
    component132Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1012 screen">
        <div className="flex-col-292">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-13">
              <img className="arrow-back-27" src={arrowBack} />
              <div className="menu-39 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-79" src={line1} />
          <div className="shopping-cart-28 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-98" src={line2} />
          <div className="overlap-group2-208">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-36" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-24">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-62">
                <img className="outline-122" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-27 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-298 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-26">{total}</div>
            <div className="x15200-won-84">{x15200Won}</div>
          </div>
          <img className="line-5-35" src={line5} />
        </div>
        <div className="flex-row-299 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-66">{weAre}</div>
          <div className="group-13-52">
            <Link to="/shopping-carthomeselecttime1018">
              <div className="group-7-136">
                <img className="outline-122" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime102">
              <div className="group-8-156">
                <img className="outline-122" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-66">{people}</div>
        </div>
        <div className="flex-row-300">
          <div className="well-be-in-66 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-128">
            <div className="overlap-group3-163 border-1px-flamingo">
              <div className="group-14-31 border-1px-flamingo"></div>
            </div>
            <div className="mins-66 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-72" src={line6} />
            <Link to="/shopping-carthomeselecttime7">
              <img className="arrow-drop-down-66" src={arrowDropDown} />
            </Link>
            <div className="select-42 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-27 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome9">
          <div className="group-28-57">
            <div className="overlap-group-615">
              <div className="complete-pre-order-26 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1013;
