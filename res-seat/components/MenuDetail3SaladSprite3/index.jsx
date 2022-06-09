import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail3SaladSprite3.css";

function MenuDetail3SaladSprite3(props) {
  const { seansRestaurant, image17, line20, addToCart, price, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3saladsprite2 screen">
        <div className="flex-row-454">
          <Link to="/sean-s-details-vsp">
            <img className="vector-315" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-52 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-256">
          <img className="image-17-5" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-49" src={line20} />
        <Link to="/sean-s-details-gss-vsp">
          <div className="group-25-54">
            <div className="overlap-group-814">
              <div className="add-to-cart-53 inter-extra-bold-white-25px">{addToCart}</div>
              <div className="price-53 inter-semi-bold-white-20px">{price}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladSprite3;
