import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import "./FilterListALL.css";

function FilterListALL(props) {
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
      <div className="filter-list-all screen">
        <div className="group-234-27">
          <div className="info-container-27">
            <Link to="/about">
              <img className="icon-information-27" src={iconInformation} />
            </Link>
            <div className="info-37 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-63">
            <Link to="/search-map">
              <div className="rectangle-15-27"></div>
            </Link>
            <img className="icon-search-27" src={iconSearch} />
          </div>
          <div className="flex-col-58">
            <Link to="/completedpreorderhome3">
              <img className="group-36" src={group} />
            </Link>
            <div className="my-book-29 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group6-27">
          <div className="group-90-5">
            <img className="line-27-10" src={line27} />
            <div className="group-51-11">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-all-category-check">
                <div className="group-47-49">
                  <div className="overlap-group1-143 border-1px-c4c4c4">
                    <div className="category-61 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-192" src="/img/vector-134@2x.png" />
                    <div className="overlap-group-291">
                      <div className="category-62 inter-normal-white-13px">{category2}</div>
                      <img className="vector-193" src={vector2} />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-rating">
                <div className="group-49-47">
                  <div className="overlap-group2-107 border-1px-c4c4c4">
                    <div className="seats-64 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group1-144 border-1px-c4c4c4">
                      <div className="seats-64 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-292">
                        <div className="seats-65 inter-normal-white-14px">{seats3}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-category-seats">
                <div className="group-50-46">
                  <div className="overlap-group3-96">
                    <div className="rating-47 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-10" src={line28} />
          </div>
          <Link to="/filter-main-all">
            <img className="line-29-11" src={line29} />
          </Link>
        </div>
        <div className="group-244-2">
          <div className="overlap-group5-41">
            <img className="image-6-11" src={image6} />
            <div className="overlap-group-container-31">
              <div className="overlap-group2-108">
                <div className="group-467">
                  <div className="flex-col-59">
                    <div className="address-44 inter-normal-white-20px">
                      <span className="inter-normal-apple-20px">{spanText1}</span>
                      <span className="inter-normal-black-20px">{spanText2}</span>
                    </div>
                    <div className="overlap-group-293">
                      <img className="icon-star-144" src={iconStar} />
                      <div className="x180m-47-18-are-going-10 inter-normal-black-20px">
                        <span className="inter-normal-black-20px">180m |</span>
                        <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                        <span className="span1-44 arial">{spanText4}</span>
                        <span className="inter-normal-black-20px">{spanText5}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/hanam-details-menu1">
                    <img className="vector-194" src={vector3} />
                  </Link>
                </div>
                <div className="hanam-bbq-41 inter-semi-bold-black-20px">{hanamBbq}</div>
              </div>
              <div className="overlap-group1-145">
                <div className="meat-26 inter-normal-black-7px">{meat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListALL;
