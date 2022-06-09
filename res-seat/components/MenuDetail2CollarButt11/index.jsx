import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import Group25 from "../Group25";
import "./MenuDetail2CollarButt11.css";

function MenuDetail2CollarButt11(props) {
  const {
    hanamBbq,
    image14,
    iconCheck_Mark1,
    iconCheck_Mark2,
    line20,
    component28Props,
    component363Props,
    group25Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt10 screen">
        <div className="flex-row-527">
          <Link to="/restaurant-details-menu1">
            <img className="vector-655" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-132 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-241">
          <img className="image-14-14" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-403">
          <Component363
            text58={component363Props.text58}
            text59={component363Props.text59}
            className={component363Props.className}
          />
          <Link to="/menu-detail2collarbutt8">
            <img className="icon-check_mark-123" src={iconCheck_Mark1} />
          </Link>
          <Link to="/menu-detail2collarbutt9">
            <img className="icon-check_mark-124" src={iconCheck_Mark2} />
          </Link>
        </div>
        <img className="line-20-124" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt11;
