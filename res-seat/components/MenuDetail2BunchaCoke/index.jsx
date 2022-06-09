import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import "./MenuDetail2BunchaCoke.css";

function MenuDetail2BunchaCoke(props) {
  const { uncles, image20, line20, price, addToCart, component28Props, component40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-buncha-coke-3 screen">
        <div className="flex-row-415">
          <Link to="/uncle-s-details-tc-bm">
            <img className="vector-273" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-49 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-213">
          <img className="image-20" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-18" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-13">
            <div className="overlap-group-736">
              <div className="price-12 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-12 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaCoke;
