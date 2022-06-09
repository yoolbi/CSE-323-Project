import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategory3.css";

function FilterMainCategory3(props) {
  const { component29, image1, polygon2, vector2, seeList, category, vector3, seats, rating, hanamBbq } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-3 screen">
        <img className="component-29-74" src={component29} />
        <div className="overlap-group5-171">
          <img className="image-1-56" src={image1} />
          <div className="ellipse-16-50 border-1px-malibu"></div>
          <div className="ellipse-17-50 border-2px-white"></div>
          <img className="polygon-2-50" src={polygon2} />
          <div className="group-64-42">
            <div className="group-container-216">
              <div className="group-62-49">
                <img className="vector-713" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-select">
                <div className="group-63-57">
                  <div className="overlap-group-1070">
                    <img className="vector-714" src={vector2} />
                    <div className="see-list-50 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-217 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-category-4">
                <div className="group-47-131">
                  <div className="overlap-group1-618">
                    <div className="category-183 inter-normal-white-13px">{category}</div>
                    <img className="vector-715" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-seats">
                <div className="group-49-117">
                  <div className="overlap-group2-477 border-1px-c4c4c4">
                    <div className="seats-195 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-rating">
                <div className="group-50-121">
                  <div className="overlap-group3-429 border-1px-c4c4c4">
                    <div className="rating-149 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-44 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-141 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory3;
