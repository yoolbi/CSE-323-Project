import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2BunchaBoth4.css";

function MenuDetail2BunchaBoth4(props) {
  const { uncles, image20, iconCheck_Mark, line20, price, addToCart, component28Props, component422Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchaboth3 screen">
        <div className="flex-row-540">
          <Link to="/uncle-s-details-menu1">
            <img className="vector-675" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-107 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-417">
          <img className="image-20-15" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-229-3">
          <div className="overlap-group2-468">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail2bunchasprite3">
              <img className="icon-check_mark-131" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-137" src={line20} />
        <Link to="/uncle-s-details-bc">
          <div className="group-25-130">
            <div className="overlap-group-1051">
              <div className="price-129 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-129 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaBoth4;
