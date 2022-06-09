import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainSeats500m.css";

function FilterMainSeats500m(props) {
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
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-500m screen">
        <img className="component-29-69" src={component29} />
        <div className="overlap-group5-167 inter-medium-black-8px">
          <img className="image-1-53" src={image1} />
          <div className="group-64-41">
            <div className="group-container-209">
              <div className="group-62-46">
                <img className="vector-693" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-seats-500m">
                <div className="group-63-54">
                  <div className="overlap-group-1063">
                    <img className="vector-694" src={vector2} />
                    <div className="see-list-47 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-210 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-category-seats-500m">
                <div className="group-47-126">
                  <div className="overlap-group1-611 border-1px-c4c4c4">
                    <div className="category-178 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-695" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-500m">
                <div className="group-49-114">
                  <div className="overlap-group2-472">
                    <div className="seats-192 inter-normal-white-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-rating-500m">
                <div className="group-50-116">
                  <div className="overlap-group3-423 border-1px-c4c4c4">
                    <div className="rating-144 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="ellipse-16-47 border-1px-malibu"></div>
          <div className="ellipse-17-47 border-2px-white"></div>
          <img className="polygon-2-47" src={polygon2} />
          <div className="ellipse-18-29 border-1px-black"></div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-42 border-1px-black"></div>
          </Link>
          <Link to="/select-restaurant-sean-s">
            <div className="ellipse-3-21 border-1px-black"></div>
          </Link>
          <div className="ellipse-19-11 border-1px-black"></div>
          <div className="hanam-bbq-139">{hanamBbq}</div>
          <div className="shake-shack-25">{shakeShack}</div>
          <div className="uncles-113">{uncles}</div>
          <div className="sushisaku-27">{sushisaku}</div>
          <div className="seans-restaurant-88">{seansRestaurant}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-24 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeats500m;
