import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople44.css";

function ShoppingCartPeople44(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    easyFrenchOnionSoup3062131Hero012A9,
    image12,
    outline_Add_Black_24Dp1,
    addMoreMenu,
    total,
    x45600Won,
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
    image11,
    component1321Props,
    component1322Props,
    component1323Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-people4 screen">
        <div className="overlap-group7-73">
          <div className="group-40-11">
            <div className="flex-col-477">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52-65">
                  <img className="arrow-back-65" src={arrowBack} />
                  <div className="menu-102 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-140" src={line1} />
              <div className="shopping-cart-66 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-167" src={line2} />
              <Component132
                image8={component1321Props.image8}
                pumkinSoup={component1321Props.pumkinSoup}
                x15200Won={component1321Props.x15200Won}
                className={component1321Props.className}
              />
              <div className="overlap-group-1124">
                <Component132
                  image8={component1322Props.image8}
                  pumkinSoup={component1322Props.pumkinSoup}
                  x15200Won={component1322Props.x15200Won}
                  className={component1322Props.className}
                />
                <img className="easy-french-onion-so-3" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-1124">
                <Component132
                  image8={component1323Props.image8}
                  pumkinSoup={component1323Props.pumkinSoup}
                  x15200Won={component1323Props.x15200Won}
                  className={component1323Props.className}
                />
                <img className="image-12-28" src={image12} />
              </div>
              <div className="group-12-52">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-120">
                    <img className="outline-145" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-65 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-579 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-64">{total}</div>
                <div className="x45600-won-6">{x45600Won}</div>
              </div>
              <img className="line-5-96" src={line5} />
            </div>
            <div className="flex-row-580 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-104">{weAre}</div>
              <div className="group-13-90">
                <Link to="/shopping-cart-home">
                  <div className="group-7-159">
                    <img className="outline-145" src={outline_Remove_Black_24Dp1} />
                  </div>
                </Link>
                <Group10>{group10Props.children}</Group10>
                <Group11 src={group11Props.src} className={group11Props.className} />
              </div>
              <div className="people-104">{people}</div>
            </div>
            <div className="flex-row-581">
              <div className="well-be-in-104 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group5-189">
                <div className="group-11-121 border-1px-flamingo"></div>
                <div className="mins-104 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-110" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down-104" src={arrowDropDown} />
                </Link>
                <div className="select-80 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completed-preorder-home">
              <div className="group-28-86">
                <div className="overlap-group-1125">
                  <div className="complete-pre-order-64 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <img className="image-11-10" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople44;
