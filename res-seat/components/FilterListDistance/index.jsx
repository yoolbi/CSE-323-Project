import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component164 from "../Component164";
import Group792 from "../Group792";
import "./FilterListDistance.css";

function FilterListDistance(props) {
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
    x100M,
    line31,
    x200M,
    line32,
    x500M,
    x1Km,
    line33,
    asian,
    x12,
    vector4,
    image51,
    x13,
    vector5,
    western,
    image52,
    vector6,
    place,
    bhc2,
    image6,
    vector7,
    language,
    vector8,
    x14,
    component1642Props,
    component16321Props,
    component1641Props,
    group792Props,
    component1642Props2,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-distance screen">
        <img className="component-29-23" src={component29} />
        <div className="group-container-146">
          <div className="group-84">
            <div className="line-container-81">
              <img className="line-27-31" src={line27} />
              <img className="line-29-34" src={line29} />
            </div>
            <div className="group-51-37">
              <Link to="/list">
                <div className="group-48-50">
                  <div className="overlap-group-896 border-1px-orange">
                    <div className="distance-104 inter-normal-flamingo-14px">{distance}</div>
                    <img className="vector-430" src="/img/vector-30@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category">
                <div className="group-47-80">
                  <div className="overlap-group-896 border-1px-c4c4c4">
                    <div className="category-113 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-431" src={vector2} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats">
                <div className="group-49-74">
                  <div className="overlap-group2-405 border-1px-c4c4c4">
                    <div className="seats-112 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating">
                <div className="group-50-72">
                  <div className="overlap-group3-311 border-1px-c4c4c4">
                    <div className="rating-87 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group7-45">
              <div className="overlap-group3-312">
                <img className="line-28-36" src={line281} />
                <Component1642 star1={component1642Props.star1} />
                <img className="vector-432" src={vector3} />
                <div className="address-88 arial">
                  <span className="span0-71 arial">{spanText1}</span>
                  <span className="span1-211 inter-normal-black-20px">{spanText2}</span>
                </div>
                <div className="rectangle-5"></div>
                <div className="rectangle-66-20"></div>
                <div className="fastfood-42 inter-normal-black-7px">{fastfood}</div>
                <img className="x1-64" src={x11} />
              </div>
              <img className="line-28-37" src={line282} />
              <div className="overlap-group6-71 border-1px-c4c4c4">
                <Link to="/filter-list-100m">
                  <div className="x100m-3 inter-normal-black-14px">{x100M}</div>
                </Link>
                <img className="line-31-3" src={line31} />
                <Link to="/filter-list-200m">
                  <div className="x200m-3 inter-normal-black-14px">{x200M}</div>
                </Link>
                <img className="line-32-4" src={line32} />
                <Link to="/filter-list-500m">
                  <div className="x500m-3 inter-normal-black-14px">{x500M}</div>
                </Link>
                <div className="overlap-group-898">
                  <div className="x1-km-3 inter-normal-flamingo-14px">{x1Km}</div>
                  <img className="line-33-3" src={line33} />
                  <Link to="/list">
                    <div className="rectangle-85-3"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group-897">
              <Component1632
                aSoupShop={component16321Props.aSoupShop}
                spanText1={component16321Props.spanText1}
                spanText2={component16321Props.spanText2}
                spanText3={component16321Props.spanText3}
                spanText4={component16321Props.spanText4}
                star1={component16321Props.star1}
              />
              <div className="rectangle-67-5"></div>
              <div className="asian-34 inter-normal-black-7px">{asian}</div>
              <div className="rectangle-5"></div>
              <img className="x1-65" src={x12} />
              <Link to="/select-restaurant-uncle-s">
                <img className="vector-433" src={vector4} />
              </Link>
            </div>
            <div className="overlap-group2-406">
              <Component163 />
              <img className="image-5-14" src={image51} />
              <img className="x1-66" src={x13} />
              <img className="vector-429" src={vector5} />
              <div className="overlap-group1-537">
                <div className="western-32 inter-normal-black-7px">{western}</div>
              </div>
            </div>
            <div className="overlap-group-897">
              <div className="overlap-group2-407">
                <Component164 {...component1641Props} />
                <img className="image-5-15" src={image52} />
                <img className="vector-429" src={vector6} />
                <div className="overlap-group1-538">
                  <div className="place-23 inter-normal-black-7px">{place}</div>
                </div>
              </div>
              <img className="bhc-2-10" src={bhc2} />
            </div>
            <Group792 component16Props={group792Props.component16Props} />
          </div>
          <div className="overlap-group9-42">
            <Component164 {...component1642Props2} />
            <img className="image-6-29" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-434" src={vector7} />
            </Link>
          </div>
          <div className="overlap-group10-33">
            <div className="rectangle-29-14"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-68-6"></div>
            <div className="language-70 inter-normal-black-7px">{language}</div>
            <div className="rectangle-5"></div>
            <img className="vector-435" src={vector8} />
            <img className="x1-67" src={x14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListDistance;
