import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import Group25 from "../Group25";
import "./MenuDetail1TomahawkBoth2.css";

function MenuDetail1TomahawkBoth2(props) {
  const { uncles, image18, iconCheck_Mark, line20, component28Props, component422Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawkboth screen">
        <div className="flex-row-499">
          <Link to="/uncle-s-details-bc">
            <img className="vector-461" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-81 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group4-214">
          <img className="image-18-8" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-332">
          <Component422 component363Props={component422Props.component363Props} />
          <Link to="/menu-detail1tomahawksprite">
            <img className="icon-check_mark-107" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-94" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkBoth2;
