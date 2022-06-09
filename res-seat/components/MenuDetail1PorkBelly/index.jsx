import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import "./MenuDetail1PorkBelly.css";

function MenuDetail1PorkBelly(props) {
  const { hanamBbq, image8, iconCheck_Mark, line20, price, addToCart, component28Props, component36Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1-porkbelly-7 screen">
        <div className="flex-row-446">
          <Link to="/hanam-details-pl">
            <img className="vector-307" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-95 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-187">
          <img className="image-8-109" src={image8} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group3-247">
          <Component36 text32={component36Props.text32} text33={component36Props.text33} />
          <Link to="/menu-detail1porkbelly4">
            <img className="icon-check_mark-88" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-42" src={line20} />
        <Link to="/hanam-details-pb-pl">
          <div className="group-25-49">
            <div className="overlap-group-808">
              <div className="price-48 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-48 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly;
