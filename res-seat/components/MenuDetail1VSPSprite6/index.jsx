import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail1VSPSprite6.css";

function MenuDetail1VSPSprite6(props) {
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
      <div className="menu-detail1vspsprite5 screen">
        <div className="flex-row-493">
          <Link to="/sean-s-details-gss">
            <img className="vector-455" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-70 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-326">
          <img className="image-15-11" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-8">
          <div className="overlap-group2-415">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail1vspsprite3">
              <img className="icon-check_mark-104" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-88" src={line20} />
        <Link to="/sean-s-details-gss-vsp">
          <div className="group-25-90">
            <div className="overlap-group-914">
              <div className="price-89 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-89 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPSprite6;
