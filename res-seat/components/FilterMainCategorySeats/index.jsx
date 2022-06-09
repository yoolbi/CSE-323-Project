import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainCategorySeats.css";

function FilterMainCategorySeats(props) {
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
    rating,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-seats screen">
        <div className="group-234-15">
          <div className="info-container-15">
            <Link to="/about">
              <img className="icon-information-15" src={iconInformation} />
            </Link>
            <div className="info-25 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-47">
            <Link to="/search-map">
              <div className="rectangle-15-15"></div>
            </Link>
            <img className="icon-search-15" src={iconSearch} />
          </div>
          <div className="flex-col-32">
            <Link to="/completedpreorderhome3">
              <img className="group-17" src={group} />
            </Link>
            <div className="my-book-17 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group5-27">
          <img className="image-1-10" src={image1} />
          <div className="ellipse-16-6 border-1px-malibu"></div>
          <div className="ellipse-17-6 border-2px-white"></div>
          <img className="polygon-2-6" src={polygon2} />
          <div className="group-64-7">
            <Link to="/filter-list-category-seats">
              <div className="group-63-7">
                <div className="overlap-group-247">
                  <img className="vector-147" src="/img/vector-2@2x.png" />
                  <div className="see-list-6 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-23 border-1px-mercury">
              <div className="overlap-group1-102">
                <div className="distance-59 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52-5">
                <Link to="/filter-main-seats-category-check">
                  <div className="group-47-37">
                    <div className="overlap-group-248">
                      <div className="category-43 inter-normal-white-13px">{category}</div>
                      <img className="vector-148" src={vector2} />
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-category-select">
                  <div className="group-49-34">
                    <div className="overlap-group1-103 border-1px-c4c4c4">
                      <div className="seats-41 inter-normal-spicy-pink-14px">{seats1}</div>
                      <div className="overlap-group-249">
                        <div className="seats-42 inter-normal-white-14px">{seats2}</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-all">
                  <div className="group-50-34">
                    <div className="overlap-group2-79 border-1px-c4c4c4">
                      <div className="rating-35 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="group-349">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-8 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-23 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategorySeats;
