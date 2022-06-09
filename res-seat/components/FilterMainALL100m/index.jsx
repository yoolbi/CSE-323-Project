import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainALL100m.css";

function FilterMainALL100m(props) {
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-all-100m screen">
        <img className="component-29-34" src={component29} />
        <div className="overlap-group6-75">
          <img className="image-1-35" src={image1} />
          <div className="ellipse-16-29 border-1px-malibu"></div>
          <div className="ellipse-17-29 border-2px-white"></div>
          <img className="polygon-2-29" src={polygon2} />
          <div className="group-64-28">
            <div className="group-container-164">
              <div className="group-62-28">
                <img className="vector-503" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-all-100m">
                <div className="group-63-36">
                  <div className="overlap-group-953">
                    <img className="vector-504" src={vector2} />
                    <div className="see-list-29 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-165 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-seats-rating-100m">
                <div className="group-47-91">
                  <div className="overlap-group2-430">
                    <div className="category-130 inter-normal-white-13px">{category1}</div>
                    <img className="vector-505" src={vector3} />
                    <div className="overlap-group-954 border-1px-c4c4c4">
                      <div className="category-129 inter-normal-spicy-pink-13px">{category2}</div>
                      <img className="vector-506" src={vector4} />
                    </div>
                    <div className="overlap-group1-555">
                      <div className="category-129 inter-normal-white-13px">{category3}</div>
                      <img className="vector-507" src={vector5} />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="group-49-84">
                <div className="overlap-group3-350">
                  <div className="rectangle-33-9 border-1px-c4c4c4"></div>
                  <div className="seats-136 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group-955">
                    <div className="seats-137 inter-normal-white-14px">{seats2}</div>
                  </div>
                  <div className="overlap-group1-556 border-1px-c4c4c4">
                    <div className="seats-138 inter-normal-spicy-pink-14px">{seats3}</div>
                  </div>
                  <Link to="/filter-main-category-rating-100m">
                    <div className="group-51-43">
                      <div className="overlap-group-952 border-1px-c4c4c4">
                        <div className="seats-139 inter-normal-spicy-pink-14px">{seats4}</div>
                        <div className="overlap-group-956">
                          <div className="seats-140 inter-normal-white-14px">{seats5}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/filter-main-category-seats-100m">
                <div className="group-50-83">
                  <div className="overlap-group-952 border-1px-c4c4c4">
                    <div className="rating-102 inter-normal-spicy-pink-14px">{rating1}</div>
                    <div className="overlap-group-957">
                      <div className="rating-103 inter-normal-white-14px">{rating2}</div>
                    </div>
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

export default FilterMainALL100m;
