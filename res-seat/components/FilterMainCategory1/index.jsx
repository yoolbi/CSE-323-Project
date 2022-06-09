import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory1.css";

function FilterMainCategory1(props) {
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
    bhc,
    kyochon,
    hanamBbq,
    shakeShack,
    uncles,
    sushisaku,
    seansRestaurant,
    group48Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-1 screen">
        <img className="component-29-1" src={component29} />
        <div className="overlap-group7-27 inter-medium-black-8px">
          <img className="image-1-22" src={image1} />
          <img className="vector-235" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-16 border-1px-malibu"></div>
          <div className="ellipse-17-16 border-2px-white"></div>
          <img className="polygon-2-16" src={polygon2} />
          <div className="group-64-17">
            <div className="group-container-78">
              <div className="group-62-13">
                <img className="vector-233" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-20">
                  <div className="overlap-group-470">
                    <img className="vector-234" src={vector3} />
                    <div className="see-list-16 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-79 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-7">
            <div className="group-container-78">
              <div className="group-62-13">
                <img className="vector-233" src={vector4} />
              </div>
              <Link to="/list">
                <div className="group-63-20">
                  <div className="overlap-group-470">
                    <img className="vector-234" src={vector5} />
                    <div className="see-list-16 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-80 border-1px-mercury">
              <Group48 className={group48Props.className} />
              <div className="group-47-58">
                <div className="overlap-group2-171">
                  <div className="rectangle-81-9 border-1px-c4c4c4"></div>
                  <div className="category-77 inter-normal-spicy-pink-13px">{category1}</div>
                  <img className="vector-236" src={vector6} />
                  <Link to="/main">
                    <div className="group-47-59">
                      <div className="overlap-group-471">
                        <div className="category-78 inter-normal-white-13px">{category2}</div>
                        <img className="vector-237" src={vector7} />
                      </div>
                    </div>
                  </Link>
                  <div className="overlap-group1-264 border-1px-orange">
                    <div className="category-79 inter-normal-flamingo-13px">{category3}</div>
                    <img className="vector-238" src={vector8} />
                  </div>
                </div>
              </div>
              <Link to="/filter-main-seats">
                <div className="group-49-56">
                  <div className="overlap-group3-128 border-1px-c4c4c4">
                    <div className="seats-83 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating">
                <div className="group-50-54">
                  <div className="overlap-group4-95 border-1px-c4c4c4">
                    <div className="rating-58 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="overlap-group6-41">
            <div className="rectangle-89-16 border-0-5px-c4c4c4"></div>
            <div className="language-57 inter-normal-black-13px">{language1}</div>
            <div className="language-58 inter-normal-black-13px">{language2}</div>
            <div className="asian-26 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-34 inter-normal-black-13px">{fastfood}</div>
            <div className="language-59 inter-normal-black-13px">{language3}</div>
            <div className="snack inter-normal-black-13px">{snack}</div>
            <div className="pizza-16 inter-normal-black-13px">{pizza}</div>
            <div className="place-19 inter-normal-black-13px">{place}</div>
            <div className="western-27 inter-normal-black-13px">{western}</div>
            <img className="line-34-16" src={line34} />
            <img className="line-35-16" src={line35} />
            <img className="line-37-16" src={line37} />
            <img className="line-38-16" src={line38} />
            <img className="line-36-16" src={line36} />
            <div className="ellipse-18-14"></div>
            <Link to="/filter-main-category-2">
              <div className="ellipse-19-1"></div>
            </Link>
            <Link to="/main">
              <div className="reset-17 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <div className="bhc-21">{bhc}</div>
          <div className="kyochon-13">{kyochon}</div>
          <div className="ellipse-18-15 border-1px-black"></div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-20 border-1px-black"></div>
          </Link>
          <Link to="/select-restaurant-sean-s">
            <div className="ellipse-3-15 border-1px-black"></div>
          </Link>
          <div className="ellipse-19-2 border-1px-black"></div>
          <div className="ellipse-6-13 border-1px-black"></div>
          <div className="ellipse-20-25 border-1px-black"></div>
          <div className="hanam-bbq-61">{hanamBbq}</div>
          <div className="shake-shack-14">{shakeShack}</div>
          <div className="uncles-44">{uncles}</div>
          <div className="sushisaku-21">{sushisaku}</div>
          <div className="seans-restaurant-27">{seansRestaurant}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-14 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory1;
