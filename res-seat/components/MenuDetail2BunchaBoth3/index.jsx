import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2BunchaBoth3.css";

function MenuDetail2BunchaBoth3(props) {
  const { uncles, image20, iconCheck_Mark, line20, price, addToCart, component28Props, component422Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2bunchaboth2 screen">
        <div className="flex-row-505">
          <Link to="/uncle-s-details-bm">
            <img className="vector-470" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-87 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-339">
          <img className="image-20-11" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-229-2">
          <div className="overlap-group2-419">
            <Component422
              className={component422Props.className}
              component363Props={component422Props.component363Props}
            />
            <Link to="/menu-detail2bunchasprite2">
              <img className="icon-check_mark-109" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-100" src={line20} />
        <Link to="/uncle-s-details-bc-bm">
          <div className="group-25-100">
            <div className="overlap-group-925">
              <div className="price-99 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-99 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaBoth3;
