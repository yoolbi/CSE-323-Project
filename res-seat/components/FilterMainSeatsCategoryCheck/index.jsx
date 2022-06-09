import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainSeatsCategoryCheck.css";

function FilterMainSeatsCategoryCheck(props) {
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
    rectangle92,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-category-check screen">
        <div className="group-234-26">
          <div className="info-container-26">
            <Link to="/about">
              <img className="icon-information-26" src={iconInformation} />
            </Link>
            <div className="info-36 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-62">
            <Link to="/search-map">
              <div className="rectangle-15-26"></div>
            </Link>
            <img className="icon-search-26" src={iconSearch} />
          </div>
          <div className="flex-col-57">
            <Link to="/completedpreorderhome3">
              <img className="group-35" src={group} />
            </Link>
            <div className="my-book-28 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group6-26">
          <img className="image-1-17" src={image1} />
          <div className="group-64-11">
            <div className="group-container-36">
              <div className="group-62-7">
                <img className="vector-187" src="/img/vector-33@2x.png" />
              </div>
              <Link to="/filter-list-seats">
                <div className="group-63-14">
                  <div className="overlap-group-288">
                    <img className="vector-188" src={vector2} />
                    <div className="see-list-12 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-37 border-1px-mercury">
              <div className="overlap-group1-140">
                <div className="distance-67 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="overlap-group2-106">
                <div className="rectangle-81-7 border-1px-c4c4c4"></div>
                <div className="category-58 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-189" src={vector3} />
                <Link to="/filter-main-category-seats">
                  <div className="group-47-48">
                    <div className="overlap-group-289">
                      <div className="category-59 inter-normal-white-13px">{category2}</div>
                      <img className="vector-190" src={vector4} />
                    </div>
                  </div>
               
                <div className="overlap-group1-141 border-1px-orange">
                  <div className="category-60 inter-normal-flamingo-13px">{category3}</div>
                  <img className="vector-191" src={vector5} />
                </div>
                </Link>
              </div>
              <div className="group-52-16">
                <Link to="/filter-main-seats">
                  <div className="group-49-46">
                    <div className="overlap-group-290">
                      <div className="seats-63 inter-normal-white-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-all">
                  <div className="group-50-45">
                    <div className="overlap-group1-142 border-1px-c4c4c4">
                      <div className="rating-46 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="ellipse-16-12 border-1px-malibu"></div>
          <div className="ellipse-17-12 border-2px-white"></div>
          <img className="polygon-2-12" src={polygon2} />
          <div className="group-375">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-15 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-40 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <div className="overlap-group5-40">
            <div className="rectangle-89-14 border-0-5px-c4c4c4"></div>
            <img className="rectangle-92-6" src={rectangle92} />
            <div className="language-50 inter-normal-black-13px">{language1}</div>
            <div className="language-51 inter-normal-black-13px">{language2}</div>
            <div className="asian-22 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-31 inter-normal-black-13px">{fastfood}</div>
            <div className="language-52 inter-normal-black-13px">{language3}</div>
            <div className="meat-25 inter-normal-flamingo-13px">{meat}</div>
            <div className="pizza-14 inter-normal-black-13px">{pizza}</div>
            <div className="place-14 inter-normal-black-13px">{place}</div>
            <div className="western-23 inter-normal-black-13px">{western}</div>
            <div className="line-container-29">
              <img className="line-34-14" src={line34} />
              <img className="line-35-14" src={line35} />
              <img className="line-37-14" src={line37} />
            </div>
            <img className="line-38-14" src={line38} />
            <img className="line-36-14" src={line36} />
            <Link to="/filter-main-seats">
              <div className="reset-14 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsCategoryCheck;
