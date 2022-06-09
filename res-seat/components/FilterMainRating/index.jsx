import React from "react";
import { Link } from "react-router-dom";
import Group497 from "../Group497";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainRating.css";

function FilterMainRating(props) {
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
      <div className="filter-main-rating screen">
        <div className="group-234-23">
          <div className="info-container-23">
            <Link to="/about">
              <img className="icon-information-23" src={iconInformation} />
            </Link>
            <div className="info-33 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-60">
            <Link to="/search-map">
              <div className="rectangle-15-23"></div>
            </Link>
            <img className="icon-search-23" src={iconSearch} />
          </div>
          <div className="flex-col-52">
            <Link to="/completedpreorderhome3">
              <img className="group-31" src={group} />
            </Link>
            <div className="my-book-25 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group5-38">
          <img className="image-1-16" src={image1} />
          <div className="ellipse-16-11 border-1px-malibu"></div>
          <div className="ellipse-17-11 border-2px-white"></div>
          <img className="polygon-2-11" src={polygon2} />
          <div className="group-65-5">
            <Link to="/filter-list-rating">
              <div className="group-63-13">
                <div className="overlap-group-279">
                  <img className="vector-179" src="/img/vector-2@2x.png" />
                  <div className="see-list-11 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-35 border-1px-mercury">
              <div className="overlap-group1-130">
                <div className="distance-65 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52-15">
                <Link to="/filter-main-seats-category">
                  <div className="group-47-45">
                    <div className="overlap-group-280 border-1px-c4c4c4">
                      <div className="category-54 inter-normal-spicy-pink-13px">{category}</div>
                      <img className="vector-180" src={vector2} />
                    </div>
                  </div>
                </Link>
                <Group497 />
                <div className="group-50-42">
                  <div className="overlap-group2-97">
                    <Link to="/main">
                      <div className="rectangle-60-5"></div>
                    </Link>
                    <div className="rating-43 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-344">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-14 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-37 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-341">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-11 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-22 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-347">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-11 border-1px-black"></div>
            </Link>
            <div className="uncles-21 inter-medium-black-8px">{uncles}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainRating;
