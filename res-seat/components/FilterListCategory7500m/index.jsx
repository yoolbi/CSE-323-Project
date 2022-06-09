import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component164 from "../Component164";
import "./FilterListCategory7500m.css";

function FilterListCategory7500m(props) {
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
    vector4,
    asian,
    x12,
    image5,
    x13,
    vector5,
    western,
    image6,
    vector6,
    language,
    vector7,
    x14,
    rectangle29,
    component1642Props,
    component16321Props,
    component164Props,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-7-500m screen">
        <img className="component-29-82" src={component29} />
        <div className="flex-row-544">
          <div className="group-container-239">
            <div className="group-86-3">
              <div className="line-container-101">
                <img className="line-27-48" src={line27} />
                <img className="line-29-57" src={line29} />
              </div>
              <div className="group-51-65">
                <Link to="/filter-list-500m-distance">
                  <div className="group-48-76">
                    <div className="overlap-group-1089">
                      <div className="distance-138 inter-normal-white-14px">{distance}</div>
                      <img className="vector-756" src="/img/vector-133@2x.png" />
                    </div>
                  </div>
                </Link>
                <Link to="/filter-list-500m">
                  <div className="group-47-139">
                    <div className="overlap-group1-629 border-1px-orange">
                      <div className="category-197 inter-normal-flamingo-13px">{category}</div>
                      <img className="vector-757" src={vector2} />
                    </div>
                  </div>
                </Link>
                <Link to="/filter-list-seats-500m">
                  <div className="group-49-122">
                    <div className="overlap-group2-486 border-1px-c4c4c4">
                      <div className="seats-206 inter-normal-spicy-pink-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-list-rating-500m">
                  <div className="group-50-126">
                    <div className="overlap-group3-438 border-1px-c4c4c4">
                      <div className="rating-160 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-69">
                <div className="overlap-group7-59">
                  <div className="overlap-group3-439">
                    <img className="line-28-64" src={line281} />
                    <Component1642 star1={component1642Props.star1} />
                    <img className="vector-758" src={vector3} />
                    <div className="address-99 arial">
                      <span className="span0-82 arial">{spanText1}</span>
                      <span className="span1-222 inter-normal-black-20px">{spanText2}</span>
                    </div>
                    <div className="rectangle-14"></div>
                    <div className="rectangle-66-31"></div>
                    <div className="fastfood-57 inter-normal-black-7px">{fastfood}</div>
                    <img className="x1-100" src={x11} />
                  </div>
                  <img className="line-28-65" src={line282} />
                  <div className="overlap-group5-176">
                    <div className="rectangle-91-15 border-0-5px-c4c4c4"></div>
                    <Link to="/filter-list-500m">
                      <div className="reset-39 inter-normal-spicy-pink-10px">{reset}</div>
                    </Link>
                    <div className="surname-15 inter-normal-black-13px">{surname}</div>
                    <Link to="/filter-list-category-8-500m">
                      <div className="meat-67 inter-normal-black-13px">{meat}</div>
                    </Link>
                    <div className="dessert-15 inter-normal-black-13px">{dessert}</div>
                    <div className="salad-15 inter-normal-black-13px">{salad}</div>
                    <div className="lunch-15 inter-normal-black-13px">{lunch}</div>
                    <img className="line-39-16" src={line39} />
                    <img className="line-40-16" src={line40} />
                    <img className="line-41-16" src={line41} />
                    <img className="line-42-16" src={line42} />
                    <img className="line-43-16" src={line43} />
                    <Link to="/filter-list-category-5-500m">
                      <div className="ellipse-20-47"></div>
                    </Link>
                    <div className="ellipse-21-16"></div>
                  </div>
                </div>
                <div className="overlap-group4-256">
                  <Component1632
                    aSoupShop={component16321Props.aSoupShop}
                    spanText1={component16321Props.spanText1}
                    spanText2={component16321Props.spanText2}
                    spanText3={component16321Props.spanText3}
                    spanText4={component16321Props.spanText4}
                    star1={component16321Props.star1}
                  />
                  <Link to="/select-restaurant-uncle-s">
                    <img className="vector-759" src={vector4} />
                  </Link>
                  <div className="rectangle-67-16"></div>
                  <div className="asian-49 inter-normal-black-7px">{asian}</div>
                  <div className="rectangle-14"></div>
                  <img className="x1-101" src={x12} />
                </div>
              </div>
              <div className="overlap-group2-487">
                <Component163 />
                <img className="image-5-35" src={image5} />
                <img className="x1-102" src={x13} />
                <img className="vector-760" src={vector5} />
                <div className="overlap-group1-630">
                  <div className="western-43 inter-normal-black-7px">{western}</div>
                </div>
              </div>
            </div>
            <div className="overlap-group9-50">
              <Component164 {...component164Props} />
              <img className="image-6-46" src={image6} />
              <Link to="/restaurant-details-menu1">
                <img className="vector-761" src={vector6} />
              </Link>
            </div>
            <div className="overlap-group10-38">
              <div className="rectangle-29-37"></div>
              <Component1632
                aSoupShop={component16322Props.aSoupShop}
                spanText1={component16322Props.spanText1}
                spanText2={component16322Props.spanText2}
                spanText3={component16322Props.spanText3}
                spanText4={component16322Props.spanText4}
                star1={component16322Props.star1}
                className={component16322Props.className}
              />
              <div className="rectangle-68-13"></div>
              <div className="language-89 inter-normal-black-7px">{language}</div>
              <div className="rectangle-14"></div>
              <img className="vector-762" src={vector7} />
              <img className="x1-103" src={x14} />
            </div>
          </div>
          <img className="rectangle-29-38" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory7500m;
