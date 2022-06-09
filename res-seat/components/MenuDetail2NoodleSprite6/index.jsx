import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2NoodleSprite6.css";

function MenuDetail2NoodleSprite6(props) {
  const {
    seansRestaurant,
    image16,
    iconCheck_Mark,
    line20,
    price,
    addToCart,
    component28Props,
    component422Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodlesprite5 screen">
        <div className="flex-row-495">
          <Link to="/sean-s-details-gss">
            <img className="vector-457" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-72 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-328">
          <img className="image-16-11" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-9">
          <div className="overlap-group2-416">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail2noodlesprite3">
              <img className="icon-check_mark-105" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-90" src={line20} />
        <Link to="/sean-s-details-brn-gss">
          <div className="group-25-92">
            <div className="overlap-group-916">
              <div className="price-91 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-91 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleSprite6;
