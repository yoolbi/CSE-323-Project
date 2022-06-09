import React from "react";
import { Link } from "react-router-dom";
import "./FilterListRating100m.css";

function FilterListRating100m(props) {
  const { component29, line27, line29, distance, category, vector2, seats, rating, line28 } = props;

  return (
    <div className="filter-list-rating-100m screen">
      <img className="component-29-54" src={component29} />
      <div className="group-90-21">
        <div className="line-container-94">
          <img className="line-27-40" src={line27} />
          <img className="line-29-47" src={line29} />
        </div>
        <div className="group-51-54">
          <Link to="/filter-list-100m-distance">
            <div className="group-48-62">
              <div className="overlap-group-1011">
                <div className="distance-117 inter-normal-white-14px">{distance}</div>
                <img className="vector-599" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-100m">
            <div className="group-47-111">
              <div className="overlap-group1-588 border-1px-c4c4c4">
                <div className="category-154 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-600" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-rating-100m">
            <div className="group-49-104">
              <div className="overlap-group2-452 border-1px-c4c4c4">
                <div className="seats-171 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-100m">
            <div className="group-50-105">
              <div className="overlap-group3-390">
                <div className="rating-125 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-50" src={line28} />
      </div>
    </div>
  );
}

export default FilterListRating100m;
