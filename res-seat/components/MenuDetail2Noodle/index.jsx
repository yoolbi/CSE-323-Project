import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2Noodle.css";

function MenuDetail2Noodle(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-noodle-3 screen">
        <div className="flex-row-431">
          <Link to="/sean-s-details-gss-vsp">
            <img className="vector-293" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-46 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-232">
          <img className="image-16-3" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-29" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-24">
            <div className="overlap-group-781">
              <div className="price-23 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-23 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2Noodle;
