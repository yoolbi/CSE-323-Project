import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import "./FilterListCategory8500m.css";

function FilterListCategory8500m(props) {
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
    meat,
    vector3,
    rectangle29,
    component164Props,
  } = props;

  return (
    <div className="filter-list-category-8-500m screen">
      <img className="component-29-11" src={component29} />
      <div className="group-87-2">
        <img className="line-27-21" src={line27} />
        <img className="line-29-24" src={line29} />
        <div className="group-51-25">
          <Link to="/filter-list-distance">
            <div className="group-48-42">
              <div className="overlap-group-867">
                <div className="distance-95 inter-normal-white-14px">{distance}</div>
                <img className="vector-376" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-5-500m">
            <div className="group-47-68">
              <div className="overlap-group1-522">
                <div className="category-95 inter-normal-white-13px">{category}</div>
                <img className="vector-377" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-500m">
            <div className="group-49-64">
              <div className="overlap-group2-390 border-1px-c4c4c4">
                <div className="seats-97 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-500m">
            <div className="group-50-62">
              <div className="overlap-group3-290 border-1px-c4c4c4">
                <div className="rating-72 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group5-136">
          <img className="line-28-23" src={line28} />
          <div className="overlap-group4-200">
            <Component164 {...component164Props} />
            <img className="image-5-11" src={image5} />
            <img className="image-6-25" src={image6} />
            <div className="rectangle-69-10"></div>
            <div className="meat-41 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-378" src={vector3} />
            </Link>
          </div>
        </div>
      </div>
      <img className="rectangle-29-9" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory8500m;
