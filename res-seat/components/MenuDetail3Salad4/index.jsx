import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail3Salad4.css";

function MenuDetail3Salad4(props) {
  const { seansRestaurant, image17, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3salad3 screen">
        <div className="flex-row-533">
          <Link to="/sean-s-details-menu1">
            <img className="vector-668" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-84 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-410">
          <img className="image-17-14" src={image17} />
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
        <img className="line-20-130" src={line20} />
        <Link to="/sean-s-details-gss">
          <div className="group-25-124">
            <div className="overlap-group-1045">
              <div className="price-123 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-123 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3Salad4;
