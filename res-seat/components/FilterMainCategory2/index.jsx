import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory2.css";

function FilterMainCategory2(props) {
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
    category1,
    vector7,
    category2,
    vector8,
    category3,
    vector9,
    seats1,
    seats2,
    rating1,
    rating2,
    reset,
    surname,
    dessert,
    salad,
    lunch,
    line39,
    line40,
    line41,
    line42,
    line43,
    meat,
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
      <div className="filter-main-category-2 screen">
        <div className="flex-col-387">
          <img className="component-29-3" src={component29} />
          <div className="overlap-group10-15 inter-medium-black-8px">
            <Link to="/filter-main-category-select">
              <div className="rectangle-102"></div>
            </Link>
            <img className="image-1-24" src={image1} />
            <img className="vector-256" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-18 border-1px-malibu"></div>
            <div className="ellipse-17-18 border-2px-white"></div>
            <img className="polygon-2-18" src={polygon2} />
            <div className="group-64-20">
              <div className="group-container-112">
                <div className="group-62-17">
                  <img className="vector-254" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-25">
                    <div className="overlap-group-710">
                      <img className="vector-255" src={vector3} />
                      <div className="see-list-18 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-113 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-65-10">
              <div className="group-container-112">
                <div className="group-62-17">
                  <img className="vector-254" src={vector4} />
                </div>
                <Link to="/list">
                  <div className="group-63-25">
                    <div className="overlap-group-710">
                      <img className="vector-255" src={vector5} />
                      <div className="see-list-18 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-52 border-1px-mercury">
                <div className="overlap-group-711">
                  <div className="distance-75 inter-normal-white-14px">{distance}</div>
                  <img className="vector-257" src={vector6} />
                </div>
                <div className="overlap-group-container-53">
                  <div className="overlap-group1-459">
                    <div className="rectangle-81-10 border-1px-c4c4c4"></div>
                    <div className="category-81 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-258" src={vector7} />
                    <Link to="/main">
                      <div className="group-47-60">
                        <div className="overlap-group-712">
                          <div className="category-82 inter-normal-white-13px">{category2}</div>
                          <img className="vector-259" src={vector8} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="overlap-group4-162 border-1px-orange">
                    <div className="category-83 inter-normal-flamingo-13px">{category3}</div>
                    <img className="vector-260" src={vector9} />
                  </div>
                </div>
                <div className="overlap-group2-262">
                  <div className="rectangle-33-5 border-1px-c4c4c4"></div>
                  <div className="seats-86 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-seats">
                    <div className="group-56">
                      <div className="overlap-group-713 border-1px-c4c4c4">
                        <div className="seats-87 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group-container-114">
                  <div className="overlap-group3-196 border-1px-c4c4c4">
                    <div className="rating-61 inter-normal-spicy-pink-14px">{rating1}</div>
                  </div>
                  <Link to="/filter-main-rating">
                    <div className="group-56">
                      <div className="overlap-group5-114 border-1px-c4c4c4">
                        <div className="rating-62 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group9-24">
              <div className="rectangle-91-1 border-0-5px-c4c4c4"></div>
              <Link to="/main">
                <div className="reset-18 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
              <div className="surname-1 inter-normal-black-13px">{surname}</div>
              <div className="dessert-1 inter-normal-black-13px">{dessert}</div>
              <div className="salad-1 inter-normal-black-13px">{salad}</div>
              <div className="lunch-1 inter-normal-black-13px">{lunch}</div>
              <img className="line-39-2" src={line39} />
              <img className="line-40-2" src={line40} />
              <img className="line-41-2" src={line41} />
              <img className="line-42-2" src={line42} />
              <img className="line-43-2" src={line43} />
              <Link to="/filter-main-category">
                <div className="ellipse-20-32"></div>
              </Link>
              <div className="ellipse-21-2"></div>
              <Link to="/filter-main-category-select">
                <div className="meat-34 inter-normal-black-13px">{meat}</div>
              </Link>
            </div>
            <div className="bhc-23">{bhc}</div>
            <div className="kyochon-15">{kyochon}</div>
            <div className="ellipse-18-17 border-1px-black"></div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-22 border-1px-black"></div>
            </Link>
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-17 border-1px-black"></div>
            </Link>
            <div className="ellipse-19-4 border-1px-black"></div>
            <div className="ellipse-6-15 border-1px-black"></div>
            <div className="ellipse-20-33 border-1px-black"></div>
            <div className="hanam-bbq-85">{hanamBbq}</div>
            <div className="shake-shack-16">{shakeShack}</div>
            <div className="uncles-46">{uncles}</div>
            <div className="sushisaku-23">{sushisaku}</div>
            <div className="seans-restaurant-29">{seansRestaurant}</div>
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-15 border-1px-black"></div>
            </Link>
          </div>
        </div>
        <img className="rectangle-29-5" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainCategory2;
