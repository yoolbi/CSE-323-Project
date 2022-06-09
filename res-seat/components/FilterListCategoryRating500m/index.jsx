import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import "./FilterListCategoryRating500m.css";

function FilterListCategoryRating500m(props) {
  const {
    component29,
    line27,
    line29,
    category1,
    category2,
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
    <div className="filter-list-category-rating-500m screen">
      <img className="component-29-9" src={component29} />
      <div className="group-90-11">
        <div className="line-container-74">
          <img className="line-27-20" src={line27} />
          <img className="line-29-22" src={line29} />
        </div>
        <div className="group-51-23">
          <Group4822 />
          <Link to="/filter-list-rating-500m">
            <div className="group-47-66">
              <div className="overlap-group1-519 border-1px-c4c4c4">
                <div className="category-91 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-370" src="/img/vector-134@2x.png" />
                <div className="overlap-group-863">
                  <div className="category-92 inter-normal-white-13px">{category2}</div>
                  <img className="vector-371" src={vector2} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-main-all-500m">
            <div className="group-49-62">
              <div className="overlap-group2-388 border-1px-c4c4c4">
                <div className="seats-94 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-8-500m">
            <div className="group-50-60">
              <div className="overlap-group3-288">
                <div className="rating-69 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-22" src={line28} />
      </div>
      <div className="group-73-4">
        <div className="overlap-group5-135">
          <Component164 {...component164Props} />
          <img className="image-5-9" src={image5} />
          <img className="image-6-23" src={image6} />
          <div className="rectangle-69-8"></div>
          <div className="meat-39 inter-normal-black-7px">{meat}</div>
          <Link to="/restaurant-details-menu1">
            <img className="vector-372" src={vector3} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategoryRating500m;
