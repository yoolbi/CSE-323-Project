import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import Group245 from "../Group245";
import Group247 from "../Group247";
import "./FilterListCategory.css";

function FilterListCategory(props) {
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
    x11,
    aSoupShop,
    spanText1,
    spanText2,
    fastfood1,
    vector2,
    iconStar1,
    spanText3,
    spanText4,
    spanText5,
    language1,
    language2,
    asian1,
    fastfood2,
    language3,
    meat1,
    pizza,
    place,
    western1,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    line29,
    x12,
    spanText6,
    spanText7,
    iconStar2,
    spanText8,
    spanText9,
    spanText10,
    vector3,
    uncles,
    asian2,
    image6,
    spanText11,
    spanText12,
    iconStar3,
    spanText13,
    spanText14,
    spanText15,
    vector4,
    hanamBbq,
    meat2,
    x13,
    seansRestaurant,
    iconStar4,
    x270M495AreGoing,
    vector5,
    spanText16,
    spanText17,
    spanText18,
    western2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category screen">
        <div className="group-234-1">
          <div className="info-container-1">
            <Link to="/about">
              <img className="icon-information-1" src={iconInformation} />
            </Link>
            <div className="info-1 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-1">
            <Link to="/search-map">
              <div className="rectangle-15-1"></div>
            </Link>
            <img className="icon-search-1" src={iconSearch} />
          </div>
          <div className="flex-col-2">
            <Link to="/completedpreorderhome3">
              <img className="group-1" src={group} />
            </Link>
            <div className="my-book-2 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group12">
          <div className="group-85">
            <img className="line-27" src={line27} />
            <div className="group-51">
              <Group482 />
              <Link to="/list">
                <div className="group-47-23">
                  <div className="overlap-group1-26 border-1px-orange">
                    <div className="category-23 inter-normal-flamingo-13px">{category}</div>
                    <img className="vector-65" src="/img/vector-30@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats">
                <div className="group-49-23">
                  <div className="overlap-group2-26 border-1px-c4c4c4">
                    <div className="seats-23 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating">
                <div className="group-50-23">
                  <div className="overlap-group3-24">
                    <Link to="/filter-list-rating">
                      <div className="rectangle-60 border-1px-c4c4c4"></div>
                    </Link>
                    <div className="rating-23 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28" src={line28} />
          </div>
          <div className="overlap-group5">
            <img className="x1" src={x11} />
            <div className="flex-col-3">
              <div className="flex-row">
                <div className="flex-col-4">
                  <div className="a-soup-shop inter-semi-bold-black-20px">{aSoupShop}</div>
                  <div className="address arial">
                    <span className="span0 arial">{spanText1}</span>
                    <span className="span-5 inter-normal-black-20px">{spanText2}</span>
                  </div>
                </div>
                <div className="overlap-group-45">
                  <div className="fastfood inter-normal-black-7px">{fastfood1}</div>
                </div>
                <img className="vector-66" src={vector2} />
              </div>
              <div className="overlap-group-42">
                <img className="icon-star" src={iconStar1} />
                <div className="x100m-45-12-are-going inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText3}</span>
                  <span className="span1 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group11">
            <div className="rectangle-89 border-0-5px-c4c4c4"></div>
            <div className="language inter-normal-black-13px">{language1}</div>
            <div className="language-1 inter-normal-black-13px">{language2}</div>
            <div className="asian inter-normal-black-13px">{asian1}</div>
            <div className="fastfood-1 inter-normal-black-13px">{fastfood2}</div>
            <div className="language-2 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-list-category-select">
              <div className="meat inter-normal-black-13px">{meat1}</div>
            </Link>
            <div className="pizza inter-normal-black-13px">{pizza}</div>
            <div className="place inter-normal-black-13px">{place}</div>
            <div className="western inter-normal-black-13px">{western1}</div>
            <div className="line-container">
              <img className="line-34" src={line34} />
              <img className="line-35" src={line35} />
              <img className="line-37" src={line37} />
              <img className="line-38" src={line38} />
              <img className="line-36" src={line36} />
              <Link to="/filter-list-category-select">
                <div className="meat-5 inter-normal-black-13px">{meat2}</div>
              </Link>
            </div>
            <Link to="/list">
              <div className="reset inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <Link to="/filter-main-category">
            <img className="line-29" src={line29} />
          </Link>
        </div>
        <div className="group-243">
          <div className="overlap-group-43">
            <img className="x1-1" src={x12} />
            <div className="overlap-group-44">
              <div className="overlap-group2-25">
                <div className="group-46">
                  <div className="flex-col-1">
                    <div className="address-1 arial">
                      <span className="span0 arial">{spanText6}</span>
                      <span className="span-5 inter-normal-black-20px">{spanText7}</span>
                    </div>
                    <div className="overlap-group-42">
                      <img className="icon-star" src={iconStar2} />
                      <div className="x120m-48-18-are-going inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText8}</span>
                        <span className="span1 arial">{spanText9}</span>
                        <span className="inter-normal-black-20px">{spanText10}</span> */}
                          <span className="inter-normal-black-20px">120m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.8 |</span>
                      <span className="span1-38 arial"> 18 </span>
                      <span className="span-5 inter-normal-black-20px">{spanText15}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/uncle-s-details-menu1">
                    <img className="vector-64" src={vector3} />
                  </Link>
                </div>
                <div className="uncles-1 inter-semi-bold-black-20px">{uncles}</div>
              </div>
              <div className="overlap-group1-27">
                <div className="asian-1 inter-normal-black-7px">{asian2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-24">
          <div className="overlap-group-43">
            <img className="image-6" src={image6} />
            <div className="overlap-group-container">
              <div className="overlap-group2-25">
                <div className="group-46">
                  <div className="flex-col-1">
                    <div className="address-2 inter-normal-white-20px">
                      <span className="inter-normal-apple-20px">{spanText11}</span>
                      <span className="inter-normal-black-20px">{spanText12}</span>
                    </div>
                    <div className="overlap-group-42">
                      <img className="icon-star" src={iconStar3} />
                      <div className="x180m-47-18-are-going inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText13}</span>
                        <span className="span1 arial">{spanText14}</span>
                        <span className="inter-normal-black-20px">{spanText15}</span> */}
                         <span className="inter-normal-black-20px">180m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                      <span className="span1-38 arial"> 18 </span>
                      <span className="span-5 inter-normal-black-20px">{spanText15}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/hanam-details-menu1">
                    <img className="vector-64" src={vector4} />
                  </Link>
                </div>
                <div className="hanam-bbq-1 inter-semi-bold-black-20px">{hanamBbq}</div>
              </div>
              <div className="overlap-group1-28">
                <div className="meat-1 inter-normal-black-7px">{meat2}</div>
              </div>
            </div>
          </div>
        </div>
        <Group245 />
        <div className="group-24">
          <div className="overlap-group-43">
            <img className="x1-2" src={x13} />
            <div className="overlap-group-44">
              <div className="group-471">
                <div className="flex-col-5">
                  <div className="seans-restaurant-1 inter-semi-bold-black-20px">{seansRestaurant}</div>
                  <div className="overlap-group-46">
                    <img className="icon-star" src={iconStar4} />
                    {/* <div className="x270m-49-5-are-going inter-normal-black-20px">{x270M495AreGoing}</div> */}
                    <div className="x180m-47-18-are-going inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText13}</span>
                        <span className="span1 arial">{spanText14}</span>
                        <span className="inter-normal-black-20px">{spanText15}</span> */}
                         <span className="inter-normal-black-20px">270m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.9 |</span>
                      <span className="span1-38 arial"> 5</span>
                      <span className="span-5 inter-normal-black-20px">{spanText15}</span>
                      </div>
                  </div>
                </div>
                <Link to="/sean-s-details-menu1">
                  <img className="vector-67" src={vector5} />
                </Link>
              </div>
              <div className="x35-seats-left arial">
                <span className="span0-1 arial">{spanText16}</span>
                <span className="span1-1 arial">{spanText17}</span>
                <span className="span-5 inter-normal-black-20px">{spanText18}</span>
              </div>
              <div className="overlap-group1-29">
                <div className="western-1 inter-normal-black-7px">{western2}</div>
              </div>
            </div>
          </div>
        </div>
        <Group247 />
      </div>
    </div>
  );
}

export default FilterListCategory;
