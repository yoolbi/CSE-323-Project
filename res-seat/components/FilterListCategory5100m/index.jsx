import React from "react";
import { Link } from "react-router-dom";
import "./FilterListCategory5100m.css";

function FilterListCategory5100m(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    line28,
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
  } = props;

  return (
    <div className="filter-list-category-5-100m screen">
      <img className="component-29-20" src={component29} />
      <div className="group-85-2">
        <div className="line-container-79">
          <img className="line-27-29" src={line27} />
          <img className="line-29-32" src={line29} />
        </div>
        <div className="group-51-34">
          <Link to="/filter-list-100m-distance">
            <div className="group-48-48">
              <div className="overlap-group-882">
                <div className="distance-101 inter-normal-white-14px">{distance}</div>
                <img className="vector-405" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-100m">
            <div className="group-47-77">
              <div className="overlap-group1-533 border-1px-orange">
                <div className="category-108 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-406" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-100m">
            <div className="group-49-72">
              <div className="overlap-group2-401 border-1px-c4c4c4">
                <div className="seats-108 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-100m">
            <div className="group-50-70">
              <div className="overlap-group3-300 border-1px-c4c4c4">
                <div className="rating-83 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-70">
          <img className="line-28-33" src={line28} />
          <div className="overlap-group4-205">
            <div className="rectangle-89-18 border-0-5px-c4c4c4"></div>
            <div className="language-63 inter-normal-black-13px">{language1}</div>
            <div className="language-64 inter-normal-black-13px">{language2}</div>
            <div className="asian-31 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-39 inter-normal-black-13px">{fastfood}</div>
            <div className="language-65 inter-normal-black-13px">{language3}</div>
            <div className="snack-2 inter-normal-black-13px">{snack}</div>
            <div className="pizza-18 inter-normal-black-13px">{pizza}</div>
            <div className="place-21 inter-normal-black-13px">{place}</div>
            <div className="western-29 inter-normal-black-13px">{western}</div>
            <img className="line-34-18" src={line34} />
            <img className="line-35-18" src={line35} />
            <img className="line-37-18" src={line37} />
            <img className="line-38-18" src={line38} />
            <img className="line-36-18" src={line36} />
            <div className="ellipse-18-19"></div>
            <Link to="/filter-list-category-7-100m">
              <div className="ellipse-19-6"></div>
            </Link>
            <Link to="/filter-list-100m">
              <div className="reset-21 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory5100m;
