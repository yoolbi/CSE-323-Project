import React from "react";
import { Link } from "react-router-dom";
import "./Component132.css";

function Component132(props) {
  const { image8, pumkinSoup, x15200Won, className } = props;

  return (
    <div className={`component-13 ${className || ""}`}>
      <div className="overlap-group1-267">
        <div className="rectangle-27-93"></div>
        <img className="image-8-69" src={image8} />
      </div>
      <div className="flex-col-187">
        <div className="pumkin-soup-29 applesdgothicneob00-regular-normal-black-23px">{pumkinSoup}</div>
        <div className="flex-row-176">
          <div className="x15200-won-30 applesdgothicneob00-regular-normal-black-16px">{x15200Won}</div>
          <div className="group-7-71">
            <img className="outline-28" src="/img/outline-remove-black-24dp-1@2x.png" />
          </div>
          <div className="overlap-group-539">
            <div className="number-156 applesdgothicneob00-regular-normal-black-18px">1</div>
          </div>
        </div>
      </div>
      <div className="flex-col-188">
        <Link to="/shopping-cart-empty">
          <img className="icon-close-87" src="/img/outline-close-black-24dp-1@2x.png" />
        </Link>
        <div className="group-8-104">
          <img className="outline-28" src="/img/outline-add-black-24dp-1@2x.png" />
        </div>
      </div>
    </div>
  );
}

export default Component132;
