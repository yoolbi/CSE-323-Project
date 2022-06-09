import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime12.css";

function ShoppingCartHomeSelectTime12(props) {
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
      <div className="shopping-carthomeselecttime11 screen">
        <div className="flex-col-383">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-10">
              <img className="arrow-back-52" src={arrowBack} />
              <div className="menu-67 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-107" src={line1} />
          <div className="shopping-cart-53 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-132" src={line2} />
          <div className="overlap-group2-259">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-53" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-40">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-99">
                <img className="outline-141" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-52 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-384 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-51">{total}</div>
            <div className="x15200-won-234">{x15200Won}</div>
          </div>
          <img className="line-5-63" src={line5} />
        </div>
        <div className="flex-row-385 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-91">{weAre}</div>
          <div className="group-13-77">
            <Link to="/shopping-carthomeselecttime13">
              <div className="group-7-155">
                <img className="outline-141" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime7">
              <div className="group-8-176">
                <img className="outline-141" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-91">{people}</div>
        </div>
        <div className="overlap-group4-158">
          <div className="overlap-group3-192">
            <div className="overlap-group-706">
              <div className="complete-pre-order-51 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-100 border-1px-flamingo"></div>
            <div className="mins-91 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-97" src={line6} />
            <img className="arrow-drop-down-91" src={arrowDropDown} />
            <div className="select-67 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-457">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime59">
                <div className="less-than-1-20 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime59">
                <div className="less-than-5-25 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1018">
                <div className="less-than-10-36 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1019">
                <div className="less-than-15-36 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-91 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime12;
