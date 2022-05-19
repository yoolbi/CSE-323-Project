import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainCategory.css";

function FilterMainCategory(props) {
  const {
    search,
    group,
    myOrder,
    overlapGroup,
    polygon2,
    vector2,
    vector3,
    seeList,
    distance,
    vector4,
    category,
    vector5,
    seats,
    rating,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category screen">
        <div className="flex-row-63">
          <div className="overlap-group1-39">
            <Link to="/search-map">
              <div className="rectangle-15-3"></div>
            </Link>
            <img className="search-14" src={search} />
          </div>
          <div className="flex-col-52">
            <Link to="/completed-preorder-home">
              <img className="group-24" src={group} />
            </Link>
            <div className="my-order-13 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-64">
          <div className="overlap-group-90" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="ellipse-7-7 border-1px-black"></div>
            <div className="overlap-group5-21 border-1px-malibu">
              <div className="ellipse-17-3 border-2px-white"></div>
              <img className="polygon-2-3" src={polygon2} />
            </div>
            <img className="vector-71" src="/img/vector@2x.png" />
            <div className="overlap-group-container-8">
              <div className="overlap-group4-26">
                <img className="vector-72" src={vector2} />
              </div>
              <div className="overlap-group3-22">
                <img className="vector-73" src={vector3} />
                <div className="see-list-5 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
              </div>
            </div>
            <div className="overlap-group-container-9 border-1px-mist-gray">
              <div className="overlap-group7-20">
                <div className="distance-7 inter-normal-white-14px">{distance}</div>
                <img className="vector-74" src={vector4} />
              </div>
              <div className="overlap-group8-13">
                <Link to="/main">
                  <div className="rectangle-59-4"></div>
                </Link>
                <div className="category-8 inter-normal-white-13px">{category}</div>
                <img className="vector-75" src={vector5} />
              </div>
              <div className="overlap-group6-18 border-1px-mist-gray">
                <div className="seats-7 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
              <div className="overlap-group9-11 border-1px-mist-gray">
                <div className="rating-7 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </div>
          <img className="rectangle-29-10" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategory;
