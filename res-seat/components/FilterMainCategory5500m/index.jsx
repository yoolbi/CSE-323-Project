import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory5500m.css";

function FilterMainCategory5500m(props) {
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
    category1,
    vector6,
    category2,
    vector7,
    category3,
    vector8,
    seats,
    rating,
    language1,
    language2,
    asian,
    fastfood,
    language3,
    snack,
    pizza,
    place,
    western,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
    group48Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-5-500m screen">
        <img className="component-29-80" src={component29} />
        <div className="overlap-group7-57 inter-medium-black-8px">
          <img className="image-1-61" src={image1} />
          <img className="vector-746" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-55 border-1px-malibu"></div>
          <div className="ellipse-17-55 border-2px-white"></div>
          <img className="polygon-2-55" src={polygon2} />
          <div className="group-64-47">
            <div className="group-container-233">
              <div className="group-62-54">
                <img className="vector-744" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-62">
                  <div className="overlap-group-1085">
                    <img className="vector-745" src={vector3} />
                    <div className="see-list-55 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-234 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-27">
            <div className="group-container-233">
              <div className="group-62-54">
                <img className="vector-744" src={vector4} />
              </div>
              <Link to="/list">
                <div className="group-63-62">
                  <div className="overlap-group-1085">
                    <img className="vector-745" src={vector5} />
                    <div className="see-list-55 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-235 border-1px-mercury">
              <Group48 className={group48Props.className} />
              <Link to="/filter-main-500m" className="align-self-flex-start">
                <div className="group-47-137">
                  <div className="overlap-group2-484">
                    <div className="rectangle-81-22 border-1px-c4c4c4"></div>
                    <div className="category-191 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-747" src={vector6} />
                    <div className="overlap-group-1086">
                      <div className="category-192 inter-normal-white-13px">{category2}</div>
                      <img className="vector-748" src={vector7} />
                    </div>
                    <div className="overlap-group1-627 border-1px-orange">
                      <div className="category-193 inter-normal-flamingo-13px">{category3}</div>
                      <img className="vector-749" src={vector8} />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-500m">
                <div className="group-49-120">
                  <div className="overlap-group3-436 border-1px-c4c4c4">
                    <div className="seats-204 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating-500m">
                <div className="group-50-124">
                  <div className="overlap-group4-254 border-1px-c4c4c4">
                    <div className="rating-158 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="overlap-group6-88">
            <div className="rectangle-89-22 border-0-5px-c4c4c4"></div>
            <div className="language-83 inter-normal-black-13px">{language1}</div>
            <div className="language-84 inter-normal-black-13px">{language2}</div>
            <div className="asian-47 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-55 inter-normal-black-13px">{fastfood}</div>
            <div className="language-85 inter-normal-black-13px">{language3}</div>
            <div className="snack-6 inter-normal-black-13px">{snack}</div>
            <div className="pizza-22 inter-normal-black-13px">{pizza}</div>
            <div className="place-28 inter-normal-black-13px">{place}</div>
            <div className="western-41 inter-normal-black-13px">{western}</div>
            <img className="line-34-22" src={line34} />
            <img className="line-35-22" src={line35} />
            <img className="line-37-22" src={line37} />
            <img className="line-38-22" src={line38} />
            <img className="line-36-22" src={line36} />
            <div className="ellipse-18-36"></div>
            <div className="ellipse-19-16"></div>
            <Link to="/filter-main-500m">
              <div className="reset-37 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <div className="ellipse-18-37 border-1px-black"></div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-48 border-1px-black"></div>
          </Link>
          <Link to="/select-restaurant-sean-s">
            <div className="ellipse-3-24 border-1px-black"></div>
          </Link>
          <div className="ellipse-19-17 border-1px-black"></div>
          <div className="hanam-bbq-145">{hanamBbq}</div>
          <div className="shake-shack-30">{shakeShack}</div>
          <div className="uncles-118">{uncles}</div>
          <div className="sushisaku-30">{sushisaku}</div>
          <div className="seans-restaurant-91">{seansRestaurant}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-29 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory5500m;
