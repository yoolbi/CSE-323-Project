import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import "./FilterListCategory7200m.css";

function FilterListCategory7200m(props) {
  const {
    component29,
    line27,
    line29,
    category,
    seats,
    rating,
    line281,
    vector2,
    spanText1,
    spanText2,
    fastfood,
    x11,
    line282,
    reset,
    surname,
    meat1,
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
    vector3,
    image5,
    image6,
    meat2,
    vector4,
    rectangle29,
    component1642Props,
    component1632Props,
    component164Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-7-200m screen">
        <img className="component-29-76" src={component29} />
        <div className="flex-row-543">
          <div className="group-86-2">
            <div className="line-container-100">
              <img className="line-27-47" src={line27} />
              <img className="line-29-56" src={line29} />
            </div>
            <div className="group-51-64">
              <Group4822 />
              <Link to="/filter-list-200m">
                <div className="group-47-133">
                  <div className="overlap-group1-621 border-1px-orange">
                    <div className="category-185 inter-normal-flamingo-13px">{category}</div>
                    <img className="vector-722" src="/img/vector-30@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-200m">
                <div className="group-49-118">
                  <div className="overlap-group2-479 border-1px-c4c4c4">
                    <div className="seats-198 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating-200m">
                <div className="group-50-122">
                  <div className="overlap-group3-431 border-1px-c4c4c4">
                    <div className="rating-152 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group-container-68">
              <div className="overlap-group5-173">
                <div className="overlap-group2-480">
                  <img className="line-28-62" src={line281} />
                  <Component1642 star1={component1642Props.star1} />
                  <img className="vector-723" src={vector2} />
                  <div className="address-98 arial">
                    <span className="span0-81 arial">{spanText1}</span>
                    <span className="span1-221 inter-normal-black-20px">{spanText2}</span>
                  </div>
                  <div className="rectangle-2-6"></div>
                  <div className="rectangle-66-30"></div>
                  <div className="fastfood-53 inter-normal-black-7px">{fastfood}</div>
                  <img className="x1-98" src={x11} />
                </div>
                <img className="line-28-63" src={line282} />
                <div className="overlap-group4-250">
                  <div className="rectangle-91-14 border-0-5px-c4c4c4"></div>
                  <Link to="/filter-list-200m">
                    <div className="reset-35 inter-normal-spicy-pink-10px">{reset}</div>
                  </Link>
                  <div className="surname-14 inter-normal-black-13px">{surname}</div>
                  <Link to="/filter-list-category-8-200m">
                    <div className="meat-65 inter-normal-black-13px">{meat1}</div>
                  </Link>
                  <div className="dessert-14 inter-normal-black-13px">{dessert}</div>
                  <div className="salad-14 inter-normal-black-13px">{salad}</div>
                  <div className="lunch-14 inter-normal-black-13px">{lunch}</div>
                  <img className="line-39-15" src={line39} />
                  <img className="line-40-15" src={line40} />
                  <img className="line-41-15" src={line41} />
                  <img className="line-42-15" src={line42} />
                  <img className="line-43-15" src={line43} />
                  <Link to="/filter-list-category-5-200m">
                    <div className="ellipse-20-46"></div>
                  </Link>
                  <div className="ellipse-21-15"></div>
                </div>
              </div>
              <div className="overlap-group3-432">
                <Component1632
                  aSoupShop={component1632Props.aSoupShop}
                  spanText1={component1632Props.spanText1}
                  spanText2={component1632Props.spanText2}
                  spanText3={component1632Props.spanText3}
                  spanText4={component1632Props.spanText4}
                  star1={component1632Props.star1}
                />
                <div className="rectangle-67-15"></div>
                <div className="asian-45 inter-normal-black-7px">{asian}</div>
                <div className="rectangle-2-6"></div>
                <img className="x1-99" src={x12} />
                <Link to="/select-restaurant-uncle-s">
                  <img className="vector-724" src={vector3} />
                </Link>
              </div>
            </div>
            <div className="overlap-group1-622">
              <Component164 {...component164Props} />
              <img className="image-5-34" src={image5} />
              <img className="image-6-45" src={image6} />
              <div className="rectangle-69-22"></div>
              <div className="meat-66 inter-normal-black-7px">{meat2}</div>
              <Link to="/restaurant-details-menu1">
                <img className="vector-725" src={vector4} />
              </Link>
            </div>
          </div>
          <img className="rectangle-29-34" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory7200m;
