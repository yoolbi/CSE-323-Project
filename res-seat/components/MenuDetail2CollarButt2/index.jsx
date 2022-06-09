import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component362 from "../Component362";
import "./MenuDetail2CollarButt2.css";

function MenuDetail2CollarButt2(props) {
  const { hanamBbq, image14, iconCheck_Mark, line20, price, addToCart, component28Props, component362Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail2collarbutt screen">
        <div className="flex-row-370">
          <Link to="/hanam-details-pb-pl">
            <img className="vector-248" src="/img/vector-6@2x.png" />
          </Link>
          <div className="hanam-bbq-81 inter-bold-flamingo-28px">{hanamBbq}</div>
        </div>
        <div className="overlap-group3-186">
          <img className="image-14-1" src={image14} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
            className={component28Props.className}
          />
        </div>
        <div className="overlap-group4-152">
          <Component362
            text34={component362Props.text34}
            text35={component362Props.text35}
            className={component362Props.className}
          />
          <Link to="/menu-detail2collarbutt3">
            <img className="icon-check_mark-3" src={iconCheck_Mark} />
          </Link>
        </div>
        <img className="line-20-9" src={line20} />
        <Link to="/hanam-details-pb-pn-pl">
          <div className="group-25-4">
            <div className="overlap-group-697">
              <div className="price-3 inter-semi-bold-white-20px">{price}</div>
              <div className="add-to-cart-3 inter-extra-bold-white-25px">{addToCart}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuDetail2CollarButt2;
