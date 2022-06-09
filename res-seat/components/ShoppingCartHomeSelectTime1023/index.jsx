import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1023.css";

function ShoppingCartHomeSelectTime1023(props) {
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
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1022 screen">
        <div className="flex-col-385">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-23">
              <img className="arrow-back-54" src={arrowBack} />
              <div className="menu-69 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-109" src={line1} />
          <div className="shopping-cart-55 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-134" src={line2} />
          <div className="overlap-group2-261">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-55" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-42">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-102">
                <img className="outline_add_black_24dp-1-56" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-54 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-389 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-53">{total}</div>
            <div className="x15200-won-236">{x15200Won}</div>
          </div>
          <img className="line-5-65" src={line5} />
        </div>
        <div className="flex-row-390 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-93">{weAre}</div>
          <div className="group-13-79">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1018">
              <div className="group-8-178">
                <img className="outline_add_black_24dp-1-56" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-93">{people}</div>
        </div>
        <div className="flex-row-391">
          <div className="well-be-in-93 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-160">
            <div className="overlap-group3-194 border-1px-flamingo">
              <div className="group-14-45 border-1px-flamingo"></div>
            </div>
            <div className="mins-93 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-99" src={line6} />
            <Link to="/shopping-carthomeselecttime13">
              <img className="arrow-drop-down-93" src={arrowDropDown} />
            </Link>
            <div className="select-69 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-37 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome11">
          <div className="group-28-79">
            <div className="overlap-group-708">
              <div className="complete-pre-order-53 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1023;
