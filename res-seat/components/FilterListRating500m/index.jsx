import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component163 from "../Component163";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import Component1642 from "../Component1642";
import "./FilterListRating500m.css";

function FilterListRating500m(props) {
  const {
    component29,
    line27,
    line29,
    category,
    seats,
    rating,
    image51,
    x11,
    vector2,
    western,
    line281,
    asian,
    x12,
    vector3,
    language,
    vector4,
    x13,
    image52,
    image6,
    meat,
    vector5,
    line282,
    vector6,
    spanText1,
    spanText2,
    fastfood,
    x14,
    component16321Props,
    component16322Props,
    component164Props,
    component1642Props,
  } = props;

  return (
    <div className="filter-list-rating-500m screen">
      <img className="component-29-64" src={component29} />
      <div className="group-90-23">
        <div className="line-container-97">
          <img className="line-2-156" src={line27} />
          <img className="line-29-53" src={line29} />
        </div>
        <div className="group-51-60">
          <Group4822 />
          <Link to="/filter-list-category-rating-500m">
            <div className="group-47-121">
              <div className="overlap-group1-605 border-1px-c4c4c4">
                <div className="category-169 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-648" src="/img/vector-134@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-rating-500m">
            <div className="group-49-112">
              <div className="overlap-group2-462 border-1px-c4c4c4">
                <div className="seats-186 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-500m">
            <div className="group-50-113">
              <div className="overlap-group3-400">
                <div className="rating-137 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-84">
          <div className="overlap-group2-463">
            <Component163 />
            <img className="image-5-30" src={image51} />
            <img className="x1-90" src={x11} />
            <img className="vector-649" src={vector2} />
            <div className="overlap-group1-606">
              <div className="western-37 inter-normal-black-7px">{western}</div>
            </div>
          </div>
          <img className="line-2-156" src={line281} />
        </div>
        <div className="overlap-group-1035">
          <Component1632
            aSoupShop={component16321Props.aSoupShop}
            spanText1={component16321Props.spanText1}
            spanText2={component16321Props.spanText2}
            spanText3={component16321Props.spanText3}
            spanText4={component16321Props.spanText4}
            star1={component16321Props.star1}
          />
          <div className="rectangle-67-13"></div>
          <div className="asian-42 inter-normal-black-7px">{asian}</div>
          <div className="rectangle-11"></div>
          <img className="x1-91" src={x12} />
          <Link to="/select-restaurant-uncle-s">
            <img className="vector-650" src={vector3} />
          </Link>
        </div>
        <div className="overlap-group-1035">
          <div className="rectangle-29-28"></div>
          <Component1632
            aSoupShop={component16322Props.aSoupShop}
            spanText1={component16322Props.spanText1}
            spanText2={component16322Props.spanText2}
            spanText3={component16322Props.spanText3}
            spanText4={component16322Props.spanText4}
            star1={component16322Props.star1}
            className={component16322Props.className}
          />
          <div className="rectangle-68-11"></div>
          <div className="language-75 inter-normal-black-7px">{language}</div>
          <div className="rectangle-11"></div>
          <img className="vector-651" src={vector4} />
          <img className="x1-92" src={x13} />
        </div>
        <div className="overlap-group-1035">
          <Component164 {...component164Props} />
          <img className="image-5-31" src={image52} />
          <img className="image-6-43" src={image6} />
          <div className="rectangle-69-21"></div>
          <div className="meat-61 inter-normal-black-7px">{meat}</div>
          <Link to="/restaurant-details-menu1">
            <img className="vector-652" src={vector5} />
          </Link>
        </div>
        <div className="overlap-group3-401">
          <img className="line-28-58" src={line282} />
          <Component1642 star1={component1642Props.star1} />
          <img className="vector-653" src={vector6} />
          <div className="address-96 arial">
            <span className="span0-79 arial">{spanText1}</span>
            <span className="span1-219 inter-normal-black-20px">{spanText2}</span>
          </div>
          <div className="rectangle-11"></div>
          <div className="rectangle-66-28"></div>
          <div className="fastfood-50 inter-normal-black-7px">{fastfood}</div>
          <img className="x1-93" src={x14} />
        </div>
      </div>
    </div>
  );
}

export default FilterListRating500m;
