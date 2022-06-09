import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import "./MenuDetail2CollarButt3.css";

function MenuDetail2CollarButt3(props) {
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
      <div className="menu-detail2collarbutt2 screen">
        <div className="flex-row-421">
          <Link to="/hanam-details-pb-pl">
            <img className="vector-282" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-88 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-177">
          <img className="image-14-2" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-222">
          <Component363
            text58={component363Props.text58}
            text59={component363Props.text59}
            className={component363Props.className}
          />
          <Link to="/menu-detail2-collarbutt-11">
            <img className="icon-check_mark-53" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail2collarbutt">
            <img className="icon-check_mark-54" src={iconCheck_Mark2} />
          </Link>
        </div>
        <img className="line-20-24" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-19">
            <div className="overlap-group-769">
              <div className="price-18 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-18 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt3;
