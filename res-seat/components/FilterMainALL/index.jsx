import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainALL.css";

function FilterMainALL(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    polygon2,
    seeList,
    distance,
    category1,
    vector2,
    category2,
    vector3,
    category3,
    vector4,
    seats1,
    seats2,
    seats3,
    seats4,
    seats5,
    rating1,
    rating2,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-all screen">
        <div className="group-234-35">
          <div className="info-container-35">
            <Link to="/about">
              <img className="icon-information-35" src={iconInformation} />
            </Link>
            <div className="info-45 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group7-23">
            <Link to="/search-map">
              <div className="rectangle-15-35"></div>
            </Link>
            <img className="icon-search-35" src={iconSearch} />
          </div>
          <div className="flex-col-80">
            <Link to="/completedpreorderhome3">
              <img className="group-54" src={group} />
            </Link>
            <div className="my-book-39 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group8-16">
          <img className="image-1-21" src={image1} />
          <div className="ellipse-16-15 border-1px-malibu"></div>
          <div className="ellipse-17-15 border-2px-white"></div>
          <img className="polygon-2-15" src={polygon2} />
          <div className="group-64-14">
            <Link to="/filter-list-all">
              <div className="group-63-17">
                <div className="overlap-group-344">
                  <img className="vector-218" src="/img/vector-2@2x.png" />
                  <div className="see-list-15 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-42 border-1px-mercury">
              <div className="overlap-group5-47">
                <div className="distance-71 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52-28">
                <Link to="/filter-main-seats-rating-category-check">
                  <div className="group-47-56">
                    <div className="overlap-group2-127">
                      <div className="category-75 inter-normal-white-13px">{category1}</div>
                      <img className="vector-219" src={vector2} />
                      <div className="overlap-group-345 border-1px-c4c4c4">
                        <div className="category-74 inter-normal-spicy-pink-13px">{category2}</div>
                        <img className="vector-220" src={vector3} />
                      </div>
                      <div className="overlap-group1-196">
                        <div className="category-74 inter-normal-white-13px">{category3}</div>
                        <img className="vector-221" src={vector4} />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="group-49-54">
                  <div className="overlap-group3-107">
                    <div className="rectangle-33-3 border-1px-c4c4c4"></div>
                    <div className="seats-77 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-346">
                      <div className="seats-78 inter-normal-white-14px">{seats2}</div>
                    </div>
                    <div className="overlap-group1-197 border-1px-c4c4c4">
                      <div className="seats-79 inter-normal-spicy-pink-14px">{seats3}</div>
                    </div>
                    <Link to="/filter-main-category-rating">
                      <div className="group-51-16">
                        <div className="overlap-group-343 border-1px-c4c4c4">
                          <div className="seats-80 inter-normal-spicy-pink-14px">{seats4}</div>
                          <div className="overlap-group-347">
                            <div className="seats-81 inter-normal-white-14px">{seats5}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Link to="/filter-main-category-seats">
                  <div className="group-50-52">
                    <div className="overlap-group-343 border-1px-c4c4c4">
                      <div className="rating-55 inter-normal-spicy-pink-14px">{rating1}</div>
                      <div className="overlap-group-348">
                        <div className="rating-56 inter-normal-white-14px">{rating2}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="group-361">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-19 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-51 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainALL;
