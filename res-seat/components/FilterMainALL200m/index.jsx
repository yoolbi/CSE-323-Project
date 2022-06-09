import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainALL200m.css";

function FilterMainALL200m(props) {
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
      <div className="filter-main-all-200m screen">
        <img className="component-29-30" src={component29} />
        <div className="overlap-group6-73">
          <img className="image-1-31" src={image1} />
          <div className="ellipse-16-25 border-1px-malibu"></div>
          <div className="ellipse-17-25 border-2px-white"></div>
          <img className="polygon-2-25" src={polygon2} />
          <div className="group-64-24">
            <div className="group-container-156">
              <div className="group-62-24">
                <img className="vector-487" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-all-200m">
                <div className="group-63-32">
                  <div className="overlap-group-936">
                    <img className="vector-488" src={vector2} />
                    <div className="see-list-25 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-157 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-seats-rating-200m">
                <div className="group-47-87">
                  <div className="overlap-group2-426">
                    <div className="category-124 inter-normal-white-13px">{category1}</div>
                    <img className="vector-489" src={vector3} />
                    <div className="overlap-group-937 border-1px-c4c4c4">
                      <div className="category-123 inter-normal-spicy-pink-13px">{category2}</div>
                      <img className="vector-490" src={vector4} />
                    </div>
                    <div className="overlap-group1-548">
                      <div className="category-123 inter-normal-white-13px">{category3}</div>
                      <img className="vector-491" src={vector5} />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="group-49-80">
                <div className="overlap-group3-346">
                  <div className="rectangle-33-6 border-1px-c4c4c4"></div>
                  <div className="seats-121 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group-938">
                    <div className="seats-122 inter-normal-white-14px">{seats2}</div>
                  </div>
                  <div className="overlap-group1-549 border-1px-c4c4c4">
                    <div className="seats-123 inter-normal-spicy-pink-14px">{seats3}</div>
                  </div>
                  <Link to="/filter-main-category-rating-200m">
                    <div className="group-51-41">
                      <div className="overlap-group-935 border-1px-c4c4c4">
                        <div className="seats-124 inter-normal-spicy-pink-14px">{seats4}</div>
                        <div className="overlap-group-939">
                          <div className="seats-125 inter-normal-white-14px">{seats5}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/filter-main-category-seats-200m">
                <div className="group-50-78">
                  <div className="overlap-group-935 border-1px-c4c4c4">
                    <div className="rating-95 inter-normal-spicy-pink-14px">{rating1}</div>
                    <div className="overlap-group-940">
                      <div className="rating-96 inter-normal-white-14px">{rating2}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-27 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-113 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainALL200m;
