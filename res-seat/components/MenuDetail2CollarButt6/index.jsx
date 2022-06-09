import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component36 from "../Component36";
import Group25 from "../Group25";
import "./MenuDetail2CollarButt6.css";

function MenuDetail2CollarButt6(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, component28Props, component36Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt5 screen">
        <div className="flex-row-449">
          <Link to="/hanam-details-pl">
            <img className="vector-310" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-98 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-190">
          <img className="image-14-7" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-250">
          <Component36
            text32={component36Props.text32}
            text33={component36Props.text33}
            className={component36Props.className}
          />
          <img className="icon-check_mark-91" src={iconCheck_Mark} />
        </div>
        <img className="line-20-45" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt6;
