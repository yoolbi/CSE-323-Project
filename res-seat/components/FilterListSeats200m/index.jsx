import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import "./FilterListSeats200m.css";

function FilterListSeats200m(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    image5,
    image6,
    meat,
    vector3,
    line281,
    line282,
    vector4,
    spanText1,
    spanText2,
    fastfood,
    x11,
    asian,
    x12,
    vector5,
    component164Props,
    component1642Props,
    component1632Props,
  } = props;

  return (
    <div className="filter-list-seats-200m screen">
      <img className="component-29-51" src={component29} />
      <div className="group-89-4">
        <div className="line-container-91">
          <img className="line-2-153" src={line27} />
          <img className="line-29-44" src={line29} />
        </div>
        <div className="group-51-51">
          <Link to="/filter-list-distance">
            <div className="group-48-60">
              <div className="overlap-group-1007">
                <div className="distance-115 inter-normal-white-14px">{distance}</div>
                <img className="vector-586" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-200m">
            <div className="group-47-108">
              <div className="overlap-group1-582 border-1px-c4c4c4">
                <div className="category-150 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-587" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-200m">
            <div className="group-49-101">
              <div className="overlap-group2-447">
                <div className="seats-167 inter-normal-white-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-rating-200m">
            <div className="group-50-102">
              <div className="overlap-group3-385 border-1px-c4c4c4">
                <div className="rating-122 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group5-155">
          <div className="overlap-group1-583">
            <Component164 {...component164Props} />
            <img className="image-5-23" src={image5} />
            <img className="image-6-36" src={image6} />
            <div className="rectangle-69-17"></div>
            <div className="meat-55 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-588" src={vector3} />
            </Link>
          </div>
          <img className="line-2-153" src={line281} />
        </div>
        <div className="overlap-group2-448">
          <img className="line-28-47" src={line282} />
          <Component1642 star1={component1642Props.star1} />
          <img className="vector-589" src={vector4} />
          <div className="address-91 arial">
            <span className="span0-74 arial">{spanText1}</span>
            <span className="span1-214 inter-normal-black-20px">{spanText2}</span>
          </div>
          <div className="rectangle-2-4"></div>
          <div className="rectangle-66-23"></div>
          <div className="fastfood-45 inter-normal-black-7px">{fastfood}</div>
          <img className="x1-74" src={x11} />
        </div>
        <div className="overlap-group3-386">
          <Component1632
            aSoupShop={component1632Props.aSoupShop}
            spanText1={component1632Props.spanText1}
            spanText2={component1632Props.spanText2}
            spanText3={component1632Props.spanText3}
            spanText4={component1632Props.spanText4}
            star1={component1632Props.star1}
          />
          <div className="rectangle-67-8"></div>
          <div className="asian-37 inter-normal-black-7px">{asian}</div>
          <div className="rectangle-2-4"></div>
          <img className="x1-75" src={x12} />
          <Link to="/select-restaurant-uncle-s">
            <img className="vector-590" src={vector5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterListSeats200m;
