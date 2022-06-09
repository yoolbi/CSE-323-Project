import React from "react";
import { Link } from "react-router-dom";
import "./FilterListCategory8100m.css";

function FilterListCategory8100m(props) {
  const { component29, line27, line29, distance, category, vector2, seats, rating, line28, rectangle29 } = props;

  return (
    <div className="filter-list-category-8-100m screen">
      <img className="component-29-19" src={component29} />
      <div className="group-87-3">
        <img className="line-27-28" src={line27} />
        <img className="line-29-31" src={line29} />
        <div className="group-51-33">
          <Link to="/filter-list-distance">
            <div className="group-48-47">
              <div className="overlap-group-881">
                <div className="distance-100 inter-normal-white-14px">{distance}</div>
                <img className="vector-403" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-5-100m">
            <div className="group-47-76">
              <div className="overlap-group1-532">
                <div className="category-107 inter-normal-white-13px">{category}</div>
                <img className="vector-404" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-100m">
            <div className="group-49-71">
              <div className="overlap-group2-400 border-1px-c4c4c4">
                <div className="seats-107 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-100m">
            <div className="group-50-69">
              <div className="overlap-group3-299 border-1px-c4c4c4">
                <div className="rating-82 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-32" src={line28} />
      </div>
      <img className="rectangle-29-11" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory8100m;
