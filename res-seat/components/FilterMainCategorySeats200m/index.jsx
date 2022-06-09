import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategorySeats200m.css";

function FilterMainCategorySeats200m(props) {
  const {
    component29,
    image1,
    polygon2,
    vector2,
    seeList,
    category,
    vector3,
    seats1,
    seats2,
    rating,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-seats-200m screen">
        <img className="component-29-31" src={component29} />
        <div className="overlap-group5-144">
          <img className="image-1-32" src={image1} />
          <div className="ellipse-16-26 border-1px-malibu"></div>
          <div className="ellipse-17-26 border-2px-white"></div>
          <img className="polygon-2-26" src={polygon2} />
          <div className="group-64-25">
            <div className="group-container-158">
              <div className="group-62-25">
                <img className="vector-492" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-seats-200m">
                <div className="group-63-33">
                  <div className="overlap-group-941">
                    <img className="vector-493" src={vector2} />
                    <div className="see-list-26 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-159 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-seats-200m">
                <div className="group-47-88">
                  <div className="overlap-group1-550">
                    <div className="category-125 inter-normal-white-13px">{category}</div>
                    <img className="vector-494" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-8-200m">
                <div className="group-49-81">
                  <div className="overlap-group2-427 border-1px-c4c4c4">
                    <div className="seats-126 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-942">
                      <div className="seats-127 inter-normal-white-14px">{seats2}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-all-200m">
                <div className="group-50-79">
                  <div className="overlap-group3-347 border-1px-c4c4c4">
                    <div className="rating-97 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-28 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-114 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategorySeats200m;
