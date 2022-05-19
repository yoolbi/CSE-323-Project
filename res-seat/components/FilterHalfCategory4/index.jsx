import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import "./FilterHalfCategory4.css";

function FilterHalfCategory4(props) {
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
    asian1,
    asian2,
    vector5,
    spanText1,
    spanText2,
    fastfood,
    x2,
    line29,
    distance,
    vector6,
    reset,
    line34,
    line35,
    line37,
    line38,
    line36,
    surname,
    meat,
    dessert,
    salad,
    lunch,
    rectangle29,
    component164Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-category-4 screen">
        <div className="flex-row-54">
          <div className="overlap-group2-15">
            <img className="search-11" src={search} />
          </div>
          <div className="flex-col-47">
            <Link to="/completed-preorder-home">
              <img className="group-15" src={group} />
            </Link>
            <div className="my-order-10 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-55">
          <div className="overlap-group1-36">
            <img className="image-1-2" src={image1} />
            <div className="ellipse-9-4 border-1px-black"></div>
            <div className="ellipse-10-4 border-1px-black"></div>
            <div className="ellipse-11-4 border-1px-black"></div>
            <div className="ellipse-7-4 border-1px-black"></div>
            <img className="vector-53" src="/img/vector-7@2x.png" />
            <div className="rectangle-63-1 border-1px-mist-gray"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-3 border-1px-mist-gray"></div>
            </Link>
            <div className="seats-5 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-3 border-1px-mist-gray"></div>
            </Link>
            <div className="rating-5 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-3" src={line27} />
            <Link to="/filter-half-category-3">
              <div className="rectangle-59-2 border-1px-orange"></div>
            </Link>
            <div className="category-6 inter-normal-flamingo-13px">{category}</div>
            <img className="vector-54" src={vector2} />
            <div className="rectangle-61-1"></div>
            <img className="vector-55" src={vector3} />
            <Link to="/see-list">
              <div className="rectangle-62-1"></div>
            </Link>
            <img className="vector-56" src={vector4} />
            <div className="see-list-3 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30" src={line30} />
            <Component164 star1={component164Props.star1} className={component164Props.className} />
            <div className="asian-1 inter-normal-black-13px">{asian1}</div>
            <div className="asian-1 inter-normal-black-13px">{asian2}</div>
            <img className="vector-57" src={vector5} />
            <div className="address-10 arial">
              <span className="span0-28 arial">{spanText1}</span>
              <span className="span1-74 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-74"></div>
            <div className="rectangle-75"></div>
            <div className="rectangle-78"></div>
            <div className="fastfood-1 inter-normal-black-7px">{fastfood}</div>
            <img className="x2" src={x2} />
            <Link to="/main">
              <img className="line-29-3" src={line29} />
            </Link>
            <div className="rectangle-85"></div>
            <div className="rectangle-30-1"></div>
            <div className="distance-5 inter-normal-white-14px">{distance}</div>
            <img className="vector-58" src={vector6} />
            <div className="rectangle-86 border-0-5px-mist-gray"></div>
            <Link to="/list-half">
              <div className="reset inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <img className="line-34" src={line34} />
            <img className="line-35" src={line35} />
            <img className="line-37" src={line37} />
            <img className="line-38" src={line38} />
            <img className="line-36" src={line36} />
            <div className="ellipse-18"></div>
            <div className="ellipse-19"></div>
            <div className="rectangle-87"></div>
            <div className="surname inter-normal-black-13px">{surname}</div>
            <div className="meat-4 inter-normal-flamingo-13px">{meat}</div>
            <div className="dessert inter-normal-black-13px">{dessert}</div>
            <div className="salad inter-normal-black-13px">{salad}</div>
            <div className="lunch inter-normal-black-13px">{lunch}</div>
          </div>
          <img className="rectangle-29-7" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory4;
