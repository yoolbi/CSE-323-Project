import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2NoodleSprite5.css";

function MenuDetail2NoodleSprite5(props) {
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
      <div className="menu-detail2noodlesprite4 screen">
        <div className="flex-row-485">
          <Link to="/sean-s-details-vsp">
            <img className="vector-447" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-62 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-317">
          <img className="image-16-9" src={image16} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-228-4">
          <div className="overlap-group2-410">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail2noodlesprite2">
              <img className="icon-check_mark-100" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-80" src={line20} />
        <Link to="/sean-s-details-vsp-brn">
          <div className="group-25-82">
            <div className="overlap-group-905">
              <div className="price-81 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-81 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2NoodleSprite5;
