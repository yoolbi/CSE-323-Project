import React from "react";
import { Link } from "react-router-dom";
import Component942 from "../Component942";
import "./YoolBi4.css";

function YoolBi4(props) {
  const {
    iconSearch,
    aSoupShop1,
    aSoupShop2,
    vector2,
    group,
    my,
    noResult,
    filter,
    filterAlt,
    vector3,
    component942Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="yool-bi-1 screen">
        <div className="flex-row-630">
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-899" src="/img/vector-30@2x.png" />
          </Link>
          <div className="overlap-group5-206">
            <img className="icon-search-41" src={iconSearch} />
            <div className="a-soup-shop-container-1 arial">
              <div className="a-soup-shop-121">{aSoupShop1}</div>
              <div className="a-soup-shop-121">{aSoupShop2}</div>
            </div>
            <img className="vector-900" src={vector2} />
          </div>
          <div className="flex-col-495">
            <Link to="/completed-preorder-home">
              <img className="group-116" src={group} />
            </Link>
            <div className="my-4 inter-normal-flamingo-12px">{my}</div>
          </div>
        </div>
        <div className="flex-row-631">
          <div className="flex-col-496">
            <Component942 iconStar={component942Props.iconStar} className={component942Props.className} />
            <div className="no-result inter-bold-mist-gray-20px">{noResult}</div>
          </div>
          <div className="overlap-group4-294">
            <Link to="/yool-bi">
              <div className="rectangle-35-3"></div>
            </Link>
            <div className="filter-2 inter-normal-white-16px">{filter}</div>
            <img className="filter-alt-2" src={filterAlt} />
            <img className="vector-901" src={vector3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoolBi4;
