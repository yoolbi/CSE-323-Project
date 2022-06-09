import React from "react";
import { Link } from "react-router-dom";
import "./Component133.css";

function Component133(props) {
  const { pumkinSoup, className } = props;

  return (
    <div className={`component-18-37 ${className || ""}`}>
      <div className="rectangle-27-135"></div>
      <div className="flex-col-305">
        <div className="pumkin-soup-69 applesdgothicneob00-regular-normal-black-23px">{pumkinSoup}</div>
        <div className="flex-row-337">
          <div className="x15200-won-92 applesdgothicneob00-regular-normal-black-16px">15,200 won</div>
          <div className="group-7-144">
            <img className="outline-130" src="/img/outline-remove-black-24dp-1@2x.png" />
          </div>
          <div className="overlap-group-633">
            <div className="number-196 applesdgothicneob00-regular-normal-black-18px">1</div>
          </div>
        </div>
      </div>
      <div className="flex-col-306">
        <Link to="/shopping-cart-people3-2">
          <img className="icon-close-150" src="/img/outline-close-black-24dp-1@2x.png" />
        </Link>
        <div className="group-8-164">
          <img className="outline-130" src="/img/outline-add-black-24dp-1@2x.png" />
        </div>
      </div>
    </div>
  );
}

export default Component133;
