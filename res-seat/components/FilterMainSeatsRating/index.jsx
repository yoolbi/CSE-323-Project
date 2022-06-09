import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainSeatsRating.css";

function FilterMainSeatsRating(props) {
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
    category,
    vector2,
    seats1,
    seats2,
    seats3,
    seats4,
    seats5,
    seats6,
    rating,
    hanamBbq,
    seansRestaurant,
    uncles,
    group320Props,
    group3181Props,
    group325Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-rating screen">
        <div className="group-234-18">
          <div className="info-container-18">
            <Link to="/about">
              <img className="icon-information-18" src={iconInformation} />
            </Link>
            <div className="info-28 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group8-12">
            <Link to="/search-map">
              <div className="rectangle-15-18"></div>
            </Link>
            <img className="icon-search-18" src={iconSearch} />
          </div>
          <div className="flex-col-41">
            <Link to="/completedpreorderhome3">
              <img className="group-25" src={group} />
            </Link>
            <div className="my-book-20 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group9-12">
          <img className="image-1-12" src={image1} />
          <div className="ellipse-16-8 border-1px-malibu"></div>
          <div className="ellipse-17-8 border-2px-white"></div>
          <img className="polygon-2-8" src={polygon2} />
          <div className="group-65-4">
            <Link to="/filter-list-seats-rating">
              <div className="group-63-10">
                <div className="overlap-group-265">
                  <img className="vector-162" src="/img/vector-2@2x.png" />
                  <div className="see-list-8 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-32 border-1px-mercury">
              <div className="overlap-group6-22">
                <div className="distance-61 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52-7">
                <div className="group-47-41">
                  <div className="overlap-group-266">
                    <Link to="/filter-main-seats-rating-category">
                      <div className="rectangle-81-5 border-1px-c4c4c4"></div>
                    </Link>
                    <div className="category-48 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-163" src={vector2} />
                  </div>
                </div>
                <Link to="/filter-main-rating">
                  <div className="group-49-37">
                    <div className="overlap-group4-55 border-1px-c4c4c4">
                      <div className="seats-45 inter-normal-spicy-pink-14px">{seats1}</div>
                      <div className="overlap-group-263 border-1px-c4c4c4">
                        <div className="seats-45 inter-normal-spicy-pink-14px">{seats2}</div>
                        <div className="overlap-group-264">
                          <div className="seats-46 inter-normal-white-14px">{seats3}</div>
                        </div>
                        <div className="overlap-group1-117 border-1px-c4c4c4">
                          <div className="seats-47 inter-normal-spicy-pink-14px">{seats4}</div>
                        </div>
                        <div className="overlap-group-263 border-1px-c4c4c4">
                          <div className="seats-45 inter-normal-spicy-pink-14px">{seats5}</div>
                          <div className="overlap-group-264">
                            <div className="seats-48 inter-normal-white-14px">{seats6}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="group-50-37">
                  <div className="overlap-group5-35">
                    <Link to="/filter-main-seats">
                      <div className="rectangle-60-3"></div>
                    </Link>
                    <div className="rating-38 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-358">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-10 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-31 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-355">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-9 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-19 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-360">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-9 border-1px-black"></div>
            </Link>
            <div className="uncles-18 inter-medium-black-8px">{uncles}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsRating;
