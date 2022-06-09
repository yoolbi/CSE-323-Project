import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory7500m.css";

function FilterMainCategory7500m(props) {
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
      <div className="filter-main-category-7-500m screen">
        <div className="flex-col-456">
          <img className="component-29-21" src={component29} />
          <div className="overlap-group8-36">
            <img className="image-1-26" src={image1} />
            <img className="vector-409" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-20 border-1px-malibu"></div>
            <div className="ellipse-17-20 border-2px-white"></div>
            <img className="polygon-2-20" src={polygon2} />
            <div className="group-6-2">
              <div className="group-container-142">
                <div className="group-62-19">
                  <img className="vector-407" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-27">
                    <div className="overlap-group-883">
                      <img className="vector-408" src={vector3} />
                      <div className="see-list-20 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-143 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-6-2">
              <div className="group-container-142">
                <div className="group-62-19">
                  <img className="vector-407" src={vector4} />
                </div>
                <Link to="/list">
                  <div className="group-63-27">
                    <div className="overlap-group-883">
                      <img className="vector-408" src={vector5} />
                      <div className="see-list-20 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-57 border-1px-mercury">
                <div className="overlap-group-884">
                  <div className="distance-102 inter-normal-white-14px">{distance}</div>
                  <img className="vector-410" src={vector6} />
                </div>
                <div className="group-container-144">
                  <div className="overlap-group1-534">
                    <div className="rectangle-81-12 border-1px-c4c4c4"></div>
                    <div className="category-109 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-411" src={vector7} />
                    <Link to="/filter-main-category-8-500m">
                      <div className="group-47-78">
                        <div className="overlap-group-885">
                          <div className="category-110 inter-normal-white-13px">{category2}</div>
                          <img className="vector-412" src={vector8} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link to="/filter-main-category-8-500m">
                    <div className="group-51-35">
                      <div className="overlap-group4-206 border-1px-orange">
                        <div className="category-111 inter-normal-flamingo-13px">{category3}</div>
                        <img className="vector-413" src={vector9} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group2-402">
                  <div className="rectangle-3 border-1px-c4c4c4"></div>
                  <div className="seats-109 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-category-seats-500m">
                    <div className="group-76">
                      <div className="overlap-group-886 border-1px-c4c4c4">
                        <div className="seats-110 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group3-301">
                  <div className="rectangle-3 border-1px-c4c4c4"></div>
                  <div className="rating-84 inter-normal-spicy-pink-14px">{rating1}</div>
                  <Link to="/filter-main-category-rating-500m">
                    <div className="group-76">
                      <div className="overlap-group-887 border-1px-c4c4c4">
                        <div className="rating-85 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group7-43">
              <div className="rectangle-91-3 border-0-5px-c4c4c4"></div>
              <img className="rectangle-92-9" src={rectangle92} />
              <Link to="/filter-main-500m">
                <div className="reset-22 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
              <div className="surname-3 inter-normal-black-13px">{surname}</div>
              <Link to="/filter-list-category-8-500m">
                <div className="meat-44 inter-normal-flamingo-13px">{meat}</div>
              </Link>
              <div className="dessert-3 inter-normal-black-13px">{dessert}</div>
              <div className="salad-3 inter-normal-black-13px">{salad}</div>
              <div className="lunch-3 inter-normal-black-13px">{lunch}</div>
              <img className="line-39-4" src={line39} />
              <img className="line-40-4" src={line40} />
              <img className="line-41-4" src={line41} />
              <img className="line-42-4" src={line42} />
              <img className="line-43-4" src={line43} />
              <div className="ellipse-20-35"></div>
              <div className="ellipse-21-4"></div>
            </div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-24 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-101 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        </div>
        <img className="rectangle-29-12" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainCategory7500m;
