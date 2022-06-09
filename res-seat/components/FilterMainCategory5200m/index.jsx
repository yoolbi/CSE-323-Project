import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory5200m.css";

function FilterMainCategory5200m(props) {
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
    shakeShack,
    uncles,
    hanamBbq,
    group48Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-5-200m screen">
        <img className="component-29-78" src={component29} />
        <div className="overlap-group7-56 inter-medium-black-8px">
          <img className="image-1-59" src={image1} />
          <img className="vector-734" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-53 border-1px-malibu"></div>
          <div className="ellipse-17-53 border-2px-white"></div>
          <img className="polygon-2-53" src={polygon2} />
          <div className="group-64-45">
            <div className="group-container-226">
              <div className="group-62-52">
                <img className="vector-732" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-60">
                  <div className="overlap-group-1079">
                    <img className="vector-733" src={vector3} />
                    <div className="see-list-53 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-227 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-25">
            <div className="group-container-226">
              <div className="group-62-52">
                <img className="vector-732" src={vector4} />
              </div>
              <Link to="/list">
                <div className="group-63-60">
                  <div className="overlap-group-1079">
                    <img className="vector-733" src={vector5} />
                    <div className="see-list-53 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-228 border-1px-mercury">
              <Group48 className={group48Props.className} />
              <Link to="/filter-main-200m" className="align-self-flex-start">
                <div className="group-47-135">
                  <div className="overlap-group2-482">
                    <div className="rectangle-81-21 border-1px-c4c4c4"></div>
                    <div className="category-187 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-735" src={vector6} />
                    <div className="overlap-group-1080">
                      <div className="category-188 inter-normal-white-13px">{category2}</div>
                      <img className="vector-736" src={vector7} />
                    </div>
                    <div className="overlap-group1-625 border-1px-orange">
                      <div className="category-189 inter-normal-flamingo-13px">{category3}</div>
                      <img className="vector-737" src={vector8} />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-200m">
                <div className="group-49-119">
                  <div className="overlap-group3-434 border-1px-c4c4c4">
                    <div className="seats-201 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating-200m">
                <div className="group-50-123">
                  <div className="overlap-group4-252 border-1px-c4c4c4">
                    <div className="rating-155 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="overlap-group6-87">
            <div className="rectangle-89-21 border-0-5px-c4c4c4"></div>
            <div className="language-80 inter-normal-black-13px">{language1}</div>
            <div className="language-81 inter-normal-black-13px">{language2}</div>
            <div className="asian-46 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-54 inter-normal-black-13px">{fastfood}</div>
            <div className="language-82 inter-normal-black-13px">{language3}</div>
            <div className="snack-5 inter-normal-black-13px">{snack}</div>
            <div className="pizza-21 inter-normal-black-13px">{pizza}</div>
            <div className="place-27 inter-normal-black-13px">{place}</div>
            <div className="western-40 inter-normal-black-13px">{western}</div>
            <img className="line-34-21" src={line34} />
            <img className="line-35-21" src={line35} />
            <img className="line-37-21" src={line37} />
            <img className="line-38-21" src={line38} />
            <img className="line-36-21" src={line36} />
            <div className="ellipse-18-33"></div>
            <div className="ellipse-19-14"></div>
            <Link to="/filter-main-200m">
              <div className="reset-36 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <div className="ellipse-18-34 border-1px-black"></div>
          <div className="shake-shack-28">{shakeShack}</div>
          <div className="uncles-116">{uncles}</div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-46 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-143">{hanamBbq}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-27 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory5200m;
