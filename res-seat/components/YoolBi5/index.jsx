import React from "react";
import { Link } from "react-router-dom";
import Component942 from "../Component942";
import "./YoolBi5.css";

function YoolBi5(props) {
  const { aSoupShop1, aSoupShop2, my, noResult, filter, component942Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="yool-bi-sigdang-mogrog screen">
        <div className="flex-row-643">
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-906" src="/img/vector-10@2x.svg" />
          </Link>
          <div className="overlap-group4-297">
            <img className="search-29" src="/img/search@2x.svg" />
            <div className="a-soup-shop-container-2 arial">
              <div className="a-soup-shop-123">{aSoupShop1}</div>
              <div className="a-soup-shop-123">{aSoupShop2}</div>
            </div>
            <img className="vector-907" src="/img/vector-14@2x.svg" />
          </div>
          <div className="flex-col-499">
            <Link to="/completed-preorder-home">
              <img className="group-118" src="/img/group-1@2x.svg" />
            </Link>
            <div className="my-6 inter-normal-flamingo-12px">{my}</div>
          </div>
        </div>
        <div className="flex-row-644">
          <div className="flex-col-500">
            <Component942 iconStar={component942Props.iconStar} className={component942Props.className} />
            <div className="no-result-1 inter-bold-mist-gray-20px">{noResult}</div>
          </div>
          <div className="overlap-group5-210">
            <Link to="/yool-bi">
              <div className="rectangle-35-5"></div>
            </Link>
            <div className="filter-4 inter-normal-white-16px">{filter}</div>
            <img className="filter-alt-4" src="/img/filter-alt@2x.svg" />
            <img className="vector-908" src="/img/vector-21@2x.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoolBi5;
