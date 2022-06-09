import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail3SaladCoke2.css";

function MenuDetail3SaladCoke2(props) {
  const { seansRestaurant, image17, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3saladcoke screen">
        <div className="flex-row-453">
          <Link to="/sean-s-details-vsp">
            <img className="vector-314" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-51 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-255">
          <img className="image-17-4" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-48" src={line20} />
        <Link to="/sean-s-details-gss-vsp">
          <div className="group-25-53">
            <div className="overlap-group-813">
              <div className="price-52 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-52 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladCoke2;
