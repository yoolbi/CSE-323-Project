import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainSeatsRating200m.css";

function FilterMainSeatsRating200m(props) {
  const {
    component29,
    image1,
    polygon2,
    vector2,
    seeList,
    distance,
    vector3,
    category,
    vector4,
    seats1,
    seats2,
    seats3,
    seats4,
    seats5,
    seats6,
    rating,
    shakeShack,
    uncles,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-rating-200m screen">
        <img className="component-29-50" src={component29} />
        <div className="overlap-group7-48 inter-medium-black-8px">
          <img className="image-1-44" src={image1} />
          <div className="ellipse-16-38 border-1px-malibu"></div>
          <div className="ellipse-17-38 border-2px-white"></div>
          <img className="polygon-2-38" src={polygon2} />
          <div className="group-65-14">
            <div className="group-container-185">
              <div className="group-62-37">
                <img className="vector-582" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-seats-rating-200m">
                <div className="group-63-45">
                  <div className="overlap-group-1005">
                    <img className="vector-583" src={vector2} />
                    <div className="see-list-38 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-186 border-1px-mercury">
              <Link to="/main">
                <div className="group-48-59">
                  <div className="overlap-group-1006">
                    <div className="distance-114 inter-normal-white-14px">{distance}</div>
                    <img className="vector-584" src={vector3} />
                  </div>
                </div>
              </Link>
              <div className="group-47-107">
                <div className="overlap-group1-580">
                  <Link to="/filter-main-all-200m">
                    <div className="rectangle-81-14 border-1px-c4c4c4"></div>
                  </Link>
                  <div className="category-149 inter-normal-spicy-pink-13px">{category}</div>
                  <img className="vector-585" src={vector4} />
                </div>
              </div>
              <Link to="/filter-main-rating-200m">
                <div className="group-49-100">
                  <div className="overlap-group4-231 border-1px-c4c4c4">
                    <div className="seats-165 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-1003 border-1px-c4c4c4">
                      <div className="seats-165 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-1004">
                        <div className="seats-166 inter-normal-white-14px">{seats3}</div>
                      </div>
                      <div className="overlap-group1-581 border-1px-c4c4c4">
                        <div className="seats-166 inter-normal-spicy-pink-14px">{seats4}</div>
                      </div>
                      <div className="overlap-group-1003 border-1px-c4c4c4">
                        <div className="seats-165 inter-normal-spicy-pink-14px">{seats5}</div>
                        <div className="overlap-group-1004">
                          <div className="seats-166 inter-normal-white-14px">{seats6}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="group-50-101">
                <div className="overlap-group5-154">
                  <Link to="/filter-main-seats-200m">
                    <div className="rectangle-60-7"></div>
                  </Link>
                  <div className="rating-121 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-18-23 border-1px-black"></div>
          <div className="shake-shack-19">{shakeShack}</div>
          <div className="uncles-100">{uncles}</div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-35 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-127">{hanamBbq}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-18 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsRating200m;
