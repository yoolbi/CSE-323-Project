import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import "./FilterListCategoryRating.css";

function FilterListCategoryRating(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    line27,
    category1,
    category2,
    vector2,
    seats,
    rating,
    line28,
    line29,
    image6,
    spanText1,
    spanText2,
    iconStar,
    spanText3,
    spanText4,
    spanText5,
    vector3,
    hanamBbq,
    meat,
    group482Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-rating screen">
        <div className="group-234-33">
          <div className="info-container-33">
            <Link to="/about">
              <img className="icon-information-33" src={iconInformation} />
            </Link>
            <div className="info-43 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-71">
            <Link to="/search-map">
              <div className="rectangle-15-33"></div>
            </Link>
            <img className="icon-search-33" src={iconSearch} />
          </div>
          <div className="flex-col-75">
            <Link to="/completedpreorderhome3">
              <img className="group-43" src={group} />
            </Link>
            <div className="my-book-37 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group6-31">
          <div className="group-90-7">
            <img className="line-27-13" src={line27} />
            <div className="group-51-14">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-rating-category-check">
                <div className="group-47-54">
                  <div className="overlap-group1-189 border-1px-c4c4c4">
                    <div className="category-70 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-210" src="/img/vector-134@2x.png" />
                    <div className="overlap-group-336">
                      <div className="category-71 inter-normal-white-13px">{category2}</div>
                      <img className="vector-211" src={vector2} />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-all">
                <div className="group-49-52">
                  <div className="overlap-group2-123 border-1px-c4c4c4">
                    <div className="seats-74 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-select">
                <div className="group-50-50">
                  <div className="overlap-group3-105">
                    <div className="rating-53 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-13" src={line28} />
          </div>
          <Link to="/filter-main-category-rating">
            <img className="line-29-14" src={line29} />
          </Link>
        </div>
        <div className="group-244-5">
          <div className="overlap-group5-45">
            <img className="image-6-15" src={image6} />
            <div className="overlap-group-container-33">
              <div className="overlap-group2-124">
                <div className="group-460">
                  <div className="flex-col-76">
                    <div className="address-48 inter-normal-white-20px">
                      <span className="inter-normal-apple-20px">{spanText1}</span>
                      <span className="inter-normal-black-20px">{spanText2}</span>
                    </div>
                    <div className="overlap-group-337">
                      <img className="icon-star-151" src={iconStar} />
                      <div className="x180m-47-18-are-going-13 inter-normal-black-20px">
                        <span className="inter-normal-black-20px">180m |</span>
                        <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                        <span className="span1-47 arial">{spanText4}</span>
                        <span className="inter-normal-black-20px">{spanText5}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/hanam-details-menu1">
                    <img className="vector-212" src={vector3} />
                  </Link>
                </div>
                <div className="hanam-bbq-49 inter-semi-bold-black-20px">{hanamBbq}</div>
              </div>
              <div className="overlap-group1-190">
                <div className="meat-31 inter-normal-black-7px">{meat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategoryRating;
