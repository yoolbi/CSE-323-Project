import React from "react";
import { Link } from "react-router-dom";
import Component13 from "../Component13";
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
    component131Props,
    component132Props,
    component133Props,
    group10Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-home screen">
        <div className="overlap-group7-6">
          <div className="group-40">
            <div className="flex-col-16">
              <Link to="/restaurant-details-menu1" className="align-self-flex-start">
                <div className="group-52">
                  <img className="arrow-back" src={arrowBack} />
                  <div className="menu-5 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-3" src={line1} />
              <div className="shopping-cart applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-1" src={line2} />
              <Component13
                image8={component131Props.image8}
                pumkinSoup={component131Props.pumkinSoup}
                x15200Won={component131Props.x15200Won}
              />
              <div className="overlap-group-31">
                <Component13
                  image8={component132Props.image8}
                  pumkinSoup={component132Props.pumkinSoup}
                  x15200Won={component132Props.x15200Won}
                  className={component132Props.className}
                />
                <img className="easy-french-onion-so" src={easyFrenchOnionSoup3062131Hero012A9} />
              </div>
              <div className="overlap-group-31">
                <Component13
                  image8={component133Props.image8}
                  pumkinSoup={component133Props.pumkinSoup}
                  x15200Won={component133Props.x15200Won}
                  className={component133Props.className}
                />
                <img className="image-12" src={image12} />
              </div>
              <div className="group-12">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11">
                    <img className="outline" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-15 applesdgothicneob00-regular-normal-black-28px">
                <div className="total">{total}</div>
                <div className="x45600-won">{x45600Won}</div>
              </div>
              <img className="line-5-3" src={line5} />
            </div>
            <div className="flex-row-16 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are">{weAre}</div>
              <Link to="/shopping-cart-people4">
                <div className="group-13">
                  <Link to="/shopping-cart-people2">
                    <div className="group-7">
                      <img className="outline" src={outline_Remove_Black_24Dp1} />
                    </div>
                  </Link>
                  <Group10>{group10Props.children}</Group10>
                  <Group11 src={group11Props.src} />
                </div>
              </Link>
              <div className="people">{people}</div>
            </div>
            <div className="flex-row-17">
              <div className="well-be-in applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group4-10">
                <div className="group-11-1 border-1px-flamingo"></div>
                <div className="mins applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6" src={line6} />
                <Link to="/shopping-cart-home-selecttime">
                  <img className="arrow-drop-down" src={arrowDropDown} />
                </Link>
                <div className="select inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <div className="overlap-group-32">
              <div className="complete-pre-order applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
          <img className="image-11-2" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHome;
