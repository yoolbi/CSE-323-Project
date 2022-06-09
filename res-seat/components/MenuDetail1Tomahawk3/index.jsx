import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component364 from "../Component364";
import "./MenuDetail1Tomahawk3.css";

function MenuDetail1Tomahawk3(props) {
  const { uncles, image18, line20, price, addToCart, component28Props, component364Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1tomahawk2 screen">
        <div className="flex-row-502">
          <Link to="/uncle-s-details-bm">
            <img className="vector-467" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-84 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-336">
          <img className="image-18-10" src={image18} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <Component364
          text86={component364Props.text86}
          text87={component364Props.text87}
          className={component364Props.className}
        />
        <img className="line-20-97" src={line20} />
        <Link to="/uncle-s-details-tc-bm">
          <div className="group-25-98">
            <div className="overlap-group-923">
              <div className="price-97 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-97 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail1Tomahawk3;
