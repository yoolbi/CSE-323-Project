import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainCategorySelect.css";

function FilterMainCategorySelect(props) {
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
    seats,
    rating,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-select screen">
        <div className="group-234-11">
          <div className="info-container-11">
            <Link to="/about">
              <img className="icon-information-11" src={iconInformation} />
            </Link>
            <div className="info-20 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-42">
            <Link to="/search-map">
              <div className="rectangle-15-11"></div>
            </Link>
            <img className="icon-search-11" src={iconSearch} />
          </div>
          <div className="flex-col-25">
            <Link to="/completedpreorderhome3">
              <img className="group-12" src={group} />
            </Link>
            <div className="my-book-13 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group5-22">
          <img className="image-1-8" src={image1} />
          <div className="ellipse-16-4 border-1px-malibu"></div>
          <div className="ellipse-17-4 border-2px-white"></div>
          <img className="polygon-2-4" src={polygon2} />
          <div className="group-64-5">
            <Link to="/filter-list-category-select">
              <div className="group-63-5">
                <div className="overlap-group-115">
                  <img className="vector-135" src="/img/vector-2@2x.png" />
                  <div className="see-list-4 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-19 border-1px-mercury">
              <div className="overlap-group1-89">
                <div className="distance-57 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52-2">
                <Link to="/filter-main-category-check">
                  <div className="group-47-33">
                    <div className="overlap-group-116">
                      <div className="category-37 inter-normal-white-13px">{category}</div>
                      <img className="vector-136" src={vector2} />
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-category-seats">
                  <div className="group-49-30">
                    <div className="overlap-group1-90 border-1px-c4c4c4">
                      <div className="seats-34 inter-normal-spicy-pink-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-category-rating">
                  <div className="group-50-31">
                    <div className="overlap-group2-74 border-1px-c4c4c4">
                      <div className="rating-31 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="group-328">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-6 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-20 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategorySelect;
