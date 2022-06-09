import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import "./FilterListCategoryRating100m.css";

function FilterListCategoryRating100m(props) {
  const { component29, line27, line29, category1, category2, vector2, seats, rating, line28 } = props;

  return (
    <div className="filter-list-category-rating-100m screen">
      <img className="component-29-16" src={component29} />
      <div className="group-90-13">
        <div className="line-container-77">
          <img className="line-27-26" src={line27} />
          <img className="line-29-29" src={line29} />
        </div>
        <div className="group-51-30">
          <Group4822 />
          <Link to="/filter-list-rating-100m">
            <div className="group-47-73">
              <div className="overlap-group1-529 border-1px-c4c4c4">
                <div className="category-100 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-392" src="/img/vector-134@2x.png" />
                <div className="overlap-group-872">
                  <div className="category-101 inter-normal-white-13px">{category2}</div>
                  <img className="vector-393" src={vector2} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-main-all-100m">
            <div className="group-49-69">
              <div className="overlap-group2-397 border-1px-c4c4c4">
                <div className="seats-102 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-8-100m">
            <div className="group-50-67">
              <div className="overlap-group3-296">
                <div className="rating-77 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-30" src={line28} />
      </div>
    </div>
  );
}

export default FilterListCategoryRating100m;
