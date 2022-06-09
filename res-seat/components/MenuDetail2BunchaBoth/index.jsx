import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component422 from "../Component422";
import "./MenuDetail2BunchaBoth.css";

function MenuDetail2BunchaBoth(props) {
  const { uncles, image20, iconCheck_Mark, line20, price, addToCart, component28Props, component422Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2-buncha-both-3 screen">
        <div className="flex-row-438">
          <Link to="/uncle-s-details-tc-bm">
            <img className="vector-298" src="/img/vector-6@2x.png" />
          </Link>
          <div className="uncles-59 inter-bold-flamingo-28px">{uncles}</div>
        </div>
        <div className="overlap-group3-238">
          <img className="image-20-2" src={image20} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <div className="group-229">
          <div className="overlap-group2-374">
            <Component422 component363Props={component422Props.component363Props} />
            <Link to="/menu-detail2-buncha-sprite-3">
              <img className="icon-check_mark-82" src={iconCheck_Mark} />
            </Link>
          </div>
        </div>
        <img className="line-20-34" src={line20} />
        <Link to="/uncle-s-details-tc-bc-bm">
          <div className="group-25-42">
            <div className="overlap-group-800">
              <div className="price-41 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-41 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2BunchaBoth;
