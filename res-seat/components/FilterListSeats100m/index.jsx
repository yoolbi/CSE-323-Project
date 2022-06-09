import React from "react";
import { Link } from "react-router-dom";
import "./FilterListSeats100m.css";

function FilterListSeats100m(props) {
  const { component29, line27, line29, distance, category, vector2, seats, rating, line28 } = props;

  return (
    <div className="filter-list-seats-100m screen">
      <img className="component-29-49" src={component29} />
      <div className="group-89-3">
        <div className="line-container-90">
          <img className="line-27-38" src={line27} />
          <img className="line-29-43" src={line29} />
        </div>
        <div className="group-51-50">
          <Link to="/filter-list-100m-distance">
            <div className="group-48-58">
              <div className="overlap-group-1002">
                <div className="distance-113 inter-normal-white-14px">{distance}</div>
                <img className="vector-580" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-100m">
            <div className="group-47-106">
              <div className="overlap-group1-579 border-1px-c4c4c4">
                <div className="category-148 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-581" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-100m">
            <div className="group-49-99">
              <div className="overlap-group2-446">
                <div className="seats-164 inter-normal-white-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-rating-100m">
            <div className="group-50-100">
              <div className="overlap-group3-384 border-1px-c4c4c4">
                <div className="rating-120 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-46" src={line28} />
      </div>
    </div>
  );
}

export default FilterListSeats100m;
