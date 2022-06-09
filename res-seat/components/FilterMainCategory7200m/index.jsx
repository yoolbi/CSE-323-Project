import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory7200m.css";

function FilterMainCategory7200m(props) {
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
      <div className="filter-main-category-7-200m screen">
        <div className="flex-col-455">
          <img className="component-29-18" src={component29} />
          <div className="overlap-group8-35">
            <img className="image-1-25" src={image1} />
            <img className="vector-398" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-19 border-1px-malibu"></div>
            <div className="ellipse-17-19 border-2px-white"></div>
            <img className="polygon-2-19" src={polygon2} />
            <div className="group-6-1">
              <div className="group-container-139">
                <div className="group-62-18">
                  <img className="vector-396" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-26">
                    <div className="overlap-group-876">
                      <img className="vector-397" src={vector3} />
                      <div className="see-list-19 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-140 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-6-1">
              <div className="group-container-139">
                <div className="group-62-18">
                  <img className="vector-396" src={vector4} />
                </div>
                <Link to="/list">
                  <div className="group-63-26">
                    <div className="overlap-group-876">
                      <img className="vector-397" src={vector5} />
                      <div className="see-list-19 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-56 border-1px-mercury">
                <div className="overlap-group-877">
                  <div className="distance-99 inter-normal-white-14px">{distance}</div>
                  <img className="vector-399" src={vector6} />
                </div>
                <div className="group-container-141">
                  <div className="overlap-group1-531">
                    <div className="rectangle-81-11 border-1px-c4c4c4"></div>
                    <div className="category-104 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-400" src={vector7} />
                    <Link to="/main">
                      <div className="group-47-75">
                        <div className="overlap-group-878">
                          <div className="category-105 inter-normal-white-13px">{category2}</div>
                          <img className="vector-401" src={vector8} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link to="/filter-main-category-8-200m">
                    <div className="group-51-32">
                      <div className="overlap-group4-204 border-1px-orange">
                        <div className="category-106 inter-normal-flamingo-13px">{category3}</div>
                        <img className="vector-402" src={vector9} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group2-399">
                  <div className="rectangle-1 border-1px-c4c4c4"></div>
                  <div className="seats-105 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-category-seats-200m">
                    <div className="group-60">
                      <div className="overlap-group-879 border-1px-c4c4c4">
                        <div className="seats-106 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group3-298">
                  <div className="rectangle-1 border-1px-c4c4c4"></div>
                  <div className="rating-80 inter-normal-spicy-pink-14px">{rating1}</div>
                  <Link to="/filter-main-category-rating-200m">
                    <div className="group-60">
                      <div className="overlap-group-880 border-1px-c4c4c4">
                        <div className="rating-81 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group7-42">
              <div className="rectangle-91-2 border-0-5px-c4c4c4"></div>
              <img className="rectangle-92-8" src={rectangle92} />
              <Link to="/filter-main-200m">
                <div className="reset-20 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
              <div className="surname-2 inter-normal-black-13px">{surname}</div>
              <Link to="/filter-list-category-8-200m">
                <div className="meat-43 inter-normal-flamingo-13px">{meat}</div>
              </Link>
              <div className="dessert-2 inter-normal-black-13px">{dessert}</div>
              <div className="salad-2 inter-normal-black-13px">{salad}</div>
              <div className="lunch-2 inter-normal-black-13px">{lunch}</div>
              <img className="line-39-3" src={line39} />
              <img className="line-40-3" src={line40} />
              <img className="line-41-3" src={line41} />
              <img className="line-42-3" src={line42} />
              <img className="line-43-3" src={line43} />
              <div className="ellipse-20-34"></div>
              <div className="ellipse-21-3"></div>
            </div>
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-23 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-100 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        </div>
        <img className="rectangle-29-10" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainCategory7200m;
