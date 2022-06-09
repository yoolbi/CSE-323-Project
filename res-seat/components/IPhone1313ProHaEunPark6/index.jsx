import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import "./IPhone1313ProHaEunPark6.css";

function IPhone1313ProHaEunPark6(props) {
  const {
    menu,
    shoppingCart,
    easyFrenchOnionSoup3062131Hero012A9,
    loadedBakedPotatoSoupRecipe31,
    addMoreMenu,
    total,
    x45200Won,
    weAre,
    number,
    people,
    wellBeIn,
    mins,
    select,
    completePreOrder,
    component1321Props,
    component1322Props,
    component1323Props,
    group111Props,
    group112Props,
    group113Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-haeun-park4 screen">
        <div className="flex-col-501">
          <div className="flex-row-645">
            <Link to="/hanam-details-menu-pb">
              <img className="arrow-back-69" src="/img/arrow-back-2@2x.svg" />
            </Link>
            <div className="menu-113 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
          <img className="line-1-151" src="/img/line-1@2x.svg" />
          <div className="shopping-cart-70 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-176" src="/img/line-1@2x.svg" />
          <Component132
            pumkinSoup={component1321Props.pumkinSoup}
            image8={component1321Props.image8}
            x15200Won={component1321Props.x15200Won}
            className={component1321Props.className}
          />
          <div className="overlap-group-1159">
            <Component132
              pumkinSoup={component1322Props.pumkinSoup}
              image8={component1322Props.image8}
              x15200Won={component1322Props.x15200Won}
              className={component1322Props.className}
            />
            <img className="easy-french-onion-so-5" src={easyFrenchOnionSoup3062131Hero012A9} />
          </div>
          <div className="overlap-group-1159">
            <Component132
              pumkinSoup={component1323Props.pumkinSoup}
              image8={component1323Props.image8}
              x15200Won={component1323Props.x15200Won}
              className={component1323Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-1-2" src={loadedBakedPotatoSoupRecipe31} />
          </div>
          <Link to="/restaurant-details-menu1" className="align-self-flex-start">
            <div className="group-12-56">
              <Group11 src={group111Props.src} className={group111Props.className} />
              <div className="add-more-menu-69 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
          </Link>
          <div className="flex-row-646 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-68">{total}</div>
            <div className="x45200-won-3">{x45200Won}</div>
          </div>
          <img className="line-5-107" src="/img/line-5@2x.svg" />
        </div>
        <div className="flex-row-647">
          <div className="we-are-108 applesdgothicneob00-regular-normal-black-25px">{weAre}</div>
          <div className="group-13-96">
            <Group11 src={group112Props.src} className={group112Props.className} />
            <div className="overlap-group-1160">
              <div className="group-9-111"></div>
              <div className="number-267 applesdgothicneob00-regular-normal-black-23px">{number}</div>
            </div>
            <Group11 src={group113Props.src} className={group113Props.className} />
          </div>
          <div className="people-108 applesdgothicneob00-regular-normal-black-25px">{people}</div>
        </div>
        <div className="flex-row-648">
          <div className="well-be-in-108 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-298">
            <div className="group-11-124 border-1px-flamingo"></div>
            <div className="mins-108 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-114" src="/img/line-6@2x.svg" />
            <Link to="/shopping-cart-home-selecttime">
              <img className="arrow-drop-down-112" src="/img/arrow-drop-down@2x.svg" />
            </Link>
            <div className="select-84 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <Link to="/completed-preorder-home">
          <div className="group-28-90">
            <div className="overlap-group-1161">
              <div className="complete-pre-order-67 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark6;
