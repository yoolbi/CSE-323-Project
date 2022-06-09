import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import "./FilterListCategory6500m.css";

function FilterListCategory6500m(props) {
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
    <div className="filter-list-category-6-500m screen">
      <img className="component-29-38" src={component29} />
      <div className="group-88-3">
        <div className="line-container-86">
          <img className="line-27-35" src={line27} />
          <img className="line-29-39" src={line29} />
        </div>
        <div className="group-51-46">
          <Link to="/filter-list-distance">
            <div className="group-48-53">
              <div className="overlap-group-964">
                <div className="distance-108 inter-normal-white-14px">{distance}</div>
                <img className="vector-520" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-5-500m">
            <div className="group-47-95">
              <div className="overlap-group1-562 border-1px-orange">
                <div className="category-135 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-521" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-500m">
            <div className="group-49-88">
              <div className="overlap-group2-435 border-1px-c4c4c4">
                <div className="seats-146 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-500m">
            <div className="group-50-87">
              <div className="overlap-group3-354 border-1px-c4c4c4">
                <div className="rating-107 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-77">
          <img className="line-28-42" src={line28} />
          <div className="overlap-group4-222">
            <Component164 {...component164Props} />
            <img className="image-5-20" src={image5} />
            <img className="image-6-33" src={image6} />
            <div className="rectangle-69-15"></div>
            <div className="meat-51 inter-normal-black-7px">{meat1}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-522" src={vector3} />
            </Link>
          </div>
          <div className="overlap-group5-148">
            <div className="rectangle-91-7 border-0-5px-c4c4c4"></div>
            <Link to="/list">
              <div className="reset-27 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <div className="surname-7 inter-normal-black-13px">{surname}</div>
            <Link to="/filter-list-category-8-500m">
              <div className="meat-52 inter-normal-flamingo-13px">{meat2}</div>
            </Link>
            <div className="dessert-7 inter-normal-black-13px">{dessert}</div>
            <div className="salad-7 inter-normal-black-13px">{salad}</div>
            <div className="lunch-7 inter-normal-black-13px">{lunch}</div>
            <img className="line-39-8" src={line39} />
            <img className="line-40-8" src={line40} />
            <img className="line-41-8" src={line41} />
            <img className="line-42-8" src={line42} />
            <img className="line-43-8" src={line43} />
            <div className="ellipse-20-39"></div>
            <div className="ellipse-21-8"></div>
          </div>
          <img className="rectangle-92-13" src={rectangle92} />
        </div>
      </div>
      <img className="rectangle-29-19" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory6500m;
