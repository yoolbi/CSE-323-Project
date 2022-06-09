import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail3SaladSprite5.css";

function MenuDetail3SaladSprite5(props) {
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
      <div className="menu-detail3saladsprite4 screen">
        <div className="flex-row-487">
          <Link to="/sean-s-details-vsp">
            <img className="vector-449" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-64 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-319">
          <img className="image-17-9" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-5">
          <div className="overlap-group2-411">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail3saladsprite2">
              <img className="icon-check_mark-101" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-82" src={line20} />
        <Link to="/sean-s-details-gss-vsp">
          <div className="group-25-84">
            <div className="overlap-group-907">
              <div className="add-to-cart-83 inter-extra-bold-white-25px">{addToCart}</div>
              <div className="price-83 inter-semi-bold-white-20px">{price}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladSprite5;
