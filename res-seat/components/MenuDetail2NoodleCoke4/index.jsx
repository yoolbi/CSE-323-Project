import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail2NoodleCoke4.css";

function MenuDetail2NoodleCoke4(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodlecoke3 screen">
        <div className="flex-row-516">
          <Link to="/sean-s-details-menu1">
            <img className="vector-560" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-75 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-371">
          <img className="image-16-12" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-113" src={line20} />
        <Link to="/sean-s-details-brn">
          <div className="group-25-109">
            <div className="overlap-group-987">
              <div className="price-108 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-108 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleCoke4;
