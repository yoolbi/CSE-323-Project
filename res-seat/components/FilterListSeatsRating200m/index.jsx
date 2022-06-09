import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import Component1632 from "../Component1632";
import Component1642 from "../Component1642";
import "./FilterListSeatsRating200m.css";

function FilterListSeatsRating200m(props) {
  const {
    component29,
    line27,
    line29,
    category1,
    category2,
    vector2,
    category3,
    vector3,
    seats1,
    seats2,
    seats3,
    rating,
    image5,
    image6,
    meat,
    vector4,
    line281,
    asian,
    x11,
    vector5,
    line282,
    vector6,
    spanText1,
    spanText2,
    fastfood,
    x12,
    component164Props,
    component1632Props,
    component1642Props,
  } = props;

  return (
    <div className="filter-list-seats-rating-200m screen">
      <img className="component-29-37" src={component29} />
      <div className="group-90-16">
        <div className="line-container-85">
          <img className="line-2-151" src={line27} />
          <img className="line-29-38" src={line29} />
        </div>
        <div className="group-51-45">
          <Group4822 />
          <Link to="/filter-list-all-200m">
            <div className="group-47-94">
              <div className="overlap-group2-433 border-1px-c4c4c4">
                <div className="category-134 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-514" src="/img/vector-134@2x.png" />
                <div className="overlap-group-962">
                  <div className="category-133 inter-normal-white-13px">{category2}</div>
                  <img className="vector-515" src={vector2} />
                </div>
                <div className="overlap-group1-559 border-1px-c4c4c4">
                  <div className="category-133 inter-normal-spicy-pink-13px">{category3}</div>
                  <img className="vector-516" src={vector3} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-200m">
            <div className="group-49-87">
              <div className="overlap-group3-353 border-1px-c4c4c4">
                <div className="seats-144 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group1-560 border-1px-c4c4c4">
                  <div className="seats-144 inter-normal-spicy-pink-14px">{seats2}</div>
                  <div className="overlap-group-963">
                    <div className="seats-145 inter-normal-white-14px">{seats3}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-200m">
            <div className="group-50-86">
              <div className="overlap-group4-221">
                <div className="rating-106 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group-961">
          <div className="overlap-group1-561">
            <Component164 {...component164Props} />
            <img className="image-5-19" src={image5} />
            <img className="image-6-32" src={image6} />
            <div className="rectangle-69-14"></div>
            <div className="meat-50 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-517" src={vector4} />
            </Link>
          </div>
          <img className="line-2-151" src={line281} />
        </div>
        <div className="overlap-group-961">
          <Component1632
            aSoupShop={component1632Props.aSoupShop}
            spanText1={component1632Props.spanText1}
            spanText2={component1632Props.spanText2}
            spanText3={component1632Props.spanText3}
            spanText4={component1632Props.spanText4}
            star1={component1632Props.star1}
          />
          <div className="rectangle-67-6"></div>
          <div className="asian-35 inter-normal-black-7px">{asian}</div>
          <div className="rectangle-2-3"></div>
          <img className="x1-68" src={x11} />
          <Link to="/select-restaurant-uncle-s">
            <img className="vector-518" src={vector5} />
          </Link>
        </div>
        <div className="overlap-group2-434">
          <img className="line-28-41" src={line282} />
          <Component1642 star1={component1642Props.star1} />
          <img className="vector-519" src={vector6} />
          <div className="address-89 arial">
            <span className="span0-72 arial">{spanText1}</span>
            <span className="span1-212 inter-normal-black-20px">{spanText2}</span>
          </div>
          <div className="rectangle-2-3"></div>
          <div className="rectangle-66-21"></div>
          <div className="fastfood-43 inter-normal-black-7px">{fastfood}</div>
          <img className="x1-69" src={x12} />
        </div>
      </div>
    </div>
  );
}

export default FilterListSeatsRating200m;
