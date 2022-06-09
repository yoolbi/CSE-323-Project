import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import "./FilterListCategoryCheck.css";

function FilterListCategoryCheck(props) {
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
    image6,
    hanamBbq,
    meat1,
    spanText1,
    spanText2,
    iconStar,
    spanText3,
    spanText4,
    spanText5,
    vector2,
    language1,
    language2,
    asian,
    fastfood,
    language3,
    meat2,
    pizza,
    place,
    western,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    rectangle92,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-check screen">
        <div className="group-234-10">
          <div className="info-container-10">
            <Link to="/about">
              <img className="icon-information-10" src={iconInformation} />
            </Link>
            <div className="info-19 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-36">
            <Link to="/search-map">
              <div className="rectangle-15-10"></div>
            </Link>
            <img className="icon-search-10" src={iconSearch} />
          </div>
          <div className="flex-col-23">
            <Link to="/completedpreorderhome3">
              <img className="group-11" src={group} />
            </Link>
            <div className="my-book-12 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group7-13">
          <div className="group-88">
            <img className="line-27-4" src={line27} />
            <div className="group-51-4">
              <Group482 />
              <Link to="/filter-list-category-select">
                <div className="group-47-32">
                  <div className="overlap-group1-82 border-1px-orange">
                    <div className="category-36 inter-normal-flamingo-13px">{category}</div>
                    <img className="vector-133" src="/img/vector-30@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-seats">
                <div className="group-49-29">
                  <div className="overlap-group2-68 border-1px-c4c4c4">
                    <div className="seats-33 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-rating">
                <div className="group-50-30">
                  <div className="overlap-group3-52 border-1px-c4c4c4">
                    <div className="rating-30 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-4" src={line28} />
          </div>
          <Link to="/filter-main-category-check">
            <img className="line-29-4" src={line29} />
          </Link>
          <div className="overlap-group5-16">
            <img className="image-6-4" src={image6} />
            <div className="flex-col-24">
              <div className="flex-row-31">
                <div className="hanam-bbq-14 inter-semi-bold-black-20px">{hanamBbq}</div>
                <div className="overlap-group-109">
                  <div className="meat-11 inter-normal-black-7px">{meat1}</div>
                </div>
              </div>
              <div className="address-31 inter-normal-white-20px">
                <span className="inter-normal-apple-20px">{spanText1}</span>
                <span className="inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="overlap-group1-83">
                <img className="icon-star-95" src={iconStar} />
                <div className="x180m-47-18-are-going-4 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText3}</span>
                  <span className="span1-35 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
            <img className="vector-134" src={vector2} />
          </div>
          <div className="overlap-group6-13">
            <div className="rectangle-89-7 border-0-5px-c4c4c4"></div>
            <div className="language-28 inter-normal-black-13px">{language1}</div>
            <div className="language-29 inter-normal-black-13px">{language2}</div>
            <div className="asian-12 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-19 inter-normal-black-13px">{fastfood}</div>
            <div className="language-30 inter-normal-black-13px">{language3}</div>
            <div className="meat-12 inter-normal-flamingo-13px">{meat2}</div>
            <div className="pizza-7 inter-normal-black-13px">{pizza}</div>
            <div className="place-7 inter-normal-black-13px">{place}</div>
            <div className="western-12 inter-normal-black-13px">{western}</div>
            <div className="line-container-20">
              <img className="line-34-7" src={line34} />
              <img className="line-35-7" src={line35} />
              <img className="line-37-7" src={line37} />
              <img className="line-38-7" src={line38} />
              <img className="line-36-7" src={line36} />
            </div>
            <Link to="/list">
              <div className="reset-7 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <img className="rectangle-92" src={rectangle92} />
        </div>
        <img className="rectangle-29" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterListCategoryCheck;
