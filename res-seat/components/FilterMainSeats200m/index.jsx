import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainSeats200m.css";

function FilterMainSeats200m(props) {
  const {
    component29,
    image1,
    vector2,
    seeList,
    category,
    vector3,
    seats,
    rating,
    polygon2,
    shakeShack,
    uncles,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-200m screen">
        <img className="component-29-67" src={component29} />
        <div className="overlap-group5-165 inter-medium-black-8px">
          <img className="image-1-51" src={image1} />
          <div className="group-64-40">
            <div className="group-container-205">
              <div className="group-62-44">
                <img className="vector-686" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-seats-200m">
                <div className="group-63-52">
                  <div className="overlap-group-1060">
                    <img className="vector-687" src={vector2} />
                    <div className="see-list-45 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-206 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-category-seats-200m">
                <div className="group-47-124">
                  <div className="overlap-group1-609 border-1px-c4c4c4">
                    <div className="category-176 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-688" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-200m">
                <div className="group-49-113">
                  <div className="overlap-group2-471">
                    <div className="seats-191 inter-normal-white-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-rating-200m">
                <div className="group-50-114">
                  <div className="overlap-group3-421 border-1px-c4c4c4">
                    <div className="rating-142 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="ellipse-16-45 border-1px-malibu"></div>
          <div className="ellipse-17-45 border-2px-white"></div>
          <img className="polygon-2-45" src={polygon2} />
          <div className="ellipse-18-27 border-1px-black"></div>
          <div className="shake-shack-23">{shakeShack}</div>
          <div className="uncles-111">{uncles}</div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-40 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-137">{hanamBbq}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-22 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeats200m;
