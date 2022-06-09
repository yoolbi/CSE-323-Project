import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail1VSPSprite4.css";

function MenuDetail1VSPSprite4(props) {
  const { seansRestaurant, image15, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vspsprite3 screen">
        <div className="flex-row-460">
          <Link to="/sean-s-details-gss">
            <img className="vector-323" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-58 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-265">
          <img className="image-15-7" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-55" src={line20} />
        <Link to="/sean-s-details-gss-vsp">
          <div className="group-25-59">
            <div className="overlap-group-822">
              <div className="price-58 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-58 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPSprite4;
