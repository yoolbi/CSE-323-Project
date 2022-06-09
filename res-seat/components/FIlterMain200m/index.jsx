import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FIlterMain200m.css";

function FIlterMain200m(props) {
  const {
    component29,
    image1,
    polygon2,
    vector2,
    vector3,
    seeList1,
    vector4,
    vector5,
    seeList2,
    distance,
    vector6,
    category,
    vector7,
    seats,
    rating,
    shakeShack,
    uncles,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-200m screen">
        <img className="component-29-40" src={component29} />
        <div className="overlap-group6-78 inter-medium-black-8px">
          <img className="image-1-38" src={image1} />
          <div className="ellipse-18-21 border-1px-black"></div>
          <img className="vector-530" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-32 border-1px-malibu"></div>
          <div className="ellipse-17-32 border-2px-white"></div>
          <img className="polygon-2-32" src={polygon2} />
          <div className="group-64-31">
            <div className="group-container-170">
              <div className="group-62-31">
                <img className="vector-528" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-39">
                  <div className="overlap-group-970">
                    <img className="vector-529" src={vector3} />
                    <div className="see-list-32 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-171 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-11">
            <div className="group-container-170">
              <div className="group-62-31">
                <img className="vector-528" src={vector4} />
              </div>
              <Link to="/filter-list-200m">
                <div className="group-63-39">
                  <div className="overlap-group-970">
                    <img className="vector-529" src={vector5} />
                    <div className="see-list-32 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-172 border-1px-mercury">
              <Link to="/filter-main-200m-distance">
                <div className="group-48-54">
                  <div className="overlap-group-971">
                    <div className="distance-109 inter-normal-white-14px">{distance}</div>
                    <img className="vector-531" src={vector6} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-5-200m">
                <div className="group-47-97">
                  <div className="overlap-group1-565 border-1px-c4c4c4">
                    <div className="category-137 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-532" src={vector7} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-200m">
                <div className="group-49-90">
                  <div className="overlap-group2-437 border-1px-c4c4c4">
                    <div className="seats-150 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating-200m">
                <div className="group-50-90">
                  <div className="overlap-group3-358 border-1px-c4c4c4">
                    <div className="rating-110 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="shake-shack-17">{shakeShack}</div>
          <div className="uncles-92">{uncles}</div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-33 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-121">{hanamBbq}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-16 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FIlterMain200m;
