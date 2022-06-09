import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainCategoryRating.css";

function FilterMainCategoryRating(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    polygon2,
    seeList,
    distance1,
    vector2,
    category,
    vector3,
    seats1,
    seats2,
    seats3,
    rating1,
    rating2,
    distance2,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-rating screen">
        <div className="group-234-20">
          <div className="info-container-20">
            <Link to="/about">
              <img className="icon-information-20" src={iconInformation} />
            </Link>
            <div className="info-30 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group6-24">
            <Link to="/search-map">
              <div className="rectangle-15-20"></div>
            </Link>
            <img className="icon-search-20" src={iconSearch} />
          </div>
          <div className="flex-col-43">
            <Link to="/completedpreorderhome3">
              <img className="group-27" src={group} />
            </Link>
            <div className="my-book-22 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group7-19">
          <img className="image-1-14" src={image1} />
          <div className="ellipse-16-9 border-1px-malibu"></div>
          <div className="ellipse-17-9 border-2px-white"></div>
          <img className="polygon-2-9" src={polygon2} />
          <div className="group-64-9">
            <Link to="/filter-list-category-rating">
              <div className="group-63-11">
                <div className="overlap-group-268">
                  <img className="vector-167" src="/img/vector-2@2x.png" />
                  <div className="see-list-9 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-33 border-1px-mercury">
              <div className="group-52-8">
                <div className="group-48-18">
                  <div className="distance-62 inter-normal-white-14px">{distance1}</div>
                  <img className="vector-168" src={vector2} />
                </div>
                <Link to="/filter-main-rating-category-check">
                  <div className="group-47-42">
                    <div className="overlap-group-269">
                      <div className="category-49 inter-normal-white-13px">{category}</div>
                      <img className="vector-169" src={vector3} />
                    </div>
                  </div>
                </Link>
                <div className="group-49-38">
                  <div className="overlap-group2-90">
                    <div className="rectangle-33-1 border-1px-c4c4c4"></div>
                    <div className="seats-49 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-270">
                      <div className="seats-50 inter-normal-white-14px">{seats2}</div>
                    </div>
                    <Link to="/filter-main-all">
                      <div className="group-50-38">
                        <div className="overlap-group1-118 border-1px-c4c4c4">
                          <div className="seats-51 inter-normal-spicy-pink-14px">{seats3}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Link to="/filter-main-category-select">
                  <div className="group-50-39">
                    <div className="overlap-group3-89 border-1px-c4c4c4">
                      <div className="rating-39 inter-normal-spicy-pink-14px">{rating1}</div>
                      <div className="overlap-group-271">
                        <div className="rating-40 inter-normal-white-14px">{rating2}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group4-57">
                <div className="distance-63 inter-normal-white-14px">{distance2}</div>
              </div>
            </div>
          </div>
          <div className="group-351">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-12 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-34 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategoryRating;
