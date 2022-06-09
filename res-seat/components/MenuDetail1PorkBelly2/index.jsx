import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import "./MenuDetail1PorkBelly2.css";

function MenuDetail1PorkBelly2(props) {
  const { hanamBbq, image8, iconCheck_Mark, line20, price, addToCart, component28Props, component362Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1porkbelly screen">
        <div className="flex-row-447">
          <Link to="/hanam-details-pl">
            <img className="vector-308" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-96 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-188">
          <img className="image-8-110" src={image8} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="overlap-group3-248">
          <Component362 text34={component362Props.text34} text35={component362Props.text35} />
          <Link to="/menu-detail1porkbelly4">
            <img className="icon-check_mark-89" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-43" src={line20} />
        <Link to="/hanam-details-pb-pl">
          <div className="group-25-50">
            <div className="overlap-group-809">
              <div className="price-49 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-49 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1PorkBelly2;
