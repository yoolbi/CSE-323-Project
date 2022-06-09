import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime8.css";

function ShoppingCartHomeSelectTime8(props) {
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
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime7 screen">
        <div className="flex-col-310">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-7">
              <img className="arrow-back-39" src={arrowBack} />
              <div className="menu-51 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-91" src={line1} />
          <div className="shopping-cart-40 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-117" src={line2} />
          <div className="overlap-group2-223">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-42" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-33">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-79">
                <img className="outline-133" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-39 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-342 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-38">{total}</div>
            <div className="x15200-won-95">{x15200Won}</div>
          </div>
          <img className="line-5-47" src={line5} />
        </div>
        <div className="flex-row-343 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-78">{weAre}</div>
          <div className="group-13-64">
            <Link to="/shopping-carthomeselecttime11">
              <div className="group-7-147">
                <img className="outline-133" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime4">
              <div className="group-8-166">
                <img className="outline-133" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-78">{people}</div>
        </div>
        <div className="overlap-group4-139">
          <div className="overlap-group3-173">
            <div className="overlap-group-636">
              <div className="complete-pre-order-38 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-80 border-1px-flamingo"></div>
            <div className="mins-78 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-84" src={line6} />
            <img className="arrow-drop-down-78" src={arrowDropDown} />
            <div className="select-54 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-333">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime57">
                <div className="less-than-1-15 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime57">
                <div className="less-than-5-22 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1012">
                <div className="less-than-10-31 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1013">
                <div className="less-than-15-31 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-78 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime8;
