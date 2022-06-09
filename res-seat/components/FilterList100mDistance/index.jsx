import React from "react";
import { Link } from "react-router-dom";
import "./FilterList100mDistance.css";

function FilterList100mDistance(props) {
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
    x100M,
    line31,
    x200M,
    line32,
    x500M,
    x1Km,
    line33,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-100m-distance screen">
        <img className="component-29-13" src={component29} />
        <img className="line-27-23" src={line27} />
        <div className="group-container-138">
          <div className="group-83-2">
            <img className="line-29-26" src={line29} />
            <div className="group-51-27">
              <Link to="/filter-list-100m">
                <div className="group-48-45">
                  <div className="overlap-group-869 border-1px-orange">
                    <div className="distance-97 inter-normal-flamingo-14px">{distance}</div>
                    <img className="vector-384" src="/img/vector-30@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-5-100m">
                <div className="group-47-70">
                  <div className="overlap-group-869 border-1px-c4c4c4">
                    <div className="category-97 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-385" src={vector2} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-100m">
                <div className="group-49-66">
                  <div className="overlap-group2-393 border-1px-c4c4c4">
                    <div className="seats-99 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating-100m">
                <div className="group-50-64">
                  <div className="overlap-group3-292 border-1px-c4c4c4">
                    <div className="rating-74 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-26" src={line28} />
          </div>
          <div className="overlap-group4-202 border-1px-c4c4c4">
            <div className="overlap-group-870">
              <div className="x100m-2 inter-normal-flamingo-14px">{x100M}</div>
              <Link to="/filter-list-100m">
                <div className="rectangle-85-2"></div>
              </Link>
            </div>
            <img className="line-31-2" src={line31} />
            <Link to="/filter-list-200m">
              <div className="x200m-2 inter-normal-black-14px">{x200M}</div>
            </Link>
            <img className="line-32-3" src={line32} />
            <Link to="/filter-list-500m">
              <div className="x500m-2 inter-normal-black-14px">{x500M}</div>
            </Link>
            <div className="overlap-group1-525">
              <Link to="/list">
                <div className="x1-km-2 inter-normal-black-14px">{x1Km}</div>
              </Link>
              <img className="line-33-2" src={line33} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterList100mDistance;
