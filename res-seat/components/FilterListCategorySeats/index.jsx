import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import "./FilterListCategorySeats.css";

function FilterListCategorySeats(props) {
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
    rating1,
    rating2,
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
      <div className="filter-list-category-seats screen">
        <div className="group-234-32">
          <div className="info-container-32">
            <Link to="/about">
              <img className="icon-information-32" src={iconInformation} />
            </Link>
            <div className="info-42 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-70">
            <Link to="/search-map">
              <div className="rectangle-15-32"></div>
            </Link>
            <img className="icon-search-32" src={iconSearch} />
          </div>
          <div className="flex-col-73">
            <Link to="/completedpreorderhome3">
              <img className="group-42" src={group} />
            </Link>
            <div className="my-book-36 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group6-30">
          <div className="group-90-6">
            <img className="line-27-12" src={line27} />
            <div className="group-51-13">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-seats-category-check">
                <div className="group-47-53">
                  <div className="overlap-group1-187 border-1px-c4c4c4">
                    <div className="category-68 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-207" src="/img/vector-134@2x.png" />
                    <div className="overlap-group-332">
                      <div className="category-69 inter-normal-white-13px">{category2}</div>
                      <img className="vector-208" src={vector2} />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-select">
                <div className="group-49-51">
                  <div className="overlap-group2-121 border-1px-c4c4c4">
                    <div className="seats-72 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-333">
                      <div className="seats-73 inter-normal-white-14px">{seats2}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-all">
                <div className="group-50-49">
                  <div className="overlap-group3-104">
                    <div className="rating-51 inter-normal-white-14px">{rating1}</div>
                    <div className="overlap-group-334 border-1px-c4c4c4">
                      <div className="rating-52 inter-normal-spicy-pink-14px">{rating2}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-12" src={line28} />
          </div>
          <Link to="/filter-main-category-seats">
            <img className="line-29-13" src={line29} />
          </Link>
        </div>
        <div className="group-244-4">
          <div className="overlap-group5-44">
            <img className="image-6-14" src={image6} />
            <div className="overlap-group-container-32">
              <div className="overlap-group2-122">
                <div className="group-459">
                  <div className="flex-col-74">
                    <div className="address-47 inter-normal-white-20px">
                      <span className="inter-normal-apple-20px">{spanText1}</span>
                      <span className="inter-normal-black-20px">{spanText2}</span>
                    </div>
                    <div className="overlap-group-335">
                      <img className="icon-star-150" src={iconStar} />
                      <div className="x180m-47-18-are-going-12 inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText3}</span>
                        <span className="span1-46 arial">{spanText4}</span>
                        <span className="inter-normal-black-20px">{spanText5}</span> */}
                                              <span className="inter-normal-black-20px">180m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                      <span className="span1-38 arial"> 18 {spanText5}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/hanam-details-menu1">
                    <img className="vector-209" src={vector3} />
                  </Link>
                </div>
                <div className="hanam-bbq-48 inter-semi-bold-black-20px">{hanamBbq}</div>
              </div>
              <div className="overlap-group1-188">
                <div className="meat-30 inter-normal-black-7px">{meat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListCategorySeats;
