import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import "./ShoppingCartPeople24.css";

function ShoppingCartPeople24(props) {
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
      <div className="shopping-cart-people2 screen">
        <div className="overlap-group7-66">
          <div className="group-40-9">
            <div className="flex-col-469">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52-63">
                  <img className="arrow-back-60" src={arrowBack} />
                  <div className="menu-96 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-134" src={line1} />
              <div className="shopping-cart-61 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-159" src={line2} />
              <Component132
                image8={component1321Props.image8}
                pumkinSoup={component1321Props.pumkinSoup}
                x15200Won={component1321Props.x15200Won}
                className={component1321Props.className}
              />
              <div className="overlap-group-1109">
                <Component132
                  image8={component1322Props.image8}
                  pumkinSoup={component1322Props.pumkinSoup}
                  x15200Won={component1322Props.x15200Won}
                  className={component1322Props.className}
                />
                <img className="easy-french-onion-so-1" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-1109">
                <Component132
                  image8={component1323Props.image8}
                  pumkinSoup={component1323Props.pumkinSoup}
                  x15200Won={component1323Props.x15200Won}
                  className={component1323Props.className}
                />
                <img className="image-12-26" src={image12} />
              </div>
              <div className="group-12-47">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-112">
                    <img className="outline-144" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-60 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-556 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-59">{total}</div>
                <div className="x45600-won-1">{x45600Won}</div>
              </div>
              <img className="line-5-90" src={line5} />
            </div>
            <div className="flex-row-557 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-99">{weAre}</div>
              <Link to="/shopping-cart-home">
                <div className="group-13-85">
                  <Link to="/shopping-cart-people1">
                    <div className="group-7-158">
                      <img className="outline-144" src={outline_Remove_Black_24Dp1} />
                    </div>
                  </Link>
                  <Group10>{group10Props.children}</Group10>
                  <Group11 src={group11Props.src} className={group11Props.className} />
                </div>
              </Link>
              <div className="people-99">{people}</div>
            </div>
            <div className="flex-row-558">
              <div className="well-be-in-99 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group5-183">
                <div className="group-11-113 border-1px-flamingo"></div>
                <div className="mins-99 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-105" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down-99" src={arrowDropDown} />
                </Link>
                <div className="select-75 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completed-preorder-home">
              <div className="group-28-82">
                <div className="overlap-group-1110">
                  <div className="complete-pre-order-59 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <img className="image-11-6" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople24;
