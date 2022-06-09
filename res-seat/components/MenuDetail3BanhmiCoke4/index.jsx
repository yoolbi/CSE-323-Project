import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail3BanhmiCoke4.css";

function MenuDetail3BanhmiCoke4(props) {
  const { uncles, image21, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail3banhmicoke3 screen">
        <div className="flex-row-524">
          <Link to="/uncle-s-details-menu1">
            <img className="vector-573" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-98 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-380">
          <img className="image-21-14" src={image21} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-121" src={line20} />
        <Link to="/uncle-s-details-bm">
          <div className="group-25-117">
            <div className="overlap-group-997">
              <div className="price-116 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-116 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail3BanhmiCoke4;
