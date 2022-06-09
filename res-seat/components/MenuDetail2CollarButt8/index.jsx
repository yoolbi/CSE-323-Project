import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component363 from "../Component363";
import Group25 from "../Group25";
import "./MenuDetail2CollarButt8.css";

function MenuDetail2CollarButt8(props) {
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
      <div className="menu-detail2collarbutt7 screen">
        <div className="flex-row-483">
          <Link to="/hanam-details-pl">
            <img className="vector-438" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-110 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-211">
          <img className="image-14-11" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-314">
          <Component363
            text58={component363Props.text58}
            text59={component363Props.text59}
            className={component363Props.className}
          />
          <img className="icon-check_mark-98" src={iconCheck_Mark1} />
          <img className="icon-check_mark-99" src={iconCheck_Mark2} />
        </div>
        <img className="line-20-78" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt8;
