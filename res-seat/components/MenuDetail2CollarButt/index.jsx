import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import "./MenuDetail2CollarButt.css";

function MenuDetail2CollarButt(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, price, addToCart, component28Props, component36Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-collarbutt-11 screen">
        <div className="flex-row-369">
          <Link to="/hanam-details-pb-pl">
            <img className="vector-247" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-80 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-151">
          <img className="image-14" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-185">
          <Component36
            text32={component36Props.text32}
            text33={component36Props.text33}
            className={component36Props.className}
          />
          <Link to="/menu-detail2collarbutt3">
            <img className="icon-check_mark-2" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-8" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-3">
            <div className="overlap-group-696">
              <div className="price-2 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-2 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt;
