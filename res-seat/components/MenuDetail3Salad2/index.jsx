import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail3Salad2.css";

function MenuDetail3Salad2(props) {
  const { seansRestaurant, image17, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3salad screen">
        <div className="flex-row-486">
          <Link to="/sean-s-details-vsp">
            <img className="vector-448" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-63 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-318">
          <img className="image-17-8" src={image17} />
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
        <img className="line-20-81" src={line20} />
        <Link to="/sean-s-details-gss-vsp">
          <div className="group-25-83">
            <div className="overlap-group-906">
              <div className="price-82 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-82 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3Salad2;