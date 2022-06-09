import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component1642 from "../Component1642";
import "./FilterListSeatsRating500m.css";

function FilterListSeatsRating500m(props) {
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
    image51,
    image6,
    meat,
    vector4,
    line281,
    language,
    vector5,
    x11,
    asian,
    x12,
    vector6,
    image52,
    x13,
    vector7,
    western,
    line282,
    vector8,
    spanText1,
    spanText2,
    fastfood,
    x14,
    component164Props,
    component16321Props,
    component16322Props,
    component1642Props,
  } = props;

  return (
    <div className="filter-list-seats-rating-500m screen">
      <img className="component-29-44" src={component29} />
      <div className="group-90-17">
        <div className="line-container-88">
          <img className="line-2-152" src={line27} />
          <img className="line-29-41" src={line29} />
        </div>
        <div className="group-51-48">
          <Group4822 />
          <Link to="/filter-list-all-500m">
            <div className="group-47-101">
              <div className="overlap-group2-441 border-1px-c4c4c4">
                <div className="category-142 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-545" src="/img/vector-134@2x.png" />
                <div className="overlap-group-981">
                  <div className="category-141 inter-normal-white-13px">{category2}</div>
                  <img className="vector-546" src={vector2} />
                </div>
                <div className="overlap-group1-570 border-1px-c4c4c4">
                  <div className="category-141 inter-normal-spicy-pink-13px">{category3}</div>
                  <img className="vector-547" src={vector3} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating-500m">
            <div className="group-49-94">
              <div className="overlap-group3-366 border-1px-c4c4c4">
                <div className="seats-157 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group1-571 border-1px-c4c4c4">
                  <div className="seats-157 inter-normal-spicy-pink-14px">{seats2}</div>
                  <div className="overlap-group-982">
                    <div className="seats-158 inter-normal-white-14px">{seats3}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats-500m">
            <div className="group-50-95">
              <div className="overlap-group4-230">
                <div className="rating-115 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group7-47">
          <div className="overlap-group1-572">
            <Component164 {...component164Props} />
            <img className="image-5-21" src={image51} />
            <img className="image-6-34" src={image6} />
            <div className="rectangle-69-16"></div>
            <div className="meat-54 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-548" src={vector4} />
            </Link>
          </div>
          <img className="line-2-152" src={line281} />
        </div>
        <div className="overlap-group-980">
          <div className="rectangle-29-21"></div>
          <Component1632
            aSoupShop={component16321Props.aSoupShop}
            spanText1={component16321Props.spanText1}
            spanText2={component16321Props.spanText2}
            spanText3={component16321Props.spanText3}
            spanText4={component16321Props.spanText4}
            star1={component16321Props.star1}
            className={component16321Props.className}
          />
          <div className="rectangle-68-7"></div>
          <div className="language-71 inter-normal-black-7px">{language}</div>
          <div className="rectangle-7"></div>
          <img className="vector-549" src={vector5} />
          <img className="x1-70" src={x11} />
        </div>
        <div className="overlap-group-980">
          <Component1632
            aSoupShop={component16322Props.aSoupShop}
            spanText1={component16322Props.spanText1}
            spanText2={component16322Props.spanText2}
            spanText3={component16322Props.spanText3}
            spanText4={component16322Props.spanText4}
            star1={component16322Props.star1}
          />
          <div className="rectangle-67-7"></div>
          <div className="asian-36 inter-normal-black-7px">{asian}</div>
          <div className="rectangle-7"></div>
          <img className="x1-71" src={x12} />
          <Link to="/select-restaurant-uncle-s">
            <img className="vector-550" src={vector6} />
          </Link>
        </div>
        <div className="overlap-group-980">
          <Component163 />
          <img className="image-5-22" src={image52} />
          <img className="x1-72" src={x13} />
          <img className="vector-551" src={vector7} />
          <div className="overlap-group1-573">
            <div className="western-33 inter-normal-black-7px">{western}</div>
          </div>
        </div>
        <div className="overlap-group3-367">
          <img className="line-28-44" src={line282} />
          <Component1642 star1={component1642Props.star1} />
          <img className="vector-552" src={vector8} />
          <div className="address-90 arial">
            <span className="span0-73 arial">{spanText1}</span>
            <span className="span1-213 inter-normal-black-20px">{spanText2}</span>
          </div>
          <div className="rectangle-7"></div>
          <div className="rectangle-66-22"></div>
          <div className="fastfood-44 inter-normal-black-7px">{fastfood}</div>
          <img className="x1-73" src={x14} />
        </div>
      </div>
    </div>
  );
}

export default FilterListSeatsRating500m;
