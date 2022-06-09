import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainSeatsRatingCategoryCheck.css";

function FilterMainSeatsRatingCategoryCheck(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    vector2,
    seeList,
    category1,
    vector3,
    category2,
    vector4,
    category3,
    vector5,
    seats1,
    seats2,
    seats3,
    seats4,
    seats5,
    seats6,
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
    distance,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-rating-category-check screen">
        <div className="group-234-30">
          <div className="info-container-30">
            <Link to="/about">
              <img className="icon-information-30" src={iconInformation} />
            </Link>
            <div className="info-40 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group6-29">
            <Link to="/search-map">
              <div className="rectangle-15-30"></div>
            </Link>
            <img className="icon-search-30" src={iconSearch} />
          </div>
          <div className="flex-col-71">
            <Link to="/completedpreorderhome3">
              <img className="group-40" src={group} />
            </Link>
            <div className="my-book-34 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group9-16">
          <img className="image-1-19" src={image1} />
          <div className="group-64-13">
            <div className="group-container-39">
              <div className="group-62-8">
                <img className="vector-199" src="/img/vector-33@2x.png" />
              </div>
              <Link to="/filter-list-seats">
                <div className="group-63-16">
                  <div className="overlap-group-328">
                    <img className="vector-200" src={vector2} />
                    <div className="see-list-14 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-40 border-1px-mercury">
              <div className="overlap-group2-119">
                <div className="rectangle-81-8 border-1px-c4c4c4"></div>
                <div className="category-65 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-201" src={vector3} />
                <Link to="/filter-main-all">
                  <div className="group-47-52">
                    <div className="overlap-group-329">
                      <div className="category-66 inter-normal-white-13px">{category2}</div>
                      <img className="vector-202" src={vector4} />
                    </div>
                  </div>
                
                <div className="overlap-group1-184 border-1px-orange">
                  <div className="category-67 inter-normal-flamingo-13px">{category3}</div>
                  <img className="vector-203" src={vector5} />
                </div>
                </Link>
              </div>
              <Link to="/filter-main-category-rating">
                <div className="group-49-50">
                  <div className="overlap-group4-68 border-1px-c4c4c4">
                    <div className="seats-68 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-326 border-1px-c4c4c4">
                      <div className="seats-68 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-327">
                        <div className="seats-69 inter-normal-white-14px">{seats3}</div>
                      </div>
                      <div className="overlap-group1-185 border-1px-c4c4c4">
                        <div className="seats-70 inter-normal-spicy-pink-14px">{seats4}</div>
                      </div>
                      <div className="overlap-group-326 border-1px-c4c4c4">
                        <div className="seats-68 inter-normal-spicy-pink-14px">{seats5}</div>
                        <div className="overlap-group-327">
                          <div className="seats-71 inter-normal-white-14px">{seats6}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="overlap-group3-102">
                <Link to="/filter-main-seats">
                  <div className="rectangle-60-6"></div>
                </Link>
                <div className="rating-50 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </div>
          <div className="ellipse-16-14 border-1px-malibu"></div>
          <div className="ellipse-17-14 border-2px-white"></div>
          <img className="polygon-2-14" src={polygon2} />
          <div className="group-363">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-17 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-44 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <div className="overlap-group7-22">
            <div className="rectangle-89-15 border-0-5px-c4c4c4"></div>
            <img className="rectangle-92-7" src={rectangle92} />
            <div className="language-53 inter-normal-black-13px">{language1}</div>
            <div className="language-54 inter-normal-black-13px">{language2}</div>
            <div className="asian-23 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-32 inter-normal-black-13px">{fastfood}</div>
            <div className="language-55 inter-normal-black-13px">{language3}</div>
            <div className="meat-28 inter-normal-flamingo-13px">{meat}</div>
            <div className="pizza-15 inter-normal-black-13px">{pizza}</div>
            <div className="place-15 inter-normal-black-13px">{place}</div>
            <div className="western-24 inter-normal-black-13px">{western}</div>
            <div className="line-container-30">
              <img className="line-34-15" src={line34} />
              <img className="line-35-15" src={line35} />
              <img className="line-37-15" src={line37} />
            </div>
            <img className="line-38-15" src={line38} />
            <img className="line-36-15" src={line36} />
            <Link to="/filter-main-seats-rating">
              <div className="reset-15 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <div className="overlap-group8-15">
            <div className="distance-70 inter-normal-white-14px">{distance}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsRatingCategoryCheck;
