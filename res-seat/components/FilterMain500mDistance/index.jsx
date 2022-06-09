import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMain500mDistance.css";

function FilterMain500mDistance(props) {
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
    x500M,
    x1Km,
    line32,
    line33,
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-500m-distance screen">
        <div className="flex-col-464">
          <img className="component-29-79" src={component29} />
          <div className="overlap-group9-49 inter-medium-black-8px">
            <img className="image-1-60" src={image1} />
            <img className="vector-740" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-54 border-1px-malibu"></div>
            <div className="ellipse-17-54 border-2px-white"></div>
            <img className="polygon-2-54" src={polygon2} />
            <div className="group-64-46">
              <div className="group-container-229">
                <div className="group-62-53">
                  <img className="vector-738" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-61">
                    <div className="overlap-group-1081">
                      <img className="vector-739" src={vector3} />
                      <div className="see-list-54 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-230 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-65-26">
              <div className="group-container-229">
                <div className="group-62-53">
                  <img className="vector-738" src={vector4} />
                </div>
                <Link to="/filter-list-500m-distance">
                  <div className="group-63-61">
                    <div className="overlap-group-1081">
                      <img className="vector-739" src={vector5} />
                      <div className="see-list-54 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-231 border-1px-mercury">
                <div className="overlap-group1-626">
                  <div className="rectangle-80-5"></div>
                  <div className="distance-136 inter-normal-white-14px">{distance1}</div>
                  <img className="vector-741" src={vector6} />
                  <Link to="/filter-main-500m">
                    <div className="group-48-75">
                      <div className="overlap-group-1082 border-1px-orange">
                        <div className="distance-137 inter-normal-flamingo-14px">{distance2}</div>
                        <img className="vector-742" src={vector7} />
                      </div>
                    </div>
                  </Link>
                </div>
                <Link to="/filter-main-category-5-500m">
                  <div className="group-47-136">
                    <div className="overlap-group2-483 border-1px-c4c4c4">
                      <div className="category-190 inter-normal-spicy-pink-13px">{category}</div>
                      <img className="vector-743" src={vector8} />
                    </div>
                  </div>
                </Link>
                <div className="overlap-group3-435">
                  <div className="rectangle-33-17 border-1px-c4c4c4"></div>
                  <div className="seats-202 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-seats-500m">
                    <div className="group-94">
                      <div className="overlap-group-1083 border-1px-c4c4c4">
                        <div className="seats-203 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group-container-232">
                  <div className="overlap-group4-253 border-1px-c4c4c4">
                    <div className="rating-156 inter-normal-spicy-pink-14px">{rating1}</div>
                  </div>
                  <Link to="/filter-main-rating-500m">
                    <div className="group-94">
                      <div className="overlap-group5-175 border-1px-c4c4c4">
                        <div className="rating-157 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group8-42 border-1px-c4c4c4">
              <Link to="/filter-main-100m">
                <div className="x100m-7 inter-normal-black-14px">{x100M}</div>
              </Link>
              <img className="line-31-6" src={line31} />
              <Link to="/filter-main-200m">
                <div className="x200m-7 inter-normal-black-14px">{x200M}</div>
              </Link>
              <div className="overlap-group-1084">
                <div className="x500m-7 inter-normal-flamingo-14px">{x500M}</div>
                <Link to="/main">
                  <div className="x1-km-7 inter-normal-black-14px">{x1Km}</div>
                </Link>
                <img className="line-32-8" src={line32} />
                <img className="line-33-6" src={line33} />
                <Link to="/filter-main-500m">
                  <div className="rectangle-85-7"></div>
                </Link>
              </div>
            </div>
            <div className="ellipse-18-35 border-1px-black"></div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-47 border-1px-black"></div>
            </Link>
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-23 border-1px-black"></div>
            </Link>
            <div className="ellipse-19-15 border-1px-black"></div>
            <div className="hanam-bbq-144">{hanamBbq}</div>
            <div className="shake-shack-29">{shakeShack}</div>
            <div className="uncles-117">{uncles}</div>
            <div className="sushisaku-29">{sushisaku}</div>
            <div className="seans-restaurant-90">{seansRestaurant}</div>
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-28 border-1px-black"></div>
            </Link>
          </div>
        </div>
        <img className="rectangle-29-36" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMain500mDistance;
