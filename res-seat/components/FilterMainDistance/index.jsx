import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainDistance.css";

function FilterMainDistance(props) {
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
    line31,
    x200M,
    line32,
    x500M,
    x1Km,
    line33,
    rectangle85,
    bhc,
    kyochon,
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-distance screen">
        <div className="flex-col-125">
          <img className="component-29-2" src={component29} />
          <div className="overlap-group9-20 inter-medium-black-8px">
            <img className="image-1-23" src={image1} />
            <img className="vector-241" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-17 border-1px-malibu"></div>
            <div className="ellipse-17-17 border-2px-white"></div>
            <img className="polygon-2-17" src={polygon2} />
            <div className="group-64-18">
              <div className="group-container-83">
                <div className="group-62-14">
                  <img className="vector-239" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-21">
                    <div className="overlap-group-474">
                      <img className="vector-240" src={vector3} />
                      <div className="see-list-17 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-84 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-65-8">
              <div className="group-container-83">
                <div className="group-62-14">
                  <img className="vector-239" src={vector4} />
                </div>
                <Link to="/filter-list-distance">
                  <div className="group-63-21">
                    <div className="overlap-group-474">
                      <img className="vector-240" src={vector5} />
                      <div className="see-list-17 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-44 border-1px-mercury">
                <div className="overlap-group1-266">
                  <div className="rectangle-80"></div>
                  <div className="distance-73 inter-normal-white-14px">{distance1}</div>
                  <img className="vector-242" src={vector6} />
                  <Link to="/main">
                    <div className="group-48-20">
                      <div className="overlap-group-475 border-1px-orange">
                        <div className="distance-74 inter-normal-flamingo-14px">{distance2}</div>
                        <img className="vector-243" src={vector7} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group2-172 border-1px-c4c4c4">
                  <div className="category-80 inter-normal-spicy-pink-13px">{category}</div>
                  <img className="vector-244" src={vector8} />
                </div>
                <div className="overlap-group3-131">
                  <div className="rectangle-33-4 border-1px-c4c4c4"></div>
                  <div className="seats-84 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-seats">
                    <div className="group-55">
                      <div className="overlap-group-476 border-1px-c4c4c4">
                        <div className="seats-85 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group-container-85">
                  <div className="overlap-group4-98 border-1px-c4c4c4">
                    <div className="rating-59 inter-normal-spicy-pink-14px">{rating1}</div>
                  </div>
                  <Link to="/filter-main-rating">
                    <div className="group-55">
                      <div className="overlap-group5-75 border-1px-c4c4c4">
                        <div className="rating-60 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group8-19 border-1px-c4c4c4">
              <Link to="/filter-main-100m">
                <div className="x100m inter-normal-black-14px">{x100M}</div>
              </Link>
              <img className="line-31-1" src={line31} />
              <Link to="/filter-main-200m">
                <div className="x200m inter-normal-black-14px">{x200M}</div>
              </Link>
              <img className="line-32-1" src={line32} />
              <div className="x500m inter-normal-black-14px">{x500M}</div>
              <div className="overlap-group-477">
                <Link to="/main">
                  <div className="x1-km inter-normal-flamingo-14px">{x1Km}</div>
                </Link>
                <img className="line-33-1" src={line33} />
                <Link to="/main">
                  <img className="rectangle-85" src={rectangle85} />
                </Link>
              </div>
            </div>
            <div className="bhc-22">{bhc}</div>
            <div className="kyochon-14">{kyochon}</div>
            <div className="ellipse-18-16 border-1px-black"></div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-21 border-1px-black"></div>
            </Link>
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-16 border-1px-black"></div>
            </Link>
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-21-1 border-1px-black"></div>
            </Link>
            <div className="ellipse-19-3 border-1px-black"></div>
            <div className="ellipse-6-14 border-1px-black"></div>
            <div className="ellipse-20-26 border-1px-black"></div>
            <div className="hanam-bbq-62">{hanamBbq}</div>
            <div className="shake-shack-15">{shakeShack}</div>
            <div className="uncles-45">{uncles}</div>
            <div className="sushisaku-22">{sushisaku}</div>
            <div className="seans-restaurant-28">{seansRestaurant}</div>
          </div>
        </div>
        <img className="rectangle-29-4" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainDistance;
