import React from "react";
import { Link } from "react-router-dom";
import Component93 from "../Component93";
import Component165 from "../Component165";
import "./YoolBi2.css";

function YoolBi2(props) {
  const {
    iconSearch,
    aSoupShop1,
    aSoupShop2,
    vector2,
    group,
    my,
    filterAlt,
    filter,
    vector3,
    vector4,
    component93Props,
    component165Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="yool-bi-sangsepilteo screen">
        <div className="flex-row-623">
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-889" src="/img/vector-30@2x.png" />
          </Link>
          <div className="overlap-group5-204">
            <img className="icon-search-38" src={iconSearch} />
            <div className="a-soup-shop-container arial">
              <div className="a-soup-shop-119">{aSoupShop1}</div>
              <div className="a-soup-shop-119">{aSoupShop2}</div>
            </div>
            <img className="vector-890" src={vector2} />
          </div>
          <div className="flex-col-494">
            <Link to="/completed-preorder-home">
              <img className="group-110" src={group} />
            </Link>
            <div className="my-1 inter-normal-flamingo-12px">{my}</div>
          </div>
        </div>
        <div className="flex-row-624">
          <Component93
            nearest={component93Props.nearest}
            spanText1={component93Props.spanText1}
            spanText2={component93Props.spanText2}
            iconStar={component93Props.iconStar}
            avalilableSeats={component93Props.avalilableSeats}
            waiting={component93Props.waiting}
          />
          <img className="filter-alt" src={filterAlt} />
          <div className="filter inter-normal-white-16px">{filter}</div>
          <img className="vector-891" src={vector3} />
        </div>
        <div className="overlap-group6-115">
          <Component165
            image3={component165Props.image3}
            aSoupShop={component165Props.aSoupShop}
            spanText3={component165Props.spanText3}
            star1={component165Props.star1}
            className={component165Props.className}
          />
          <img className="vector-892" src={vector4} />
        </div>
      </div>
    </div>
  );
}

export default YoolBi2;
