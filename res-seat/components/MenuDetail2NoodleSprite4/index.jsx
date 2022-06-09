import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component42 from "../Component42";
import "./MenuDetail2NoodleSprite4.css";

function MenuDetail2NoodleSprite4(props) {
  const { seansRestaurant, image16, line20, price, addToCart, component28Props, component42Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodlesprite3 screen">
        <div className="flex-row-462">
          <Link to="/sean-s-details-gss">
            <img className="vector-325" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-60 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-267">
          <img className="image-16-7" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component42 component362Props={component42Props.component362Props} />
        <img className="line-20-57" src={line20} />
        <Link to="/sean-s-details-brn-gss">
          <div className="group-25-61">
            <div className="overlap-group-824">
              <div className="price-60 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-60 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleSprite4;
