import React from "react";
import { Link } from "react-router-dom";
import Component942 from "../Component942";
import Component165 from "../Component165";
import Group11 from "../Group11";
import Group20 from "../Group20";
import "./YoolBi3.css";

function YoolBi3(props) {
  const {
    aSoupShop1,
    iconSearch,
    my,
    vector2,
    aSoupShop2,
    vector3,
    filter,
    filterAlt,
    vector4,
    group,
    detailedFilter,
    iconClose,
    line19,
    numberOfPeople,
    outline_Add_Black_24Dp1,
    number,
    distance,
    lessThan100M,
    arrowDropDown1,
    line23,
    waiting,
    noWaiting,
    arrowDropDown2,
    line24,
    line22,
    reset,
    apply,
    component942Props,
    component165Props,
    group11Props,
    group20Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="yool-bi screen">
        <div className="overlap-group7-85">
          <Component942 iconStar={component942Props.iconStar} />
          <div className="rectangle-15-40"></div>
          <div className="a-soup-shop-120 arial">{aSoupShop1}</div>
          <img className="vector-895" src="/img/vector-34@2x.png" />
          <img className="icon-search-40" src={iconSearch} />
          <div className="my-3 inter-normal-flamingo-12px">{my}</div>
          <img className="vector-896" src={vector2} />
          <div className="a-soup-shop-120 arial">{aSoupShop2}</div>
          <Component165
            image3={component165Props.image3}
            aSoupShop={component165Props.aSoupShop}
            spanText3={component165Props.spanText3}
            star1={component165Props.star1}
            className={component165Props.className}
          />
          <img className="vector-897" src={vector3} />
          <div className="rectangle-35-2"></div>
          <div className="filter-1 inter-normal-white-16px">{filter}</div>
          <img className="filter-alt-1" src={filterAlt} />
          <img className="vector-898" src={vector4} />
          <Link to="/completed-preorder-home">
            <img className="group-114" src={group} />
          </Link>
          <Link to="/yool-bi-sangsepilteo">
            <div className="rectangle-43"></div>
          </Link>
        </div>
        <div className="flex-row-626">
          <div className="detailed-filter inter-semi-bold-black-20px">{detailedFilter}</div>
          <Link to="/yool-bi-sangsepilteo">
            <img className="icon-close-165" src={iconClose} />
          </Link>
        </div>
        <img className="line-19-27" src={line19} />
        <div className="flex-row-627">
          <div className="number-of-people inter-semi-bold-black-20px">{numberOfPeople}</div>
          <div className="overlap-group10-47">
            <div className="group-13-92">
              <Group11 src={group11Props.src} className={group11Props.className} />
              <div className="group-10-108"></div>
              <Link to="/yool-bi-sangsepilteo-1">
                <div className="group-8-183">
                  <img className="outline_add_black_24dp-1-64" src={outline_Add_Black_24Dp1} />
                </div>
              </Link>
            </div>
            <div className="number-264 inter-bold-black-15px">{number}</div>
          </div>
        </div>
        <div className="flex-row-628">
          <div className="distance-147 inter-semi-bold-black-23px">{distance}</div>
          <div className="overlap-group8-61">
            <div className="overlap-group6-117">
              <Group20 />
            </div>
            <div className="less-than-100-m inter-bold-black-15px">{lessThan100M}</div>
            <img className="arrow-drop-down-106" src={arrowDropDown1} />
            <img className="line-2-172" src={line23} />
          </div>
        </div>
        <div className="flex-row-629">
          <div className="waiting-4 inter-semi-bold-black-23px">{waiting}</div>
          <div className="overlap-group9-65">
            <Group20 className={group20Props.className} />
            <div className="no-waiting inter-bold-black-15px">{noWaiting}</div>
            <img className="arrow-drop-down-107" src={arrowDropDown2} />
            <img className="line-2-172" src={line24} />
          </div>
        </div>
        <img className="line-22-1" src={line22} />
        <div className="group-19-15">
          <div className="overlap-group-1150 border-1px-orange">
            <div className="reset-43 inter-normal-flamingo-24px">{reset}</div>
          </div>
          <div className="overlap-group5-205">
            <Link to="/yool-bi-">
              <div className="rectangle-39-42"></div>
            </Link>
            <div className="apply inter-normal-white-24px">{apply}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoolBi3;
