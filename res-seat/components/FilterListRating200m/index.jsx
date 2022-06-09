import React from "react";
import { Link } from "react-router-dom";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import Component1642 from "../Component1642";
import "./FilterListRating200m.css";

function FilterListRating200m(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    asian,
    x11,
    vector3,
    line281,
    image5,
    image6,
    meat,
    vector4,
    line282,
    vector5,
    spanText1,
    spanText2,
    fastfood,
    x12,
    component1632Props,
    component164Props,
    component1642Props,
  } = props;

  return (
    <div className="filter-list-rating-200m screen">
      <img className="component-29-52" src={component29} />
      <div className="group-90-19">
        <div className="line-container-92">
          <img className="line-2-154" src={line27} />
          <img className="line-29-45" src={line29} />
        </div>
        <div className="group-51-52">
          <Link to="/filter-list-distance">
            <div className="group-48-61">
              <div className="overlap-group-1008">
                <div className="distance-116 inter-normal-white-14px">{distance}</div>
                <img className="vector-591" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-200m">
            <div className="group-47-109">
              <div className="overlap-group1-584 border-1px-c4c4c4">
                <div className="category-151 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-592" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-rating-200m">
            <div className="group-49-102">
              <div className="overlap-group2-449 border-1px-c4c4c4">
                <div className="seats-168 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/list">
            <div className="group-50-103">
              <div className="overlap-group3-387">
                <Link to="/filter-list-200m">
                  <div className="rectangle-60-8"></div>
                </Link>
                <div className="rating-123 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group4-232">
          <div className="overlap-group3-388">
            <Component1632
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
            />
            <div className="rectangle-67-9"></div>
            <div className="asian-38 inter-normal-black-7px">{asian}</div>
            <div className="rectangle-2-5"></div>
            <img className="x1-76" src={x11} />
            <Link to="/select-restaurant-uncle-s">
              <img className="vector-593" src={vector3} />
            </Link>
          </div>
          <img className="line-2-154" src={line281} />
        </div>
        <div className="overlap-group1-585">
          <Component164 {...component164Props} />
          <img className="image-5-24" src={image5} />
          <img className="image-6-37" src={image6} />
          <div className="rectangle-69-18"></div>
          <div className="meat-56 inter-normal-black-7px">{meat}</div>
          <Link to="/restaurant-details-menu1">
            <img className="vector-594" src={vector4} />
          </Link>
        </div>
        <div className="overlap-group2-450">
          <img className="line-28-48" src={line282} />
          <Component1642 star1={component1642Props.star1} />
          <img className="vector-595" src={vector5} />
          <div className="address-92 arial">
            <span className="span0-75 arial">{spanText1}</span>
            <span className="span1-215 inter-normal-black-20px">{spanText2}</span>
          </div>
          <div className="rectangle-2-5"></div>
          <div className="rectangle-66-24"></div>
          <div className="fastfood-46 inter-normal-black-7px">{fastfood}</div>
          <img className="x1-77" src={x12} />
        </div>
      </div>
    </div>
  );
}

export default FilterListRating200m;
