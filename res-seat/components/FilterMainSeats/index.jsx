import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainSeats.css";

function FilterMainSeats(props) {
  const {
    search,
    group,
    myOrder,
    overlapGroup,
    polygon2,
    vector2,
    seeList,
    vector3,
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
      <div className="filter-main-seats screen">
        <div className="flex-row-2">
          <div className="overlap-group1-13">
            <Link to="/search-map">
              <div className="rectangle-15-1"></div>
            </Link>
            <img className="search-1" src={search} />
          </div>
          <div className="flex-col-1">
            <Link to="/completed-preorder-home">
              <img className="group-1" src={group} />
            </Link>
            <div className="my-order-1 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-3">
          <div className="overlap-group-13" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="flex-row-4">
              <div className="flex-col-2">
                <div className="ellipse-5-1 border-1px-black"></div>
                <div className="ellipse-9-1 border-1px-black"></div>
                <div className="overlap-group2-1">
                  <img className="vector-7" src="/img/vector-1@2x.png" />
                </div>
              </div>
              <div className="ellipse-10-1 border-1px-black"></div>
              <div className="flex-col-3">
                <Link to="/select-restaurant-2">
                  <div className="ellipse-3-1 border-1px-black"></div>
                </Link>
                <div className="ellipse-2-1 border-1px-black"></div>
                <div className="ellipse-container">
                  <Link to="/select-restaurant-1">
                    <div className="ellipse-1-1 border-1px-black"></div>
                  </Link>
                  <div className="ellipse-4-1 border-1px-black"></div>
                </div>
                <div className="overlap-group3-1 border-1px-malibu">
                  <div className="ellipse-17-1 border-2px-white"></div>
                  <img className="polygon-2-1" src={polygon2} />
                </div>
                <div className="ellipse-11-1 border-1px-black"></div>
                <div className="overlap-group5-1">
                  <img className="vector-8" src={vector2} />
                  <div className="see-list-1 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
              <div className="ellipse-container-1">
                <div className="ellipse-6-1 border-1px-black"></div>
                <div className="ellipse-8-1 border-1px-black"></div>
              </div>
              <div className="ellipse-7-1 border-1px-black"></div>
              <img className="vector-9" src={vector3} />
            </div>
            <div className="overlap-group-container border-1px-mist-gray">
              <div className="overlap-group7">
                <div className="distance-1 inter-normal-white-14px">{distance}</div>
                <img className="vector-10" src={vector4} />
              </div>
              <div className="overlap-group9 border-1px-mist-gray">
                <div className="category-1 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-11" src={vector5} />
              </div>
              <div className="overlap-group6">
                <Link to="/main">
                  <div className="rectangle-33-1"></div>
                </Link>
                <div className="seats-1 inter-normal-white-14px">{seats}</div>
              </div>
              <div className="overlap-group8 border-1px-mist-gray">
                <div className="rating-1 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
          </div>
          <img className="rectangle-29-1" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeats;
