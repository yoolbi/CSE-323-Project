import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainSeatsCategory.css";

function FilterMainSeatsCategory(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    vector2,
    seeList,
    distance,
    category1,
    vector3,
    category2,
    vector4,
    category3,
    vector5,
    seats1,
    seats2,
    seats3,
    rating,
    polygon2,
    hanamBbq,
    seansRestaurant,
    uncles,
    language1,
    language2,
    asian,
    fastfood,
    language3,
    meat,
    pizza,
    place,
    western,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    group320Props,
    group3181Props,
    group325Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-category screen">
        <div className="group-234-7">
          <div className="info-container-7">
            <Link to="/about">
              <img className="icon-information-7" src={iconInformation} />
            </Link>
            <div className="info-16 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group7-11">
            <Link to="/search-map">
              <div className="rectangle-15-7"></div>
            </Link>
            <img className="icon-search-7" src={iconSearch} />
          </div>
          <div className="flex-col-17">
            <Link to="/completedpreorderhome3">
              <img className="group-8" src={group} />
            </Link>
            <div className="my-book-9 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group9-8">
          <img className="image-1-6" src={image1} />
          <div className="group-64-2">
            <div className="group-container-11">
              <div className="group-62-1">
                <img className="vector-119" src="/img/vector-33@2x.png" />
              </div>
              <Link to="/filter-list-seats">
                <div className="group-63-2">
                  <div className="overlap-group-98">
                    <img className="vector-120" src={vector2} />
                    <div className="see-list-2 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group-container-15 border-1px-mercury">
              <div className="overlap-group5-13">
                <div className="distance-55 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="overlap-group2-64">
                <div className="rectangle-81-1 border-1px-c4c4c4"></div>
                <div className="category-29 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-121" src={vector3} />
                <Link to="/filter-main-rating">
                  <div className="group-47-29">
                    <div className="overlap-group-99">
                      <div className="category-30 inter-normal-white-13px">{category2}</div>
                      <img className="vector-122" src={vector4} />
                    </div>
                  </div>
                </Link>
                <div className="overlap-group1-75 border-1px-orange">
                  <div className="category-31 inter-normal-flamingo-13px">{category3}</div>
                  <img className="vector-123" src={vector5} />
                </div>
              </div>
              <div className="overlap-group4-34">
                <div className="rectangle-33 border-1px-c4c4c4"></div>
                <div className="seats-27 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group-100">
                  <div className="seats-28 inter-normal-white-14px">{seats2}</div>
                </div>
                <Link to="/filter-main-seats-rating">
                  <div className="group-50-27">
                    <div className="overlap-group1-76 border-1px-c4c4c4">
                      <div className="seats-29 inter-normal-spicy-pink-14px">{seats3}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group3-49">
                <Link to="/main">
                  <div className="rectangle-60-1"></div>
                </Link>
                <div className="rating-27 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </div>
          <div className="ellipse-16-2 border-1px-malibu"></div>
          <div className="ellipse-17-2 border-2px-white"></div>
          <img className="polygon-2-2" src={polygon2} />
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-381">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-4 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-11 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-378">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-5 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-11 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-383">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-5 border-1px-black"></div>
            </Link>
            <div className="uncles-12 inter-medium-black-8px">{uncles}</div>
          </div>
          <div className="overlap-group8-8">
            <div className="rectangle-89-4 border-0-5px-c4c4c4"></div>
            <div className="language-19 inter-normal-black-13px">{language1}</div>
            <div className="language-20 inter-normal-black-13px">{language2}</div>
            <div className="asian-8 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-16 inter-normal-black-13px">{fastfood}</div>
            <div className="language-21 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-main-category-seats">
              <div className="meat-7 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="pizza-4 inter-normal-black-13px">{pizza}</div>
            <div className="place-4 inter-normal-black-13px">{place}</div>
            <div className="western-8 inter-normal-black-13px">{western}</div>
            <div className="line-container-17">
              <img className="line-34-4" src={line34} />
              <img className="line-35-4" src={line35} />
              <img className="line-37-4" src={line37} />
            </div>
            <img className="line-38-4" src={line38} />
            <img className="line-36-4" src={line36} />
            <Link to="/filter-main-rating">
              <div className="reset-4 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsCategory;
