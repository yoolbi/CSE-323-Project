import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainALL500m.css";

function FilterMainALL500m(props) {
  const {
    component29,
    image1,
    polygon2,
    vector2,
    seeList,
    category1,
    vector3,
    category2,
    vector4,
    category3,
    vector5,
    seats1,
    seats2,
    seats3,
    seats4,
    seats5,
    rating1,
    rating2,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-all-500m screen">
        <img className="component-29-33" src={component29} />
        <div className="overlap-group6-74">
          <img className="image-1-34" src={image1} />
          <div className="ellipse-16-28 border-1px-malibu"></div>
          <div className="ellipse-17-28 border-2px-white"></div>
          <img className="polygon-2-28" src={polygon2} />
          <div className="group-64-27">
            <div className="group-container-162">
              <div className="group-62-27">
                <img className="vector-498" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-all-500m">
                <div className="group-63-35">
                  <div className="overlap-group-947">
                    <img className="vector-499" src={vector2} />
                    <div className="see-list-28 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-163 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-seats-rating-500m">
                <div className="group-47-90">
                  <div className="overlap-group2-429">
                    <div className="category-128 inter-normal-white-13px">{category1}</div>
                    <img className="vector-500" src={vector3} />
                    <div className="overlap-group-948 border-1px-c4c4c4">
                      <div className="category-127 inter-normal-spicy-pink-13px">{category2}</div>
                      <img className="vector-501" src={vector4} />
                    </div>
                    <div className="overlap-group1-553">
                      <div className="category-127 inter-normal-white-13px">{category3}</div>
                      <img className="vector-502" src={vector5} />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="group-49-83">
                <div className="overlap-group3-349">
                  <div className="rectangle-33-8 border-1px-c4c4c4"></div>
                  <div className="seats-131 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group-949">
                    <div className="seats-132 inter-normal-white-14px">{seats2}</div>
                  </div>
                  <div className="overlap-group1-554 border-1px-c4c4c4">
                    <div className="seats-133 inter-normal-spicy-pink-14px">{seats3}</div>
                  </div>
                  <Link to="/filter-main-category-rating-500m">
                    <div className="group-51-42">
                      <div className="overlap-group-946 border-1px-c4c4c4">
                        <div className="seats-134 inter-normal-spicy-pink-14px">{seats4}</div>
                        <div className="overlap-group-950">
                          <div className="seats-135 inter-normal-white-14px">{seats5}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/filter-main-category-seats-500m">
                <div className="group-50-82">
                  <div className="overlap-group-946 border-1px-c4c4c4">
                    <div className="rating-100 inter-normal-spicy-pink-14px">{rating1}</div>
                    <div className="overlap-group-951">
                      <div className="rating-101 inter-normal-white-14px">{rating2}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-30 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-116 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainALL500m;
