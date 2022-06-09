import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail2Buncha2.css";

function MenuDetail2Buncha2(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2buncha screen">
        <div className="flex-row-496">
          <a href="javascript:history.back()">
            <img className="vector-458" src="/img/vector-6@2x.png" />
          </a>
          <a href="javascript:history.back()">
            <div className="uncles-78 inter-bold-flamingo-28px">{uncles}</div>
          </a>
        </div>
        <div className="overlap-group3-329">
          <img className="image-20-8" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-91" src={line20} />
        <Link to="/uncle-s-details-tc-bc">
          <div className="group-25-93">
            <div className="overlap-group-917">
              <div className="price-92 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-92 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2Buncha2;
