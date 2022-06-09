import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FIlterMain100m.css";

function FIlterMain100m(props) {
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-100m screen">
        <img className="component-29-45" src={component29} />
        <div className="overlap-group6-79">
          <img className="image-1-41" src={image1} />
          <img className="vector-555" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-35 border-1px-malibu"></div>
          <div className="ellipse-17-35 border-2px-white"></div>
          <img className="polygon-2-35" src={polygon2} />
          <div className="group-64-34">
            <div className="group-container-177">
              <div className="group-62-34">
                <img className="vector-553" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-42">
                  <div className="overlap-group-983">
                    <img className="vector-554" src={vector3} />
                    <div className="see-list-35 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-178 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-12">
            <div className="group-container-177">
              <div className="group-62-34">
                <img className="vector-553" src={vector4} />
              </div>
              <Link to="/filter-list-100m">
                <div className="group-63-42">
                  <div className="overlap-group-983">
                    <img className="vector-554" src={vector5} />
                    <div className="see-list-35 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-179 border-1px-mercury">
              <Link to="/filter-main-100m-distance">
                <div className="group-48-56">
                  <div className="overlap-group-984">
                    <div className="distance-111 inter-normal-white-14px">{distance}</div>
                    <img className="vector-556" src={vector6} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-5-100m">
                <div className="group-47-102">
                  <div className="overlap-group1-574 border-1px-c4c4c4">
                    <div className="category-143 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-557" src={vector7} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-100m">
                <div className="group-49-95">
                  <div className="overlap-group2-442 border-1px-c4c4c4">
                    <div className="seats-159 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating-100m">
                <div className="group-50-96">
                  <div className="overlap-group3-368 border-1px-c4c4c4">
                    <div className="rating-116 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FIlterMain100m;
