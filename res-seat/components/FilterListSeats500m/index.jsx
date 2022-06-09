import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component1632 from "../Component1632";
import Component1642 from "../Component1642";
import Component163 from "../Component163";
import "./FilterListSeats500m.css";

function FilterListSeats500m(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    image51,
    image6,
    meat,
    vector3,
    line281,
    language,
    vector4,
    x11,
    line282,
    vector5,
    spanText1,
    spanText2,
    fastfood,
    x12,
    asian,
    x13,
    vector6,
    image52,
    x14,
    vector7,
    western,
    component164Props,
    component16321Props,
    component1642Props,
    component16322Props,
  } = props;

  return (
    <div className="filter-list-seats-500m screen">
      <img className="component-29-60" src={component29} />
      <div className="group-89-5">
        <div className="line-container-96">
          <img className="line-2-155" src={line27} />
          <img className="line-29-50" src={line29} />
        </div>
        <div className="group-51-57">
          <Link to="/filter-list-500m">
            <div className="group-48-65">
              <div className="overlap-group-1027">
                <div className="distance-121 inter-normal-white-14px">{distance}</div>
                <img className="vector-624" src="/img/vector-133@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-category-seats-500m">
            <div className="group-47-117">
              <div className="overlap-group1-598 border-1px-c4c4c4">
                <div className="category-163 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-625" src={vector2} />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-500m">
            <div className="group-49-109">
              <div className="overlap-group2-457">
                <div className="seats-181 inter-normal-white-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-rating-500m">
            <div className="group-50-110">
              <div className="overlap-group3-395 border-1px-c4c4c4">
                <div className="rating-132 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group7-52">
          <div className="overlap-group1-599">
            <Component164 {...component164Props} />
            <img className="image-5-26" src={image51} />
            <img className="image-6-40" src={image6} />
            <div className="rectangle-69-19"></div>
            <div className="meat-58 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-626" src={vector3} />
            </Link>
          </div>
          <img className="line-2-155" src={line281} />
        </div>
        <div className="overlap-group-1026">
          <div className="rectangle-29-24"></div>
          <Component1632
            aSoupShop={component16321Props.aSoupShop}
            spanText1={component16321Props.spanText1}
            spanText2={component16321Props.spanText2}
            spanText3={component16321Props.spanText3}
            spanText4={component16321Props.spanText4}
            star1={component16321Props.star1}
            className={component16321Props.className}
          />
          <div className="rectangle-68-9"></div>
          <div className="language-73 inter-normal-black-7px">{language}</div>
          <div className="rectangle-9"></div>
          <img className="vector-627" src={vector4} />
          <img className="x1-82" src={x11} />
        </div>
        <div className="overlap-group3-396">
          <img className="line-28-54" src={line282} />
          <Component1642 star1={component1642Props.star1} />
          <img className="vector-628" src={vector5} />
          <div className="address-94 arial">
            <span className="span0-77 arial">{spanText1}</span>
            <span className="span1-217 inter-normal-black-20px">{spanText2}</span>
          </div>
          <div className="rectangle-9"></div>
          <div className="rectangle-66-26"></div>
          <div className="fastfood-48 inter-normal-black-7px">{fastfood}</div>
          <img className="x1-83" src={x12} />
        </div>
        <div className="overlap-group-1026">
          <Component1632
            aSoupShop={component16322Props.aSoupShop}
            spanText1={component16322Props.spanText1}
            spanText2={component16322Props.spanText2}
            spanText3={component16322Props.spanText3}
            spanText4={component16322Props.spanText4}
            star1={component16322Props.star1}
          />
          <div className="rectangle-67-11"></div>
          <div className="asian-40 inter-normal-black-7px">{asian}</div>
          <div className="rectangle-9"></div>
          <img className="x1-84" src={x13} />
          <Link to="/select-restaurant-uncle-s">
            <img className="vector-629" src={vector6} />
          </Link>
        </div>
        <div className="overlap-group-1026">
          <Component163 />
          <img className="image-5-27" src={image52} />
          <img className="x1-85" src={x14} />
          <img className="vector-630" src={vector7} />
          <div className="overlap-group1-600">
            <div className="western-35 inter-normal-black-7px">{western}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListSeats500m;
