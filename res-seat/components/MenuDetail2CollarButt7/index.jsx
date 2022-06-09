import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import Group25 from "../Group25";
import "./MenuDetail2CollarButt7.css";

function MenuDetail2CollarButt7(props) {
  const { hanamBbq, image14, line20, component28Props, component364Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt6 screen">
        <div className="flex-row-482">
          <Link to="/hanam-details-pl">
            <img className="vector-437" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-109 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-313">
          <img className="image-14-10" src={image14} />
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
        <img className="line-20-77" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt7;
