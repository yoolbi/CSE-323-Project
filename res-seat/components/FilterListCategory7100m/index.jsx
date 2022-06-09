import React from "react";
import { Link } from "react-router-dom";
import "./FilterListCategory7100m.css";

function FilterListCategory7100m(props) {
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
    reset,
    surname,
    meat,
    dessert,
    salad,
    lunch,
    line39,
    line40,
    line41,
    line42,
    line43,
    rectangle29,
  } = props;

  return (
    <div className="filter-list-category-7-100m screen">
      <img className="component-29-71" src={component29} />
      <div className="group-86-1">
        <div className="line-container-98">
          <img className="line-27-45" src={line27} />
          <img className="line-29-54" src={line29} />
        </div>
        <div className="group-51-62">
          <Link to="/filter-list-100m-distance">
            <div className="group-48-70">
              <div className="overlap-group-1066">
                <div className="distance-129 inter-normal-white-14px">{distance}</div>
                <img className="vector-700" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-100m">
            <div className="group-47-128">
              <div className="overlap-group1-613 border-1px-orange">
                <div className="category-180 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-701" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-100m">
            <div className="group-49-115">
              <div className="overlap-group2-473 border-1px-c4c4c4">
                <div className="seats-193 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-100m">
            <div className="group-50-118">
              <div className="overlap-group3-425 border-1px-c4c4c4">
                <div className="rating-146 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-85">
          <img className="line-28-59" src={line28} />
          <div className="overlap-group4-247">
            <div className="rectangle-91-13 border-0-5px-c4c4c4"></div>
            <Link to="/filter-list-100m">
              <div className="reset-33 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <div className="surname-13 inter-normal-black-13px">{surname}</div>
            <Link to="/filter-list-category-8-100m">
              <div className="meat-64 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="dessert-13 inter-normal-black-13px">{dessert}</div>
            <div className="salad-13 inter-normal-black-13px">{salad}</div>
            <div className="lunch-13 inter-normal-black-13px">{lunch}</div>
            <img className="line-39-14" src={line39} />
            <img className="line-40-14" src={line40} />
            <img className="line-41-14" src={line41} />
            <img className="line-42-14" src={line42} />
            <img className="line-43-14" src={line43} />
            <Link to="/filter-list-category-5-100m">
              <div className="ellipse-20-45"></div>
            </Link>
            <div className="ellipse-21-14"></div>
          </div>
        </div>
      </div>
      <img className="rectangle-29-31" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory7100m;
