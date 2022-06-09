import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail1Vongole4.css";

function MenuDetail1Vongole4(props) {
  const { seansRestaurant, image15, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vongole3 screen">
        <div className="flex-row-531">
          <Link to="/sean-s-details-menu1">
            <img className="vector-666" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-82 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-408">
          <img className="image-15-14" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364 text86={component364Props.text86} text87={component364Props.text87} />
        <img className="line-20-128" src={line20} />
        <Link to="/sean-s-details-vsp">
          <div className="group-25-122">
            <div className="overlap-group-1043">
              <div className="price-121 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-121 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1Vongole4;
