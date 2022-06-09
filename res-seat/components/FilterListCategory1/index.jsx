import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component163 from "../Component163";
import Component164 from "../Component164";
import Group79 from "../Group79";
import "./FilterListCategory1.css";

function FilterListCategory1(props) {
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
    place1,
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
    image51,
    x13,
    vector5,
    western2,
    image52,
    vector6,
    place2,
    bhc2,
    image6,
    vector7,
    language4,
    vector8,
    x14,
    component1642Props,
    component16321Props,
    component1641Props,
    group79Props,
    component1642Props2,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-1 screen">
        <img className="component-29-73" src={component29} />
        <div className="group-container-215">
          <div className="group-85-4">
            <div className="line-container-99">
              <img className="line-27-46" src={line27} />
              <img className="line-29-55" src={line29} />
            </div>
            <div className="group-51-63">
              <Link to="/filter-list-distance">
                <div className="group-48-72">
                  <div className="overlap-group-1069">
                    <div className="distance-131 inter-normal-white-14px">{distance}</div>
                    <img className="vector-707" src="/img/vector-133@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/list">
                <div className="group-47-130">
                  <div className="overlap-group1-615 border-1px-orange">
                    <div className="category-182 inter-normal-flamingo-13px">{category}</div>
                    <img className="vector-708" src={vector2} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats">
                <div className="group-49-116">
                  <div className="overlap-group2-474 border-1px-c4c4c4">
                    <div className="seats-194 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating">
                <div className="group-50-120">
                  <div className="overlap-group3-427 border-1px-c4c4c4">
                    <div className="rating-148 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group-container-67">
              <div className="overlap-group7-55">
                <div className="overlap-group3-428">
                  <img className="line-28-60" src={line281} />
                  <Component1642 star1={component1642Props.star1} />
                  <img className="vector-709" src={vector3} />
                  <div className="address-97 arial">
                    <span className="span0-80 arial">{spanText1}</span>
                    <span className="span1-220 inter-normal-black-20px">{spanText2}</span>
                  </div>
                  <div className="rectangle-13"></div>
                  <div className="rectangle-66-29"></div>
                  <div className="fastfood-51 inter-normal-black-7px">{fastfood1}</div>
                  <img className="x1-94" src={x11} />
                </div>
                <img className="line-28-61" src={line282} />
                <div className="overlap-group6-86">
                  <div className="rectangle-89-20 border-0-5px-c4c4c4"></div>
                  <div className="language-76 inter-normal-black-13px">{language1}</div>
                  <div className="language-77 inter-normal-black-13px">{language2}</div>
                  <div className="asian-43 inter-normal-black-13px">{asian1}</div>
                  <div className="fastfood-52 inter-normal-black-13px">{fastfood2}</div>
                  <div className="language-78 inter-normal-black-13px">{language3}</div>
                  <div className="snack-4 inter-normal-black-13px">{snack}</div>
                  <div className="pizza-20 inter-normal-black-13px">{pizza}</div>
                  <div className="place-25 inter-normal-black-13px">{place1}</div>
                  <div className="western-38 inter-normal-black-13px">{western1}</div>
                  <img className="line-34-20" src={line34} />
                  <img className="line-35-20" src={line35} />
                  <img className="line-37-20" src={line37} />
                  <img className="line-38-20" src={line38} />
                  <img className="line-36-20" src={line36} />
                  <div className="ellipse-18-31"></div>
                  <Link to="/filter-list-category-2">
                    <div className="ellipse-19-13"></div>
                  </Link>
                  <Link to="/list">
                    <div className="reset-34 inter-normal-spicy-pink-10px">{reset}</div>
                  </Link>
                </div>
              </div>
              <div className="overlap-group4-248">
                <Component1632
                  aSoupShop={component16321Props.aSoupShop}
                  spanText1={component16321Props.spanText1}
                  spanText2={component16321Props.spanText2}
                  spanText3={component16321Props.spanText3}
                  spanText4={component16321Props.spanText4}
                  star1={component16321Props.star1}
                />
                <div className="rectangle-67-14"></div>
                <div className="asian-44 inter-normal-black-7px">{asian2}</div>
                <div className="rectangle-13"></div>
                <img className="x1-95" src={x12} />
                <Link to="/select-restaurant-uncle-s">
                  <img className="vector-710" src={vector4} />
                </Link>
              </div>
            </div>
            <div className="overlap-group2-475">
              <Component163 />
              <img className="image-5-32" src={image51} />
              <img className="x1-96" src={x13} />
              <img className="vector-706" src={vector5} />
              <div className="overlap-group1-616">
                <div className="western-39 inter-normal-black-7px">{western2}</div>
              </div>
            </div>
            <div className="overlap-group5-170">
              <div className="overlap-group2-476">
                <Component164 {...component1641Props} />
                <img className="image-5-33" src={image52} />
                <img className="vector-706" src={vector6} />
                <div className="overlap-group1-617">
                  <div className="place-26 inter-normal-black-7px">{place2}</div>
                </div>
              </div>
              <img className="bhc-2-11" src={bhc2} />
            </div>
            <Group79 component16Props={group79Props.component16Props} />
          </div>
          <div className="overlap-group10-37">
            <Component164 {...component1642Props2} />
            <img className="image-6-44" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-711" src={vector7} />
            </Link>
          </div>
          <div className="overlap-group11-19">
            <div className="rectangle-29-32"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-68-12"></div>
            <div className="language-79 inter-normal-black-7px">{language4}</div>
            <div className="rectangle-13"></div>
            <img className="vector-712" src={vector8} />
            <img className="x1-97" src={x14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory1;
