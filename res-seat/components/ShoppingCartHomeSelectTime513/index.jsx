import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime513.css";

function ShoppingCartHomeSelectTime513(props) {
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
    component1321Props,
    component1322Props,
    component1323Props,
    group111Props,
    group10Props,
    group112Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-home-selecttime5 screen">
        <div className="flex-col-473">
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-54-13">
              <img className="arrow-back-63" src={arrowBack} />
              <div className="menu-99 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-137" src={line1} />
          <div className="shopping-cart-64 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-163" src={line2} />
          <Component132
            image8={component1321Props.image8}
            pumkinSoup={component1321Props.pumkinSoup}
            x15200Won={component1321Props.x15200Won}
            className={component1321Props.className}
          />
          <div className="overlap-group-1116">
            <Component132
              image8={component1322Props.image8}
              pumkinSoup={component1322Props.pumkinSoup}
              x15200Won={component1322Props.x15200Won}
              className={component1322Props.className}
            />
            <img className="image-11-9" src={image11} />
          </div>
          <div className="overlap-group-1116">
            <Component132
              image8={component1323Props.image8}
              pumkinSoup={component1323Props.pumkinSoup}
              x15200Won={component1323Props.x15200Won}
              className={component1323Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-3" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <div className="group-12-50">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-118">
                <img className="outline_add_black_24dp-1-62" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-63 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-568 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-62">{total}</div>
            <div className="x45600-won-4">{x45600Won}</div>
          </div>
          <img className="line-5-93" src={line5} />
        </div>
        <div className="flex-row-569 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-102">{weAre}</div>
          <div className="group-13-88">
            <Group11 src={group111Props.src} className={group111Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-102">{people}</div>
        </div>
        <div className="flex-row-570">
          <div className="well-be-in-102 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-186">
            <div className="overlap-group4-270 border-1px-flamingo">
              <div className="group-14-47 border-1px-flamingo"></div>
            </div>
            <div className="mins-102 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-108" src={line6} />
            <img className="arrow-drop-down-102" src={arrowDropDown} />
            <div className="select-78 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-5-29 inter-extra-bold-black-15px">{lessThan5}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-84">
            <div className="overlap-group-1117">
              <div className="complete-pre-order-62 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime513;
