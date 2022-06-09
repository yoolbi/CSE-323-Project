import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import "./FilterListSeatsCategoryCheck.css";

function FilterListSeatsCategoryCheck(props) {
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
    image6,
    hanamBbq,
    meat1,
    spanText1,
    spanText2,
    iconStar,
    spanText3,
    spanText4,
    spanText5,
    category,
    vector2,
    rectangle92,
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
    group482Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-seats-category-check screen">
        <div className="group-234-14">
          <div className="info-container-14">
            <Link to="/about">
              <img className="icon-information-14" src={iconInformation} />
            </Link>
            <div className="info-24 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-85">
            <Link to="/search-map">
              <div className="rectangle-15-14"></div>
            </Link>
            <img className="icon-search-14" src={iconSearch} />
          </div>
          <div className="flex-col-30">
            <Link to="/completedpreorderhome3">
              <img className="group-16" src={group} />
            </Link>
            <div className="my-book-16 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group7-17">
          <div className="group-89-1">
            <img className="line-27-6" src={line27} />
            <div className="group-51-6">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-category-select">
                <div className="group-49-33">
                  <div className="overlap-group1-100">
                    <div className="seats-40 inter-normal-white-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-all">
                <div className="group-50-33">
                  <div className="overlap-group2-78 border-1px-c4c4c4">
                    <div className="rating-34 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-6" src={line28} />
          </div>
          <Link to="/filter-main-seats-category-check">
            <img className="line-29-6" src={line29} />
          </Link>
          <div className="overlap-group4-46">
            <img className="image-6-5" src={image6} />
            <div className="flex-col-31">
              <div className="flex-row-46">
                <div className="hanam-bbq-22 inter-semi-bold-black-20px">{hanamBbq}</div>
                <div className="overlap-group-246">
                  <div className="meat-15 inter-normal-black-7px">{meat1}</div>
                </div>
              </div>
              <div className="address-32 inter-normal-white-20px">
                <span className="inter-normal-apple-20px">{spanText1}</span>
                <span className="inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="overlap-group1-101">
                <img className="icon-star-118" src={iconStar} />
                <div className="x180m-47-18-are-going-5 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText3}</span>
                  <span className="span1-37 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
            <img className="vector-145" src="/img/vector-11@2x.png" />
          </div>
          <Link to="/filter-list-category-seats">
            <div className="group-47-36">
              <div className="overlap-group5-26 border-1px-orange">
                <div className="category-42 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-146" src={"/img/vector-30@2x.png"} />
              </div>
            </div>
          </Link>
          <div className="overlap-group6-20">
            <div className="rectangle-89-10 border-0-5px-c4c4c4"></div>
            <img className="rectangle-92-2" src={rectangle92} />
            <div className="language-37 inter-normal-black-13px">{language1}</div>
            <div className="language-38 inter-normal-black-13px">{language2}</div>
            <div className="asian-15 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-22 inter-normal-black-13px">{fastfood}</div>
            <div className="language-39 inter-normal-black-13px">{language3}</div>
            <div className="meat-16 inter-normal-flamingo-13px">{meat2}</div>
            <div className="pizza-10 inter-normal-black-13px">{pizza}</div>
            <div className="place-10 inter-normal-black-13px">{place}</div>
            <div className="western-16 inter-normal-black-13px">{western}</div>
            <div className="line-container-24">
              <img className="line-34-10" src={line34} />
              <img className="line-35-10" src={line35} />
              <img className="line-37-10" src={line37} />
              <img className="line-38-10" src={line38} />
              <img className="line-36-10" src={line36} />
            </div>
            <Link to="/filter-list-seats">
              <div className="reset-10 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListSeatsCategoryCheck;
