import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Component133 from "../Component133";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople32.css";

function ShoppingCartPeople32(props) {
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
    completePreOrder,
    component132Props,
    component133Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople3 screen">
        <div className="flex-col-304">
          <Link to="/restaurant-details-menu1">
            <div className="group-52-55">
              <img className="arrow-back-37" src={arrowBack} />
              <div className="menu-49 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-89" src={line1} />
          <div className="shopping-cart-38 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-115" src={line2} />
          <div className="group-175-4">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <div className="overlap-group2-221">
              <Component133 pumkinSoup={component133Props.pumkinSoup} />
              <img className="loaded-baked-potato-soup-recipe-3-4-41" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-11">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-75">
                  <img className="outline-129" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
              <div className="add-more-menu-37 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-334 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-36">{total}</div>
              <div className="x30400-won-11">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-45" src={line5} />
        </div>
        <div className="flex-row-335 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-76">{weAre}</div>
          <Link to="/shopping-cartpeople42">
            <div className="group-13-62">
              <Link to="/shopping-cartpeople2">
                <div className="group-7-143">
                  <img className="outline-129" src={outline_Remove_Black_24Dp1} />
                </div>
              </Link>
              <Group10>{group10Props.children}</Group10>
              <Group11 src={group11Props.src} className={group11Props.className} />
            </div>
          </Link>
          <div className="people-76">{people}</div>
        </div>
        <div className="flex-row-336">
          <div className="well-be-in-76 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-172">
            <div className="group-11-76 border-1px-flamingo"></div>
            <div className="mins-76 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-82" src={line6} />
            <Link to="/shopping-carthomeselecttime3">
              <img className="arrow-drop-down-76" src={arrowDropDown} />
            </Link>
            <div className="select-52 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <div className="group-28-66">
          <div className="overlap-group-632">
            <div className="complete-pre-order-36 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople32;
