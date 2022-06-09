import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import "./FilterListCategory4.css";

function FilterListCategory4(props) {
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
    image5,
    image6,
    meat1,
    vector3,
    reset,
    surname,
    meat2,
    dessert,
    salad,
    lunch,
    line39,
    line40,
    line41,
    line42,
    line43,
    rectangle92,
    rectangle29,
    component164Props,
  } = props;

  return (
    <div className="filter-list-category-4 screen">
      <img className="component-29-25" src={component29} />
      <div className="group-88-1">
        <div className="line-container-82">
          <img className="line-27-32" src={line27} />
          <img className="line-29-35" src={line29} />
        </div>
        <div className="group-51-39">
          <Link to="/filter-list-distance">
            <div className="group-48-51">
              <div className="overlap-group-922">
                <div className="distance-106 inter-normal-white-14px">{distance}</div>
                <img className="vector-464" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category">
            <div className="group-47-82">
              <div className="overlap-group1-542 border-1px-orange">
                <div className="category-117 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-465" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats">
            <div className="group-49-75">
              <div className="overlap-group2-418 border-1px-c4c4c4">
                <div className="seats-115 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating">
            <div className="group-50-73">
              <div className="overlap-group3-335 border-1px-c4c4c4">
                <div className="rating-90 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-72">
          <img className="line-28-38" src={line28} />
          <div className="overlap-group4-215">
            <Component164 {...component164Props} />
            <img className="image-5-17" src={image5} />
            <img className="image-6-30" src={image6} />
            <div className="rectangle-69-12"></div>
            <div className="meat-46 inter-normal-black-7px">{meat1}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-466" src={vector3} />
            </Link>
          </div>
          <div className="overlap-group5-140">
            <div className="rectangle-91-5 border-0-5px-c4c4c4"></div>
            <Link to="/list">
              <div className="reset-25 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <div className="surname-5 inter-normal-black-13px">{surname}</div>
            <Link to="/filter-list-category-select">
              <div className="meat-47 inter-normal-flamingo-13px">{meat2}</div>
            </Link>
            <div className="dessert-5 inter-normal-black-13px">{dessert}</div>
            <div className="salad-5 inter-normal-black-13px">{salad}</div>
            <div className="lunch-5 inter-normal-black-13px">{lunch}</div>
            <img className="line-39-6" src={line39} />
            <img className="line-40-6" src={line40} />
            <img className="line-41-6" src={line41} />
            <img className="line-42-6" src={line42} />
            <img className="line-43-6" src={line43} />
            <div className="ellipse-20-37"></div>
            <div className="ellipse-21-6"></div>
          </div>
          <img className="rectangle-92-11" src={rectangle92} />
        </div>
      </div>
      <img className="rectangle-29-17" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory4;
