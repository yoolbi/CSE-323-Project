import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail3SaladSprite6.css";

function MenuDetail3SaladSprite6(props) {
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
      <div className="menu-detail3saladsprite5 screen">
        <div className="flex-row-491">
          <Link to="/sean-s-details-brn">
            <img className="vector-453" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-68 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-324">
          <img className="image-17-11" src={image17} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-7">
          <div className="overlap-group2-414">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail3saladsprite3">
              <img className="icon-check_mark-103" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-86" src={line20} />
        <Link to="/sean-s-details-brn-gss">
          <div className="group-25-88">
            <div className="overlap-group-912">
              <div className="add-to-cart-87 inter-extra-bold-white-25px">{addToCart}</div>
              <div className="price-87 inter-semi-bold-white-20px">{price}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3SaladSprite6;
