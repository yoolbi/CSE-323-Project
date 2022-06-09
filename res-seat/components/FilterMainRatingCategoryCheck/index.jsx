import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainRatingCategoryCheck.css";

function FilterMainRatingCategoryCheck(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    vector2,
    seeList,
    distance,
    category1,
    vector3,
    category2,
    vector4,
    category3,
    vector5,
    seats1,
    seats2,
    seats3,
    rating,
    polygon2,
    hanamBbq,
    rectangle92,
    language1,
    language2,
    asian,
    fastfood,
    language3,
    meat,
    pizza,
    place,
    western,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-rating-category-check screen">
        <div className="group-234-22">
          <div className="info-container-22">
            <Link to="/about">
              <img className="icon-information-22" src={iconInformation} />
            </Link>
            <div className="info-32 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group7-20">
            <Link to="/search-map">
              <div className="rectangle-15-22"></div>
            </Link>
            <img className="icon-search-22" src={iconSearch} />
          </div>
          <div className="flex-col-51">
            <Link to="/completedpreorderhome3">
              <img className="group-30" src={group} />
            </Link>
            <div className="my-book-24 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group9-14">
          <img className="image-1-15" src={image1} />
          <div className="group-64-10">
            <div className="group-container-34">
              <div className="group-62-6">
                <img className="vector-174" src="/img/vector-33@2x.png" />
              </div>
              <Link to="/filter-list-seats">
                <div className="group-63-12">
                  <div className="overlap-group-276">
                    <img className="vector-175" src={vector2} />
                    <div className="see-list-10 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group-container-27 border-1px-mercury">
              <div className="overlap-group5-37">
                <div className="distance-64 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="overlap-group2-96">
                <div className="rectangle-81-6 border-1px-c4c4c4"></div>
                <div className="category-51 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-176" src={vector3} />
                <Link to="/filter-main-category-rating">
                  <div className="group-47-44">
                    <div className="overlap-group-277">
                      <div className="category-52 inter-normal-white-13px">{category2}</div>
                      <img className="vector-177" src={vector4} />
                    </div>
                  </div>
                
                <div className="overlap-group1-128 border-1px-orange">
                  <div className="category-53 inter-normal-flamingo-13px">{category3}</div>
                  <img className="vector-178" src={vector5} />
                </div>
                </Link>
              </div>
              <div className="overlap-group4-59">
                <div className="rectangle-33-2 border-1px-c4c4c4"></div>
                <div className="seats-53 inter-normal-spicy-pink-14px">{seats1}</div>
                <div className="overlap-group-278">
                  <div className="seats-54 inter-normal-white-14px">{seats2}</div>
                </div>
                <Link to="/filter-main-all">
                  <div className="group-50-41">
                    <div className="overlap-group1-129 border-1px-c4c4c4">
                      <div className="seats-55 inter-normal-spicy-pink-14px">{seats3}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group3-93">
                <Link to="/filter-main-category-select">
                  <div className="rectangle-60-4"></div>
                </Link>
                <div className="rating-42 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </div>
          <div className="ellipse-16-10 border-1px-malibu"></div>
          <div className="ellipse-17-10 border-2px-white"></div>
          <img className="polygon-2-10" src={polygon2} />
          <div className="group-374">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-13 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-36 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <div className="overlap-group8-14">
            <div className="rectangle-89-12 border-0-5px-c4c4c4"></div>
            <img className="rectangle-92-4" src={rectangle92} />
            <div className="language-44 inter-normal-black-13px">{language1}</div>
            <div className="language-45 inter-normal-black-13px">{language2}</div>
            <div className="asian-19 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-28 inter-normal-black-13px">{fastfood}</div>
            <div className="language-46 inter-normal-black-13px">{language3}</div>
            <div className="meat-21 inter-normal-flamingo-13px">{meat}</div>
            <div className="pizza-12 inter-normal-black-13px">{pizza}</div>
            <div className="place-12 inter-normal-black-13px">{place}</div>
            <div className="western-20 inter-normal-black-13px">{western}</div>
            <div className="line-container-27">
              <img className="line-34-12" src={line34} />
              <img className="line-35-12" src={line35} />
              <img className="line-37-12" src={line37} />
            </div>
            <img className="line-38-12" src={line38} />
            <img className="line-36-12" src={line36} />
            <Link to="/filter-main-rating">
              <div className="reset-12 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainRatingCategoryCheck;
