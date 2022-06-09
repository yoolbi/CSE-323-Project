import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartHome.css";

function ShoppingCartHome(props) {
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
      <div className="shopping-cart-home screen">
        <div className="overlap-group7-65">
          <div className="group-40-8">
            <div className="flex-col-468">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52-62">
                  <img className="arrow-back-59" src={arrowBack} />
                  <div className="menu-95 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-133" src={line1} />
              <div className="shopping-cart-60 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-158" src={line2} />
              <Component132
                image8={component1321Props.image8}
                pumkinSoup={component1321Props.pumkinSoup}
                x15200Won={component1321Props.x15200Won}
                className={component1321Props.className}
              />
              <div className="overlap-group-1107">
                <Component132
                  image8={component1322Props.image8}
                  pumkinSoup={component1322Props.pumkinSoup}
                  x15200Won={component1322Props.x15200Won}
                  className={component1322Props.className}
                />
                <img className="easy-french-onion-so" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-1107">
                <Component132
                  image8={component1323Props.image8}
                  pumkinSoup={component1323Props.pumkinSoup}
                  x15200Won={component1323Props.x15200Won}
                  className={component1323Props.className}
                />
                <img className="image-12-25" src={image12} />
              </div>
              <div className="group-12-46">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-110">
                    <img className="outline-143" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-59 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-553 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-58">{total}</div>
                <div className="x45600-won">{x45600Won}</div>
              </div>
              <img className="line-5-89" src={line5} />
            </div>
            <div className="flex-row-554 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-98">{weAre}</div>
              <Link to="/shopping-cart-people4">
                <div className="group-13-84">
                  <Link to="/shopping-cart-people2">
                    <div className="group-7-157">
                      <img className="outline-143" src={outline_Remove_Black_24Dp1} />
                    </div>
                  </Link>
                  <Group10>{group10Props.children}</Group10>
                  <Group11 src={group11Props.src} className={group11Props.className} />
                </div>
              </Link>
              <div className="people-98">{people}</div>
            </div>
            <div className="flex-row-555">
              <div className="well-be-in-98 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group4-266">
                <div className="group-11-111 border-1px-flamingo"></div>
                <div className="mins-98 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-104" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down-98" src={arrowDropDown} />
                </Link>
                <div className="select-74 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <div className="overlap-group-1108">
              <div className="complete-pre-order-58 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
          <img className="image-11-5" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHome;
