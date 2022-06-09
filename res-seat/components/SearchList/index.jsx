import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import "./SearchList.css";

function SearchList(props) {
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
    component164Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search-list screen">
        <img className="component-29-5" src={component29} />
        <img className="line-27-17" src={line27} />
        <img className="line-29-18" src={line29} />
        <div className="group-51-19">
          <Link to="/filter-list-distance">
            <div className="group-48-22">
              <div className="overlap-group-841">
                <div className="distance-77 inter-normal-white-14px">{distance}</div>
                <img className="vector-342" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category">
            <div className="group-47-62">
              <div className="overlap-group1-514 border-1px-c4c4c4">
                <div className="category-85 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-343" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats">
            <div className="group-49-58">
              <div className="overlap-group2-384 border-1px-c4c4c4">
                <div className="seats-89 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating">
            <div className="group-50-56">
              <div className="overlap-group3-284 border-1px-c4c4c4">
                <div className="rating-64 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group5-132">
          <img className="line-28-19" src={line28} />
          <div className="overlap-group4-196">
            <Component164 {...component164Props} />
            <img className="image-5-5" src={image5} />
            <img className="image-6-19" src={image6} />
            <div className="rectangle-69-4"></div>
            <div className="meat-35 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-344" src={vector3} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchList;
