import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail3Salad3.css";

function MenuDetail3Salad3(props) {
  const { seansRestaurant, image17, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3salad2 screen">
        <div className="flex-row-490">
          <Link to="/sean-s-details-brn">
            <img className="vector-452" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-67 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-322">
          <img className="image-17-10" src={image17} />
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
        <img className="line-20-85" src={line20} />
        <Link to="/sean-s-details-brn-gss">
          <div className="group-25-87">
            <div className="overlap-group-910">
              <div className="price-86 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-86 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3Salad3;
