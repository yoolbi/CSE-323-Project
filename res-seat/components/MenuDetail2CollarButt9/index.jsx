import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import Group25 from "../Group25";
import "./MenuDetail2CollarButt9.css";

function MenuDetail2CollarButt9(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, component28Props, component36Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt8 screen">
        <div className="flex-row-510">
          <Link to="/restaurant-details-menu1">
            <img className="vector-533" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-122 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-359">
          <img className="image-14-12" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group4-225">
          <Component36
            text32={component36Props.text32}
            text33={component36Props.text33}
            className={component36Props.className}
          />
          <Link to="/menu-detail2collarbutt11">
            <img className="icon-check_mark-117" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-107" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt9;
