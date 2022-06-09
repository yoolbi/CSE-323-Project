import React from "react";
import { Link } from "react-router-dom";
import Component92 from "../Component92";
import Component166 from "../Component166";
import Component167 from "../Component167";
import Component165 from "../Component165";
import Component168 from "../Component168";
import "./YoolBi.css";

function YoolBi(props) {
  const {
    map1,
    map2,
    iconSearch,
    group,
    orders,
    spanText1,
    spanText2,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    component92Props,
    component166Props,
    component1671Props,
    component1672Props,
    component165Props,
    component168Props,
    component1673Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="yool-bi-pilteo-gyeolgwa-eobseul-ddae screen">
        <div className="flex-row-606">
          <div className="overlap-group17">
            <img className="map-37" src={map1} />
            <div className="map-38 inter-normal-flamingo-12px">{map2}</div>
          </div>
          <div className="overlap-group12-7">
            <Link to="/yool-bi-sangsepilteo">
              <div className="rectangle-15-38"></div>
            </Link>
            <img className="icon-search-37" src={iconSearch} />
          </div>
          <div className="flex-col-489">
            <Link to="/completed-preorder-home">
              <img className="group-109" src={group} />
            </Link>
            <div className="orders inter-normal-flamingo-12px">{orders}</div>
          </div>
        </div>
        <Component92
          nearest={component92Props.nearest}
          spanText1={component92Props.spanText1}
          spanText2={component92Props.spanText2}
          iconStar={component92Props.iconStar}
          avalilableSeats={component92Props.avalilableSeats}
          waiting={component92Props.waiting}
        />
        <div className="overlap-group13-3">
          <Component166
            aSoupShop={component166Props.aSoupShop}
            spanText1={component166Props.spanText1}
            spanText2={component166Props.spanText2}
            spanText3={component166Props.spanText3}
            iconStar={component166Props.iconStar}
          />
          <img className="vector-871" src="/img/vector-11@2x.png" />
          <div className="address-116 arial">
            <span className="span0-113 arial">{spanText1}</span>
            <span className="span1-261 inter-normal-black-20px">{spanText2}</span>
          </div>
          <div className="rectangle-16"></div>
          <img className="vector-872" src={vector2} />
        </div>
        <div className="overlap-group1-660">
          <Component167
            aSoupShop={component1671Props.aSoupShop}
            spanText1={component1671Props.spanText1}
            spanText2={component1671Props.spanText2}
            spanText3={component1671Props.spanText3}
            spanText4={component1671Props.spanText4}
          />
          <img className="vector-868" src={vector3} />
          <div className="rectangle-16"></div>
          <img className="vector-873" src={vector4} />
        </div>
        <div className="overlap-group1-660">
          <div className="rectangle-29-51"></div>
          <Component167
            aSoupShop={component1672Props.aSoupShop}
            spanText1={component1672Props.spanText1}
            spanText2={component1672Props.spanText2}
            spanText3={component1672Props.spanText3}
            spanText4={component1672Props.spanText4}
            className={component1672Props.className}
          />
          <div className="rectangle-16"></div>
          <img className="vector-869" src={vector5} />
          <img className="vector-868" src={vector6} />
        </div>
        <div className="overlap-group1-660">
          <Component165
            image3={component165Props.image3}
            aSoupShop={component165Props.aSoupShop}
            spanText3={component165Props.spanText3}
            star1={component165Props.star1}
            className={component165Props.className}
          />
          <img className="vector-870" src={vector7} />
        </div>
        <div className="overlap-group1-660">
          <Component168 {...component168Props} />
          <div className="rectangle-16"></div>
          <img className="vector-869" src={vector8} />
          <img className="vector-870" src={vector9} />
        </div>
        <div className="overlap-group1-660">
          <Component167
            aSoupShop={component1673Props.aSoupShop}
            spanText1={component1673Props.spanText1}
            spanText2={component1673Props.spanText2}
            spanText3={component1673Props.spanText3}
            spanText4={component1673Props.spanText4}
            className={component1673Props.className}
          />
          <div className="rectangle-32-1"></div>
          <img className="vector-874" src={vector10} />
          <img className="vector-875" src={vector11} />
        </div>
      </div>
    </div>
  );
}

export default YoolBi;
