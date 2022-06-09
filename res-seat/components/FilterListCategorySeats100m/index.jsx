import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import "./FilterListCategorySeats100m.css";

function FilterListCategorySeats100m(props) {
  const {
    component29,
    line27,
    line29,
    category1,
    category2,
    vector2,
    seats1,
    seats2,
    rating1,
    rating2,
    line28,
  } = props;

  return (
    <div className="filter-list-category-seats-100m screen">
      <img className="component-29-17" src={component29} />
      <div className="group-90-14">
        <div className="line-container-78">
          <img className="line-27-27" src={line27} />
          <img className="line-29-30" src={line29} />
        </div>
        <div className="group-51-31">
          <Group4822 />
          <Link to="/filter-list-seats-100m">
            <div className="group-47-74">
              <div className="overlap-group1-530 border-1px-c4c4c4">
                <div className="category-102 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-394" src="/img/vector-134@2x.png" />
                <div className="overlap-group-873">
                  <div className="category-103 inter-normal-white-13px">{category2}</div>
                  <img className="vector-395" src={vector2} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-8-100m">
            <div className="group-49-70">
              <div className="overlap-group2-398 border-1px-c4c4c4">
                <div className="seats-103 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group-874">
                  <div className="seats-104 inter-normal-white-14px">{seats2}</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-all-100m">
            <div className="group-50-68">
              <div className="overlap-group3-297">
                <div className="rating-78 inter-normal-white-14px">{rating1}</div>
                <div className="overlap-group-875 border-1px-c4c4c4">
                  <div className="rating-79 inter-normal-spicy-pink-14px">{rating2}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-31" src={line28} />
      </div>
    </div>
  );
}

export default FilterListCategorySeats100m;
