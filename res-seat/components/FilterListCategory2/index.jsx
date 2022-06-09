import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component164 from "../Component164";
import Group79 from "../Group79";
import "./FilterListCategory2.css";

function FilterListCategory2(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    line281,
    vector3,
    spanText1,
    spanText2,
    fastfood,
    x11,
    line282,
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
    asian,
    x12,
    vector4,
    image51,
    x13,
    vector5,
    western,
    image52,
    vector6,
    place,
    bhc2,
    image6,
    vector7,
    language,
    vector8,
    x14,
    rectangle29,
    component1642Props,
    component16321Props,
    component1641Props,
    group79Props,
    component1642Props2,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-2 screen">
        <img className="component-29" src={component29} />
        <div className="flex-row-140">
          <div className="group-container-76">
            <div className="group-86">
              <div className="line-container-33">
                <img className="line-27-15" src={line27} />
                <img className="line-29-16" src={line29} />
              </div>
              <div className="group-51-17">
                <Link to="/filter-list-distance">
                  <div className="group-48-19">
                    <div className="overlap-group-418">
                      <div className="distance-72 inter-normal-white-14px">{distance}</div>
                      <img className="vector-225" src="/img/vector-133@2x.png" />
                    </div>
                  </div>
                </Link>
                <Link to="/list">
                  <div className="group-47-57">
                    <div className="overlap-group1-253 border-1px-orange">
                      <div className="category-76 inter-normal-flamingo-13px">{category}</div>
                      <img className="vector-226" src={vector2} />
                    </div>
                  </div>
                </Link>
                <Link to="/filter-list-seats">
                  <div className="group-49-55">
                    <div className="overlap-group2-165 border-1px-c4c4c4">
                      <div className="seats-82 inter-normal-spicy-pink-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-list-rating">
                  <div className="group-50-53">
                    <div className="overlap-group3-126 border-1px-c4c4c4">
                      <div className="rating-57 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-43">
                <div className="overlap-group7-26">
                  <div className="overlap-group3-127">
                    <img className="line-28-15" src={line281} />
                    <Component1642 star1={component1642Props.star1} />
                    <img className="vector-227" src={vector3} />
                    <div className="address-51 arial">
                      <span className="span0-30 arial">{spanText1}</span>
                      <span className="span1-50 inter-normal-black-20px">{spanText2}</span>
                    </div>
                    <div className="rectangle"></div>
                    <div className="rectangle-66-15"></div>
                    <div className="fastfood-33 inter-normal-black-7px">{fastfood}</div>
                    <img className="x1-36" src={x11} />
                  </div>
                  <img className="line-28-16" src={line282} />
                  <div className="overlap-group6-39">
                    <div className="rectangle-91 border-0-5px-c4c4c4"></div>
                    <Link to="/list">
                      <div className="reset-16 inter-normal-spicy-pink-10px">{reset}</div>
                    </Link>
                    <div className="surname inter-normal-black-13px">{surname}</div>
                    <Link to="/filter-list-category-select">
                      <div className="meat-33 inter-normal-black-13px">{meat}</div>
                    </Link>
                    <div className="dessert inter-normal-black-13px">{dessert}</div>
                    <div className="salad inter-normal-black-13px">{salad}</div>
                    <div className="lunch inter-normal-black-13px">{lunch}</div>
                    <img className="line-39-1" src={line39} />
                    <img className="line-40-1" src={line40} />
                    <img className="line-41-1" src={line41} />
                    <img className="line-42-1" src={line42} />
                    <img className="line-43-1" src={line43} />
                    <Link to="/filter-list-category">
                      <div className="ellipse-20-24"></div>
                    </Link>
                    <div className="ellipse-21"></div>
                  </div>
                </div>
                <div className="overlap-group4-93">
                  <Component1632
                    aSoupShop={component16321Props.aSoupShop}
                    spanText1={component16321Props.spanText1}
                    spanText2={component16321Props.spanText2}
                    spanText3={component16321Props.spanText3}
                    spanText4={component16321Props.spanText4}
                    star1={component16321Props.star1}
                  />
                  <div className="rectangle-67"></div>
                  <div className="asian-25 inter-normal-black-7px">{asian}</div>
                  <div className="rectangle"></div>
                  <img className="x1-37" src={x12} />
                  <Link to="/select-restaurant-uncle-s">
                    <img className="vector-228" src={vector4} />
                  </Link>
                </div>
              </div>
              <div className="overlap-group2-166">
                <Component163 />
                <img className="image-5-1" src={image51} />
                <img className="x1-38" src={x13} />
                <img className="vector-224" src={vector5} />
                <div className="overlap-group1-254">
                  <div className="western-26 inter-normal-black-7px">{western}</div>
                </div>
              </div>
              <div className="overlap-group5-72">
                <div className="overlap-group2-167">
                  <Component164 {...component1641Props} />
                  <img className="image-5-2" src={image52} />
                  <img className="vector-224" src={vector6} />
                  <div className="overlap-group1-255">
                    <div className="place-16 inter-normal-black-7px">{place}</div>
                  </div>
                </div>
                <img className="bhc-2-9" src={bhc2} />
              </div>
              <Group79 component16Props={group79Props.component16Props} />
            </div>
            <div className="overlap-group10-11">
              <Component164 {...component1642Props2} />
              <img className="image-6-17" src={image6} />
              <Link to="/restaurant-details-menu1">
                <img className="vector-229" src={vector7} />
              </Link>
            </div>
            <div className="overlap-group11-11">
              <div className="rectangle-29-2"></div>
              <Component1632
                aSoupShop={component16322Props.aSoupShop}
                spanText1={component16322Props.spanText1}
                spanText2={component16322Props.spanText2}
                spanText3={component16322Props.spanText3}
                spanText4={component16322Props.spanText4}
                star1={component16322Props.star1}
                className={component16322Props.className}
              />
              <div className="rectangle-68-4"></div>
              <div className="language-56 inter-normal-black-7px">{language}</div>
              <div className="rectangle"></div>
              <img className="vector-230" src={vector8} />
              <img className="x1-39" src={x14} />
            </div>
          </div>
          <img className="rectangle-29-3" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory2;
