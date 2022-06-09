import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail1VSPCoke.css";

function MenuDetail1VSPCoke(props) {
  const { seansRestaurant, image15, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1-vsp-coke-3 screen">
        <div className="flex-row-412">
          <Link to="/sean-s-details-brn-gss">
            <img className="vector-270" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-42 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-210">
          <img className="image-15-1" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-15" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-10">
            <div className="overlap-group-733">
              <div className="price-9 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-9 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPCoke;
