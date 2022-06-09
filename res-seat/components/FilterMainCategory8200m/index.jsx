import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategory8200m.css";

function FilterMainCategory8200m(props) {
  const { component29, image1, polygon2, vector2, seeList, category, vector3, seats, rating, hanamBbq } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-8-200m screen">
        <img className="component-29-26" src={component29} />
        <div className="overlap-group5-141">
          <img className="image-1-28" src={image1} />
          <div className="ellipse-16-22 border-1px-malibu"></div>
          <div className="ellipse-17-22 border-2px-white"></div>
          <img className="polygon-2-22" src={polygon2} />
          <div className="group-64-21">
            <div className="group-container-150">
              <div className="group-62-21">
                <img className="vector-475" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-8-200m">
                <div className="group-63-29">
                  <div className="overlap-group-930">
                    <img className="vector-476" src={vector2} />
                    <div className="see-list-22 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-151 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-category-7-200m">
                <div className="group-47-83">
                  <div className="overlap-group1-543">
                    <div className="category-118 inter-normal-white-13px">{category}</div>
                    <img className="vector-477" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-seats-200m">
                <div className="group-49-76">
                  <div className="overlap-group2-422 border-1px-c4c4c4">
                    <div className="seats-116 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-rating-200m">
                <div className="group-50-74">
                  <div className="overlap-group3-342 border-1px-c4c4c4">
                    <div className="rating-91 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-25 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-111 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory8200m;
