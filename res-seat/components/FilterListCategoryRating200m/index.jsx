import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import "./FilterListCategoryRating200m.css";

function FilterListCategoryRating200m(props) {
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
    <div className="filter-list-category-rating-200m screen">
      <img className="component-29-7" src={component29} />
      <div className="group-90-9">
        <div className="line-container-72">
          <img className="line-27-19" src={line27} />
          <img className="line-29-20" src={line29} />
        </div>
        <div className="group-51-21">
          <Group4822 />
          <Link to="/filter-list-rating-200m">
            <div className="group-47-64">
              <div className="overlap-group1-516 border-1px-c4c4c4">
                <div className="category-87 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-364" src="/img/vector-134@2x.png" />
                <div className="overlap-group-859">
                  <div className="category-88 inter-normal-white-13px">{category2}</div>
                  <img className="vector-365" src={vector2} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-main-all-200m">
            <div className="group-49-60">
              <div className="overlap-group2-386 border-1px-c4c4c4">
                <div className="seats-91 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-8-200m">
            <div className="group-50-58">
              <div className="overlap-group3-286">
                <div className="rating-66 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <img className="line-28-21" src={line28} />
      </div>
      <div className="group-73-3">
        <div className="overlap-group5-134">
          <Component164 {...component164Props} />
          <img className="image-5-7" src={image5} />
          <img className="image-6-21" src={image6} />
          <div className="rectangle-69-6"></div>
          <div className="meat-37 inter-normal-black-7px">{meat}</div>
          <Link to="/restaurant-details-menu1">
            <img className="vector-366" src={vector3} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategoryRating200m;
