import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime10.css";

function ShoppingCartHomeSelectTime10(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    image2,
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
    lessThan10,
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
      <div className="shopping-cart-home-selecttime10 screen">
        <div className="flex-col-43">
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-55">
              <img className="arrow-back-5" src={arrowBack} />
              <div className="menu-10 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-8" src={line1} />
          <div className="shopping-cart-5 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-7" src={line2} />
          <Component13
            image8={component131Props.image8}
            pumkinSoup={component131Props.pumkinSoup}
            x15200Won={component131Props.x15200Won}
          />
          <div className="overlap-group-70">
            <Component13
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="image-2-9" src={image2} />
          </div>
          <div className="overlap-group-70">
            <Component13
              image8={component133Props.image8}
              pumkinSoup={component133Props.pumkinSoup}
              x15200Won={component133Props.x15200Won}
              className={component133Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-3-1" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <div className="group-12-5">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-13">
                <img className="outline_add_black_24dp-1-8" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-5 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-45 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-5">{total}</div>
            <div className="x45600-won-5">{x45600Won}</div>
          </div>
          <img className="line-5-8" src={line5} />
        </div>
        <div className="flex-row-46 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-5">{weAre}</div>
          <div className="group-13-5">
            <Group11 src={group111Props.src} className={group111Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} />
          </div>
          <div className="people-5">{people}</div>
        </div>
        <div className="flex-row-47">
          <div className="well-be-in-5 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-13">
            <div className="overlap-group4-16 border-1px-flamingo">
              <div className="group-14-1 border-1px-flamingo"></div>
            </div>
            <div className="mins-5 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-6" src={line6} />
            <img className="arrow-drop-down-5" src={arrowDropDown} />
            <div className="select-5 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-1 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-3">
            <div className="overlap-group-71">
              <div className="complete-pre-order-5 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime10;
