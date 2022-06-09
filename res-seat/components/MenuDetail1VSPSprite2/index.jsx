import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail1VSPSprite2.css";

function MenuDetail1VSPSprite2(props) {
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
      <div className="menu-detail1vspsprite screen">
        <div className="flex-row-434">
          <Link to="/sean-s-details-brn-gss">
            <img className="vector-294" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-47 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-234">
          <img className="image-15-2" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-2">
          <div className="overlap-group2-372">
            <Component422 component363Props={component422Props.component363Props} />
            <img className="icon-check_mark-80" src={iconCheck_Mark} />
          </div>
        </div>
        <img className="line-20-30" src={line20} />
        <Link to="/sean-s-details-vsp-brn-gss">
          <div className="group-25-25">
            <div className="overlap-group-783">
              <div className="price-24 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-24 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1VSPSprite2;
