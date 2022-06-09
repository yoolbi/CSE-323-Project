import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./FilterMainSeatsRatingCategory.css";

function FilterMainSeatsRatingCategory(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    vector2,
    seeList,
    distance,
    category1,
    vector3,
    category2,
    vector4,
    category3,
    vector5,
    seats1,
    seats2,
    seats3,
    seats4,
    seats5,
    seats6,
    rating,
    polygon2,
    hanamBbq,
    seansRestaurant,
    uncles,
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
    group320Props,
    group3181Props,
    group325Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-rating-category screen">
        <div className="group-234-12">
          <div className="info-container-12">
            <Link to="/about">
              <img className="icon-information-12" src={iconInformation} />
            </Link>
            <div className="info-22 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group7-15">
            <Link to="/search-map">
              <div className="rectangle-15-12"></div>
            </Link>
            <img className="icon-search-12" src={iconSearch} />
          </div>
          <div className="flex-col-26">
            <Link to="/completedpreorderhome3">
              <img className="group-14" src={group} />
            </Link>
            <div className="my-book-14 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group9-10">
          <img className="image-1-9" src={image1} />
          <div className="group-64-6">
            <div className="group-container-21">
              <div className="group-62-3">
                <img className="vector-138" src="/img/vector-33@2x.png" />
              </div>
              <Link to="/filter-list-seats">
                <div className="group-63-6">
                  <div className="overlap-group-243">
                    <img className="vector-139" src={vector2} />
                    <div className="see-list-5 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-22 border-1px-mercury">
              <div className="overlap-group5-24">
                <div className="distance-58 inter-normal-white-14px">{distance}</div>
              </div>
              <div className="overlap-group2-76">
                <div className="rectangle-81-3 border-1px-c4c4c4"></div>
                <div className="category-38 inter-normal-spicy-pink-13px">{category1}</div>
                <img className="vector-140" src={vector3} />
                <Link to="/filter-main-seats-rating">
                  <div className="group-47-34">
                    <div className="overlap-group-244">
                      <div className="category-39 inter-normal-white-13px">{category2}</div>
                      <img className="vector-141" src={vector4} />
                    </div>
                  </div>
                </Link>
                <div className="overlap-group1-96 border-1px-orange">
                  <div className="category-40 inter-normal-flamingo-13px">{category3}</div>
                  <img className="vector-142" src={vector5} />
                </div>
              </div>
              <Link to="/filter-main-rating">
                <div className="group-49-31">
                  <div className="overlap-group4-44 border-1px-c4c4c4">
                    <div className="seats-35 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-241 border-1px-c4c4c4">
                      <div className="seats-35 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-242">
                        <div className="seats-36 inter-normal-white-14px">{seats3}</div>
                      </div>
                      <div className="overlap-group1-97 border-1px-c4c4c4">
                        <div className="seats-37 inter-normal-spicy-pink-14px">{seats4}</div>
                      </div>
                      <div className="overlap-group-241 border-1px-c4c4c4">
                        <div className="seats-35 inter-normal-spicy-pink-14px">{seats5}</div>
                        <div className="overlap-group-242">
                          <div className="seats-38 inter-normal-white-14px">{seats6}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="overlap-group3-83">
                <Link to="/filter-main-seats">
                  <div className="rectangle-60-2"></div>
                </Link>
                <div className="rating-32 inter-normal-white-14px">{rating}</div>
              </div>
            </div>
          </div>
          <div className="ellipse-16-5 border-1px-malibu"></div>
          <div className="ellipse-17-5 border-2px-white"></div>
          <img className="polygon-2-5" src={polygon2} />
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-369">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-7 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-21 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-367">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-7 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-15 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-372">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-7 border-1px-black"></div>
            </Link>
            <div className="uncles-15 inter-medium-black-8px">{uncles}</div>
          </div>
          {/* <div className="overlap-group8-10">
            <div className="rectangle-89-8 border-0-5px-c4c4c4"></div>
            <div className="language-31 inter-normal-black-13px">{language1}</div>
            <div className="language-32 inter-normal-black-13px">{language2}</div>
            <div className="asian-13 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-20 inter-normal-black-13px">{fastfood}</div>
            <div className="language-33 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-main-all">
              <div className="meat-13 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="pizza-8 inter-normal-black-13px">{pizza}</div>
            <div className="place-8 inter-normal-black-13px">{place}</div>
            <div className="western-13 inter-normal-black-13px">{western}</div>
            <div className="line-container-22">
              <img className="line-34-8" src={line34} />
              <img className="line-35-8" src={line35} />
              <img className="line-37-8" src={line37} />
            </div>
            <img className="line-38-8" src={line38} />
            <img className="line-36-8" src={line36} />
            <Link to="/main">
              <div className="reset-8 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div> */}
          <div className="overlap-group7-4">
            <div className="rectangle-89-3 border-0-5px-c4c4c4"></div>
            <div className="language-16 inter-normal-black-13px">{language1}</div>
            <div className="language-17 inter-normal-black-13px">{language2}</div>
            <div className="asian-6 inter-normal-black-13px">{asian}</div>
            <div className="fastfood-15 inter-normal-black-13px">{fastfood}</div>
            <div className="language-18 inter-normal-black-13px">{language3}</div>
            <Link to="/filter-main-all">
              <div className="meat-6 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="pizza-3 inter-normal-black-13px">{pizza}</div>
            <div className="place-3 inter-normal-black-13px">{place}</div>
            <div className="western-6 inter-normal-black-13px">{western}</div>
            <img className="line-34-3" src={line34} />
            <img className="line-35-3" src={line35} />
            <img className="line-37-3" src={line37} />
            <img className="line-38-3" src={line38} />
            <img className="line-36-3" src={line36} />
            <Link to="/main">
              <div className="reset-3 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsRatingCategory;
