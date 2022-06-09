import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2Noodle2.css";

function MenuDetail2Noodle2(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodle screen">
        <div className="flex-row-484">
          <Link to="/sean-s-details-vsp">
            <img className="vector-446" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-61 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-316">
          <img className="image-16-8" src={image16} />
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
        <img className="line-20-79" src={line20} />
        <Link to="/sean-s-details-vsp-brn">
          <div className="group-25-81">
            <div className="overlap-group-904">
              <div className="price-80 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-80 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2Noodle2;
