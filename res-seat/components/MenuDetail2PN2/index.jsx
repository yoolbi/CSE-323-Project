import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import "./MenuDetail2PN2.css";

function MenuDetail2PN2(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, price, addToCart, component28Props, component362Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2pn screen">
        <div className="flex-row-443">
          <Link to="/hanam-details-menu-pb">
            <img className="vector-303" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-91 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-243">
          <img className="image-14-5" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group4-184">
          <Component362
            text34={component362Props.text34}
            text35={component362Props.text35}
            className={component362Props.className}
          />
          <Link to="/menu-detail2pn2">
            <img className="icon-check_mark-85" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-39" src={line20} />
        <Link to="/hanam-details-pb-pn">
          <div className="group-25-46">
            <div className="overlap-group-804">
              <div className="price-45 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-45 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2PN2;
