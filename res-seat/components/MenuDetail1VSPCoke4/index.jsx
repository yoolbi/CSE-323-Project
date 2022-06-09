import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail1VSPCoke4.css";

function MenuDetail1VSPCoke4(props) {
  const { seansRestaurant, image15, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vspcoke3 screen">
        <div className="flex-row-514">
          <Link to="/sean-s-details-menu1">
            <img className="vector-558" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-73 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-369">
          <img className="image-15-12" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-111" src={line20} />
        <Link to="/sean-s-details-vsp">
          <div className="group-25-107">
            <div className="overlap-group-985">
              <div className="price-106 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-106 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPCoke4;
