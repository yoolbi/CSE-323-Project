import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople2.css";

function ShoppingCartPeople2(props) {
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
    component131Props,
    component132Props,
    component133Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-people2 screen">
        <div className="overlap-group7-7">
          <div className="group-40-1">
            <div className="flex-col-32">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52-1">
                  <img className="arrow-back-1" src={arrowBack} />
                  <div className="menu-6 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-4" src={line1} />
              <div className="shopping-cart-1 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-2" src={line2} />
              <Component13
                image8={component131Props.image8}
                pumkinSoup={component131Props.pumkinSoup}
                x15200Won={component131Props.x15200Won}
              />
              <div className="overlap-group-60">
                <Component13
                  image8={component132Props.image8}
                  pumkinSoup={component132Props.pumkinSoup}
                  x15200Won={component132Props.x15200Won}
                  className={component132Props.className}
                />
                <img className="easy-french-onion-so-1" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-60">
                <Component13
                  image8={component133Props.image8}
                  pumkinSoup={component133Props.pumkinSoup}
                  x15200Won={component133Props.x15200Won}
                  className={component133Props.className}
                />
                <img className="image-12-1" src={image12} />
              </div>
              <div className="group-12-1">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-6">
                    <img className="outline-19" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-1 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-27 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-1">{total}</div>
                <div className="x45600-won-1">{x45600Won}</div>
              </div>
              <img className="line-5-4" src={line5} />
            </div>
            <div className="flex-row-28 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-1">{weAre}</div>
              <Link to="/shopping-cart-home">
                <div className="group-13-1">
                  <Link to="/shopping-cart-people1">
                    <div className="group-7-21">
                      <img className="outline-19" src={outline_Remove_Black_24Dp1} />
                    </div>
                  </Link>
                  <Group10>{group10Props.children}</Group10>
                  <Group11 src={group11Props.src} />
                </div>
              </Link>
              <div className="people-1">{people}</div>
            </div>
            <div className="flex-row-29">
              <div className="well-be-in-1 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group5-8">
                <div className="group-11-7 border-1px-flamingo"></div>
                <div className="mins-1 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-1" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down-1" src={arrowDropDown} />
                </Link>
                <div className="select-1 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completed-preorder-home">
              <div className="group-28">
                <div className="overlap-group-61">
                  <div className="complete-pre-order-1 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <img className="image-11-3" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople2;
