import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import Group25 from "../Group25";
import "./MenuDetail3BanhmiBoth.css";

function MenuDetail3BanhmiBoth(props) {
  const { uncles, image21, iconCheck_Mark, line20, component28Props, component422Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3-banhmi-both-3 screen">
        <div className="flex-row-437">
          <Link to="/uncle-s-details-tc-bc">
            <img className="vector-297" src="/img/vector-6@2x.png" />
          </Link>
          <Link to="/uncle-s-details-tc-bc">
            <div className="uncles-58 inter-bold-flamingo-28px">{uncles}</div>
          </Link>
        </div>
        <div className="overlap-group3-237">
          <img className="image-21-3" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="group-228-3">
          <div className="overlap-group2-373">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail3-banhmi-sprite-3">
              <img className="icon-check_mark-81" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-33" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiBoth;
