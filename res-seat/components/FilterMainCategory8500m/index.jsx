import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategory8500m.css";

function FilterMainCategory8500m(props) {
  const { component29, image1, polygon2, vector2, seeList, category, vector3, seats, rating, hanamBbq } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-8-500m screen">
        <img className="component-29-27" src={component29} />
        <div className="overlap-group5-142">
          <img className="image-1-29" src={image1} />
          <div className="ellipse-16-23 border-1px-malibu"></div>
          <div className="ellipse-17-23 border-2px-white"></div>
          <img className="polygon-2-23" src={polygon2} />
          <div className="group-64-22">
            <div className="group-container-152">
              <div className="group-62-22">
                <img className="vector-478" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-8-500m">
                <div className="group-63-30">
                  <div className="overlap-group-931">
                    <img className="vector-479" src={vector2} />
                    <div className="see-list-23 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-153 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-category-7-500m">
                <div className="group-47-84">
                  <div className="overlap-group1-544">
                    <div className="category-119 inter-normal-white-13px">{category}</div>
                    <img className="vector-480" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-seats-500m">
                <div className="group-49-77">
                  <div className="overlap-group2-423 border-1px-c4c4c4">
                    <div className="seats-117 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-rating-500m">
                <div className="group-50-75">
                  <div className="overlap-group3-343 border-1px-c4c4c4">
                    <div className="rating-92 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-26 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-112 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory8500m;
