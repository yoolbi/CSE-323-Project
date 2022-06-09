import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import "./FilterListCategory8200m.css";

function FilterListCategory8200m(props) {
  const {
    component29,
    line27,
    line29,
    category,
    seats,
    rating,
    line28,
    image5,
    image6,
    meat,
    vector2,
    rectangle29,
    component164Props,
  } = props;

  return (
    <div className="filter-list-category-8-200m screen">
      <img className="component-29-6" src={component29} />
      <div className="group-87-1">
        <img className="line-27-18" src={line27} />
        <img className="line-29-19" src={line29} />
        <div className="group-51-20">
          <Group4822 />
          <Link to="/filter-list-category-5-200m">
            <div className="group-47-63">
              <div className="overlap-group1-515">
                <div className="category-86 inter-normal-white-13px">{category}</div>
                <img className="vector-345" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-200m">
            <div className="group-49-59">
              <div className="overlap-group2-385 border-1px-c4c4c4">
                <div className="seats-90 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-200m">
            <div className="group-50-57">
              <div className="overlap-group3-285 border-1px-c4c4c4">
                <div className="rating-65 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group5-133">
          <img className="line-28-20" src={line28} />
          <div className="overlap-group4-197">
            <Component164 {...component164Props} />
            <img className="image-5-6" src={image5} />
            <img className="image-6-20" src={image6} />
            <div className="rectangle-69-5"></div>
            <div className="meat-36 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-346" src={vector2} />
            </Link>
          </div>
        </div>
      </div>
      <img className="rectangle-29-8" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory8200m;
