import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail2NoodleSprite.css";

function MenuDetail2NoodleSprite(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-noodle-sprite-7 screen">
        <div className="flex-row-410">
          <Link to="/sean-s-details-gss-vsp">
            <img className="vector-265" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-40 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-205">
          <img className="image-16-1" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-13" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-8">
            <div className="overlap-group-728">
              <div className="price-7 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-7 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleSprite;
