import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1025.css";

function ShoppingCartHomeSelectTime1025(props) {
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
    component1321Props,
    component1322Props,
    component1323Props,
    group111Props,
    group10Props,
    group112Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-home-selecttime10 screen">
        <div className="flex-col-474">
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-55-25">
              <img className="arrow-back-64" src={arrowBack} />
              <div className="menu-100 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-138" src={line1} />
          <div className="shopping-cart-65 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-164" src={line2} />
          <Component132
            image8={component1321Props.image8}
            pumkinSoup={component1321Props.pumkinSoup}
            x15200Won={component1321Props.x15200Won}
            className={component1321Props.className}
          />
          <div className="overlap-group-1118">
            <Component132
              image8={component1322Props.image8}
              pumkinSoup={component1322Props.pumkinSoup}
              x15200Won={component1322Props.x15200Won}
              className={component1322Props.className}
            />
            <img className="image-2-44" src={image2} />
          </div>
          <div className="overlap-group-1118">
            <Component132
              image8={component1323Props.image8}
              pumkinSoup={component1323Props.pumkinSoup}
              x15200Won={component1323Props.x15200Won}
              className={component1323Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-3-1" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <div className="group-12-51">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-119">
                <img className="outline_add_black_24dp-1-63" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-64 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-571 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-63">{total}</div>
            <div className="x45600-won-5">{x45600Won}</div>
          </div>
          <img className="line-5-94" src={line5} />
        </div>
        <div className="flex-row-572 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-103">{weAre}</div>
          <div className="group-13-89">
            <Group11 src={group111Props.src} className={group111Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-103">{people}</div>
        </div>
        <div className="flex-row-573">
          <div className="well-be-in-103 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-187">
            <div className="overlap-group4-271 border-1px-flamingo">
              <div className="group-14-48 border-1px-flamingo"></div>
            </div>
            <div className="mins-103 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-109" src={line6} />
            <img className="arrow-drop-down-103" src={arrowDropDown} />
            <div className="select-79 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-41 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-85">
            <div className="overlap-group-1119">
              <div className="complete-pre-order-63 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1025;
