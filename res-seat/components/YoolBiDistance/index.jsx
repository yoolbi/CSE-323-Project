import React from "react";
import { Link } from "react-router-dom";
import Component942 from "../Component942";
import Component165 from "../Component165";
import Group11 from "../Group11";
import "./YoolBiDistance.css";

function YoolBiDistance(props) {
  const {
    aSoupShop1,
    my,
    aSoupShop2,
    filter,
    detailedFilter,
    numberOfPeople,
    outline_Remove_Black_24Dp1,
    number,
    distance,
    lessThan100M1,
    lessThan100M2,
    lessThan150M,
    waiting,
    noWaiting,
    lessThan100M3,
    lessThan250M,
    lessThan100M4,
    lessThan300M,
    reset,
    apply,
    component942Props,
    component165Props,
    group11Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="yool-bi-sangsepilteo-distance screen">
        <div className="overlap-group6-120">
          <Component942 iconStar={component942Props.iconStar} className={component942Props.className} />
          <div className="rectangle-15-42"></div>
          <div className="a-soup-shop-124 arial">{aSoupShop1}</div>
          <img className="vector-909" src="/img/vector-14@2x.svg" />
          <img className="icon-search-43" src="/img/search@2x.svg" />
          <div className="my-7 inter-normal-flamingo-12px">{my}</div>
          <img className="vector-910" src="/img/vector-10@2x.svg" />
          <div className="a-soup-shop-124 arial">{aSoupShop2}</div>
          <Component165
            image3={component165Props.image3}
            aSoupShop={component165Props.aSoupShop}
            spanText3={component165Props.spanText3}
            star1={component165Props.star1}
            className={component165Props.className}
          />
          <img className="vector-911" src="/img/vector-20@2x.svg" />
          <div className="rectangle-35-6"></div>
          <div className="filter-5 inter-normal-white-16px">{filter}</div>
          <img className="filter-alt-5" src="/img/filter-alt@2x.svg" />
          <img className="vector-912" src="/img/vector-21@2x.svg" />
          <Link to="/completed-preorder-home">
            <img className="group-120" src="/img/group-7@2x.svg" />
          </Link>
          <Link to="/yool-bi-sangsepilteo">
            <div className="rectangle-43-2"></div>
          </Link>
        </div>
        <div className="flex-row-649">
          <div className="detailed-filter-2 inter-semi-bold-black-20px">{detailedFilter}</div>
          <Link to="/yool-bi-sangsepilteo">
            <img className="icon-close-167" src="/img/close@2x.svg" />
          </Link>
        </div>
        <img className="line-19-29" src="/img/line-19@2x.svg" />
        <div className="flex-row-650">
          <div className="number-of-people-2 inter-semi-bold-black-20px">{numberOfPeople}</div>
          <div className="overlap-group11-26">
            <div className="group-13-97">
              <Link to="/yool-bi">
                <div className="group-7-161">
                  <img className="outline_remove_black_24dp-1-36" src={outline_Remove_Black_24Dp1} />
                </div>
              </Link>
              <div className="group-10-110"></div>
              <Group11 src={group11Props.src} className={group11Props.className} />
            </div>
            <div className="number-268 inter-bold-black-15px">{number}</div>
          </div>
        </div>
        <div className="flex-row-651">
          <div className="distance-149 inter-semi-bold-black-23px">{distance}</div>
          <div className="overlap-group9-67">
            <Link to="/yool-bi-sangsepilteo-1">
              <div className="group-22-32">
                <div className="rectangle-9-5 border-1px-orange"></div>
              </div>
            </Link>
            <div className="less-than inter-bold-black-15px">{lessThan100M1}</div>
            <img className="arrow-drop-down-113" src="/img/arrow-drop-down-5@2x.svg" />
            <img className="line-2-177" src="/img/line-23@2x.svg" />
          </div>
        </div>
        <div className="overlap-group10-49 inter-bold-black-15px">
          <div className="group-119"></div>
          <div className="rectangle-9-3 border-1px-orange"></div>
          <div className="less-than-100-m-2">{lessThan100M2}</div>
          <div className="group-119"></div>
          <div className="rectangle-9-3 border-1px-orange"></div>
          <div className="less-than">{lessThan150M}</div>
        </div>
        <div className="flex-row-652">
          <div className="waiting-9 inter-semi-bold-black-23px">{waiting}</div>
          <div className="overlap-group7-88 inter-bold-black-15px">
            <div className="rectangle-9-3 border-1px-orange"></div>
            <div className="no-waiting-2">{noWaiting}</div>
            <div className="group-119"></div>
            <div className="rectangle-9-3 border-1px-orange"></div>
            <div className="less-than-100-m-3">{lessThan100M3}</div>
            <div className="group-119"></div>
            <div className="rectangle-9-3 border-1px-orange"></div>
            <div className="less-than">{lessThan250M}</div>
            <img className="line-2-177" src="/img/line-23@2x.svg" />
          </div>
        </div>
        <div className="overlap-group8-63 inter-bold-black-15px">
          <img className="line-22-3" src="/img/line-19@2x.svg" />
          <div className="group-3-1"></div>
          <div className="rectangle-9-4 border-1px-orange"></div>
          <div className="less-than-100-m-4">{lessThan100M4}</div>
          <div className="group-3-1"></div>
          <div className="rectangle-9-4 border-1px-orange"></div>
          <div className="less-than-300-m">{lessThan300M}</div>
        </div>
        <div className="group-19-18">
          <Link to="/yool-bi">
            <div className="group-19-19">
              <div className="overlap-group-1162 border-1px-orange">
                <div className="reset-45 inter-normal-flamingo-24px">{reset}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group5-211">
            <Link to="/yool-bi-">
              <div className="rectangle-39-44"></div>
            </Link>
            <div className="apply-2 inter-normal-white-24px">{apply}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoolBiDistance;
