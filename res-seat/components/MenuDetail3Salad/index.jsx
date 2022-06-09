import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail3Salad.css";

function MenuDetail3Salad(props) {
  const { seansRestaurant, image17, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-salad-3 screen">
        <div className="flex-row-425">
          <Link to="/sean-s-details-vsp-brn">
            <img className="vector-290" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-43 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-229">
          <img className="image-17-2" src={image17} />
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
        <img className="line-20-26" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-21">
            <div className="overlap-group-777">
              <div className="price-20 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-20 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3Salad;
