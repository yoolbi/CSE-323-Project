import React from "react";
import { Link } from "react-router-dom";
import Component169 from "../Component169";
import "./FilterMainRating.css";

function FilterMainRating(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    vector2,
    vector3,
    seeList,
    seats,
    rating,
    distance,
    vector4,
    category,
    vector5,
    polygon2,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-rating screen">
        <div className="flex-row">
          <div className="overlap-group1">
            <Link to="/search-map">
              <div className="rectangle-15"></div>
            </Link>
            <img className="search" src={search} />
          </div>
          <div className="flex-col">
            <Link to="/completed-preorder-home">
              <img className="group" src={group} />
            </Link>
            <div className="my-order applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-1">
          <div className="overlap-group">
            <img className="image-1" src={image1} />
            <Link to="/select-restaurant-1">
              <div className="ellipse-1 border-1px-black"></div>
            </Link>
            <div className="ellipse-2 border-1px-black"></div>
            <Link to="/select-restaurant-2">
              <div className="ellipse-3 border-1px-black"></div>
            </Link>
            <div className="ellipse-4 border-1px-black"></div>
            <div className="ellipse-9 border-1px-black"></div>
            <div className="ellipse-10 border-1px-black"></div>
            <div className="ellipse-11 border-1px-black"></div>
            <div className="ellipse-5 border-1px-black"></div>
            <div className="ellipse-6 border-1px-black"></div>
            <div className="ellipse-7 border-1px-black"></div>
            <div className="ellipse-8 border-1px-black"></div>
            <img className="vector" src="/img/vector@2x.png" />
            <div className="rectangle-61"></div>
            <img className="vector-1" src={vector2} />
            <div className="rectangle-62"></div>
            <img className="vector-2" src={vector3} />
            <div className="see-list applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <Component169 />
            <div className="rectangle-33 border-1px-mist-gray"></div>
            <div className="seats inter-normal-spicy-pink-14px">{seats}</div>
            <div className="rectangle-60"></div>
            <div className="rating inter-normal-white-14px">{rating}</div>
            <div className="rectangle-30"></div>
            <div className="distance inter-normal-white-14px">{distance}</div>
            <img className="vector-3" src={vector4} />
            <div className="rectangle-59 border-1px-mist-gray"></div>
            <div className="category inter-normal-spicy-pink-13px">{category}</div>
            <img className="vector-4" src={vector5} />
            <div className="ellipse-16 border-1px-malibu"></div>
            <div className="ellipse-17 border-2px-white"></div>
            <img className="polygon-2" src={polygon2} />
          </div>
          <img className="rectangle-29" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterMainRating;
