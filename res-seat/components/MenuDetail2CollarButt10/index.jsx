import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import Group25 from "../Group25";
import "./MenuDetail2CollarButt10.css";

function MenuDetail2CollarButt10(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, component28Props, component362Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt9 screen">
        <div className="flex-row-511">
          <Link to="/restaurant-details-menu1">
            <img className="vector-534" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-123 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-226">
          <img className="image-14-13" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-360">
          <Component362
            text34={component362Props.text34}
            text35={component362Props.text35}
            className={component362Props.className}
          />
          <Link to="/menu-detail2collarbutt11">
            <img className="icon-check_mark-118" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-108" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt10;
