import React from "react";
import { Link } from "react-router-dom";
import Group482 from "../Group482";
import Group245 from "../Group245";
import Group247 from "../Group247";
import "./FilterListRating.css";

function FilterListRating(props) {
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
    line29,
    x11,
    spanText1,
    spanText2,
    spanText3,
    iconStar1,
    x270M495AreGoing,
    vector2,
    seansRestaurant,
    western,
    x12,
    spanText4,
    spanText5,
    iconStar2,
    spanText6,
    spanText7,
    spanText8,
    vector3,
    uncles,
    asian,
    image6,
    iconStar3,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    vector4,
    hanamBbq,
    meat,
    x13,
    aSoupShop,
    spanText14,
    spanText15,
    fastfood,
    vector5,
    iconStar4,
    spanText16,
    spanText17,
    spanText18,
    group482Props,
    group245Props,
    group247Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-rating screen">
        <div className="group-234-21">
          <div className="info-container-21">
            <Link to="/about">
              <img className="icon-information-21" src={iconInformation} />
            </Link>
            <div className="info-31 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-58">
            <Link to="/search-map">
              <div className="rectangle-15-21"></div>
            </Link>
            <img className="icon-search-21" src={iconSearch} />
          </div>
          <div className="flex-col-46">
            <Link to="/completedpreorderhome3">
              <img className="group-29" src={group} />
            </Link>
            <div className="my-book-23 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group11-9">
          <div className="group-90-3">
            <img className="line-27-7" src={line27} />
            <div className="group-51-8">
              <Group482 className={group482Props.className} />
              <Link to="/filter-list-rating-category">
                <div className="group-47-43">
                  <div className="overlap-group1-123 border-1px-c4c4c4">
                    <div className="category-50 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-171" src="/img/vector-134@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-rating">
                <div className="group-49-39">
                  <div className="overlap-group2-94 border-1px-c4c4c4">
                    <div className="seats-52 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/list">
                <div className="group-50-40">
                  <div className="overlap-group3-92">
                    <div className="rating-41 inter-normal-white-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-7" src={line28} />
          </div>
          <Link to="/filter-main-rating">
            <img className="line-29-8" src={line29} />
          </Link>
        </div>
        <div className="group-246-1">
          <div className="overlap-group-272">
            <img className="x1-28" src={x11} />
            <div className="overlap-group-container-25">
              <div className="overlap-group2-93">
                <div className="group-45">
                  <div className="flex-col-47">
                    <div className="x35-seats-left-6 arial">
                      <span className="span0-25 arial">{spanText1}</span>
                      <span className="span1-40 arial">{spanText2}</span>
                      <span className="span-52 inter-normal-black-20px">{spanText3}</span>
                    </div>
                    <div className="overlap-group-274">
                      <img className="icon-star-140" src={iconStar1} />
                      {/* <div className="x270m-49-5-are-going-6 inter-normal-black-20px">{x270M495AreGoing}</div> */}
                      <span className="inter-normal-black-20px">270m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.9 |</span>
                      <span className="span1-38 arial"> 5 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                    </div>
                  </div>
                  <Link to="/sean-s-details-menu1">
                    <img className="vector-172" src={vector2} />
                  </Link>
                </div>
                <div className="seans-restaurant-21 inter-semi-bold-black-20px">{seansRestaurant}</div>
              </div>
              <div className="overlap-group1-124">
                <div className="western-19 inter-normal-black-7px">{western}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-24-4">
          <div className="overlap-group-272">
            <img className="x1-29" src={x12} />
            <div className="overlap-group-container-25">
              <div className="overlap-group2-93">
                <div className="group-45">
                  <div className="flex-col-48">
                    <div className="address-38 arial">
                      <span className="span0-24 arial">{spanText4}</span>
                      <span className="span-52 inter-normal-black-20px">{spanText5}</span>
                    </div>
                    <div className="overlap-group-273">
                      <img className="icon-star-140" src={iconStar2} />
                      <div className="x120m-48-18-are-going-5 inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText6}</span>
                        <span className="span1-39 arial">{spanText7}</span>
                        <span className="inter-normal-black-20px">{spanText8}</span> */}
                                                <span className="inter-normal-black-20px">120m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.8 |</span>
                      <span className="span1-38 arial"> 18 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/uncle-s-details-menu1">
                    <img className="vector-170" src={vector3} />
                  </Link>
                </div>
                <div className="uncles-20 inter-semi-bold-black-20px">{uncles}</div>
              </div>
              <div className="overlap-group1-125">
                <div className="asian-18 inter-normal-black-7px">{asian}</div>
              </div>
            </div>
          </div>
        </div>
        <Group245 className={group245Props.className} />
        <div className="group-24-4">
          <div className="overlap-group8-13">
            <img className="image-6-8" src={image6} />
            <div className="overlap-group-container-26">
              <div className="overlap-group2-95">
                <div className="group-457">
                  <div className="group-456">
                    <div className="overlap-group-275">
                      <img className="icon-star-141" src={iconStar3} />
                      <div className="group-414">
                        <div className="address-39 inter-normal-white-20px">
                          <span className="inter-normal-apple-20px">{spanText9}</span>
                          <span className="inter-normal-black-20px">{spanText10}</span>
                        </div>
                        <div className="x180m-47-18-are-going-7 inter-normal-black-20px">
                          {/* <span className="inter-normal-black-20px">{spanText11}</span>
                          <span className="span1-39 arial">{spanText12}</span>
                          <span className="inter-normal-black-20px">{spanText13}</span> */}
                                                  <span className="inter-normal-black-20px">180m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                      <span className="span1-38 arial"> 18 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/hanam-details-menu1">
                    <img className="vector-170" src={vector4} />
                  </Link>
                </div>
                <div className="hanam-bbq-35 inter-semi-bold-black-20px">{hanamBbq}</div>
              </div>
              <div className="overlap-group1-126">
                <div className="meat-20 inter-normal-black-7px">{meat}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-242-4">
          <div className="overlap-group9-13">
            <img className="x1-30" src={x13} />
            <div className="flex-col-49">
              <div className="flex-row-64">
                <div className="flex-col-50">
                  <div className="a-soup-shop-6 inter-semi-bold-black-20px">{aSoupShop}</div>
                  <div className="address-40 arial">
                    <span className="span0-24 arial">{spanText14}</span>
                    <span className="span-52 inter-normal-black-20px">{spanText15}</span>
                  </div>
                </div>
                <div className="overlap-group1-127">
                  <div className="rectangle-66-13"></div>
                  <div className="fastfood-27 inter-normal-black-7px">{fastfood}</div>
                </div>
                <img className="vector-173" src={vector5} />
              </div>
              <div className="overlap-group-273">
                <img className="icon-star-140" src={iconStar4} />
                <div className="x100m-45-12-are-going-8 inter-normal-black-20px">
                  {/* <span className="inter-normal-black-20px">{spanText16}</span>
                  <span className="span1-39 arial">{spanText17}</span>
                  <span className="inter-normal-black-20px">{spanText18}</span> */}
                                          <span className="inter-normal-black-20px">100m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.5 |</span>
                      <span className="span1-38 arial"> 12 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Group247 className={group247Props.className} />
      </div>
    </div>
  );
}

export default FilterListRating;
