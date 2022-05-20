import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartPeople1.css";

function ShoppingCartPeople1(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    easyFrenchOnionSoup3062131Hero012A9,
    image12,
    outline_Add_Black_24Dp11,
    addMoreMenu,
    total,
    x45600Won,
    line5,
    weAre,
    outline_Add_Black_24Dp12,
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
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-people1 screen">
        <div className="overlap-group7-11">
          <div className="group-40-2">
            <div className="flex-col-41">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52-2">
                  <img className="arrow-back-3" src={arrowBack} />
                  <div className="menu-8 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-6" src={line1} />
              <div className="shopping-cart-3 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-5" src={line2} />
              <Component13
                image8={component131Props.image8}
                pumkinSoup={component131Props.pumkinSoup}
                x15200Won={component131Props.x15200Won}
              />
              <div className="overlap-group-66">
                <Component13
                  image8={component132Props.image8}
                  pumkinSoup={component132Props.pumkinSoup}
                  x15200Won={component132Props.x15200Won}
                  className={component132Props.className}
                />
                <img className="easy-french-onion-so-2" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-66">
                <Component13
                  image8={component133Props.image8}
                  pumkinSoup={component133Props.pumkinSoup}
                  x15200Won={component133Props.x15200Won}
                  className={component133Props.className}
                />
                <img className="image-12-2" src={image12} />
              </div>
              <div className="group-12-3">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-10">
                    <img className="outline_add_black_24dp-1-6" src={outline_Add_Black_24Dp11} />
                  </div>
                </Link>
                <div className="add-more-menu-3 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-39 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-3">{total}</div>
                <div className="x45600-won-3">{x45600Won}</div>
              </div>
              <img className="line-5-6" src={line5} />
            </div>
            <div className="flex-row-40 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-3">{weAre}</div>
              <div className="group-13-3">
                <Group11 src={group11Props.src} className={group11Props.className} />
                <Group10>{group10Props.children}</Group10>
                <Link to="/shopping-cart-people2">
                  <div className="group-8-13">
                    <img className="outline_add_black_24dp-1-6" src={outline_Add_Black_24Dp12} />
                  </div>
                </Link>
              </div>
              <div className="people-3">{people}</div>
            </div>
            <div className="flex-row-41">
              <div className="well-be-in-3 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group4-14">
                <div className="group-11-11 border-1px-flamingo"></div>
                <div className="mins-3 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-4" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down-3" src={arrowDropDown} />
                </Link>
                <div className="select-3 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completed-preorder-home">
              <div className="group-28-1">
                <div className="overlap-group-67">
                  <div className="complete-pre-order-3 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <img className="image-11-5" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople1;
