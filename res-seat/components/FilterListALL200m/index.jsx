import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import "./FilterListALL200m.css";

function FilterListALL200m(props) {
  const {
    component29,
    line27,
    line29,
    category1,
    category2,
    vector2,
    seats1,
    seats2,
    seats3,
    rating,
    line28,
    image6,
    component164Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-all-200m screen">
        <img className="component-29-48" src={component29} />
        <div className="group-90-18">
          <div className="line-container-89">
            <img className="line-27-37" src={line27} />
            <img className="line-29-42" src={line29} />
          </div>
          <div className="group-51-49">
            <Group4822 />
            <Link to="/filter-list-seats-rating-200m">
              <div className="group-47-105">
                <div className="overlap-group1-577 border-1px-c4c4c4">
                  <div className="category-146 inter-normal-spicy-pink-13px">{category1}</div>
                  <img className="vector-578" src="/img/vector-134@2x.png" />
                  <div className="overlap-group-1000">
                    <div className="category-147 inter-normal-white-13px">{category2}</div>
                    <img className="vector-579" src={vector2} />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/filter-list-category-rating-200m">
              <div className="group-49-98">
                <div className="overlap-group2-445 border-1px-c4c4c4">
                  <div className="seats-162 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group1-578 border-1px-c4c4c4">
                    <div className="seats-162 inter-normal-spicy-pink-14px">{seats2}</div>
                    <div className="overlap-group-1001">
                      <div className="seats-163 inter-normal-white-14px">{seats3}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/filter-list-category-seats-200m">
              <div className="group-50-99">
                <div className="overlap-group3-383">
                  <div className="rating-119 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </Link>
          </div>
          <img className="line-28-45" src={line28} />
        </div>
        <div className="overlap-group6-81">
          <Component164 {...component164Props} />
          <img className="image-6-35" src={image6} />
        </div>
      </div>
    </div>
  );
}

export default FilterListALL200m;
