import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import "./FilterList200m.css";

function FilterList200m(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    line281,
    vector3,
    spanText1,
    spanText2,
    fastfood,
    x11,
    line282,
    asian,
    x12,
    vector4,
    image6,
    vector5,
    component1642Props,
    component1632Props,
    component164Props,
  } = props;

  return (
    <div className="filter-list-200m screen">
      <img className="component-29-12" src={component29} />
      <img className="line-27-22" src={line27} />
      <div className="group-83-1">
        <img className="line-29-25" src={line29} />
        <div className="group-51-26">
          <div className="group-48-44">
            <div className="overlap-group-868">
              <Link to="/filter-list-200m-distance">
                <div className="rectangle-80-1"></div>
              </Link>
              <div className="distance-96 inter-normal-white-14px">{distance}</div>
              <img className="vector-379" src="/img/vector-133@2x.png" />
            </div>
          </div>
          <Link to="/filter-list-category-5-200m">
            <div className="group-47-69">
              <div className="overlap-group1-523 border-1px-c4c4c4">
                <div className="category-96 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-380" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-200m">
            <div className="group-49-65">
              <div className="overlap-group2-391 border-1px-c4c4c4">
                <div className="seats-98 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-200m">
            <div className="group-50-63">
              <div className="overlap-group3-291 border-1px-c4c4c4">
                <div className="rating-73 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group4-201">
          <div className="overlap-group1-524">
            <img className="line-28-24" src={line281} />
            <Component1642 star1={component1642Props.star1} />
            <img className="vector-381" src={vector3} />
            <div className="address-85 arial">
              <span className="span0-65 arial">{spanText1}</span>
              <span className="span1-208 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-2-1"></div>
            <div className="rectangle-66-17"></div>
            <div className="fastfood-36 inter-normal-black-7px">{fastfood}</div>
            <img className="x1-56" src={x11} />
          </div>
          <img className="line-28-25" src={line282} />
        </div>
        <div className="overlap-group2-392">
          <Component1632
            aSoupShop={component1632Props.aSoupShop}
            spanText1={component1632Props.spanText1}
            spanText2={component1632Props.spanText2}
            spanText3={component1632Props.spanText3}
            spanText4={component1632Props.spanText4}
            star1={component1632Props.star1}
          />
          <div className="rectangle-67-2"></div>
          <div className="asian-28 inter-normal-black-7px">{asian}</div>
          <div className="rectangle-2-1"></div>
          <img className="x1-57" src={x12} />
          <Link to="/select-restaurant-uncle-s">
            <img className="vector-382" src={vector4} />
          </Link>
        </div>
      </div>
      <div className="group-223-1">
        <div className="overlap-group5-137">
          <Component164 {...component164Props} />
          <img className="image-6-26" src={image6} />
          <Link to="/restaurant-details-menu1">
            <img className="vector-383" src={vector5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterList200m;
