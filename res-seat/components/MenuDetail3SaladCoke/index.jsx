import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail3SaladCoke.css";

function MenuDetail3SaladCoke(props) {
  const { seansRestaurant, image17, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-salad-coke-3 screen">
        <div className="flex-row-400">
          <Link to="/sean-s-details-vsp-brn">
            <img className="vector-261" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-30 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-201">
          <img className="image-17" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-10" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-5">
            <div className="overlap-group-717">
              <div className="price-4 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-4 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladCoke;
