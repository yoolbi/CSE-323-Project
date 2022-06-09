import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import Group245 from "../Group245";
import Group242 from "../Group242";
import Group247 from "../Group247";
import "./FilterListSeatsRatingCategory.css";

function FilterListSeatsRatingCategory(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    line27,
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
    iconStar1,
    spanText3,
    spanText4,
    spanText5,
    category,
    vector2,
    language1,
    language2,
    asian1,
    fastfood,
    language3,
    meat2,
    pizza,
    place,
    western1,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    x11,
    spanText6,
    spanText7,
    iconStar2,
    spanText8,
    spanText9,
    spanText10,
    vector3,
    uncles,
    asian2,
    x12,
    spanText11,
    spanText12,
    spanText13,
    iconStar3,
    x270M495AreGoing,
    vector4,
    seansRestaurant,
    western2,
    group482Props,
    group245Props,
    group242Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-seats-rating-category screen">
        <div className="group-234-8">
          <div className="info-container-8">
            <Link to="/about">
              <img className="icon-information-8" src={iconInformation} />
            </Link>
            <div className="info-17 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-35">
            <Link to="/search-map">
              <div className="rectangle-15-8"></div>
            </Link>
            <img className="icon-search-8" src={iconSearch} />
          </div>
          <div className="flex-col-18">
            <Link to="/completedpreorderhome3">
              <img className="group-9" src={group} />
            </Link>
            <div className="my-book-10 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group13-1">
          <div className="group-90-1">
            <img className="line-27-3" src={line27} />
            <div className="group-51-3">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-rating">
                <div className="group-49-27">
                  <div className="overlap-group2-66 border-1px-c4c4c4">
                    <div className="seats-30 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group1-77 border-1px-c4c4c4">
                      <div className="seats-30 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-103">
                        <div className="seats-31 inter-normal-white-14px">{seats3}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats">
                <div className="group-50-28">
                  <div className="overlap-group3-50">
                    <div className="rating-28 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-3" src={line28} />
          </div>
          <Link to="/filter-main-seats-rating-category">
            <img className="line-29-3" src={line29} />
          </Link>
          <div className="overlap-group5-14">
            <img className="image-6-3" src={image6} />
            <div className="flex-col-19">
              <div className="flex-row-30">
                <div className="hanam-bbq-12 inter-semi-bold-black-20px">{hanamBbq}</div>
                <div className="overlap-group-104">
                  <div className="meat-8 inter-normal-black-7px">{meat1}</div>
                </div>
              </div>
              <div className="address-29 inter-normal-white-20px">
                <span className="inter-normal-apple-20px">{spanText1}</span>
                <span className="inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="overlap-group-101">
                <img className="icon-star-94" src={iconStar1} />
                <div className="x180m-47-18-are-going-3 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText3}</span>
                  <span className="span1-33 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
            <img className="vector-124" src="/img/vector-11@2x.png" />
          </div>
          <Link to="/filter-list-seats-rating">
            <div className="group-47-30">
              <div className="overlap-group11-7 border-1px-orange">
                <div className="category-32 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-125" src={vector2} />
              </div>
            </div>
          </Link>
          <div className="overlap-group12-3">
            <div className="rectangle-89-5 border-0-5px-c4c4c4"></div>
            <div className="language-22 inter-normal-black-13px">{language1}</div>
            <div className="language-23 inter-normal-black-13px">{language2}</div>
            <div className="asian-9 inter-normal-black-13px">{asian1}</div>
            <div className="fastfood-17 inter-normal-black-13px">{fastfood}</div>
            <div className="language-24 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-list-all">
              <div className="meat-9 inter-normal-black-13px">{meat2}</div>
            </Link>
            <div className="pizza-5 inter-normal-black-13px">{pizza}</div>
            <div className="place-5 inter-normal-black-13px">{place}</div>
            <div className="western-9 inter-normal-black-13px">{western1}</div>
            <div className="line-container-18">
              <img className="line-34-5" src={line34} />
              <img className="line-35-5" src={line35} />
              <img className="line-37-5" src={line37} />
              <img className="line-38-5" src={line38} />
              <img className="line-36-5" src={line36} />
              <Link to="/filter-list-all">
              {/* <div style={{marginLeft: "155px", marginTop:"75px"}}></div> */}
              <div className="meat-5 inter-normal-black-13px">{meat2}</div>
              </Link>
            </div>
            <Link to="/filter-list-seats-rating">
              <div className="reset-5 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
        <Group245 className={group245Props.className} />
        <div className="group-243-2">
          <div className="overlap-group-102">
            <img className="x1-20" src={x11} />
            <div className="overlap-group-container-16">
              <div className="overlap-group2-65">
                <div className="group-48-8">
                  <div className="flex-col-20">
                    <div className="address-30 arial">
                      <span className="span0-19 arial">{spanText6}</span>
                      <span className="span-44 inter-normal-black-20px">{spanText7}</span>
                    </div>
                    <div className="overlap-group-101">
                      <img className="icon-star-94" src={iconStar2} />
                      <div className="x120m-48-18-are-going-3 inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText8}</span>
                        <span className="span1-33 arial">{spanText9}</span>
                        <span className="inter-normal-black-20px">{spanText10}</span> */}
                           <span className="inter-normal-black-20px">120m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.8 |</span>
                      <span className="span1-38 arial"> 18 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/uncle-s-details-menu1">
                    <img className="vector-126" src={vector3} />
                  </Link>
                </div>
                <div className="uncles-13 inter-semi-bold-black-20px">{uncles}</div>
              </div>
              <div className="overlap-group1-78">
                <div className="asian-10 inter-normal-black-7px">{asian2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-246">
          <div className="overlap-group-102">
            <img className="x1-21" src={x12} />
            <div className="overlap-group-container-16">
              <div className="overlap-group2-65">
                <div className="group-48-8">
                  <div className="flex-col-21">
                    <div className="x35-seats-left-3 arial">
                      <span className="span0-20 arial">{spanText11}</span>
                      <span className="span1-34 arial">{spanText12}</span>
                      <span className="span-44 inter-normal-black-20px">{spanText13}</span>
                    </div>
                    <div className="overlap-group-105">
                      <img className="icon-star-94" src={iconStar3} />
                      {/* <div className="x270m-49-5-are-going-3 inter-normal-black-20px">{x270M495AreGoing}</div> */}
                      <span className="inter-normal-black-20px">270m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.9 |</span>
                      <span className="span1-38 arial"> 5 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                    </div>
                  </div>
                  <Link to="/sean-s-details-menu1">
                    <img className="vector-127" src={vector4} />
                  </Link>
                </div>
                <div className="seans-restaurant-12 inter-semi-bold-black-20px">{seansRestaurant}</div>
              </div>
              <div className="overlap-group1-79">
                <div className="western-10 inter-normal-black-7px">{western2}</div>
              </div>
            </div>
          </div>
        </div>
        <Group242 className={group242Props.className} />
        <Group247 />
      </div>
    </div>
  );
}

export default FilterListSeatsRatingCategory;
