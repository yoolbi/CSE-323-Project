import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail1VSPSprite8.css";

function MenuDetail1VSPSprite8(props) {
  const {
    seansRestaurant,
    image15,
    iconCheck_Mark,
    line20,
    price,
    addToCart,
    component28Props,
    component422Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vspsprite7 screen">
        <div className="flex-row-534">
          <Link to="/sean-s-details-menu1">
            <img className="vector-669" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-85 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-411">
          <img className="image-15-15" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-10">
          <div className="overlap-group2-465">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail1vspsprite6">
              <img className="icon-check_mark-127" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-131" src={line20} />
        <Link to="/sean-s-details-vsp">
          <div className="group-25-125">
            <div className="overlap-group-1046">
              <div className="price-124 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-124 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPSprite8;
