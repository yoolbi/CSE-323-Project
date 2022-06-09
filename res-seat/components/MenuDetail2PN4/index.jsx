import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import "./MenuDetail2PN4.css";

function MenuDetail2PN4(props) {
  const {
    hanamBbq,
    image14,
    iconCheck_Mark1,
    iconCheck_Mark2,
    line20,
    price,
    addToCart,
    component28Props,
    component363Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2pn3 screen">
        <div className="flex-row-476">
          <Link to="/hanam-details-menu-pb">
            <img className="vector-415" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-103 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-207">
          <img className="image-14-9" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-303">
          <Component363
            text58={component363Props.text58}
            text59={component363Props.text59}
            className={component363Props.className}
          />
          <Link to="/menu-detail2-pn-3">
            <img className="icon-check_mark-92" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail2pn">
            <img className="icon-check_mark-93" src={iconCheck_Mark2} />
          </Link>
        </div>
        <img className="line-20-71" src={line20} />
        <Link to="/hanam-details-pb-pn">
          <div className="group-25-75">
            <div className="overlap-group-889">
              <div className="price-74 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-74 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2PN4;
