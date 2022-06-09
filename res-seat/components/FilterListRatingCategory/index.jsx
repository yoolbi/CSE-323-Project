import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import Group245 from "../Group245";
import Group242 from "../Group242";
import Group247 from "../Group247";
import "./FilterListRatingCategory.css";

function FilterListRatingCategory(props) {
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
    x11,
    seansRestaurant,
    spanText1,
    spanText2,
    spanText3,
    western1,
    iconStar1,
    x270M495AreGoing,
    language1,
    language2,
    asian1,
    fastfood,
    language3,
    meat1,
    pizza,
    place,
    western2,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    category,
    vector2,
    x12,
    spanText4,
    spanText5,
    iconStar2,
    spanText6,
    spanText7,
    spanText8,
    vector3,
    uncles,
    asian2,
    image6,
    spanText9,
    spanText10,
    iconStar3,
    spanText11,
    spanText12,
    spanText13,
    vector4,
    hanamBbq,
    meat2,
    group482Props,
    group245Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-rating-category screen">
        <div className="group-234-2">
          <div className="info-container-2">
            <Link to="/about">
              <img className="icon-information-2" src={iconInformation} />
            </Link>
            <div className="info-2 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-35">
            <Link to="/search-map">
              <div className="rectangle-15-2"></div>
            </Link>
            <img className="icon-search-2" src={iconSearch} />
          </div>
          <div className="flex-col-7">
            <Link to="/completedpreorderhome3">
              <img className="group-2" src={group} />
            </Link>
            <div className="my-book-4 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group12-1">
          <div className="group-90">
            <img className="line-27-1" src={line27} />
            <div className="group-51-1">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-seats-rating">
                <div className="group-49-24">
                  <div className="overlap-group1-46 border-1px-c4c4c4">
                    <div className="seats-24 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/list">
                <div className="group-50-24">
                  <div className="overlap-group2-43">
                    <div className="rating-24 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-1" src={line28} />
          </div>
          <Link to="/filter-main-seats-category">
            <img className="line-29-1" src={line29} />
          </Link>
          <div className="overlap-group4-20">
            <img className="x1-10" src={x11} />
            <div className="flex-col-8">
              <div className="flex-row-16">
                <div className="flex-col-9">
                  <div className="seans-restaurant-2 inter-semi-bold-black-20px">{seansRestaurant}</div>
                  <div className="x35-seats-left-1 arial">
                    <span className="span0-9 arial">{spanText1}</span>
                    <span className="span1-17 arial">{spanText2}</span>
                    <span className="span-22 inter-normal-black-20px">{spanText3}</span>
                  </div>
                </div>
                <div className="overlap-group-68">
                  <div className="western-2 inter-normal-black-7px">{western1}</div>
                </div>
                <img className="vector-84" src="/img/vector-11@2x.png" />
              </div>
              <div className="overlap-group1-47">
                <img className="icon-star-19" src={iconStar1} />
                <div className="x270m-49-5-are-going-1 inter-normal-black-20px">{x270M495AreGoing}</div>
              </div>
            </div>
          </div>
          {/* <div className="overlap-group10-3">
            <div className="rectangle-89-1 border-0-5px-c4c4c4"></div>
            <div className="language-10 inter-normal-black-13px">{language1}</div>
            <div className="language-11 inter-normal-black-13px">{language2}</div>
            <div className="asian-2 inter-normal-black-13px">{asian1}</div>
            <div className="fastfood-9 inter-normal-black-13px">{fastfood}</div>
            <div className="language-12 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-list-category-rating">
              <div className="meat-2 inter-normal-black-13px">{meat1}</div>
            </Link>
            <div className="pizza-1 inter-normal-black-13px">{pizza}</div>
            <div className="place-1 inter-normal-black-13px">{place}</div>
            <div className="western-3 inter-normal-black-13px">{western2}</div>
            <div className="line-container-1">
              <img className="line-34-1" src={line34} />
              <img className="line-35-1" src={line35} />
              <img className="line-37-1" src={line37} />
              <img className="line-38-1" src={line38} />
              <img className="line-36-1" src={line36} />
            </div>
            <Link to="/filter-list-rating">
              <div className="reset-1 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div> */}
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
              <Link to="/filter-list-category-rating">
              {/* <div style={{marginLeft: "155px", marginTop:"75px"}}></div> */}
              <div className="meat-5 inter-normal-black-13px">{meat2}</div>
              </Link>
            </div>
            <Link to="/filter-list-seats">
              <div className="reset-2 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <Link to="/filter-list-rating">
            <div className="group-47-24">
              <div className="overlap-group11-2 border-1px-orange">
                <div className="category-24 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-85" src={"/img/vector-30@2x.png"} />
              </div>
            </div>
          </Link>
        </div>
        <div className="group-243-1">
          <div className="overlap-group-66">
            <img className="x1-11" src={x12} />
            <div className="overlap-group-container-9">
              <div className="overlap-group2-42">
                <div className="group-4">
                  <div className="flex-col-6">
                    <div className="address-17 arial">
                      <span className="span0-10 arial">{spanText4}</span>
                      <span className="span-22 inter-normal-black-20px">{spanText5}</span>
                    </div>
                    <div className="overlap-group-67">
                      <img className="icon-star-19" src={iconStar2} />
                      <div className="x120m-48-18-are-going-1 inter-normal-black-20px">
                        <span className="inter-normal-black-20px">{spanText6}</span>
                        <span className="span1-16 arial">{spanText7}</span>
                        <span className="inter-normal-black-20px">{spanText8}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/uncle-s-details-menu1">
                    <img className="vector-83" src={vector3} />
                  </Link>
                </div>
                <div className="uncles-2 inter-semi-bold-black-20px">{uncles}</div>
              </div>
              <div className="overlap-group1-48">
                <div className="asian-3 inter-normal-black-7px">{asian2}</div>
              </div>
            </div>
          </div>
        </div>
        <Group245 className={group245Props.className} />
        <div className="group-244">
          <div className="overlap-group-66">
            <img className="image-6-1" src={image6} />
            <div className="overlap-group-container-10">
              <div className="overlap-group2-42">
                <div className="group-4">
                  <div className="flex-col-6">
                    <div className="address-18 inter-normal-white-20px">
                      <span className="inter-normal-apple-20px">{spanText9}</span>
                      <span className="inter-normal-black-20px">{spanText10}</span>
                    </div>
                    <div className="overlap-group-67">
                      <img className="icon-star-19" src={iconStar3} />
                      <div className="x180m-47-18-are-going-1 inter-normal-black-20px">
                        <span className="inter-normal-black-20px">{spanText11}</span>
                        <span className="span1-16 arial">{spanText12}</span>
                        <span className="inter-normal-black-20px">{spanText13}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/hanam-details-menu1">
                    <img className="vector-83" src={vector4} />
                  </Link>
                </div>
                <div className="hanam-bbq-3 inter-semi-bold-black-20px">{hanamBbq}</div>
              </div>
              <div className="overlap-group1-49">
                <div className="meat-3 inter-normal-black-7px">{meat2}</div>
              </div>
            </div>
          </div>
        </div>
        <Group242 />
        <Group247 />
      </div>
    </div>
  );
}

export default FilterListRatingCategory;
