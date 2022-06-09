import React from "react";
import { Link } from "react-router-dom";
import Component28 from "../Component28";
import Component40 from "../Component40";
import Group25 from "../Group25";
import "./MenuDetail1VSPCoke3.css";

function MenuDetail1VSPCoke3(props) {
  const { seansRestaurant, image15, line20, component28Props, component40Props, group25Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-detail1vspcoke2 screen">
        <div className="flex-row-459">
          <Link to="/sean-s-details-gss">
            <img className="vector-322" src="/img/vector-6@2x.png" />
          </Link>
          <div className="seans-restaurant-57 inter-bold-flamingo-28px">{seansRestaurant}</div>
        </div>
        <div className="overlap-group3-264">
          <img className="image-15-6" src={image15} />
          <Component28
            porkBelly={component28Props.porkBelly}
            x15200Won={component28Props.x15200Won}
            theSavoryPorkBell={component28Props.theSavoryPorkBell}
          />
        </div>
        <Component40 component36Props={component40Props.component36Props} />
        <img className="line-20-54" src={line20} />
        <Group25 price={group25Props.price} />
      </div>
    </div>
  );
}

export default MenuDetail1VSPCoke3;
