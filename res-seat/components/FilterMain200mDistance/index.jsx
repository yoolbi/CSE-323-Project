import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMain200mDistance.css";

function FilterMain200mDistance(props) {
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
    distance1,
    vector6,
    distance2,
    vector7,
    category,
    vector8,
    seats1,
    seats2,
    rating1,
    rating2,
    x100M,
    x200M,
    line31,
    line32,
    x500M,
    x1Km,
    line33,
    shakeShack,
    uncles,
    hanamBbq,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-200m-distance screen">
        <div className="flex-col-462">
          <img className="component-29-75" src={component29} />
          <div className="overlap-group9-47 inter-medium-black-8px">
            <img className="image-1-57" src={image1} />
            <img className="vector-718" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-51 border-1px-malibu"></div>
            <div className="ellipse-17-51 border-2px-white"></div>
            <img className="polygon-2-51" src={polygon2} />
            <div className="group-64-43">
              <div className="group-container-218">
                <div className="group-62-50">
                  <img className="vector-716" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-58">
                    <div className="overlap-group-1071">
                      <img className="vector-717" src={vector3} />
                      <div className="see-list-51 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-219 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-65-23">
              <div className="group-container-218">
                <div className="group-62-50">
                  <img className="vector-716" src={vector4} />
                </div>
                <Link to="/filter-list-200m-distance">
                  <div className="group-63-58">
                    <div className="overlap-group-1071">
                      <img className="vector-717" src={vector5} />
                      <div className="see-list-51 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-220 border-1px-mercury">
                <div className="overlap-group1-619">
                  <div className="rectangle-80-3"></div>
                  <div className="distance-132 inter-normal-white-14px">{distance1}</div>
                  <img className="vector-719" src={vector6} />
                  <Link to="/filter-main-200m">
                    <div className="group-48-73">
                      <div className="overlap-group-1072 border-1px-orange">
                        <div className="distance-133 inter-normal-flamingo-14px">{distance2}</div>
                        <img className="vector-720" src={vector7} />
                      </div>
                    </div>
                  </Link>
                </div>
                <Link to="/filter-main-category-5-200m">
                  <div className="group-47-132">
                    <div className="overlap-group2-478 border-1px-c4c4c4">
                      <div className="category-184 inter-normal-spicy-pink-13px">{category}</div>
                      <img className="vector-721" src={vector8} />
                    </div>
                  </div>
                </Link>
                <div className="overlap-group3-430">
                  <div className="rectangle-33-15 border-1px-c4c4c4"></div>
                  <div className="seats-196 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-rating-200m">
                    <div className="group-92">
                      <div className="overlap-group-1073 border-1px-c4c4c4">
                        <div className="seats-197 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group-container-221">
                  <div className="overlap-group4-249 border-1px-c4c4c4">
                    <div className="rating-150 inter-normal-spicy-pink-14px">{rating1}</div>
                  </div>
                  <Link to="/filter-main-rating-200m">
                    <div className="group-92">
                      <div className="overlap-group5-172 border-1px-c4c4c4">
                        <div className="rating-151 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group8-40 border-1px-c4c4c4">
              <Link to="/filter-main-100m">
                <div className="x100m-5 inter-normal-black-14px">{x100M}</div>
              </Link>
              <div className="overlap-group1-620">
                <Link to="/filter-main-200m">
                  <div className="rectangle-85-5"></div>
                </Link>
                <Link to="/filter-main-200m">
                  <div className="x200m-5 inter-normal-flamingo-14px">{x200M}</div>
                </Link>
                <img className="line-3-90" src={line31} />
                <img className="line-32-6" src={line32} />
              </div>
              <div className="x500m-5 inter-normal-black-14px">{x500M}</div>
              <div className="overlap-group-1074">
                <Link to="/main">
                  <div className="x1-km-5 inter-normal-black-14px">{x1Km}</div>
                </Link>
                <img className="line-3-90" src={line33} />
              </div>
            </div>
            <div className="ellipse-18-32 border-1px-black"></div>
            <div className="shake-shack-27">{shakeShack}</div>
            <div className="uncles-115">{uncles}</div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-45 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-142">{hanamBbq}</div>
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-26 border-1px-black"></div>
            </Link>
          </div>
        </div>
        <img className="rectangle-29-33" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMain200mDistance;
