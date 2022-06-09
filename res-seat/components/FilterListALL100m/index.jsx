import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import "./FilterListALL100m.css";

function FilterListALL100m(props) {
  const { component29, line27, line29, category1, category2, vector2, seats1, seats2, seats3, rating, line28 } = props;

  return (
    <div className="filter-list-all-100m screen">
      <img className="component-29-56" src={component29} />
      <div className="group-90-22">
        <div className="line-container-95">
          <img className="line-27-41" src={line27} />
          <img className="line-29-48" src={line29} />
        </div>
        <div className="group-51-55">
          <Group4822 />
          <Link to="/filter-list-seats-rating-100m">
            <div className="group-47-113">
              <div className="overlap-group1-591 border-1px-c4c4c4">
                <div className="category-156 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-604" src="/img/vector-134@2x.png" />
                <div className="overlap-group-1015">
                  <div className="category-157 inter-normal-white-13px">{category2}</div>
                  <img className="vector-605" src={vector2} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-100m">
            <div className="group-49-106">
              <div className="overlap-group2-453 border-1px-c4c4c4">
                <div className="seats-174 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group1-592 border-1px-c4c4c4">
                  <div className="seats-174 inter-normal-spicy-pink-14px">{seats2}</div>
                  <div className="overlap-group-1016">
                    <div className="seats-175 inter-normal-white-14px">{seats3}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-100m">
            <div className="group-50-107">
              <div className="overlap-group3-391">
                <div className="rating-127 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-51" src={line28} />
      </div>
    </div>
  );
}

export default FilterListALL100m;
