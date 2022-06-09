import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail2NoodleCoke3.css";

function MenuDetail2NoodleCoke3(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodlecoke2 screen">
        <div className="flex-row-461">
          <Link to="/sean-s-details-gss">
            <img className="vector-324" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-59 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-266">
          <img className="image-16-6" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-56" src={line20} />
        <Link to="/sean-s-details-brn-gss">
          <div className="group-25-60">
            <div className="overlap-group-823">
              <div className="price-59 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-59 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleCoke3;
