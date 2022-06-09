import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import "./FilterListCategorySeats500m.css";

function FilterListCategorySeats500m(props) {
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
    image5,
    image6,
    meat,
    vector3,
    line28,
    component164Props,
  } = props;

  return (
    <div className="filter-list-category-seats-500m screen">
      <img className="component-29-10" src={component29} />
      <div className="group-90-12">
        <div className="line-container-75">
          <img className="line-2-149" src={line27} />
          <img className="line-29-23" src={line29} />
        </div>
        <div className="group-51-24">
          <Group4822 />
          <Link to="/filter-list-seats-500m">
            <div className="group-47-67">
              <div className="overlap-group1-520 border-1px-c4c4c4">
                <div className="category-93 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-373" src="/img/vector-134@2x.png" />
                <div className="overlap-group-864">
                  <div className="category-94 inter-normal-white-13px">{category2}</div>
                  <img className="vector-374" src={vector2} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-8-500m">
            <div className="group-49-63">
              <div className="overlap-group2-389 border-1px-c4c4c4">
                <div className="seats-95 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group-865">
                  <div className="seats-96 inter-normal-white-14px">{seats2}</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-all-500m">
            <div className="group-50-61">
              <div className="overlap-group3-289">
                <div className="rating-70 inter-normal-white-14px">{rating1}</div>
                <div className="overlap-group-866 border-1px-c4c4c4">
                  <div className="rating-71 inter-normal-spicy-pink-14px">{rating2}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group4-199">
          <div className="overlap-group1-521">
            <Component164 {...component164Props} />
            <img className="image-5-10" src={image5} />
            <img className="image-6-24" src={image6} />
            <div className="rectangle-69-9"></div>
            <div className="meat-40 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-375" src={vector3} />
            </Link>
          </div>
          <img className="line-2-149" src={line28} />
        </div>
      </div>
    </div>
  );
}

export default FilterListCategorySeats500m;
