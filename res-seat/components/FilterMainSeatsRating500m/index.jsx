import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainSeatsRating500m.css";

function FilterMainSeatsRating500m(props) {
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
    seats3,
    seats4,
    seats5,
    seats6,
    rating,
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-rating-500m screen">
        <img className="component-29-55" src={component29} />
        <div className="overlap-group7-49 inter-medium-black-8px">
          <img className="image-1-45" src={image1} />
          <div className="ellipse-16-39 border-1px-malibu"></div>
          <div className="ellipse-17-39 border-2px-white"></div>
          <img className="polygon-2-39" src={polygon2} />
          <div className="group-65-15">
            <div className="group-container-187">
              <div className="group-62-38">
                <img className="vector-601" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-seats-rating-500m">
                <div className="group-63-46">
                  <div className="overlap-group-1014">
                    <img className="vector-602" src={vector2} />
                    <div className="see-list-39 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-188 border-1px-mercury">
              <Group48 />
              <div className="group-47-112">
                <div className="overlap-group1-589">
                  <Link to="/filter-main-all-500m">
                    <div className="rectangle-81-15 border-1px-c4c4c4"></div>
                  </Link>
                  <div className="category-155 inter-normal-spicy-pink-13px">{category}</div>
                  <img className="vector-603" src={vector3} />
                </div>
              </div>
              <Link to="/filter-main-rating-500m">
                <div className="group-49-105">
                  <div className="overlap-group4-233 border-1px-c4c4c4">
                    <div className="seats-172 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-1012 border-1px-c4c4c4">
                      <div className="seats-172 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-1013">
                        <div className="seats-173 inter-normal-white-14px">{seats3}</div>
                      </div>
                      <div className="overlap-group1-590 border-1px-c4c4c4">
                        <div className="seats-173 inter-normal-spicy-pink-14px">{seats4}</div>
                      </div>
                      <div className="overlap-group-1012 border-1px-c4c4c4">
                        <div className="seats-172 inter-normal-spicy-pink-14px">{seats5}</div>
                        <div className="overlap-group-1013">
                          <div className="seats-173 inter-normal-white-14px">{seats6}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="group-50-106">
                <div className="overlap-group5-157">
                  <Link to="/filter-main-seats-500m">
                    <div className="rectangle-60-9"></div>
                  </Link>
                  <div className="rating-126 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-18-24 border-1px-black"></div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-36 border-1px-black"></div>
          </Link>
          <Link to="/select-restaurant-sean-s">
            <div className="ellipse-3-19 border-1px-black"></div>
          </Link>
          <div className="ellipse-19-9 border-1px-black"></div>
          <div className="hanam-bbq-128">{hanamBbq}</div>
          <div className="shake-shack-20">{shakeShack}</div>
          <div className="uncles-101">{uncles}</div>
          <div className="sushisaku-25">{sushisaku}</div>
          <div className="seans-restaurant-80">{seansRestaurant}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-19 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsRating500m;
