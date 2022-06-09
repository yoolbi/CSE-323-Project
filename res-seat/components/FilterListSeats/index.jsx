import React from "react";
import { Link } from "react-router-dom";
import Group245 from "../Group245";
import Group481 from "../Group481";
import Group247 from "../Group247";
import "./FilterListSeats.css";

function FilterListSeats(props) {
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
    distance,
    image6,
    hanamBbq,
    spanText1,
    spanText2,
    iconStar1,
    spanText3,
    spanText4,
    spanText5,
    vector2,
    meat,
    x11,
    aSoupShop,
    fastfood,
    x12,
    spanText6,
    spanText7,
    iconStar2,
    spanText8,
    spanText9,
    spanText10,
    vector3,
    uncles,
    asian,
    x13,
    spanText11,
    spanText12,
    spanText13,
    vector4,
    iconStar3,
    x270M495AreGoing,
    seansRestaurant,
    western,
    group245Props,
    group247Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-seats screen">
        <div className="group-234-25">
          <div className="info-container-25">
            <Link to="/about">
              <img className="icon-information-25" src={iconInformation} />
            </Link>
            <div className="info-35 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-95">
            <Link to="/search-map">
              <div className="rectangle-15-25"></div>
            </Link>
            <img className="icon-search-25" src={iconSearch} />
          </div>
          <div className="flex-col-56">
            <Link to="/completedpreorderhome3">
              <img className="group-34" src={group} />
            </Link>
            <div className="my-book-27 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group11-10">
          <div className="group-89-2">
            <img className="line-27-9" src={line27} />
            <div className="group-51-10">
              <Link to="/filter-list-seats-category">
                <div className="group-47-47">
                  <div className="overlap-group-286 border-1px-c4c4c4">
                    <div className="category-57 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-185" src="/img/vector-134@2x.png" />
                  </div>
                </div>
              </Link>
              <Link to="/list">
                <div className="group-49-45">
                  <div className="overlap-group1-135">
                    <div className="seats-62 inter-normal-white-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats-rating">
                <div className="group-50-44">
                  <div className="overlap-group2-102 border-1px-c4c4c4">
                    <div className="rating-45 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <img className="line-28-9" src={line28} />
          </div>
          <Link to="/filter-main-seats">
            <img className="line-29-10" src={line29} />
          </Link>
          <div className="overlap-group9-15">
            <div className="distance-66 inter-normal-white-14px">{distance}</div>
          </div>
        </div>
        <div className="group-244-1">
          <div className="overlap-group-284">
            <img className="image-6-10" src={image6} />
            <div className="overlap-group-container-29">
              <div className="overlap-group2-103">
                <div className="hanam-bbq-39 inter-semi-bold-black-20px">{hanamBbq}</div>
                <div className="group-44-2">
                  <div className="flex-col-55">
                    <div className="address-42 inter-normal-white-20px">
                      <span className="inter-normal-apple-20px">{spanText1}</span>
                      <span className="inter-normal-black-20px">{spanText2}</span>
                    </div>
                    <div className="overlap-group-285">
                      <img className="icon-star-143" src={iconStar1} />
                      <div className="x180m-47-18-are-going-9 inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText3}</span>
                        <span className="span1-42 arial">{spanText4}</span>
                        <span className="inter-normal-black-20px">{spanText5}</span> */}
                          <span className="inter-normal-black-20px">180m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.7 |</span>
                      <span className="span1-38 arial"> 18 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/hanam-details-menu1">
                    <img className="vector-184" src={vector2} />
                  </Link>
                </div>
              </div>
              <div className="overlap-group1-136">
                <div className="meat-24 inter-normal-black-7px">{meat}</div>
              </div>
            </div>
          </div>
        </div>
        <Group245 className={group245Props.className} />
        <div className="group-33">
          <div className="overlap-group10-10">
            <img className="x1-31" src={x11} />
            <div className="overlap-group-container-30">
              <div className="oup-container">
                <Group481 />
                <div className="a-soup-shop-7 inter-semi-bold-black-20px">{aSoupShop}</div>
              </div>
              <div className="overlap-group1-137">
                <div className="rectangle-66-14"></div>
                <div className="fastfood-30 inter-normal-black-7px">{fastfood}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-33">
          <div className="overlap-group-284">
            <img className="x1-32" src={x12} />
            <div className="overlap-group-container-28">
              <div className="overlap-group2-104">
                <div className="group-44-2">
                  <div className="flex-col-55">
                    <div className="address-43 arial">
                      <span className="span0-26 arial">{spanText6}</span>
                      <span className="span-56 inter-normal-black-20px">{spanText7}</span>
                    </div>
                    <div className="overlap-group-285">
                      <img className="icon-star-143" src={iconStar2} />
                      <div className="x120m-48-18-are-going-6 inter-normal-black-20px">
                        {/* <span className="inter-normal-black-20px">{spanText8}</span>
                        <span className="span1-42 arial">{spanText9}</span>
                        <span className="inter-normal-black-20px">{spanText10}</span> */}
                          <span className="inter-normal-black-20px">120m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.8 |</span>
                      <span className="span1-38 arial"> 18</span>
                        <span className="inter-normal-black-20px">{spanText5}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/uncle-s-details-menu1">
                    <img className="vector-184" src={vector3} />
                  </Link>
                </div>
                <div className="uncles-22 inter-semi-bold-black-20px">{uncles}</div>
              </div>
              <div className="overlap-group1-138">
                <div className="asian-21 inter-normal-black-7px">{asian}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-33">
          <div className="overlap-group-284">
            <img className="x1-33" src={x13} />
            <div className="overlap-group-container-28">
              <div className="overlap-group2-105">
                <div className="group-450">
                  <div className="flex-row-66">
                    <div className="x35-seats-left-7 arial">
                      <span className="span0-27 arial">{spanText11}</span>
                      <span className="span1-43 arial">{spanText12}</span>
                      <span className="span-56 inter-normal-black-20px">{spanText13}</span>
                    </div>
                    <Link to="/sean-s-details-menu1">
                      <img className="vector-186" src={vector4} />
                    </Link>
                  </div>
                  <div className="overlap-group-287">
                    <img className="icon-star-143" src={iconStar3} />
                    {/* <div className="x270m-49-5-are-going-7 inter-normal-black-20px">{x270M495AreGoing}</div> */}
                    <span className="inter-normal-black-20px">270m |</span>
                      <span className="inter-normal-black-20px" style={{marginLeft:"25px"}}>4.9 |</span>
                      <span className="span1-38 arial"> 5 </span>
                      <span className="inter-normal-black-20px">{spanText5}</span>
                  </div>
                </div>
                <div className="seans-restaurant-23 inter-semi-bold-black-20px">{seansRestaurant}</div>
              </div>
              <div className="overlap-group1-139">
                <div className="western-22 inter-normal-black-7px">{western}</div>
              </div>
            </div>
          </div>
        </div>
        <Group247 className={group247Props.className} />
      </div>
    </div>
  );
}

export default FilterListSeats;
