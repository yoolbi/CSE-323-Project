import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategorySeats500m.css";

function FilterMainCategorySeats500m(props) {
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
      <div className="filter-main-category-seats-500m screen">
        <img className="component-29-36" src={component29} />
        <div className="overlap-group5-147">
          <img className="image-1-36" src={image1} />
          <div className="ellipse-16-30 border-1px-malibu"></div>
          <div className="ellipse-17-30 border-2px-white"></div>
          <img className="polygon-2-30" src={polygon2} />
          <div className="group-64-29">
            <div className="group-container-166">
              <div className="group-62-29">
                <img className="vector-511" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-seats-500m">
                <div className="group-63-37">
                  <div className="overlap-group-959">
                    <img className="vector-512" src={vector2} />
                    <div className="see-list-30 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-167 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-seats-500m">
                <div className="group-47-93">
                  <div className="overlap-group1-558">
                    <div className="category-132 inter-normal-white-13px">{category}</div>
                    <img className="vector-513" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-8-500m">
                <div className="group-49-86">
                  <div className="overlap-group2-432 border-1px-c4c4c4">
                    <div className="seats-142 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-960">
                      <div className="seats-143 inter-normal-white-14px">{seats2}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-all-500m">
                <div className="group-50-85">
                  <div className="overlap-group3-352 border-1px-c4c4c4">
                    <div className="rating-105 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-31 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-117 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategorySeats500m;
