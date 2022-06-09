import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import "./FilterListALLCategoryCheck.css";

function FilterListALLCategoryCheck(props) {
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
    seats1,
    seats2,
    seats3,
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
    vector3,
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
    group482Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-all-category-check screen">
        <div className="group-234-24">
          <div className="info-container-24">
            <Link to="/about">
              <img className="icon-information-24" src={iconInformation} />
            </Link>
            <div className="info-34 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-61">
            <Link to="/search-map">
              <div className="rectangle-15-24"></div>
            </Link>
            <img className="icon-search-24" src={iconSearch} />
          </div>
          <div className="flex-col-53">
            <Link to="/completedpreorderhome3">
              <img className="group-32" src={group} />
            </Link>
            <div className="my-book-26 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group7-21">
          <div className="group-90-4">
            <img className="line-27-8" src={line27} />
            <div className="group-51-9">
              <Group482 className={group482Props.className} />
              {/* <Link to="/filter-list-seats-rating">
                <div className="group-47-46">
                  <div className="overlap-group1-132 border-1px-orange">
                    <div className="category-55 inter-normal-flamingo-13px">{category1}</div>
                    <img className="vector-181" src="/img/vector-134@2x.png" />
                    <div className="overlap-group-281">
                      <div className="category-56 inter-normal-flamingo-13px">{category2}</div>
                      <img className="vector-182" src="/img/vector-30@2x.png" />
                    </div>
                  </div>
                </div>
              </Link> */}
              <Link to="/filter-list-all">
                <div className="group-47-46">
                  <div className="overlap-group1-82 border-1px-orange">
                    <div className="category-36 inter-normal-flamingo-13px">{category1}</div>
                    <img className="vector-133" src="/img/vector-30@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-rating">
                <div className="group-49-44">
                  <div className="overlap-group2-101 border-1px-c4c4c4">
                    <div className="seats-60 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group1-133 border-1px-c4c4c4">
                      <div className="seats-60 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-282">
                        <div className="seats-61 inter-normal-white-14px">{seats3}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-seats">
                <div className="group-50-43">
                  <div className="overlap-group3-94">
                    <div className="rating-44 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-8" src={line28} />
          </div>
          <Link to="/filter-main-seats-rating-category-check">
            <img className="line-29-9" src={line29} />
          </Link>
          <div className="overlap-group5-39">
            <img className="image-6-9" src={image6} />
            <div className="flex-col-54">
              <div className="flex-row-65">
                <div className="hanam-bbq-38 inter-semi-bold-black-20px">{hanamBbq}</div>
                <div className="overlap-group-283">
                  <div className="meat-22 inter-normal-black-7px">{meat1}</div>
                </div>
              </div>
              <div className="address-41 inter-normal-white-20px">
                <span className="inter-normal-apple-20px">{spanText1}</span>
                <span className="inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="overlap-group1-134">
                <img className="icon-star-142" src={iconStar} />
                <div className="x180m-47-18-are-going-8 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText3}</span>
                  <span className="span1-41 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
            <img className="vector-183" src={vector3} />
          </div>
          <div className="overlap-group6-25">
            <div className="rectangle-89-13 border-0-5px-c4c4c4"></div>
            <div className="language-47 inter-normal-black-13px">{language1}</div>
            <div className="language-48 inter-normal-black-13px">{language2}</div>
            <div className="asian-20 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-29 inter-normal-black-13px">{fastfood}</div>
            <div className="language-49 inter-normal-black-13px">{language3}</div>
            <div className="meat-23 inter-normal-flamingo-13px">{meat2}</div>
            <div className="pizza-13 inter-normal-black-13px">{pizza}</div>
            <div className="place-13 inter-normal-black-13px">{place}</div>
            <div className="western-21 inter-normal-black-13px">{western}</div>
            <div className="line-container-28">
              <img className="line-34-13" src={line34} />
              <img className="line-35-13" src={line35} />
              <img className="line-37-13" src={line37} />
              <img className="line-38-13" src={line38} />
              <img className="line-36-13" src={line36} />
            </div>
            <Link to="/filter-list-seats-rating">
              <div className="reset-13 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <img className="rectangle-92-5" src={rectangle92} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListALLCategoryCheck;
