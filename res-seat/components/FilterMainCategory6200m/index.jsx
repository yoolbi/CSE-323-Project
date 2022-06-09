import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory6200m.css";

function FilterMainCategory6200m(props) {
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
    shakeShack,
    uncles,
    hanamBbq,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-6-200m screen">
        <div className="flex-col-458">
          <img className="component-29-57" src={component29} />
          <div className="overlap-group10-34 inter-medium-black-8px">
            <Link to="/filter-main-category-8-200m">
              <div className="rectangle-102-1"></div>
            </Link>
            <img className="image-1-46" src={image1} />
            <img className="vector-608" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-40 border-1px-malibu"></div>
            <div className="ellipse-17-40 border-2px-white"></div>
            <img className="polygon-2-40" src={polygon2} />
            <div className="group-64-37">
              <div className="group-container-189">
                <div className="group-62-39">
                  <img className="vector-606" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-47">
                    <div className="overlap-group-1017">
                      <img className="vector-607" src={vector3} />
                      <div className="see-list-40 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-190 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-65-16">
              <div className="group-container-189">
                <div className="group-62-39">
                  <img className="vector-606" src={vector4} />
                </div>
                <Link to="/list">
                  <div className="group-63-47">
                    <div className="overlap-group-1017">
                      <img className="vector-607" src={vector5} />
                      <div className="see-list-40 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-60 border-1px-mercury">
                <div className="overlap-group-1018">
                  <div className="distance-118 inter-normal-white-14px">{distance}</div>
                  <img className="vector-609" src={vector6} />
                </div>
                <div className="overlap-group-container-61">
                  <div className="overlap-group1-593">
                    <div className="rectangle-81-16 border-1px-c4c4c4"></div>
                    <div className="category-158 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-610" src={vector7} />
                    <Link to="/filter-main-200m">
                      <div className="group-47-114">
                        <div className="overlap-group-1019">
                          <div className="category-159 inter-normal-white-13px">{category2}</div>
                          <img className="vector-611" src={vector8} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="overlap-group4-234 border-1px-orange">
                    <div className="category-160 inter-normal-flamingo-13px">{category3}</div>
                    <img className="vector-612" src={vector9} />
                  </div>
                </div>
                <div className="overlap-group2-454">
                  <div className="rectangle-33-12 border-1px-c4c4c4"></div>
                  <div className="seats-176 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-seats-200m">
                    <div className="group-80">
                      <div className="overlap-group-1020 border-1px-c4c4c4">
                        <div className="seats-177 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group-container-191">
                  <div className="overlap-group3-392 border-1px-c4c4c4">
                    <div className="rating-128 inter-normal-spicy-pink-14px">{rating1}</div>
                  </div>
                  <Link to="/filter-main-rating-200m">
                    <div className="group-80">
                      <div className="overlap-group5-158 border-1px-c4c4c4">
                        <div className="rating-129 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group9-43">
              <div className="rectangle-91-9 border-0-5px-c4c4c4"></div>
              <Link to="/filter-main-200m">
                <div className="reset-29 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
              <div className="surname-9 inter-normal-black-13px">{surname}</div>
              <div className="dessert-9 inter-normal-black-13px">{dessert}</div>
              <div className="salad-9 inter-normal-black-13px">{salad}</div>
              <div className="lunch-9 inter-normal-black-13px">{lunch}</div>
              <img className="line-39-10" src={line39} />
              <img className="line-40-10" src={line40} />
              <img className="line-41-10" src={line41} />
              <img className="line-42-10" src={line42} />
              <img className="line-43-10" src={line43} />
              <Link to="/filter-main-category-5-200m">
                <div className="ellipse-20-41"></div>
              </Link>
              <div className="ellipse-21-10"></div>
              <Link to="/filter-main-category-8-200m">
                <div className="meat-57 inter-normal-black-13px">{meat}</div>
              </Link>
            </div>
            <div className="ellipse-18-25 border-1px-black"></div>
            <div className="shake-shack-21">{shakeShack}</div>
            <div className="uncles-102">{uncles}</div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-37 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-129">{hanamBbq}</div>
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-20 border-1px-black"></div>
            </Link>
          </div>
        </div>
        <img className="rectangle-29-22" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainCategory6200m;
