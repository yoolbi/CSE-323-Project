import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail1Vongole2.css";

function MenuDetail1Vongole2(props) {
  const { seansRestaurant, image15, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vongole screen">
        <div className="flex-row-488">
          <Link to="/sean-s-details-brn">
            <img className="vector-450" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-65 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-320">
          <img className="image-15-8" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364 text86={component364Props.text86} text87={component364Props.text87} />
        <img className="line-20-83" src={line20} />
        <Link to="/sean-s-details-vsp-brn">
          <div className="group-25-85">
            <div className="overlap-group-908">
              <div className="price-84 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-84 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1Vongole2;
