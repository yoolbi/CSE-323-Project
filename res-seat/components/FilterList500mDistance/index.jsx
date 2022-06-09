import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component164 from "../Component164";
import "./FilterList500mDistance.css";

function FilterList500mDistance(props) {
  const {
    component29,
    line27,
    line29,
    category,
    seats,
    rating,
    line281,
    vector2,
    spanText1,
    spanText2,
    fastfood,
    x11,
    line282,
    asian,
    x12,
    vector3,
    image5,
    x13,
    vector4,
    western,
    distance,
    vector5,
    x100M,
    line31,
    x200M,
    x500M,
    x1Km,
    line32,
    line33,
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
      <div className="filter-list-500m-distance screen">
        <img className="component-29-61" src={component29} />
        <img className="line-27-43" src={line27} />
        <div className="group-container-195">
          <div className="group-83-5">
            <img className="line-29-51" src={line29} />
            <div className="group-51-58">
              <Link to="/filter-list-category-5-500m">
                <div className="group-47-118">
                  <div className="overlap-group-1028 border-1px-c4c4c4">
                    <div className="category-164 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-631" src="/img/vector-134@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-500m">
                <div className="group-49-110">
                  <div className="overlap-group1-601 border-1px-c4c4c4">
                    <div className="seats-182 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating-500m">
                <div className="group-50-111">
                  <div className="overlap-group2-458 border-1px-c4c4c4">
                    <div className="rating-133 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group5-161">
              <div className="overlap-group3-397">
                <img className="line-28-55" src={line281} />
                <Component1642 star1={component1642Props.star1} />
                <img className="vector-632" src={vector2} />
                <div className="address-95 arial">
                  <span className="span0-78 arial">{spanText1}</span>
                  <span className="span1-218 inter-normal-black-20px">{spanText2}</span>
                </div>
                <div className="rectangle-10"></div>
                <div className="rectangle-66-27"></div>
                <div className="fastfood-49 inter-normal-black-7px">{fastfood}</div>
                <img className="x1-86" src={x11} />
              </div>
              <img className="line-28-56" src={line282} />
            </div>
            <div className="overlap-group4-237">
              <Component1632
                aSoupShop={component16321Props.aSoupShop}
                spanText1={component16321Props.spanText1}
                spanText2={component16321Props.spanText2}
                spanText3={component16321Props.spanText3}
                spanText4={component16321Props.spanText4}
                star1={component16321Props.star1}
              />
              <div className="rectangle-67-12"></div>
              <div className="asian-41 inter-normal-black-7px">{asian}</div>
              <div className="rectangle-10"></div>
              <img className="x1-87" src={x12} />
              <Link to="/select-restaurant-uncle-s">
                <img className="vector-633" src={vector3} />
              </Link>
            </div>
            <div className="overlap-group2-459">
              <Component163 />
              <img className="image-5-28" src={image5} />
              <img className="x1-88" src={x13} />
              <img className="vector-634" src={vector4} />
              <div className="overlap-group1-602">
                <div className="western-36 inter-normal-black-7px">{western}</div>
              </div>
            </div>
          </div>
          <Link to="/filter-list-500m">
            <div className="group-48-66">
              <div className="overlap-group-1028 border-1px-orange">
                <div className="distance-122 inter-normal-flamingo-14px">{distance}</div>
                <img className="vector-635" src={vector5} />
              </div>
            </div>
          </Link>
          <div className="overlap-group7-53 border-1px-c4c4c4">
            <div className="x100m-4 inter-normal-black-14px">{x100M}</div>
            <img className="line-31-4" src={line31} />
            <Link to="/filter-list-200m">
              <div className="x200m-4 inter-normal-black-14px">{x200M}</div>
            </Link>
            <div className="overlap-group-1029">
              <Link to="/filter-list-500m">
                <div className="x500m-4 inter-normal-flamingo-14px">{x500M}</div>
              </Link>
              <Link to="/list">
                <div className="x1-km-4 inter-normal-black-14px">{x1Km}</div>
              </Link>
              <img className="line-32-5" src={line32} />
              <img className="line-33-4" src={line33} />
              <div className="rectangle-85-4"></div>
            </div>
          </div>
          <div className="overlap-group8-38">
            <Component164 {...component164Props} />
            <img className="image-6-41" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-636" src={vector6} />
            </Link>
          </div>
          <div className="overlap-group9-44">
            <div className="rectangle-29-25"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-68-10"></div>
            <div className="language-74 inter-normal-black-7px">{language}</div>
            <div className="rectangle-10"></div>
            <img className="vector-637" src={vector7} />
            <img className="x1-89" src={x14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterList500mDistance;
