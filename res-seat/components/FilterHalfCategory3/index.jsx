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
        <div className="flex-row-582">
          <div className="overlap-group2-501">
            <img className="search-15" src={search} />
          </div>
          <div className="flex-col-478">
            <Link to="/completed-preorder-home">
              <img className="group-97" src={group} />
            </Link>
            <div className="my-order-27 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-583">
          <div className="overlap-group1-652">
            <img className="image-1-65" src={image1} />
            <div className="ellipse-9-2 border-1px-black"></div>
            <div className="ellipse-10-2 border-1px-black"></div>
            <div className="ellipse-11-6 border-1px-black"></div>
            <div className="ellipse-7-2 border-1px-black"></div>
            <img className="vector-790" src="/img/vector-7@2x.png" />
            <div className="rectangle-63-1 border-1px-c4c4c4"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-19 border-1px-c4c4c4"></div>
            </Link>
            <div className="seats-208 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-15 border-1px-c4c4c4"></div>
            </Link>
            <div className="rating-162 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-50" src={line27} />
            <Link to="/filter-half-category-4">
              <div className="rectangle-59-1"></div>
            </Link>
            <div className="category-199 inter-normal-white-13px">{category}</div>
            <img className="vector-791" src={vector2} />
            <div className="rectangle-61-1"></div>
            <img className="vector-792" src={vector3} />
            <Link to="/list">
              <div className="rectangle-62-1"></div>
            </Link>
            <img className="vector-793" src={vector4} />
            <div className="see-list-58 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-2" src={line30} />
            <Link to="/main">
              <img className="line-29-59" src={line29} />
            </Link>
            <div className="rectangle-30-1"></div>
            <div className="distance-140 inter-normal-white-14px">{distance}</div>
            <img className="vector-794" src={vector5} />
            <Component165
              image3={component165Props.image3}
              aSoupShop={component165Props.aSoupShop}
              spanText3={component165Props.spanText3}
              star1={component165Props.star1}
            />
            <div className="rectangle-69-24"></div>
            <div className="meat-70 inter-normal-black-7px">{meat}</div>
            <img className="image-6-48" src={image6} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-795" src={vector6} />
            </Link>
          </div>
          <img className="rectangle-29-41" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory3;
