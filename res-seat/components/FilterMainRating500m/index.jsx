import React from "react";
import { Link } from "react-router-dom";
import Group497 from "../Group497";
import "./FilterMainRating500m.css";

function FilterMainRating500m(props) {
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
    rating,
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-rating-500m screen">
        <img className="component-29-70" src={component29} />
        <div className="overlap-group5-168 inter-medium-black-8px">
          <img className="image-1-54" src={image1} />
          <div className="ellipse-16-48 border-1px-malibu"></div>
          <div className="ellipse-17-48 border-2px-white"></div>
          <img className="polygon-2-48" src={polygon2} />
          <div className="group-65-21">
            <div className="group-container-211">
              <div className="group-62-47">
                <img className="vector-696" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-rating-500m">
                <div className="group-63-55">
                  <div className="overlap-group-1064">
                    <img className="vector-697" src={vector2} />
                    <div className="see-list-48 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-212 border-1px-mercury">
              <Link to="/main">
                <div className="group-48-69">
                  <div className="overlap-group-1065">
                    <div className="distance-128 inter-normal-white-14px">{distance}</div>
                    <img className="vector-698" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-rating-500m">
                <div className="group-47-127">
                  <div className="overlap-group1-612 border-1px-c4c4c4">
                    <div className="category-179 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-699" src={vector4} />
                  </div>
                </div>
              </Link>
              <Group497 />
              <div className="group-50-117">
                <div className="overlap-group3-424">
                  <Link to="/filter-main-500m">
                    <div className="rectangle-60-12"></div>
                  </Link>
                  <div className="rating-145 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-18-30 border-1px-black"></div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-43 border-1px-black"></div>
          </Link>
          <Link to="/select-restaurant-sean-s">
            <div className="ellipse-3-22 border-1px-black"></div>
          </Link>
          <div className="ellipse-19-12 border-1px-black"></div>
          <div className="hanam-bbq-140">{hanamBbq}</div>
          <div className="shake-shack-26">{shakeShack}</div>
          <div className="uncles-114">{uncles}</div>
          <div className="sushisaku-28">{sushisaku}</div>
          <div className="seans-restaurant-89">{seansRestaurant}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-25 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainRating500m;
