import React from "react";
import { Link } from "react-router-dom";
import Component942 from "../Component942";
import Component165 from "../Component165";
import Group11 from "../Group11";
import Group9 from "../Group9";
import Group20 from "../Group20";
import "./YoolBi1.css";

function YoolBi1(props) {
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
    outline_Remove_Black_24Dp1,
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
      <div className="yool-bi-sangsepilteo-1 screen">
        <div className="overlap-group7-86">
          <Component942 iconStar={component942Props.iconStar} className={component942Props.className} />
          <div className="rectangle-15-41"></div>
          <div className="a-soup-shop-122 arial">{aSoupShop1}</div>
          <img className="vector-902" src="/img/vector-34@2x.png" />
          <img className="icon-search-42" src={iconSearch} />
          <div className="my-5 inter-normal-flamingo-12px">{my}</div>
          <img className="vector-903" src={vector2} />
          <div className="a-soup-shop-122 arial">{aSoupShop2}</div>
          <Component165
            image3={component165Props.image3}
            aSoupShop={component165Props.aSoupShop}
            spanText3={component165Props.spanText3}
            star1={component165Props.star1}
            className={component165Props.className}
          />
          <img className="vector-904" src={vector3} />
          <div className="rectangle-35-4"></div>
          <div className="filter-3 inter-normal-white-16px">{filter}</div>
          <img className="filter-alt-3" src={filterAlt} />
          <img className="vector-905" src={vector4} />
          <Link to="/completed-preorder-home">
            <img className="group-117" src={group} />
          </Link>
          <Link to="/yool-bi-sangsepilteo">
            <div className="rectangle-43-1"></div>
          </Link>
        </div>
        <div className="flex-row-636">
          <div className="detailed-filter-1 inter-semi-bold-black-20px">{detailedFilter}</div>
          <Link to="/yool-bi-sangsepilteo">
            <img className="icon-close-166" src={iconClose} />
          </Link>
        </div>
        <img className="line-19-28" src={line19} />
        <div className="flex-row-637">
          <div className="number-of-people-1 inter-semi-bold-black-20px">{numberOfPeople}</div>
          <div className="overlap-group10-48">
            <div className="group-13-94">
              <Link to="/yool-bi">
                <div className="group-7-160">
                  <img className="outline_remove_black_24dp-1-35" src={outline_Remove_Black_24Dp1} />
                </div>
              </Link>
              <div className="group-10-109"></div>
              <Group11 src={group11Props.src} className={group11Props.className} />
            </div>
            <div className="number-265 inter-bold-black-15px">{number}</div>
          </div>
        </div>
        <div className="flex-row-638">
          <div className="distance-148 inter-semi-bold-black-23px">{distance}</div>
          <div className="overlap-group8-62">
            <div className="overlap-group6-118">
              <Link to="/yool-bi-sangsepilteo-distance">
                <div className="group-20-33">
                  <Group9 />
                </div>
              </Link>
            </div>
            <div className="less-than-100-m-1 inter-bold-black-15px">{lessThan100M}</div>
            <img className="arrow-drop-down-109" src={arrowDropDown1} />
            <img className="line-2-174" src={line23} />
          </div>
        </div>
        <div className="flex-row-639">
          <div className="waiting-8 inter-semi-bold-black-23px">{waiting}</div>
          <div className="overlap-group9-66">
            <Group20 className={group20Props.className} />
            <div className="no-waiting-1 inter-bold-black-15px">{noWaiting}</div>
            <img className="arrow-drop-down-110" src={arrowDropDown2} />
            <img className="line-2-174" src={line24} />
          </div>
        </div>
        <img className="line-22-2" src={line22} />
        <div className="group-19-16">
          <Link to="/yool-bi">
            <div className="group-19-17">
              <div className="overlap-group-1156 border-1px-orange">
                <div className="reset-44 inter-normal-flamingo-24px">{reset}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group5-208">
            <Link to="/yool-bi-">
              <div className="rectangle-39-43"></div>
            </Link>
            <div className="apply-1 inter-normal-white-24px">{apply}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoolBi1;
