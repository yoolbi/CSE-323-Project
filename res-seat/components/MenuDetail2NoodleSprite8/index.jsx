import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2NoodleSprite8.css";

function MenuDetail2NoodleSprite8(props) {
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
      <div className="menu-detail2noodlesprite7 screen">
        <div className="flex-row-536">
          <Link to="/sean-s-details-menu1">
            <img className="vector-671" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-86 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-413">
          <img className="image-16-15" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-11">
          <div className="overlap-group2-466">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail2noodlesprite6">
              <img className="icon-check_mark-128" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-133" src={line20} />
        <Link to="/sean-s-details-brn">
          <div className="group-25-127">
            <div className="overlap-group-1048">
              <div className="price-126 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-126 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleSprite8;
