import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail2NoodleCoke2.css";

function MenuDetail2NoodleCoke2(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodlecoke screen">
        <div className="flex-row-451">
          <Link to="/sean-s-details-vsp">
            <img className="vector-312" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-49 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-253">
          <img className="image-16-4" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-46" src={line20} />
        <Link to="/sean-s-details-vsp-brn">
          <div className="group-25-51">
            <div className="overlap-group-811">
              <div className="price-50 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-50 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleCoke2;
