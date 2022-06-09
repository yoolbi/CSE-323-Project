import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import "./FilterListCategory6200m.css";

function FilterListCategory6200m(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    line28,
    image5,
    image6,
    meat1,
    vector3,
    reset,
    surname,
    meat2,
    dessert,
    salad,
    lunch,
    line39,
    line40,
    line41,
    line42,
    line43,
    rectangle92,
    rectangle29,
    component164Props,
  } = props;

  return (
    <div className="filter-list-category-6-200m screen">
      <img className="component-29-35" src={component29} />
      <div className="group-88-2">
        <div className="line-container-84">
          <img className="line-27-34" src={line27} />
          <img className="line-29-37" src={line29} />
        </div>
        <div className="group-51-44">
          <Link to="/filter-list-distance">
            <div className="group-48-52">
              <div className="overlap-group-958">
                <div className="distance-107 inter-normal-white-14px">{distance}</div>
                <img className="vector-508" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-5-200m">
            <div className="group-47-92">
              <div className="overlap-group1-557 border-1px-orange">
                <div className="category-131 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-509" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-200m">
            <div className="group-49-85">
              <div className="overlap-group2-431 border-1px-c4c4c4">
                <div className="seats-141 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-200m">
            <div className="group-50-84">
              <div className="overlap-group3-351 border-1px-c4c4c4">
                <div className="rating-104 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-76">
          <img className="line-28-40" src={line28} />
          <div className="overlap-group4-220">
            <Component164 {...component164Props} />
            <img className="image-5-18" src={image5} />
            <img className="image-6-31" src={image6} />
            <div className="rectangle-69-13"></div>
            <div className="meat-48 inter-normal-black-7px">{meat1}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-510" src={vector3} />
            </Link>
          </div>
          <div className="overlap-group5-146">
            <div className="rectangle-91-6 border-0-5px-c4c4c4"></div>
            <Link to="/filter-list-200m">
              <div className="reset-26 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <div className="surname-6 inter-normal-black-13px">{surname}</div>
            <Link to="/filter-list-category-8-200m">
              <div className="meat-49 inter-normal-flamingo-13px">{meat2}</div>
            </Link>
            <div className="dessert-6 inter-normal-black-13px">{dessert}</div>
            <div className="salad-6 inter-normal-black-13px">{salad}</div>
            <div className="lunch-6 inter-normal-black-13px">{lunch}</div>
            <img className="line-39-7" src={line39} />
            <img className="line-40-7" src={line40} />
            <img className="line-41-7" src={line41} />
            <img className="line-42-7" src={line42} />
            <img className="line-43-7" src={line43} />
            <div className="ellipse-20-38"></div>
            <div className="ellipse-21-7"></div>
          </div>
          <img className="rectangle-92-12" src={rectangle92} />
        </div>
      </div>
      <img className="rectangle-29-18" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory6200m;
