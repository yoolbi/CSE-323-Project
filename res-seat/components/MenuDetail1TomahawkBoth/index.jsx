import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import Group25 from "../Group25";
import "./MenuDetail1TomahawkBoth.css";

function MenuDetail1TomahawkBoth(props) {
  const { uncles, image18, iconCheck_Mark, line20, component28Props, component422Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1-tomahawk-both-3 screen">
        <div className="flex-row-440">
          <Link to="/uncle-s-details-bc-bm">
            <img className="vector-300" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-61 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group4-182">
          <img className="image-18-2" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-240">
          <Component422 component363Props={component422Props.component363Props} />
          <Link to="/menu-detail1-tomahawk-sprite-3">
            <img className="icon-check_mark-83" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-36" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail1TomahawkBoth;
