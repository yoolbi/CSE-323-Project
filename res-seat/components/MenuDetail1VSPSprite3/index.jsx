import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail1VSPSprite3.css";

function MenuDetail1VSPSprite3(props) {
  const { seansRestaurant, image15, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vspsprite2 screen">
        <div className="flex-row-456">
          <Link to="/sean-s-details-brn">
            <img className="vector-318" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-54 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-260">
          <img className="image-15-5" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-51" src={line20} />
        <Link to="/sean-s-details-vsp-brn">
          <div className="group-25-56">
            <div className="overlap-group-818">
              <div className="price-55 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-55 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPSprite3;
