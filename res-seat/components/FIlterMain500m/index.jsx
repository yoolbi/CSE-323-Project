import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FIlterMain500m.css";

function FIlterMain500m(props) {
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
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-500m screen">
        <img className="component-29-46" src={component29} />
        <div className="overlap-group6-80 inter-medium-black-8px">
          <img className="image-1-42" src={image1} />
          <div className="ellipse-18-22 border-1px-black"></div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-34 border-1px-black"></div>
          </Link>
          <Link to="/select-restaurant-sean-s">
            <div className="ellipse-3-18 border-1px-black"></div>
          </Link>
          <div className="ellipse-19-8 border-1px-black"></div>
          <img className="vector-563" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-36 border-1px-malibu"></div>
          <div className="ellipse-17-36 border-2px-white"></div>
          <img className="polygon-2-36" src={polygon2} />
          <div className="group-64-35">
            <div className="group-container-180">
              <div className="group-62-35">
                <img className="vector-561" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-43">
                  <div className="overlap-group-988">
                    <img className="vector-562" src={vector3} />
                    <div className="see-list-36 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-181 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-13">
            <div className="group-container-180">
              <div className="group-62-35">
                <img className="vector-561" src={vector4} />
              </div>
              <Link to="/filter-list-500m">
                <div className="group-63-43">
                  <div className="overlap-group-988">
                    <img className="vector-562" src={vector5} />
                    <div className="see-list-36 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-182 border-1px-mercury">
              <Link to="/filter-main-500m-distance">
                <div className="group-48-57">
                  <div className="overlap-group-989">
                    <div className="distance-112 inter-normal-white-14px">{distance}</div>
                    <img className="vector-564" src={vector6} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-5-500m">
                <div className="group-47-103">
                  <div className="overlap-group1-575 border-1px-c4c4c4">
                    <div className="category-144 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-565" src={vector7} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-500m">
                <div className="group-49-96">
                  <div className="overlap-group2-443 border-1px-c4c4c4">
                    <div className="seats-160 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating-500m">
                <div className="group-50-97">
                  <div className="overlap-group3-372 border-1px-c4c4c4">
                    <div className="rating-117 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="hanam-bbq-126">{hanamBbq}</div>
          <div className="shake-shack-18">{shakeShack}</div>
          <div className="uncles-93">{uncles}</div>
          <div className="sushisaku-24">{sushisaku}</div>
          <div className="seans-restaurant-76">{seansRestaurant}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-17 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FIlterMain500m;
