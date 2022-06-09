import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import Group25 from "../Group25";
import "./MenuDetail2CollarButt5.css";

function MenuDetail2CollarButt5(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, component28Props, component362Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt4 screen">
        <div className="flex-row-448">
          <Link to="/hanam-details-pl">
            <img className="vector-309" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-97 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group4-189">
          <img className="image-14-6" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group3-249">
          <Component362
            text34={component362Props.text34}
            text35={component362Props.text35}
            className={component362Props.className}
          />
          <Link to="/menu-detail2collarbutt6">
            <img className="icon-check_mark-90" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-44" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt5;
