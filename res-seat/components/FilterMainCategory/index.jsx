import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainCategory.css";

function FilterMainCategory(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    polygon2,
    vector2,
    vector3,
    seeList1,
    vector4,
    vector5,
    seeList2,
    distance,
    category1,
    vector6,
    category2,
    vector7,
    category3,
    vector8,
    seats,
    rating,
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
    hanamBbq,
    seansRestaurant,
    uncles,
    group3181Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category screen">
        <div className="group-234-4">
          <div className="info-container-4">
            <Link to="/about">
              <img className="icon-information-4" src={iconInformation} />
            </Link>
            <div className="info-4 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group8-3">
            <Link to="/search-map">
              <div className="rectangle-15-4"></div>
            </Link>
            <img className="icon-search-4" src={iconSearch} />
          </div>
          <div className="flex-col-14">
            <Link to="/completedpreorderhome3">
              <img className="group-5" src={group} />
            </Link>
            <div className="my-book-6 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group9-3">
          <img className="image-1-1" src={image1} />
          <img className="vector-98" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-1 border-1px-malibu"></div>
          <div className="ellipse-17-1 border-2px-white"></div>
          <img className="polygon-2-1" src={polygon2} />
          <div className="group-64-1">
            <div className="group-container-2">
              <div className="group-62">
                <img className="vector-96" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-1">
                  <div className="overlap-group-79">
                    <img className="vector-97" src={vector3} />
                    <div className="see-list-1 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-3 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-1">
            <div className="group-container-2">
              <div className="group-62">
                <img className="vector-96" src={vector4} />
              </div>
              <Link to="/list">
                <div className="group-63-1">
                  <div className="overlap-group-79">
                    <img className="vector-97" src={vector5} />
                    <div className="see-list-1 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-4 border-1px-mercury">
              <div className="overlap-group5-4">
                <div className="distance-54 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52">
                <div className="group-47-27">
                  <div className="overlap-group2-50">
                    <div className="rectangle-81 border-1px-c4c4c4"></div>
                    <div className="category-26 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-99" src={vector6} />
                    <Link to="/main">
                      <div className="group-47-28">
                        <div className="overlap-group-80">
                          <div className="category-27 inter-normal-white-13px">{category2}</div>
                          <img className="vector-100" src={vector7} />
                        </div>
                      </div>
                    
                    <div className="overlap-group1-57 border-1px-orange">
                      <div className="category-28 inter-normal-flamingo-13px">{category3}</div>
                      <img className="vector-101" src={vector8} />
                    </div>
                    </Link>
                  </div>
                </div>
                <Link to="/filter-main-seats">
                  <div className="group-49-26">
                    <div className="overlap-group3-37 border-1px-c4c4c4">
                      <div className="seats-26 inter-normal-spicy-pink-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-rating">
                  <div className="group-50-26">
                    <div className="overlap-group4-22 border-1px-c4c4c4">
                      <div className="rating-26 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="overlap-group7-4">
            <div className="rectangle-89-3 border-0-5px-c4c4c4"></div>
            <div className="language-16 inter-normal-black-13px">{language1}</div>
            <div className="language-17 inter-normal-black-13px">{language2}</div>
            <div className="asian-6 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-15 inter-normal-black-13px">{fastfood}</div>
            <div className="language-18 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-main-category-select">
              <div className="meat-6 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="pizza-3 inter-normal-black-13px">{pizza}</div>
            <div className="place-3 inter-normal-black-13px">{place}</div>
            <div className="western-6 inter-normal-black-13px">{western}</div>
            <img className="line-34-3" src={line34} />
            <img className="line-35-3" src={line35} />
            <img className="line-37-3" src={line37} />
            <img className="line-38-3" src={line38} />
            <img className="line-36-3" src={line36} />
            <Link to="/main">
              <div className="reset-3 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <Group320 />
          <Group318>{group3181Props.children}</Group318>
          <div className="group-405">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-1 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-5 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-408">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-1 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-4 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-403">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-1 border-1px-black"></div>
            </Link>
            <div className="uncles-4 inter-medium-black-8px">{uncles}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory;
