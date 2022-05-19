import React from "react";
import { Link } from "react-router-dom";
import Component165 from "../Component165";
import "./FilterHalfCategory3.css";

function FilterHalfCategory3(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    seats,
    rating,
    line27,
    category,
    vector2,
    vector3,
    vector4,
    seeList,
    line30,
    line29,
    distance,
    vector5,
    meat,
    image6,
    vector6,
    rectangle29,
    component165Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-category-3 screen">
        <div className="flex-row-59">
          <div className="overlap-group2-17">
            <img className="search-12" src={search} />
          </div>
          <div className="flex-col-49">
            <Link to="/completed-preorder-home">
              <img className="group-16" src={group} />
            </Link>
            <div className="my-order-11 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-60">
          <div className="overlap-group1-37">
            <img className="image-1-3" src={image1} />
            <div className="ellipse-9-5 border-1px-black"></div>
            <div className="ellipse-10-5 border-1px-black"></div>
            <div className="ellipse-11-5 border-1px-black"></div>
            <div className="ellipse-7-5 border-1px-black"></div>
            <img className="vector-60" src="/img/vector-7@2x.png" />
            <div className="rectangle-63-2 border-1px-mist-gray"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-4 border-1px-mist-gray"></div>
            </Link>
            <div className="seats-6 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-4 border-1px-mist-gray"></div>
            </Link>
            <div className="rating-6 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-4" src={line27} />
            <Link to="/filter-half-category-4">
              <div className="rectangle-59-3"></div>
            </Link>
            <div className="category-7 inter-normal-white-13px">{category}</div>
            <img className="vector-61" src={vector2} />
            <div className="rectangle-61-2"></div>
            <img className="vector-62" src={vector3} />
            <Link to="/see-list">
              <div className="rectangle-62-2"></div>
            </Link>
            <img className="vector-63" src={vector4} />
            <div className="see-list-4 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-1" src={line30} />
            <Link to="/main">
              <img className="line-29-4" src={line29} />
            </Link>
            <div className="rectangle-30-2"></div>
            <div className="distance-6 inter-normal-white-14px">{distance}</div>
            <img className="vector-64" src={vector5} />
            <Component165
              image3={component165Props.image3}
              aSoupShop={component165Props.aSoupShop}
              spanText3={component165Props.spanText3}
              star1={component165Props.star1}
            />
            <div className="rectangle-69-4"></div>
            <div className="meat-5 inter-normal-black-7px">{meat}</div>
            <img className="image-6-4" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-65" src={vector6} />
            </Link>
          </div>
          <img className="rectangle-29-8" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory3;
