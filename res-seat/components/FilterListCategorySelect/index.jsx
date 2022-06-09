import React from "react";
import { Link } from "react-router-dom";
import "./FilterListCategorySelect.css";

function FilterListCategorySelect(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    line27,
    category,
    seats,
    rating,
    line28,
    line29,
    distance,
    image6,
    hanamBbq,
    meat,
    spanText1,
    spanText2,
    iconStar,
    spanText3,
    spanText4,
    spanText5,
    vector2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-select screen">
        <div className="group-234-28">
          <div className="info-container-28">
            <Link to="/about">
              <img className="icon-information-28" src={iconInformation} />
            </Link>
            <div className="info-38 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-97">
            <Link to="/search-map">
              <div className="rectangle-15-28"></div>
            </Link>
            <img className="icon-search-28" src={iconSearch} />
          </div>
          <div className="flex-col-60">
            <Link to="/completedpreorderhome3">
              <img className="group-38" src={group} />
            </Link>
            <div className="my-book-30 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group6-28">
          <div className="group-87">
            <img className="line-27-11" src={line27} />
            <div className="group-51-12">
              <Link to="/filter-list-category-check">
                <div className="group-47-50">
                  <div className="overlap-group-294">
                    <div className="category-63 inter-normal-white-13px">{category}</div>
                    <img className="vector-195" src="/img/vector-133@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-seats">
                <div className="group-49-48">
                  <div className="overlap-group1-146 border-1px-c4c4c4">
                    <div className="seats-66 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-rating">
                <div className="group-50-47">
                  <div className="overlap-group2-109 border-1px-c4c4c4">
                    <div className="rating-48 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-11" src={line28} />
          </div>
          <Link to="/filter-main-category-select">
            <img className="line-29-12" src={line29} />
          </Link>
          <div className="overlap-group5-42">
            <div className="distance-68 inter-normal-white-14px">{distance}</div>
          </div>
        </div>
        <div className="group-244-3">
          <div className="overlap-group4-64">
            <img className="image-6-12" src={image6} />
            <div className="flex-col-61">
              <div className="flex-row-67">
                <div className="hanam-bbq-42 inter-semi-bold-black-20px">{hanamBbq}</div>
                <div className="overlap-group1-147">
                  <div className="meat-27 inter-normal-black-7px">{meat}</div>
                </div>
              </div>
              <div className="address-45 inter-normal-white-20px">
                <span className="inter-normal-apple-20px">{spanText1}</span>
                <span className="inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="overlap-group-295">
                <img className="icon-star-145" src={iconStar} />
                <div className="x180m-47-18-are-going-11 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">180m |</span>
                  <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                  <span className="span1-45 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
            <Link to="/hanam-details-menu1">
              <img className="vector-196" src={vector2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategorySelect;
