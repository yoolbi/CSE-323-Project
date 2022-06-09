import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import "./FilterListCategory3.css";

function FilterListCategory3(props) {
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
    <div className="filter-list-category-3 screen">
      <img className="component-29-63" src={component29} />
      <div className="group-87-4">
        <img className="line-27-44" src={line27} />
        <img className="line-29-52" src={line29} />
        <div className="group-51-59">
          <Link to="/filter-list-distance">
            <div className="group-48-67">
              <div className="overlap-group-1034">
                <div className="distance-124 inter-normal-white-14px">{distance}</div>
                <img className="vector-645" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category">
            <div className="group-47-120">
              <div className="overlap-group1-604">
                <div className="category-168 inter-normal-white-13px">{category}</div>
                <img className="vector-646" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats">
            <div className="group-49-111">
              <div className="overlap-group2-461 border-1px-c4c4c4">
                <div className="seats-185 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating">
            <div className="group-50-112">
              <div className="overlap-group3-399 border-1px-c4c4c4">
                <div className="rating-136 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group5-163">
          <img className="line-28-57" src={line28} />
          <div className="overlap-group4-239">
            <Component164 {...component164Props} />
            <img className="image-5-29" src={image5} />
            <img className="image-6-42" src={image6} />
            <div className="rectangle-69-20"></div>
            <div className="meat-60 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-647" src={vector3} />
            </Link>
          </div>
        </div>
      </div>
      <img className="rectangle-29-27" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory3;
