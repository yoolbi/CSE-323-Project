import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component164 from "../Component164";
import "./FilterList500m.css";

function FilterList500m(props) {
  const {
    component29,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    line281,
    vector3,
    spanText1,
    spanText2,
    fastfood,
    x11,
    line282,
    asian,
    x12,
    vector4,
    image5,
    x13,
    vector5,
    western,
    image6,
    vector6,
    language,
    vector7,
    x14,
    component1642Props,
    component16321Props,
    component164Props,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-500m screen">
        <img className="component-29-59" src={component29} />
        <img className="line-27-42" src={line27} />
        <div className="group-container-194">
          <div className="group-83-4">
            <img className="line-29-49" src={line29} />
            <div className="group-51-56">
              <div className="group-48-64">
                <div className="overlap-group-1025">
                  <Link to="/filter-list-500m-distance">
                    <div className="rectangle-80-2"></div>
                  </Link>
                  <div className="distance-120 inter-normal-white-14px">{distance}</div>
                  <img className="vector-617" src="/img/vector-133@2x.png" />
                </div>
              </div>
              <Link to="/filter-list-category-5-500m">
                <div className="group-47-116">
                  <div className="overlap-group1-596 border-1px-c4c4c4">
                    <div className="category-162 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-618" src={vector2} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-500m">
                <div className="group-49-108">
                  <div className="overlap-group2-455 border-1px-c4c4c4">
                    <div className="seats-180 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating-500m">
                <div className="group-50-109">
                  <div className="overlap-group3-393 border-1px-c4c4c4">
                    <div className="rating-131 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group5-160">
              <div className="overlap-group3-394">
                <img className="line-28-52" src={line281} />
                <Component1642 star1={component1642Props.star1} />
                <img className="vector-619" src={vector3} />
                <div className="address-93 arial">
                  <span className="span0-76 arial">{spanText1}</span>
                  <span className="span1-216 inter-normal-black-20px">{spanText2}</span>
                </div>
                <div className="rectangle-8"></div>
                <div className="rectangle-66-25"></div>
                <div className="fastfood-47 inter-normal-black-7px">{fastfood}</div>
                <img className="x1-78" src={x11} />
              </div>
              <img className="line-28-53" src={line282} />
            </div>
            <div className="overlap-group4-236">
              <Component1632
                aSoupShop={component16321Props.aSoupShop}
                spanText1={component16321Props.spanText1}
                spanText2={component16321Props.spanText2}
                spanText3={component16321Props.spanText3}
                spanText4={component16321Props.spanText4}
                star1={component16321Props.star1}
              />
              <div className="rectangle-67-10"></div>
              <div className="asian-39 inter-normal-black-7px">{asian}</div>
              <div className="rectangle-8"></div>
              <img className="x1-79" src={x12} />
              <Link to="/select-restaurant-uncle-s">
                <img className="vector-620" src={vector4} />
              </Link>
            </div>
            <div className="overlap-group2-456">
              <Component163 />
              <img className="image-5-25" src={image5} />
              <img className="x1-80" src={x13} />
              <img className="vector-621" src={vector5} />
              <div className="overlap-group1-597">
                <div className="western-34 inter-normal-black-7px">{western}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group6-83">
            <Component164 {...component164Props} />
            <img className="image-6-39" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-622" src={vector6} />
            </Link>
          </div>
          <div className="overlap-group7-51">
            <div className="rectangle-29-23"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-68-8"></div>
            <div className="language-72 inter-normal-black-7px">{language}</div>
            <div className="rectangle-8"></div>
            <img className="vector-623" src={vector7} />
            <img className="x1-81" src={x14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterList500m;
