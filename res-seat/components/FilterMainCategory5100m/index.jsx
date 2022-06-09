import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory5100m.css";

function FilterMainCategory5100m(props) {
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
    group48Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-5-100m screen">
        <img className="component-29-81" src={component29} />
        <div className="overlap-group7-58">
          <img className="image-1-62" src={image1} />
          <img className="vector-752" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-56 border-1px-malibu"></div>
          <div className="ellipse-17-56 border-2px-white"></div>
          <img className="polygon-2-56" src={polygon2} />
          <div className="group-64-48">
            <div className="group-container-236">
              <div className="group-62-55">
                <img className="vector-750" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-63">
                  <div className="overlap-group-1087">
                    <img className="vector-751" src={vector3} />
                    <div className="see-list-56 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-237 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-28">
            <div className="group-container-236">
              <div className="group-62-55">
                <img className="vector-750" src={vector4} />
              </div>
              <Link to="/list">
                <div className="group-63-63">
                  <div className="overlap-group-1087">
                    <img className="vector-751" src={vector5} />
                    <div className="see-list-56 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-238 border-1px-mercury">
              <Group48 className={group48Props.className} />
              <Link to="/filter-main-100m" className="align-self-flex-start">
                <div className="group-47-138">
                  <div className="overlap-group2-485">
                    <div className="rectangle-81-23 border-1px-c4c4c4"></div>
                    <div className="category-194 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-753" src={vector6} />
                    <div className="overlap-group-1088">
                      <div className="category-195 inter-normal-white-13px">{category2}</div>
                      <img className="vector-754" src={vector7} />
                    </div>
                    <div className="overlap-group1-628 border-1px-orange">
                      <div className="category-196 inter-normal-flamingo-13px">{category3}</div>
                      <img className="vector-755" src={vector8} />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-100m">
                <div className="group-49-121">
                  <div className="overlap-group3-437 border-1px-c4c4c4">
                    <div className="seats-205 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating-100m">
                <div className="group-50-125">
                  <div className="overlap-group4-255 border-1px-c4c4c4">
                    <div className="rating-159 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="overlap-group6-89">
            <div className="rectangle-89-23 border-0-5px-c4c4c4"></div>
            <div className="language-86 inter-normal-black-13px">{language1}</div>
            <div className="language-87 inter-normal-black-13px">{language2}</div>
            <div className="asian-48 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-56 inter-normal-black-13px">{fastfood}</div>
            <div className="language-88 inter-normal-black-13px">{language3}</div>
            <div className="snack-7 inter-normal-black-13px">{snack}</div>
            <div className="pizza-23 inter-normal-black-13px">{pizza}</div>
            <div className="place-29 inter-normal-black-13px">{place}</div>
            <div className="western-42 inter-normal-black-13px">{western}</div>
            <img className="line-34-23" src={line34} />
            <img className="line-35-23" src={line35} />
            <img className="line-37-23" src={line37} />
            <img className="line-38-23" src={line38} />
            <img className="line-36-23" src={line36} />
            <div className="ellipse-18-38"></div>
            <div className="ellipse-19-18"></div>
            <Link to="/filter-main-100m">
              <div className="reset-38 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory5100m;
