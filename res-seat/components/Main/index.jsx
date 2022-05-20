import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main(props) {
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
      <div className="main screen">
        <div className="flex-row-36">
          <div className="overlap-group1-21">
            <Link to="/search-map">
              <div className="rectangle-15-2"></div>
            </Link>
            <img className="search-7" src={search} />
          </div>
          <div className="flex-col-38">
            <Link to="/completed-preorder-home">
              <img className="group-4" src={group} />
            </Link>
            <div className="my-order-6 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-37">
          <div className="overlap-group-65" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="flex-row-38">
              <div className="flex-col-39">
                <div className="ellipse-5-3 border-1px-black"></div>
                <div className="ellipse-9-3 border-1px-black"></div>
                <div className="overlap-group5-11">
                  <img className="vector-31" src="/img/vector-1@2x.png" />
                </div>
              </div>
              <div className="ellipse-10-3 border-1px-black"></div>
              <div className="flex-col-40">
                <Link to="/select-restaurant-2">
                  <div className="ellipse-3-3 border-1px-black"></div>
                </Link>
                <div className="ellipse-2-3 border-1px-black"></div>
                <div className="ellipse-container-2">
                  <Link to="/select-restaurant-1">
                    <div className="ellipse-1-3 border-1px-black"></div>
                  </Link>
                  <div className="ellipse-4-3 border-1px-black"></div>
                </div>
                <div className="overlap-group4-13 border-1px-malibu">
                  <div className="ellipse-17-2 border-2px-white"></div>
                  <img className="polygon-2-2" src={polygon2} />
                </div>
                <div className="ellipse-11-3 border-1px-black"></div>
                <div className="overlap-group3-17">
                  <img className="vector-32" src={vector2} />
                  <div className="see-list-2 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                </div>
              </div>
              <div className="ellipse-container-3">
                <div className="ellipse-6-3 border-1px-black"></div>
                <div className="ellipse-8-3 border-1px-black"></div>
              </div>
              <div className="ellipse-7-3 border-1px-black"></div>
              <img className="vector-33" src={vector3} />
            </div>
            <Link to = "/list-half">
            <div className="overlap-group-container-4 border-1px-mist-gray">
              <div className="overlap-group6-10">
                <div className="distance-3 inter-normal-white-14px">{distance}</div>
                <img className="vector-34" src={vector4} />
              </div>
              <div className="overlap-group9-6">
                <Link to="/filter-half-category-1">
                  <div className="rectangle-59-1 border-1px-mist-gray"></div>
                </Link>
                <div className="category-3 inter-normal-spicy-pink-13px">{category}</div>
                <img className="vector-35" src={vector5} />
              </div>
              <div className="overlap-group8-7">
                <Link to="/filter-half-seats">
                  <div className="rectangle-33-2 border-1px-mist-gray"></div>
                </Link>
                <div className="seats-3 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
              <div className="overlap-group7-10">
                <Link to="/filter-half-rating">
                  <div className="rectangle-60-1 border-1px-mist-gray"></div>
                </Link>
                <div className="rating-3 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
            </Link>
          </div>
          <img className="rectangle-29-4" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default Main;
