import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime5.css";

function ShoppingCartHomeSelectTime5(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    image11,
    loadedBakedPotatoSoupRecipe33,
    outline_Add_Black_24Dp1,
    addMoreMenu,
    total,
    x45600Won,
    line5,
    weAre,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan5,
    completePreOrder,
    component131Props,
    component132Props,
    component133Props,
    group111Props,
    group10Props,
    group112Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-home-selecttime5 screen">
        <div className="flex-col-42">
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-54">
              <img className="arrow-back-4" src={arrowBack} />
              <div className="menu-9 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-7" src={line1} />
          <div className="shopping-cart-4 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-6" src={line2} />
          <Component13
            image8={component131Props.image8}
            pumkinSoup={component131Props.pumkinSoup}
            x15200Won={component131Props.x15200Won}
          />
          <div className="overlap-group-68">
            <Component13
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="image-11-6" src={image11} />
          </div>
          <div className="overlap-group-68">
            <Component13
              image8={component133Props.image8}
              pumkinSoup={component133Props.pumkinSoup}
              x15200Won={component133Props.x15200Won}
              className={component133Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-3" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <div className="group-12-4">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-12">
                <img className="outline_add_black_24dp-1-7" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-4 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-42 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-4">{total}</div>
            <div className="x45600-won-4">{x45600Won}</div>
          </div>
          <img className="line-5-7" src={line5} />
        </div>
        <div className="flex-row-43 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-4">{weAre}</div>
          <div className="group-13-4">
            <Group11 src={group111Props.src} className={group111Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} />
          </div>
          <div className="people-4">{people}</div>
        </div>
        <div className="flex-row-44">
          <div className="well-be-in-4 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-12">
            <div className="overlap-group4-15 border-1px-flamingo">
              <div className="group-14 border-1px-flamingo"></div>
            </div>
            <div className="mins-4 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-5" src={line6} />
            <img className="arrow-drop-down-4" src={arrowDropDown} />

            <div className="less-than-5-1 inter-extra-bold-black-15px">{lessThan5}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-2">
            <div className="overlap-group-69">
              <div className="complete-pre-order-4 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime5;
