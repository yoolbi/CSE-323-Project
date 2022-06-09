import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople22.css";

function ShoppingCartPeople22(props) {
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
    component1321Props,
    component1322Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople2 screen">
        <div className="flex-col-382">
          <Link to="/restaurant-details-menu1">
            <div className="group-52-60">
              <img className="arrow-back-51" src={arrowBack} />
              <div className="menu-66 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-106" src={line1} />
          <div className="shopping-cart-52 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-131" src={line2} />
          <div className="group-174">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-191">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-52" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-17">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-97">
                  <img className="outline-140" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
              <div className="add-more-menu-51 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-381 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-50">{total}</div>
              <div className="x30400-won-17">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-62" src={line5} />
        </div>
        <div className="flex-row-382 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-90">{weAre}</div>
          <Link to="/shopping-cartpeople3">
            <div className="group-13-76">
              <div className="group-7-154">
                <img className="outline-140" src={outline_Remove_Black_24Dp1} />
              </div>
              <Group10>{group10Props.children}</Group10>
              <Group11 src={group11Props.src} className={group11Props.className} />
            </div>
          </Link>
          <div className="people-90">{people}</div>
        </div>
        <div className="flex-row-383">
          <div className="well-be-in-90 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-157">
            <div className="group-11-98 border-1px-flamingo"></div>
            <div className="mins-90 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-96" src={line6} />
            <Link to="/shopping-carthomeselecttime8">
              <img className="arrow-drop-down-90" src={arrowDropDown} />
            </Link>
            <div className="select-66 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <div className="group-28-77">
          <div className="overlap-group-705">
            <div className="complete-pre-order-50 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople22;
