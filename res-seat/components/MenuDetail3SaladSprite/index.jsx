import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail3SaladSprite.css";

function MenuDetail3SaladSprite(props) {
  const { seansRestaurant, image17, line20, addToCart, price, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-salad-sprite-7 screen">
        <div className="flex-row-401">
          <Link to="/sean-s-details-vsp-brn">
            <img className="vector-262" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-31 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-202">
          <img className="image-17-1" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-11" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-6">
            <div className="overlap-group-718">
              <div className="add-to-cart-5 inter-extra-bold-white-25px">{addToCart}</div>
              <div className="price-5 inter-semi-bold-white-20px">{price}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladSprite;
