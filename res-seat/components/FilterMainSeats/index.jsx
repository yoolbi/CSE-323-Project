import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainSeats.css";

function FilterMainSeats(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    seeList,
    distance,
    category,
    vector2,
    seats,
    rating,
    polygon2,
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
      <div className="filter-main-seats screen">
        <div className="group-234-29">
          <div className="info-container-29">
            <Link to="/about">
              <img className="icon-information-29" src={iconInformation} />
            </Link>
            <div className="info-39 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-65">
            <Link to="/search-map">
              <div className="rectangle-15-29"></div>
            </Link>
            <img className="icon-search-29" src={iconSearch} />
          </div>
          <div className="flex-col-62">
            <Link to="/completedpreorderhome3">
              <img className="group-39" src={group} />
            </Link>
            <div className="my-book-31 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group5-43">
          <img className="image-1-18" src={image1} />
          <div className="group-64-12">
            <Link to="/filter-list-seats">
              <div className="group-63-15">
                <div className="overlap-group-296">
                  <img className="vector-197" src="/img/vector-2@2x.png" />
                  <div className="see-list-13 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-38 border-1px-mercury">
              <div className="overlap-group1-148">
                <div className="distance-69 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52-17">
                <Link to="/filter-main-seats-category-select">
                  <div className="group-47-51">
                    <div className="overlap-group-297 border-1px-c4c4c4">
                      <div className="category-64 inter-normal-spicy-pink-13px">{category}</div>
                      <img className="vector-198" src={vector2} />
                    </div>
                  </div>
                </Link>
                <Link to="/main">
                  <div className="group-49-49">
                    <div className="overlap-group1-149">
                      <div className="seats-67 inter-normal-white-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-seats-rating">
                  <div className="group-50-48">
                    <div className="overlap-group2-110 border-1px-c4c4c4">
                      <div className="rating-49 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="ellipse-16-13 border-1px-malibu"></div>
          <div className="ellipse-17-13 border-2px-white"></div>
          <img className="polygon-2-13" src={polygon2} />
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-334">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-16 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-43 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-331">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-12 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-24 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-337">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-12 border-1px-black"></div>
            </Link>
            <div className="uncles-23 inter-medium-black-8px">{uncles}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeats;
