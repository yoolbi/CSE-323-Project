import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartPeople142.css";

function ShoppingCartPeople142(props) {
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
    component1321Props,
    component1322Props,
    component1323Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-people1 screen">
        <div className="overlap-group7-69">
          <div className="group-40-10">
            <div className="flex-col-472">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52-64">
                  <img className="arrow-back-62" src={arrowBack} />
                  <div className="menu-98 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-136" src={line1} />
              <div className="shopping-cart-63 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-162" src={line2} />
              <Component132
                image8={component1321Props.image8}
                pumkinSoup={component1321Props.pumkinSoup}
                x15200Won={component1321Props.x15200Won}
                className={component1321Props.className}
              />
              <div className="overlap-group-1114">
                <Component132
                  image8={component1322Props.image8}
                  pumkinSoup={component1322Props.pumkinSoup}
                  x15200Won={component1322Props.x15200Won}
                  className={component1322Props.className}
                />
                <img className="easy-french-onion-so-2" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-1114">
                <Component132
                  image8={component1323Props.image8}
                  pumkinSoup={component1323Props.pumkinSoup}
                  x15200Won={component1323Props.x15200Won}
                  className={component1323Props.className}
                />
                <img className="image-12-27" src={image12} />
              </div>
              <div className="group-12-49">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-116">
                    <img className="outline_add_black_24dp-1-61" src={outline_Add_Black_24Dp11} />
                  </div>
                </Link>
                <div className="add-more-menu-62 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-565 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-61">{total}</div>
                <div className="x45600-won-3">{x45600Won}</div>
              </div>
              <img className="line-5-92" src={line5} />
            </div>
            <div className="flex-row-566 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-101">{weAre}</div>
              <div className="group-13-87">
                <Group11 src={group11Props.src} />
                <Group10>{group10Props.children}</Group10>
                <Link to="/shopping-cart-people2">
                  <div className="group-8-182">
                    <img className="outline_add_black_24dp-1-61" src={outline_Add_Black_24Dp12} />
                  </div>
                </Link>
              </div>
              <div className="people-101">{people}</div>
            </div>
            <div className="flex-row-567">
              <div className="well-be-in-101 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group4-269">
                <div className="group-11-117 border-1px-flamingo"></div>
                <div className="mins-101 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-107" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down-101" src={arrowDropDown} />
                </Link>
                <div className="select-77 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completed-preorder-home">
              <div className="group-28-83">
                <div className="overlap-group-1115">
                  <div className="complete-pre-order-61 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <img className="image-11-8" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople142;
