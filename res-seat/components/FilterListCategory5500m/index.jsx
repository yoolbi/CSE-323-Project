import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component164 from "../Component164";
import "./FilterListCategory5500m.css";

function FilterListCategory5500m(props) {
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
    fastfood1,
    x11,
    line282,
    language1,
    language2,
    asian1,
    fastfood2,
    language3,
    snack,
    pizza,
    place,
    western1,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    asian2,
    x12,
    vector4,
    image5,
    x13,
    vector5,
    western2,
    image6,
    vector6,
    language4,
    vector7,
    x14,
    component1642Props,
    component16321Props,
    component164Props,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-5-500m screen">
        <img className="component-29-22" src={component29} />
        <div className="group-container-145">
          <div className="group-85-3">
            <div className="line-container-80">
              <img className="line-27-30" src={line27} />
              <img className="line-29-33" src={line29} />
            </div>
            <div className="group-51-36">
              <Link to="/filter-list-500m-distance">
                <div className="group-48-49">
                  <div className="overlap-group-892">
                    <div className="distance-103 inter-normal-white-14px">{distance}</div>
                    <img className="vector-418" src="/img/vector-133@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-500m">
                <div className="group-47-79">
                  <div className="overlap-group1-535 border-1px-orange">
                    <div className="category-112 inter-normal-flamingo-13px">{category}</div>
                    <img className="vector-419" src={vector2} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-500m">
                <div className="group-49-73">
                  <div className="overlap-group2-403 border-1px-c4c4c4">
                    <div className="seats-111 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating-500m">
                <div className="group-50-71">
                  <div className="overlap-group3-306 border-1px-c4c4c4">
                    <div className="rating-86 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group-container-58">
              <div className="overlap-group7-44">
                <div className="overlap-group3-307">
                  <img className="line-28-34" src={line281} />
                  <Component1642 star1={component1642Props.star1} />
                  <img className="vector-420" src={vector3} />
                  <div className="address-87 arial">
                    <span className="span0-69 arial">{spanText1}</span>
                    <span className="span1-210 inter-normal-black-20px">{spanText2}</span>
                  </div>
                  <div className="rectangle-4"></div>
                  <div className="rectangle-66-19"></div>
                  <div className="fastfood-40 inter-normal-black-7px">{fastfood1}</div>
                  <img className="x1-60" src={x11} />
                </div>
                <img className="line-28-35" src={line282} />
                <div className="overlap-group5-139">
                  <div className="rectangle-89-19 border-0-5px-c4c4c4"></div>
                  <div className="language-66 inter-normal-black-13px">{language1}</div>
                  <div className="language-67 inter-normal-black-13px">{language2}</div>
                  <div className="asian-32 inter-normal-black-13px">{asian1}</div>
                  <div className="fastfood-41 inter-normal-black-13px">{fastfood2}</div>
                  <div className="language-68 inter-normal-black-13px">{language3}</div>
                  <div className="snack-3 inter-normal-black-13px">{snack}</div>
                  <div className="pizza-19 inter-normal-black-13px">{pizza}</div>
                  <div className="place-22 inter-normal-black-13px">{place}</div>
                  <div className="western-30 inter-normal-black-13px">{western1}</div>
                  <img className="line-34-19" src={line34} />
                  <img className="line-35-19" src={line35} />
                  <img className="line-37-19" src={line37} />
                  <img className="line-38-19" src={line38} />
                  <img className="line-36-19" src={line36} />
                  <div className="ellipse-18-20"></div>
                  <Link to="/filter-list-category-7-500m">
                    <div className="ellipse-19-7"></div>
                  </Link>
                  <Link to="/filter-list-500m">
                    <div className="reset-23 inter-normal-spicy-pink-10px">{reset}</div>
                  </Link>
                </div>
              </div>
              <div className="overlap-group4-208">
                <Component1632
                  aSoupShop={component16321Props.aSoupShop}
                  spanText1={component16321Props.spanText1}
                  spanText2={component16321Props.spanText2}
                  spanText3={component16321Props.spanText3}
                  spanText4={component16321Props.spanText4}
                  star1={component16321Props.star1}
                />
                <div className="rectangle-67-4"></div>
                <div className="asian-33 inter-normal-black-7px">{asian2}</div>
                <div className="rectangle-4"></div>
                <img className="x1-61" src={x12} />
                <Link to="/select-restaurant-uncle-s">
                  <img className="vector-421" src={vector4} />
                </Link>
              </div>
            </div>
            <div className="overlap-group2-404">
              <Component163 />
              <img className="image-5-13" src={image5} />
              <img className="x1-62" src={x13} />
              <img className="vector-422" src={vector5} />
              <div className="overlap-group1-536">
                <div className="western-31 inter-normal-black-7px">{western2}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group9-41">
            <Component164 {...component164Props} />
            <img className="image-6-28" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-423" src={vector6} />
            </Link>
          </div>
          <div className="overlap-group10-32">
            <div className="rectangle-29-13"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-68-5"></div>
            <div className="language-69 inter-normal-black-7px">{language4}</div>
            <div className="rectangle-4"></div>
            <img className="vector-424" src={vector7} />
            <img className="x1-63" src={x14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory5500m;
