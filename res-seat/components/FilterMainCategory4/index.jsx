import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory4.css";

function FilterMainCategory4(props) {
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
    rectangle92,
    reset,
    surname,
    meat,
    dessert,
    salad,
    lunch,
    line39,
    line40,
    line41,
    line42,
    line43,
    hanamBbq,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-4 screen">
        <div className="flex-col-461">
          <img className="component-29-66" src={component29} />
          <div className="overlap-group8-39">
            <img className="image-1-50" src={image1} />
            <img className="vector-679" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-44 border-1px-malibu"></div>
            <div className="ellipse-17-44 border-2px-white"></div>
            <img className="polygon-2-44" src={polygon2} />
            <div className="group-6-4">
              <div className="group-container-202">
                <div className="group-62-43">
                  <img className="vector-677" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-51">
                    <div className="overlap-group-1053">
                      <img className="vector-678" src={vector3} />
                      <div className="see-list-44 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-203 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-6-4">
              <div className="group-container-202">
                <div className="group-62-43">
                  <img className="vector-677" src={vector4} />
                </div>
                <Link to="/list">
                  <div className="group-63-51">
                    <div className="overlap-group-1053">
                      <img className="vector-678" src={vector5} />
                      <div className="see-list-44 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-66 border-1px-mercury">
                <div className="overlap-group-1054">
                  <div className="distance-126 inter-normal-white-14px">{distance}</div>
                  <img className="vector-680" src={vector6} />
                </div>
                <div className="group-container-204">
                  <div className="overlap-group1-608">
                    <div className="rectangle-81-20 border-1px-c4c4c4"></div>
                    <div className="category-173 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-681" src={vector7} />
                    <Link to="/main">
                      <div className="group-47-123">
                        <div className="overlap-group-1055">
                          <div className="category-174 inter-normal-white-13px">{category2}</div>
                          <img className="vector-682" src={vector8} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link to="/filter-main-category-select">
                    <div className="group-51-61">
                      <div className="overlap-group4-245 border-1px-orange">
                        <div className="category-175 inter-normal-flamingo-13px">{category3}</div>
                        <img className="vector-683" src={vector9} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group2-469">
                  <div className="rectangle-12 border-1px-c4c4c4"></div>
                  <div className="seats-189 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-category-seats">
                    <div className="group-91">
                      <div className="overlap-group-1056 border-1px-c4c4c4">
                        <div className="seats-190 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group3-419">
                  <div className="rectangle-12 border-1px-c4c4c4"></div>
                  <div className="rating-140 inter-normal-spicy-pink-14px">{rating1}</div>
                  <Link to="/filter-main-category-rating">
                    <div className="group-91">
                      <div className="overlap-group-1057 border-1px-c4c4c4">
                        <div className="rating-141 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group7-54">
              <div className="rectangle-91-12 border-0-5px-c4c4c4"></div>
              <img className="rectangle-92-15" src={rectangle92} />
              <Link to="/main">
                <div className="reset-32 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
              <div className="surname-12 inter-normal-black-13px">{surname}</div>
              <Link to="/filter-list-category-select">
                <div className="meat-63 inter-normal-flamingo-13px">{meat}</div>
              </Link>
              <div className="dessert-12 inter-normal-black-13px">{dessert}</div>
              <div className="salad-12 inter-normal-black-13px">{salad}</div>
              <div className="lunch-12 inter-normal-black-13px">{lunch}</div>
              <img className="line-39-13" src={line39} />
              <img className="line-40-13" src={line40} />
              <img className="line-41-13" src={line41} />
              <img className="line-42-13" src={line42} />
              <img className="line-43-13" src={line43} />
              <div className="ellipse-20-44"></div>
              <div className="ellipse-21-13"></div>
            </div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-39 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-136 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        </div>
        <img className="rectangle-29-30" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainCategory4;
