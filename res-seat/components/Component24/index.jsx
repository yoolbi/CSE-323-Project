import React from "react";
import { Link } from "react-router-dom";
import "./Component24.css";

function Component24(props) {
  const { vegetable } = props;
  let link = "/menu-detail1-porkbelly-sideadd";
  let url = window.location.href.split('/')[3];

  if(url == "menu-detail2-porkneck"){
    link = "menu-detail2-porkneck-side";
  }else if (url == "menu-detail3-porklib"){
    link = "menu-detail3-porklib-side";
  }

  console.log(window.location.href.split('/')[3]);
  return (
    <div className="component-24">
      <Link to={link}>
        <div className="rectangle-48-13 border-1px-orange"></div>
      </Link>
      <div className="vegetable-1 inter-medium-black-16px">{vegetable}</div>
      <div className="x200-won-2 arial">
        <span className="arial">+</span>
        <span className="span1-2 inter-medium-black-16px"> 200 won</span>
      </div>
    </div>
  );
}

export default Component24;
