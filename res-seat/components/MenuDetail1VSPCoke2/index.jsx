import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail1VSPCoke2.css";

function MenuDetail1VSPCoke2(props) {
  const { seansRestaurant, image15, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vspcoke screen">
        <div className="flex-row-455">
          <Link to="/sean-s-details-brn">
            <img className="vector-316" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-53 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-257">
          <img className="image-15-4" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-50" src={line20} />
        <Link to="/sean-s-details-vsp-brn">
          <div className="group-25-55">
            <div className="overlap-group-815">
              <div className="price-54 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-54 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPCoke2;
