import React from "react";
import { Link } from "react-router-dom";
import "./FilterList100m.css";

function FilterList100m(props) {
  const { component29, line27, line29, distance, category, vector2, seats, rating, line28 } = props;

  return (
    <div className="filter-list-100m screen">
      <img className="component-29-15" src={component29} />
      <img className="line-27-25" src={line27} />
      <div className="group-83-3">
        <img className="line-29-28" src={line29} />
        <div className="group-51-29">
          <Link to="/filter-list-100m-distance">
            <div className="group-48-46">
              <div className="overlap-group-871">
                <div className="distance-98 inter-normal-white-14px">{distance}</div>
                <img className="vector-390" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-5-100m">
            <div className="group-47-72">
              <div className="overlap-group1-528 border-1px-c4c4c4">
                <div className="category-99 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-391" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-200m">
            <div className="group-49-68">
              <div className="overlap-group2-396 border-1px-c4c4c4">
                <div className="seats-101 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-100m">
            <div className="group-50-66">
              <div className="overlap-group3-295 border-1px-c4c4c4">
                <div className="rating-76 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-29" src={line28} />
      </div>
    </div>
  );
}

export default FilterList100m;
