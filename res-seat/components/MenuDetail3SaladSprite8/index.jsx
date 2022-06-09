import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail3SaladSprite8.css";

function MenuDetail3SaladSprite8(props) {
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
      <div className="menu-detail3saladsprite7 screen">
        <div className="flex-row-537">
          <Link to="/sean-s-details-menu1">
            <img className="vector-672" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-87 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-414">
          <img className="image-17-15" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-12">
          <div className="overlap-group2-467">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail3saladsprite6">
              <img className="icon-check_mark-129" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-134" src={line20} />
        <Link to="/sean-s-details-gss">
          <div className="group-25-128">
            <div className="overlap-group-1049">
              <div className="add-to-cart-127 inter-extra-bold-white-25px">{addToCart}</div>
              <div className="price-127 inter-semi-bold-white-20px">{price}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladSprite8;
