import React from "react";
import { Link } from "react-router-dom";
import "./FilterListCategory6100m.css";

function FilterListCategory6100m(props) {
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
    rectangle92,
    rectangle29,
  } = props;

  return (
    <div className="filter-list-category-6-100m screen">
      <img className="component-29-41" src={component29} />
      <div className="group-88-4">
        <div className="line-container-87">
          <img className="line-27-36" src={line27} />
          <img className="line-29-40" src={line29} />
        </div>
        <div className="group-51-47">
          <Link to="/filter-list-100m-distance">
            <div className="group-48-55">
              <div className="overlap-group-972">
                <div className="distance-110 inter-normal-white-14px">{distance}</div>
                <img className="vector-535" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-5-100m">
            <div className="group-47-98">
              <div className="overlap-group1-566 border-1px-orange">
                <div className="category-138 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-536" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-100m">
            <div className="group-49-91">
              <div className="overlap-group2-438 border-1px-c4c4c4">
                <div className="seats-151 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-rating-100m">
            <div className="group-50-91">
              <div className="overlap-group3-361 border-1px-c4c4c4">
                <div className="rating-111 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group5-150">
          <img className="line-28-43" src={line28} />
          <div className="overlap-group4-227">
            <div className="rectangle-91-8 border-0-5px-c4c4c4"></div>
            <Link to="/filter-list-100m">
              <div className="reset-28 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <div className="surname-8 inter-normal-black-13px">{surname}</div>
            <Link to="/filter-list-category-8-100m">
              <div className="meat-53 inter-normal-flamingo-13px">{meat}</div>
            </Link>
            <div className="dessert-8 inter-normal-black-13px">{dessert}</div>
            <div className="salad-8 inter-normal-black-13px">{salad}</div>
            <div className="lunch-8 inter-normal-black-13px">{lunch}</div>
            <img className="line-39-9" src={line39} />
            <img className="line-40-9" src={line40} />
            <img className="line-41-9" src={line41} />
            <img className="line-42-9" src={line42} />
            <img className="line-43-9" src={line43} />
            <div className="ellipse-20-40"></div>
            <div className="ellipse-21-9"></div>
          </div>
          <img className="rectangle-92-14" src={rectangle92} />
        </div>
      </div>
      <img className="rectangle-29-20" src={rectangle29} />
    </div>
  );
}

export default FilterListCategory6100m;
