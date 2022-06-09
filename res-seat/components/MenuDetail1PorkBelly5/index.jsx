import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail1PorkBelly5.css";

function MenuDetail1PorkBelly5(props) {
  const { hanamBbq, image8, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1porkbelly4 screen">
        <div className="flex-row-481">
          <Link to="/hanam-details-pl">
            <img className="vector-428" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-108 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-310">
          <img className="image-8-113" src={image8} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-76" src={line20} />
        <Link to="/hanam-details-pb-pl">
          <div className="group-25-80">
            <div className="overlap-group-895">
              <div className="price-79 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-79 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly5;
