import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2PN3.css";

function MenuDetail2PN3(props) {
  const { hanamBbq, image14, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2pn2 screen">
        <div className="flex-row-475">
          <Link to="/hanam-details-menu-pb">
            <img className="vector-414" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-102 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-302">
          <img className="image-14-8" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-70" src={line20} />
        <Link to="/hanam-details-pb-pn">
          <div className="group-25-74">
            <div className="overlap-group-888">
              <div className="price-73 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-73 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2PN3;
