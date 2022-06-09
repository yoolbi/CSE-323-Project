import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import "./MenuDetail1PorkBelly7.css";

function MenuDetail1PorkBelly7(props) {
  const { hanamBbq, image8, iconCheck_Mark, line20, price, addToCart, component28Props, component362Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1porkbelly6 screen">
        <div className="flex-row-509">
          <Link to="/restaurant-details-menu1">
            <img className="vector-527" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-120 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-357">
          <img className="image-8-115" src={image8} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group4-224">
          <Component362 text34={component362Props.text34} text35={component362Props.text35} />
          <Link to="/menu-detail1porkbelly2">
            <img className="icon-check_mark-116" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-106" src={line20} />
        <Link to="/hanam-details-menu-pb">
          <div className="group-25-104">
            <div className="overlap-group-969">
              <div className="price-103 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-103 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly7;
