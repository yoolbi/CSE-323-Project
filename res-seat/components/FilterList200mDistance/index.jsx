import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import "./FilterList200mDistance.css";

function FilterList200mDistance(props) {
  const {
    component29,
    line27,
    line29,
    category,
    seats,
    rating,
    line281,
    vector2,
    spanText1,
    spanText2,
    fastfood,
    x11,
    line282,
    asian,
    x12,
    vector3,
    distance,
    vector4,
    x100M,
    x200M,
    line31,
    line32,
    x500M,
    x1Km,
    line33,
    image6,
    vector5,
    component1642Props,
    component1632Props,
    component164Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-200m-distance screen">
        <img className="component-29-4" src={component29} />
        <img className="line-27-16" src={line27} />
        <div className="group-container-126">
          <div className="group-83">
            <img className="line-29-17" src={line29} />
            <div className="group-51-18">
              <Link to="/filter-list-category-5-200m">
                <div className="group-47-61">
                  <div className="overlap-group-772 border-1px-c4c4c4">
                    <div className="category-84 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-285" src="/img/vector-134@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating-200m">
                <div className="group-49-57">
                  <div className="overlap-group1-477 border-1px-c4c4c4">
                    <div className="seats-88 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating-200m">
                <div className="group-50-55">
                  <div className="overlap-group2-361 border-1px-c4c4c4">
                    <div className="rating-63 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group3-225">
              <div className="overlap-group1-478">
                <img className="line-28-17" src={line281} />
                <Component1642 star1={component1642Props.star1} />
                <img className="vector-286" src={vector2} />
                <div className="address-84 arial">
                  <span className="span0-64 arial">{spanText1}</span>
                  <span className="span1-207 inter-normal-black-20px">{spanText2}</span>
                </div>
                <div className="rectangle-2"></div>
                <div className="rectangle-66-16"></div>
                <div className="fastfood-35 inter-normal-black-7px">{fastfood}</div>
                <img className="x1-48" src={x11} />
              </div>
              <img className="line-28-18" src={line282} />
            </div>
            <div className="overlap-group2-362">
              <Component1632
                aSoupShop={component1632Props.aSoupShop}
                spanText1={component1632Props.spanText1}
                spanText2={component1632Props.spanText2}
                spanText3={component1632Props.spanText3}
                spanText4={component1632Props.spanText4}
                star1={component1632Props.star1}
              />
              <div className="rectangle-67-1"></div>
              <div className="asian-27 inter-normal-black-7px">{asian}</div>
              <div className="rectangle-2"></div>
              <img className="x1-49" src={x12} />
              <Link to="/select-restaurant-uncle-s">
                <img className="vector-287" src={vector3} />
              </Link>
            </div>
          </div>
          <Link to="/filter-list-200m">
            <div className="group-48-21">
              <div className="overlap-group-772 border-1px-orange">
                <div className="distance-76 inter-normal-flamingo-14px">{distance}</div>
                <img className="vector-288" src={vector4} />
              </div>
            </div>
          </Link>
          <div className="overlap-group5-122 border-1px-c4c4c4">
            <div className="x100m-1 inter-normal-black-14px">{x100M}</div>
            <div className="overlap-group-773">
              <Link to="/filter-list-200m">
                <div className="x200m-1 inter-normal-flamingo-14px">{x200M}</div>
              </Link>
              <img className="line-3-82" src={line31} />
              <img className="line-32-2" src={line32} />
              <div className="rectangle-85-1"></div>
            </div>
            <Link to="/filter-list-500m">
              <div className="x500m-1 inter-normal-black-14px">{x500M}</div>
            </Link>
            <div className="overlap-group1-479">
              <Link to="/list">
                <div className="x1-km-1 inter-normal-black-14px">{x1Km}</div>
              </Link>
              <img className="line-3-82" src={line33} />
            </div>
          </div>
        </div>
        <div className="group-223">
          <div className="overlap-group6-63">
            <Component164 {...component164Props} />
            <img className="image-6-18" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-289" src={vector5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterList200mDistance;
