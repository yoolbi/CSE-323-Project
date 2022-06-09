import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import "./FilterListCategorySeats200m.css";

function FilterListCategorySeats200m(props) {
  const {
    component29,
    line27,
    line29,
    category1,
    category2,
    vector2,
    seats1,
    seats2,
    rating1,
    rating2,
    image5,
    image6,
    meat,
    vector3,
    line28,
    component164Props,
  } = props;

  return (
    <div className="filter-list-category-seats-200m screen">
      <img className="component-29-8" src={component29} />
      <div className="group-90-10">
        <div className="line-container-73">
          <img className="line-2-148" src={line27} />
          <img className="line-29-21" src={line29} />
        </div>
        <div className="group-51-22">
          <Group4822 />
          <Link to="/filter-list-seats-200m">
            <div className="group-47-65">
              <div className="overlap-group1-517 border-1px-c4c4c4">
                <div className="category-89 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-367" src="/img/vector-134@2x.png" />
                <div className="overlap-group-860">
                  <div className="category-90 inter-normal-white-13px">{category2}</div>
                  <img className="vector-368" src={vector2} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-8-200m">
            <div className="group-49-61">
              <div className="overlap-group2-387 border-1px-c4c4c4">
                <div className="seats-92 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group-861">
                  <div className="seats-93 inter-normal-white-14px">{seats2}</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-all-200m">
            <div className="group-50-59">
              <div className="overlap-group3-287">
                <div className="rating-67 inter-normal-white-14px">{rating1}</div>
                <div className="overlap-group-862 border-1px-c4c4c4">
                  <div className="rating-68 inter-normal-spicy-pink-14px">{rating2}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group4-198">
          <div className="overlap-group1-518">
            <Component164 {...component164Props} />
            <img className="image-5-8" src={image5} />
            <img className="image-6-22" src={image6} />
            <div className="rectangle-69-7"></div>
            <div className="meat-38 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-369" src={vector3} />
            </Link>
          </div>
          <img className="line-2-148" src={line28} />
        </div>
      </div>
    </div>
  );
}

export default FilterListCategorySeats200m;
