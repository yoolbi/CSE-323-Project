import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2NoodleSprite2.css";

function MenuDetail2NoodleSprite2(props) {
  const {
    seansRestaurant,
    image16,
    iconCheck_Mark,
    line20,
    price,
    addToCart,
    component28Props,
    component422Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2noodlesprite screen">
        <div className="flex-row-427">
          <Link to="/sean-s-details-gss-vsp">
            <img className="vector-292" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-45 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-231">
          <img className="image-16-2" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-1">
          <div className="overlap-group2-369">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail2-noodle-sprite-7">
              <img className="icon-check_mark-71" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-28" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-23">
            <div className="overlap-group-779">
              <div className="price-22 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-22 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleSprite2;
