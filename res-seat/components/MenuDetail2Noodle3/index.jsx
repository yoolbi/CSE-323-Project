import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2Noodle3.css";

function MenuDetail2Noodle3(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodle2 screen">
        <div className="flex-row-494">
          <Link to="/sean-s-details-gss">
            <img className="vector-456" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-71 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-327">
          <img className="image-16-10" src={image16} />
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
        <img className="line-20-89" src={line20} />
        <Link to="/sean-s-details-brn-gss">
          <div className="group-25-91">
            <div className="overlap-group-915">
              <div className="price-90 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-90 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2Noodle3;
