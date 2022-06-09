import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import "./MenuDetail2PN.css";

function MenuDetail2PN(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, price, addToCart, component28Props, component36Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-pn-3 screen">
        <div className="flex-row-442">
          <Link to="/hanam-details-menu-pb">
            <img className="vector-302" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-90 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-183">
          <img className="image-14-4" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-242">
          <Component36
            text32={component36Props.text32}
            text33={component36Props.text33}
            className={component36Props.className}
          />
          <Link to="/menu-detail2pn2">
            <img className="icon-check_mark-84" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-38" src={line20} />
        <Link to="/hanam-details-pb-pn">
          <div className="group-25-45">
            <div className="overlap-group-803">
              <div className="price-44 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-44 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2PN;
