import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainCategoryCheck.css";

function FilterMainCategoryCheck(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    polygon2,
    vector2,
    vector3,
    seeList1,
    vector4,
    vector5,
    seeList2,
    distance,
    category1,
    vector6,
    category2,
    vector7,
    category3,
    vector8,
    seats,
    rating,
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
    rectangle92,
    hanamBbq,
    seansRestaurant,
    uncles,
    group3181Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-check screen">
        <div className="group-234-17">
          <div className="info-container-17">
            <Link to="/about">
              <img className="icon-information-17" src={iconInformation} />
            </Link>
            <div className="info-27 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group8-11">
            <Link to="/search-map">
              <div className="rectangle-15-17"></div>
            </Link>
            <img className="icon-search-17" src={iconSearch} />
          </div>
          <div className="flex-col-40">
            <Link to="/completedpreorderhome3">
              <img className="group-23" src={group} />
            </Link>
            <div className="my-book-19 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group9-11">
          <img className="image-1-11" src={image1} />
          <img className="vector-158" src="/img/vector-4@2x.png" />
          <div className="ellipse-16-7 border-1px-malibu"></div>
          <div className="ellipse-17-7 border-2px-white"></div>
          <img className="polygon-2-7" src={polygon2} />
          <div className="group-64-8">
            <div className="group-container-24">
              <div className="group-62-4">
                <img className="vector-156" src={vector2} />
              </div>
              <Link to="/list">
                <div className="group-63-8">
                  <div className="overlap-group-256">
                    <img className="vector-157" src={vector3} />
                    <div className="see-list-7 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-25 border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65-3">
            <div className="group-container-24">
              <div className="group-62-4">
                <img className="vector-156" src={vector4} />
              </div>
              <Link to="/list">
                <div className="group-63-8">
                  <div className="overlap-group-256">
                    <img className="vector-157" src={vector5} />
                    <div className="see-list-7 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-26 border-1px-mercury">
              <div className="overlap-group5-29">
                <div className="distance-60 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="group-52-6">
                <div className="group-47-39">
                  <div className="overlap-group2-83">
                    <div className="rectangle-81-4 border-1px-c4c4c4"></div>
                    <div className="category-45 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-159" src={vector6} />
                    
                      <div className="group-47-40">
                        <div className="overlap-group-257">
                          <div className="category-46 inter-normal-white-13px">{category2}</div>
                          <img className="vector-160" src={vector7} />
                        </div>
                      </div>
                    
                    <Link to="/filter-main-category-select">
                    <div className="overlap-group1-111 border-1px-orange">
                      <div className="category-47 inter-normal-flamingo-13px">{category3}</div>
                      <img className="vector-161" src={vector8} />
                    </div>
                    </Link>
                  </div>
                </div>
                <Link to="/filter-main-category-seats">
                  <div className="group-49-36">
                    <div className="overlap-group3-87 border-1px-c4c4c4">
                      <div className="seats-44 inter-normal-spicy-pink-14px">{seats}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/filter-main-category-rating">
                  <div className="group-50-36">
                    <div className="overlap-group4-49 border-1px-c4c4c4">
                      <div className="rating-37 inter-normal-spicy-pink-14px">{rating}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="overlap-group7-18">
            <div className="rectangle-89-11 border-0-5px-c4c4c4"></div>
            <div className="language-41 inter-normal-black-13px">{language1}</div>
            <div className="language-42 inter-normal-black-13px">{language2}</div>
            <div className="asian-17 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-26 inter-normal-black-13px">{fastfood}</div>
            <div className="language-43 inter-normal-black-13px">{language3}</div>
            <div className="meat-18 inter-normal-flamingo-13px">{meat}</div>
            <div className="pizza-11 inter-normal-black-13px">{pizza}</div>
            <div className="place-11 inter-normal-black-13px">{place}</div>
            <div className="western-18 inter-normal-black-13px">{western}</div>
            <div className="line-container-26">
              <img className="line-34-11" src={line34} />
              <img className="line-35-11" src={line35} />
              <img className="line-37-11" src={line37} />
              <img className="line-38-11" src={line38} />
              <img className="line-36-11" src={line36} />
            </div>
            <Link to="/main">
              <div className="reset-11 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <img className="rectangle-92-3" src={rectangle92} />
          </div>
          <div className="group-399">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-9 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-25 inter-medium-black-8px">{hanamBbq}</div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategoryCheck;
