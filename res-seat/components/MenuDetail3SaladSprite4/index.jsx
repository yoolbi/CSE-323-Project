import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail3SaladSprite4.css";

function MenuDetail3SaladSprite4(props) {
  const { seansRestaurant, image17, line20, addToCart, price, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3saladsprite3 screen">
        <div className="flex-row-458">
          <Link to="/sean-s-details-brn">
            <img className="vector-320" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-56 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-262">
          <img className="image-17-7" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-53" src={line20} />
        <Link to="/sean-s-details-brn-gss">
          <div className="group-25-58">
            <div className="overlap-group-820">
              <div className="add-to-cart-57 inter-extra-bold-white-25px">{addToCart}</div>
              <div className="price-57 inter-semi-bold-white-20px">{price}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladSprite4;
