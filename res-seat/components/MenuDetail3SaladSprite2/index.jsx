import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail3SaladSprite2.css";

function MenuDetail3SaladSprite2(props) {
  const {
    seansRestaurant,
    image17,
    iconCheck_Mark,
    line20,
    addToCart,
    price,
    component28Props,
    component422Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3saladsprite screen">
        <div className="flex-row-426">
          <Link to="/sean-s-details-vsp-brn">
            <img className="vector-291" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-44 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-230">
          <img className="image-17-3" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228">
          <div className="overlap-group2-364">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail3-salad-sprite-7">
              <img className="icon-check_mark-55" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-27" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-22">
            <div className="overlap-group-778">
              <div className="add-to-cart-21 inter-extra-bold-white-25px">{addToCart}</div>
              <div className="price-21 inter-semi-bold-white-20px">{price}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladSprite2;
