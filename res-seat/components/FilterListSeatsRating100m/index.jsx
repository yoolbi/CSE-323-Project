import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import "./FilterListSeatsRating100m.css";

function FilterListSeatsRating100m(props) {
  const {
    component29,
    line27,
    line29,
    category1,
    category2,
    vector2,
    category3,
    vector3,
    seats1,
    seats2,
    seats3,
    rating,
    line28,
  } = props;

  return (
    <div className="filter-list-seats-rating-100m screen">
      <img className="component-29-29" src={component29} />
      <div className="group-90-15">
        <div className="line-container-83">
          <img className="line-27-33" src={line27} />
          <img className="line-29-36" src={line29} />
        </div>
        <div className="group-51-40">
          <Group4822 />
          <Link to="/filter-list-all-100m">
            <div className="group-47-86">
              <div className="overlap-group2-425 border-1px-c4c4c4">
                <div className="category-122 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-484" src="/img/vector-134@2x.png" />
                <div className="overlap-group-933">
                  <div className="category-121 inter-normal-white-13px">{category2}</div>
                  <img className="vector-485" src={vector2} />
                </div>
                <div className="overlap-group1-546 border-1px-c4c4c4">
                  <div className="category-121 inter-normal-spicy-pink-13px">{category3}</div>
                  <img className="vector-486" src={vector3} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-100m">
            <div className="group-49-79">
              <div className="overlap-group3-345 border-1px-c4c4c4">
                <div className="seats-119 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group1-547 border-1px-c4c4c4">
                  <div className="seats-119 inter-normal-spicy-pink-14px">{seats2}</div>
                  <div className="overlap-group-934">
                    <div className="seats-120 inter-normal-white-14px">{seats3}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-100m">
            <div className="group-50-77">
              <div className="overlap-group4-219">
                <div className="rating-94 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-39" src={line28} />
      </div>
    </div>
  );
}

export default FilterListSeatsRating100m;
