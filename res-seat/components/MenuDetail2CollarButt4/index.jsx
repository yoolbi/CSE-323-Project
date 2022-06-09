import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2CollarButt4.css";

function MenuDetail2CollarButt4(props) {
  const { hanamBbq, image14, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt3 screen">
        <div className="flex-row-422">
          <Link to="/hanam-details-pb-pl">
            <img className="vector-284" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-89 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-224">
          <img className="image-14-3" src={image14} />
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
        <img className="line-20-25" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-20">
            <div className="overlap-group-771">
              <div className="price-19 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-19 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt4;
