import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail1VSPSprite5.css";

function MenuDetail1VSPSprite5(props) {
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
      <div className="menu-detail1vspsprite4 screen">
        <div className="flex-row-489">
          <Link to="/sean-s-details-brn">
            <img className="vector-451" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-66 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-321">
          <img className="image-15-9" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-6">
          <div className="overlap-group2-412">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail1vspsprite2">
              <img className="icon-check_mark-102" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-84" src={line20} />
        <Link to="/sean-s-details-vsp-brn">
          <div className="group-25-86">
            <div className="overlap-group-909">
              <div className="price-85 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-85 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPSprite5;
