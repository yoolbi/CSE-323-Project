import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import "./FilterListCategory5200m.css";

function FilterListCategory5200m(props) {
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
    fastfood1,
    x11,
    line282,
    language1,
    language2,
    asian1,
    fastfood2,
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
    asian2,
    x12,
    vector3,
    image5,
    image6,
    meat,
    vector4,
    component1642Props,
    component1632Props,
    component164Props,
  } = props;

  return (
    <div className="filter-list-category-5-200m screen">
      <img className="component-29-14" src={component29} />
      <div className="group-85-1">
        <div className="line-container-76">
          <img className="line-27-24" src={line27} />
          <img className="line-29-27" src={line29} />
        </div>
        <div className="group-51-28">
          <Group4822 />
          <Link to="/filter-list-200m">
            <div className="group-47-71">
              <div className="overlap-group1-526 border-1px-orange">
                <div className="category-98 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-386" src="/img/vector-30@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-200m">
            <div className="group-49-67">
              <div className="overlap-group2-394 border-1px-c4c4c4">
                <div className="seats-100 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-200m">
            <div className="group-50-65">
              <div className="overlap-group3-293 border-1px-c4c4c4">
                <div className="rating-75 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group-container-55">
          <div className="overlap-group5-138">
            <div className="overlap-group2-395">
              <img className="line-28-27" src={line281} />
              <Component1642 star1={component1642Props.star1} />
              <img className="vector-387" src={vector2} />
              <div className="address-86 arial">
                <span className="span0-67 arial">{spanText1}</span>
                <span className="span1-209 inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="rectangle-2-2"></div>
              <div className="rectangle-66-18"></div>
              <div className="fastfood-37 inter-normal-black-7px">{fastfood1}</div>
              <img className="x1-58" src={x11} />
            </div>
            <img className="line-28-28" src={line282} />
            <div className="overlap-group4-203">
              <div className="rectangle-89-17 border-0-5px-c4c4c4"></div>
              <div className="language-60 inter-normal-black-13px">{language1}</div>
              <div className="language-61 inter-normal-black-13px">{language2}</div>
              <div className="asian-29 inter-normal-black-13px">{asian1}</div>
              <div className="fastfood-38 inter-normal-black-13px">{fastfood2}</div>
              <div className="language-62 inter-normal-black-13px">{language3}</div>
              <div className="snack-1 inter-normal-black-13px">{snack}</div>
              <div className="pizza-17 inter-normal-black-13px">{pizza}</div>
              <div className="place-20 inter-normal-black-13px">{place}</div>
              <div className="western-28 inter-normal-black-13px">{western}</div>
              <img className="line-34-17" src={line34} />
              <img className="line-35-17" src={line35} />
              <img className="line-37-17" src={line37} />
              <img className="line-38-17" src={line38} />
              <img className="line-36-17" src={line36} />
              <div className="ellipse-18-18"></div>
              <Link to="/filter-list-category-7-200m">
                <div className="ellipse-19-5"></div>
              </Link>
              <Link to="/filter-list-200m">
                <div className="reset-19 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
            </div>
          </div>
          <div className="overlap-group3-294">
            <Component1632
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
            />
            <div className="rectangle-67-3"></div>
            <div className="asian-30 inter-normal-black-7px">{asian2}</div>
            <div className="rectangle-2-2"></div>
            <img className="x1-59" src={x12} />
            <Link to="/select-restaurant-uncle-s">
              <img className="vector-388" src={vector3} />
            </Link>
          </div>
        </div>
        <div className="overlap-group1-527">
          <Component164 {...component164Props} />
          <img className="image-5-12" src={image5} />
          <img className="image-6-27" src={image6} />
          <div className="rectangle-69-11"></div>
          <div className="meat-42 inter-normal-black-7px">{meat}</div>
          <Link to="/restaurant-details-menu1">
            <img className="vector-389" src={vector4} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory5200m;
