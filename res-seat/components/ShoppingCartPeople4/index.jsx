import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople4.css";

function ShoppingCartPeople4(props) {
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
      <div className="shopping-cart-people4 screen">
        <div className="overlap-group7-19">
          <div className="group-40-3">
            <div className="flex-col-48">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52-3">
                  <img className="arrow-back-6" src={arrowBack} />
                  <div className="menu-12 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-10" src={line1} />
              <div className="shopping-cart-6 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-12" src={line2} />
              <Component13
                image8={component131Props.image8}
                pumkinSoup={component131Props.pumkinSoup}
                x15200Won={component131Props.x15200Won}
              />
              <div className="overlap-group-87">
                <Component13
                  image8={component132Props.image8}
                  pumkinSoup={component132Props.pumkinSoup}
                  x15200Won={component132Props.x15200Won}
                  className={component132Props.className}
                />
                <img className="easy-french-onion-so-3" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-87">
                <Component13
                  image8={component133Props.image8}
                  pumkinSoup={component133Props.pumkinSoup}
                  x15200Won={component133Props.x15200Won}
                  className={component133Props.className}
                />
                <img className="image-12-3" src={image12} />
              </div>
              <div className="group-12-6">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-14">
                    <img className="outline-20" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-6 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-56 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-6">{total}</div>
                <div className="x45600-won-6">{x45600Won}</div>
              </div>
              <img className="line-5-10" src={line5} />
            </div>
            <div className="flex-row-57 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-6">{weAre}</div>
              <div className="group-13-6">
                <Link to="/shopping-cart-home">
                  <div className="group-7-22">
                    <img className="outline-20" src={outline_Remove_Black_24Dp1} />
                  </div>
                </Link>
                <Group10>{group10Props.children}</Group10>
                <Group11 src={group11Props.src} />
              </div>
              <div className="people-6">{people}</div>
            </div>
            <div className="flex-row-58">
              <div className="well-be-in-6 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group5-18">
                <div className="group-11-15 border-1px-flamingo"></div>
                <div className="mins-6 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-7" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down-6" src={arrowDropDown} />
                </Link>
                <div className="select-6 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completed-preorder-home">
              <div className="group-28-4">
                <div className="overlap-group-88">
                  <div className="complete-pre-order-6 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <img className="image-11-7" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople4;
