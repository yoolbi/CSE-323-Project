import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2BunchaBoth2.css";

function MenuDetail2BunchaBoth2(props) {
  const { uncles, image20, iconCheck_Mark, line20, price, addToCart, component28Props, component422Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchaboth screen">
        <div className="flex-row-498">
          <a href="javascript:history.back()">
            <img className="vector-460" src="/img/vector-6@2x.png" />
          </a>
          <div className="uncles-80 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-331">
          <img className="image-20-9" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-229-1">
          <div className="overlap-group2-417">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail2bunchasprite">
              <img className="icon-check_mark-106" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-93" src={line20} />
        <Link to="/uncle-s-details-tc-bc">
          <div className="group-25-95">
            <div className="overlap-group-919">
              <div className="price-94 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-94 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaBoth2;
