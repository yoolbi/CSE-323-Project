import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import Group481 from "../Group481";
import "./List.css";

function List(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    line27,
    line29,
    category,
    seats,
    rating,
    line28,
    x11,
    shakeShack,
    spanText1,
    spanText2,
    fastfood1,
    vector2,
    iconStar1,
    spanText3,
    spanText4,
    spanText5,
    x12,
    aSoupShop,
    fastfood2,
    x13,
    spanText6,
    spanText7,
    vector3,
    iconStar2,
    spanText8,
    spanText9,
    spanText10,
    uncles,
    asian,
    image6,
    spanText11,
    spanText12,
    vector4,
    iconStar3,
    spanText13,
    spanText14,
    spanText15,
    hanamBbq,
    meat,
    x14,
    sushisaku,
    language,
    spanText16,
    spanText17,
    iconStar4,
    spanText18,
    spanText19,
    spanText20,
    vector5,
    x15,
    seansRestaurant,
    spanText21,
    spanText22,
    spanText23,
    western,
    vector6,
    iconStar5,
    x270M495AreGoing,
    bhc2,
    bhc,
    fastfood3,
    spanText24,
    spanText25,
    iconStar6,
    x700M432AreGoing,
    vector7,
    group482Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="list screen">
        <div className="group-234-16">
          <div className="info-container-16">
            <Link to="/about">
              <img className="icon-information-16" src={iconInformation} />
            </Link>
            <div className="info-26 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-48">
            <Link to="/search-map">
              <div className="rectangle-15-16"></div>
            </Link>
            <img className="icon-search-16" src={iconSearch} />
          </div>
          <div className="flex-col-33">
            <Link to="/completedpreorderhome3">
              <img className="group-18" src={group} />
            </Link>
            <div className="my-book-18 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="line-container-25">
          <img className="line-2-8" src={line27} />
          <Link to="/main">
            <img className="line-29-7" src={line29} />
          </Link>
        </div>
        <div className="group-51-7">
          <Group482 className={group482Props.className} />
          <Link to="/filter-list-category">
            <div className="group-47-38">
              <div className="overlap-group1-104 border-1px-c4c4c4">
                <div className="category-44 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-149" src="/img/vector-134@2x.png" />
              </div>
            </div>
          </Link>
          <Link to="/filter-list-seats">
            <div className="group-49-35">
              <div className="overlap-group2-81 border-1px-c4c4c4">
                <div className="seats-43 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
            </div>
          </Link>
          <Link to="/filter-list-rating">
            <div className="group-50-35">
              <div className="overlap-group3-86 border-1px-c4c4c4">
                <div className="rating-36 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group12-4">
          <img className="line-2-8" src={line28} />
          <div className="overlap-group5-28">
            <img className="x1-23" src={x11} />
            <div className="flex-col-34">
              <div className="flex-row-47">
                <div className="flex-col-35">
                  <div className="shake-shack-12 inter-semi-bold-black-20px">{shakeShack}</div>
                  <div className="address-33 arial">
                    <span className="span0-22 arial">{spanText1}</span>
                    <span className="span-48 inter-normal-black-20px">{spanText2}</span>
                  </div>
                </div>
                <div className="overlap-group-254">
                  <div className="fastfood-23 inter-normal-black-7px">{fastfood1}</div>
                </div>
                <img className="vector-150" src={vector2} />
              </div>
              <div className="overlap-group-250">
                <img className="icon-star-119" src={iconStar1} />
                <div className="x100m-45-12-are-going-7 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText3}</span>
                  <span className="span1-38 arial">{spanText4}</span>
                  <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group6-21">
            <img className="x1-24" src={x12} />
            <div className="overlap-group2-82">
              <Group481 />
              <div className="a-soup-shop-5 inter-semi-bold-black-20px">{aSoupShop}</div>
              <div className="overlap-group1-105">
                <div className="rectangle-66-11"></div>
                <div className="fastfood-24 inter-normal-black-7px">{fastfood2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-24-2"> 
          <div className="overlap-group-251">
            <img className="x1-25" src={x13} />
            <div className="overlap-group-container-23">
              <div className="overlap-group2-80">
                <div className="group-44-1">
                  <div className="flex-row-48">
                    <div className="address-34 arial">
                      <span className="span0-22 arial">{spanText6}</span>
                      <span className="span-48 inter-normal-black-20px">{spanText7}</span>
                    </div>
                    <Link to="/uncle-s-details-menu1">
                      <img className="vector-151" src={vector3} />
                    </Link>
                  </div>
                  <div className="overlap-group-250">
                    <img className="icon-star-119" src={iconStar2} />
                    <div className="x120m-48-18-are-going-4 inter-normal-black-20px">
                      <span className="inter-normal-black-20px">120m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.8 |</span>
                      <span className="span1-38 arial">{spanText9}</span>
                      <span className="inter-normal-black-20px">{spanText10}</span>
                    </div>
                  </div>
                </div>
                <div className="uncles-16 inter-semi-bold-black-20px">{uncles}</div>
              </div>
              <div className="overlap-group1-106">
                <div className="asian-16 inter-normal-black-7px">{asian}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-24-2">
          <div className="overlap-group-251">
            <img className="image-6-6" src={image6} />
            <div className="overlap-group-container-24">
              <div className="overlap-group2-80">
                <div className="group-44-1">
                  <div className="flex-row-48">
                    <div className="address-35 inter-normal-white-20px">
                      <span className="inter-normal-apple-20px">{spanText11}</span>
                      <span className="inter-normal-black-20px">{spanText12}</span>
                    </div>
                    <Link to="/hanam-details-menu1">
                      <img className="vector-152" src={vector4} />
                    </Link>
                  </div>
                  <div className="overlap-group-250">
                    <img className="icon-star-119" src={iconStar3} />
                    <div className="x180m-47-18-are-going-6 inter-normal-black-20px">
                      {/* <span className="inter-normal-black-20px">{spanText13}</span>
                      <span className="span1-38 arial">{spanText14}</span>
                      <span className="inter-normal-black-20px">{spanText15}</span> */}
                                            <span className="inter-normal-black-20px">180m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                      <span className="span1-38 arial"> 18 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                    </div>
                  </div>
                </div>
                <div className="hanam-bbq-24 inter-semi-bold-black-20px">{hanamBbq}</div>
              </div>
              <div className="overlap-group1-107">
                <div className="meat-17 inter-normal-black-7px">{meat}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-24-3">
          <div className="overlap-group-252">
            <img className="x1-26" src={x14} />
            <div className="flex-col-36">
              <div className="flex-row-49">
                <div className="sushisaku-20 inter-semi-bold-black-20px">{sushisaku}</div>
                <div className="overlap-group1-108">
                  <div className="rectangle-66-12"></div>
                  <div className="language-40 inter-normal-black-7px">{language}</div>
                </div>
              </div>
              <div className="address-33 arial">
                <span className="span-50 arial">{spanText16}</span>
                <span className="span-48 inter-normal-black-20px">{spanText17}</span>
              </div>
              <div className="overlap-group-255">
                <img className="icon-star-119" src={iconStar4} />
                <div className="x200m-47-1-are-going-7 inter-normal-black-20px">
                  {/* <span className="inter-normal-black-20px">{spanText18}</span>
                  <span className="span1-38 arial">{spanText19}</span>
                  <span className="inter-normal-black-20px">{spanText20}</span> */}
                                                              <span className="inter-normal-black-20px">200m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                      <span className="span1-38 arial"> 1 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
            <img className="vector-153" src={vector5} />
          </div>
        </div>
        <div className="group-24-3">
          <div className="overlap-group10-9">
            <img className="x1-27" src={x15} />
            <div className="flex-col-37">
              <div className="flex-row-47">
                <div className="flex-col-38">
                  <div className="seans-restaurant-17 inter-semi-bold-black-20px">{seansRestaurant}</div>
                  <div className="x35-seats-left-5 arial">
                    <span className="span0-23 arial">{spanText21}</span>
                    <span className="span-50 arial">{spanText22}</span>
                    <span className="span-48 inter-normal-black-20px">{spanText23}</span>
                  </div>
                </div>
                <div className="overlap-group1-109">
                  <div className="western-17 inter-normal-black-7px">{western}</div>
                </div>
                <Link to="/sean-s-details-menu1" className="align-self-flex-end">
                  <img className="vector-154" src={vector6} />
                </Link>
              </div>
              <div className="overlap-group-253">
                <img className="icon-star-119" src={iconStar5} />
                {/* <div className="x270m-49-5-are-going-5 inter-normal-black-20px">{x270M495AreGoing}</div> */}
                <span className="inter-normal-black-20px">270m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.9 |</span>
                      <span className="span1-38 arial"> 5 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="group-24-3">
          <div className="overlap-group-252">
            <img className="bhc-2-8" src={bhc2} />
            <div className="flex-col-39">
              <div className="flex-row-50">
                <div className="bhc-20 inter-semi-bold-black-20px">{bhc}</div>
                <div className="overlap-group1-110">
                  <div className="fastfood-25 inter-normal-black-7px">{fastfood3}</div>
                </div>
              </div>
              <div className="address-36 inter-normal-white-20px">
                <span className="inter-normal-persian-red-20px">{spanText24}</span>
                <span className="inter-normal-black-20px">{spanText25}</span>
              </div>
              <div className="overlap-group-253">
                <img className="icon-star-119" src={iconStar6} />
                {/* <div className="x700m-43-2-are-going-7 inter-normal-black-20px">{x700M432AreGoing}</div> */}
                <span className="inter-normal-black-20px">700m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.3 |</span>
                      <span className="span1-38 arial"> 2 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
              </div>
            </div>
            <img className="vector-155" src={vector7} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
