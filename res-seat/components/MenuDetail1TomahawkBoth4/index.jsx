import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import Group25 from "../Group25";
import "./MenuDetail1TomahawkBoth4.css";

function MenuDetail1TomahawkBoth4(props) {
  const { uncles, image18, iconCheck_Mark, line20, component28Props, component422Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawkboth3 screen">
        <div className="flex-row-538">
          <Link to="/uncle-s-details-menu1">
            <img className="vector-673" src="/img/vector-6@2x.png" />
          </Link>
          <Link to="/uncle-s-details-menu1">
            <div className="uncles-105 inter-bold-flamingo-28px">{uncles}</div>
          </Link>
        </div>
        <div className="overlap-group4-244">
          <img className="image-18-15" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-415">
          <Component422 component363Props={component422Props.component363Props} />
          <Link to="/menu-detail1tomahawksprite3">
            <img className="icon-check_mark-130" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-135" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkBoth4;
