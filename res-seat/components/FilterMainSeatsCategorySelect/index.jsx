import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainSeatsCategorySelect.css";

function FilterMainSeatsCategorySelect(props) {
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
    seats,
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
      <div className="filter-main-seats-category-select screen">
        <div className="group-234-9">
          <div className="info-container-9">
            <Link to="/about">
              <img className="icon-information-9" src={iconInformation} />
            </Link>
            <div className="info-18 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group5-15">
            <Link to="/search-map">
              <div className="rectangle-15-9"></div>
            </Link>
            <img className="icon-search-9" src={iconSearch} />
          </div>
          <div className="flex-col-22">
            <Link to="/completedpreorderhome3">
              <img className="group-10" src={group} />
            </Link>
            <div className="my-book-11 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group7-12">
          <img className="image-1-7" src={image1} />
          <div className="group-64-3">
            <div className="group-container-12">
              <div className="group-62-2">
                <img className="vector-128" src="/img/vector-33@2x.png" />
              </div>
              <Link to="/filter-list-seats">
                <div className="group-63-3">
                  <div className="overlap-group-106">
                    <img className="vector-129" src={vector2} />
                    <div className="see-list-3 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-13 border-1px-mercury">
              <div className="overlap-group3-51">
                <div className="distance-56 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="overlap-group2-67">
                <div className="rectangle-81-2 border-1px-c4c4c4"></div>
                <div className="category-33 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-130" src={vector3} />
                <Link to="/filter-main-seats">
                  <div className="group-47-31">
                    <div className="overlap-group-107">
                      <div className="category-34 inter-normal-white-13px">{category2}</div>
                      <img className="vector-131" src={vector4} />
                    </div>
                  </div>
                
                <div className="overlap-group1-80 border-1px-orange">
                  <div className="category-35 inter-normal-flamingo-13px">{category3}</div>
                  <img className="vector-132" src={vector5} />
                </div>
                </Link>
              </div>
              <div className="group-52-1">
                <Link to="/main">
                  <div className="group-49-28">
                    <div className="overlap-group-108">
                      <div className="seats-32 inter-normal-white-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-seats-rating">
                  <div className="group-50-29">
                    <div className="overlap-group1-81 border-1px-c4c4c4">
                      <div className="rating-29 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="ellipse-16-3 border-1px-malibu"></div>
          <div className="ellipse-17-3 border-2px-white"></div>
          <img className="polygon-2-3" src={polygon2} />
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-390">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-5 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-13 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-388">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-6 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-13 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-393">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-6 border-1px-black"></div>
            </Link>
            <div className="uncles-14 inter-medium-black-8px">{uncles}</div>
          </div>
          {/* <div className="overlap-group6-12">
            <div className="rectangle-89-6 border-0-5px-c4c4c4"></div>
            <div className="language-25 inter-normal-black-13px">{language1}</div>
            <div className="language-26 inter-normal-black-13px">{language2}</div>
            <div className="asian-11 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-18 inter-normal-black-13px">{fastfood}</div>
            <div className="language-27 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-main-category-seats">
              <div className="meat-10 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="pizza-6 inter-normal-black-13px">{pizza}</div>
            <div className="place-6 inter-normal-black-13px">{place}</div>
            <div className="western-11 inter-normal-black-13px">{western}</div>
            <div className="line-container-19">
              <img className="line-34-6" src={line34} />
              <img className="line-35-6" src={line35} />
              <img className="line-37-6" src={line37} />
            </div>
            <img className="line-38-6" src={line38} />
            <img className="line-36-6" src={line36} />
            <Link to="/filter-main-seats">
              <div className="reset-6 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div> */}
          <div className="overlap-group7-4">
            <div className="rectangle-89-3 border-0-5px-c4c4c4"></div>
            <div className="language-16 inter-normal-black-13px">{language1}</div>
            <div className="language-17 inter-normal-black-13px">{language2}</div>
            <div className="asian-6 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-15 inter-normal-black-13px">{fastfood}</div>
            <div className="language-18 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-main-category-seats">
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
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsCategorySelect;
