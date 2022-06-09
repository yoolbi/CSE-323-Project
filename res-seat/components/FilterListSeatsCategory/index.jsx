import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import Group245 from "../Group245";
import Group242 from "../Group242";
import Group247 from "../Group247";
import "./FilterListSeatsCategory.css";

function FilterListSeatsCategory(props) {
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
    group245Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-seats-category screen">
        <div className="group-234-3">
          <div className="info-container-3">
            <Link to="/about">
              <img className="icon-information-3" src={iconInformation} />
            </Link>
            <div className="info-3 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-36">
            <Link to="/search-map">
              <div className="rectangle-15-3"></div>
            </Link>
            <img className="icon-search-3" src={iconSearch} />
          </div>
          <div className="flex-col-10">
            <Link to="/completedpreorderhome3">
              <img className="group-3" src={group} />
            </Link>
            <div className="my-book-5 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group12-2">
          <div className="group-89">
            <img className="line-27-2" src={line27} />
            <div className="group-51-2">
              <Group482 />
              <Link to="/filter-list-category-select">
                <div className="group-49-25">
                  <div className="overlap-group1-54">
                    <div className="seats-25 inter-normal-white-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-rating">
                <div className="group-50-25">
                  <div className="overlap-group2-49 border-1px-c4c4c4">
                    <div className="rating-25 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-2" src={line28} />
          </div>
          <Link to="/filter-main-seats-category-select">
            <img className="line-29-2" src={line29} />
          </Link>
          <div className="overlap-group4-21">
            <img className="image-6-2" src={image6} />
            <div className="flex-col-11">
              <div className="flex-row-23">
                <div className="hanam-bbq-4 inter-semi-bold-black-20px">{hanamBbq}</div>
                <div className="overlap-group-77">
                  <div className="meat-4 inter-normal-black-7px">{meat1}</div>
                </div>
              </div>
              <div className="address-25 inter-normal-white-20px">
                <span className="inter-normal-apple-20px">{spanText1}</span>
                <span className="inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="overlap-group-75">
                <img className="icon-star-26" src={iconStar1} />
                <div className="x180m-47-18-are-going-2 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText3}</span>
                  <span className="span1-30 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
            <img className="vector-92" src="/img/vector-11@2x.png" />
          </div>
          <Link to="/filter-list-seats">
            <div className="group-47-26">
              <div className="overlap-group10-5 border-1px-orange">
                <div className="category-25 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-185" src={"/img/vector-30@2x.png"} />
              </div>
            </div>
          </Link>
          <div className="overlap-group11-3">
            <div className="rectangle-89-2 border-0-5px-c4c4c4"></div>
            <div className="language-13 inter-normal-black-13px">{language1}</div>
            <div className="language-14 inter-normal-black-13px">{language2}</div>
            <div className="asian-4 inter-normal-black-13px">{asian1}</div>
            <div className="fastfood-14 inter-normal-black-13px">{fastfood}</div>
            <div className="language-15 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-list-category-seats">
              <div className="meat-5 inter-normal-black-13px">{meat2}</div>
            </Link>
            <div className="pizza-2 inter-normal-black-13px">{pizza}</div>
            <div className="place-2 inter-normal-black-13px">{place}</div>
            <div className="western-4 inter-normal-black-13px">{western1}</div>
            <div className="line-container-2">
              <img className="line-34-2" src={line34} />
              <img className="line-35-2" src={line35} />
              <img className="line-37-2" src={line37} />
              <img className="line-38-2" src={line38} />
              <img className="line-36-2" src={line36} />
              <Link to="/filter-list-seats-category-check">
              {/* <div style={{marginLeft: "155px", marginTop:"75px"}}></div> */}
              <div className="meat-5 inter-normal-black-13px">{meat2}</div>
              </Link>
            </div>
            <Link to="/filter-list-seats">
              <div className="reset-2 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
        <Group245 className={group245Props.className} />
        <Group242 />
        <div className="group-24-1">
          <div className="overlap-group-76">
            <img className="x1-16" src={x11} />
            <div className="overlap-group-container-11">
              <div className="overlap-group2-48">
                <div className="group-47-25">
                  <div className="flex-col-12">
                    <div className="address-26 arial">
                      <span className="span0-17 arial">{spanText6}</span>
                      <span className="span-31 inter-normal-black-20px">{spanText7}</span>
                    </div>
                    <div className="overlap-group-75">
                      <img className="icon-star-26" src={iconStar2} />
                      <div className="x120m-48-18-are-going-2 inter-normal-black-20px">
                        <span className="inter-normal-black-20px">120m |</span>
                        <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.8 |</span>
                        <span className="span1-30 arial">{spanText9}</span>
                        <span className="inter-normal-black-20px">{spanText10}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/uncle-s-details-menu1">
                    <img className="vector-94" src={vector3} />
                  </Link>
                </div>
                <div className="uncles-3 inter-semi-bold-black-20px">{uncles}</div>
              </div>
              <div className="overlap-group1-55">
                <div className="asian-5 inter-normal-black-7px">{asian2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-24-1">
          <div className="overlap-group-76">
            <img className="x1-17" src={x12} />
            <div className="overlap-group-container-11">
              <div className="overlap-group2-48">
                <div className="group-47-25">
                  <div className="flex-col-13">
                    <div className="x35-seats-left-2 arial">
                      <span className="span0-18 arial">{spanText11}</span>
                      <span className="span1-31 arial">{spanText12}</span>
                      <span className="span-31 inter-normal-black-20px">{spanText13}</span>
                    </div>
                    <div className="overlap-group-78">
                      <img className="icon-star-26" src={iconStar3} />
                      {/* <div className="x270m-49-5-are-going-2 inter-normal-black-20px">{x270M495AreGoing}</div> */}
                      <span className="inter-normal-black-20px">270m |</span>
                        <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.9 |</span>
                        <span className="span1-30 arial">5</span>
                        <span className="inter-normal-black-20px">{spanText10}</span>
                    </div>
                  </div>
                  <Link to="/sean-s-details-menu1">
                    <img className="vector-95" src={vector4} />
                  </Link>
                </div>
                <div className="seans-restaurant-3 inter-semi-bold-black-20px">{seansRestaurant}</div>
              </div>
              <div className="overlap-group1-56">
                <div className="western-5 inter-normal-black-7px">{western2}</div>
              </div>
            </div>
          </div>
        </div>
        <Group247 />
      </div>
    </div>
  );
}

export default FilterListSeatsCategory;
