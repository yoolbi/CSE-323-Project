import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import "./FilterListRatingCategoryCheck.css";

function FilterListRatingCategoryCheck(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    line27,
    seats,
    rating,
    line28,
    line29,
    x1,
    seansRestaurant,
    spanText1,
    spanText2,
    spanText3,
    western1,
    iconStar,
    x270M495AreGoing,
    language1,
    language2,
    asian,
    fastfood,
    language3,
    meat,
    pizza,
    place,
    western2,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    rectangle92,
    category,
    vector2,
    group482Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-rating-category-check screen">
        <div className="group-234-13">
          <div className="info-container-13">
            <Link to="/about">
              <img className="icon-information-13" src={iconInformation} />
            </Link>
            <div className="info-23 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-84">
            <Link to="/search-map">
              <div className="rectangle-15-13"></div>
            </Link>
            <img className="icon-search-13" src={iconSearch} />
          </div>
          <div className="flex-col-27">
            <Link to="/completedpreorderhome3">
              <img className="group-15" src={group} />
            </Link>
            <div className="my-book-15 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group7-16">
          <div className="group-90-2">
            <img className="line-27-5" src={line27} />
            <div className="group-51-5">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-all">
                <div className="group-49-32">
                  <div className="overlap-group1-98 border-1px-c4c4c4">
                    <div className="seats-39 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-select">
                <div className="group-50-32">
                  <div className="overlap-group2-77">
                    <div className="rating-33 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-5" src={line28} />
          </div>
          <Link to="/filter-main-rating-category-check">
            <img className="line-29-5" src={line29} />
          </Link>
          <div className="overlap-group4-45">
            <img className="x1-22" src={x1} />
            <div className="flex-col-28">
              <div className="flex-row-45">
                <div className="flex-col-29">
                  <div className="seans-restaurant-16 inter-semi-bold-black-20px">{seansRestaurant}</div>
                  <div className="x35-seats-left-4 arial">
                    <span className="span0-21 arial">{spanText1}</span>
                    <span className="span1-36 arial">{spanText2}</span>
                    <span className="span2-3 inter-normal-black-20px">{spanText3}</span>
                  </div>
                </div>
                <div className="overlap-group-245">
                  <div className="western-14 inter-normal-black-7px">{western1}</div>
                </div>
                <img className="vector-143" src="/img/vector-11@2x.png" />
              </div>
              <div className="overlap-group1-99">
                <img className="icon-star-117" src={iconStar} />
                <div className="x270m-49-5-are-going-4 inter-normal-black-20px">{x270M495AreGoing}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group5-25">
            <div className="rectangle-89-9 border-0-5px-c4c4c4"></div>
            <div className="language-34 inter-normal-black-13px">{language1}</div>
            <div className="language-35 inter-normal-black-13px">{language2}</div>
            <div className="asian-14 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-21 inter-normal-black-13px">{fastfood}</div>
            <div className="language-36 inter-normal-black-13px">{language3}</div>
            <div className="meat-14 inter-normal-flamingo-13px">{meat}</div>
            <div className="pizza-9 inter-normal-black-13px">{pizza}</div>
            <div className="place-9 inter-normal-black-13px">{place}</div>
            <div className="western-15 inter-normal-black-13px">{western2}</div>
            <div className="line-container-23">
              <img className="line-34-9" src={line34} />
              <img className="line-35-9" src={line35} />
              <img className="line-37-9" src={line37} />
              <img className="line-38-9" src={line38} />
              <img className="line-36-9" src={line36} />
            </div>
            <Link to="/filter-list-rating">
              <div className="reset-9 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <img className="rectangle-92-1" src={rectangle92} />
          </div>
          <Link to="/filter-list-category-rating">
            <div className="group-47-35">
              <div className="overlap-group6-19 border-1px-orange">
                <div className="category-41 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-144" src={vector2} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterListRatingCategoryCheck;
