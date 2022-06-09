import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import Group25 from "../Group25";
import "./MenuDetail1TomahawkBoth3.css";

function MenuDetail1TomahawkBoth3(props) {
  const { uncles, image18, iconCheck_Mark, line20, component28Props, component422Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawkboth2 screen">
        <div className="flex-row-503">
          <Link to="/uncle-s-details-bm">
            <img className="vector-468" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-85 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-337">
          <img className="image-18-11" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group4-216">
          <Component422 component363Props={component422Props.component363Props} />
          <img className="icon-check_mark-108" src={iconCheck_Mark} />
        </div>
        <img className="line-20-98" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkBoth3;
