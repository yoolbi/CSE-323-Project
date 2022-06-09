import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
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
    component1642Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-category-4 screen">
        <div className="flex-row-577">
          <div className="overlap-group2-499">
            <img className="search-14" src={search} />
          </div>
          <div className="flex-col-476">
            <Link to="/completed-preorder-home">
              <img className="group-96" src={group} />
            </Link>
            <div className="my-order-26 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-578">
          <div className="overlap-group1-651">
            <img className="image-1-64" src={image1} />
            <div className="ellipse-9-1 border-1px-black"></div>
            <div className="ellipse-10-1 border-1px-black"></div>
            <div className="ellipse-11-5 border-1px-black"></div>
            <div className="ellipse-7-1 border-1px-black"></div>
            <img className="vector-783" src="/img/vector-7@2x.png" />
            <div className="rectangle-63 border-1px-c4c4c4"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-18 border-1px-c4c4c4"></div>
            </Link>
            <div className="seats-207 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-14 border-1px-c4c4c4"></div>
            </Link>
            <div className="rating-161 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-49" src={line27} />
            <Link to="/filter-half-category-3">
              <div className="rectangle-59 border-1px-orange"></div>
            </Link>
            <div className="category-198 inter-normal-flamingo-13px">{category}</div>
            <img className="vector-784" src={vector2} />
            <div className="rectangle-61"></div>
            <img className="vector-785" src={vector3} />
            <Link to="/list">
              <div className="rectangle-62"></div>
            </Link>
            <img className="vector-786" src={vector4} />
            <div className="see-list-57 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-1" src={line30} />
            <Component1642 star1={component1642Props.star1} className={component1642Props.className} />
            <div className="asian-50 inter-normal-black-13px">{asian1}</div>
            <div className="asian-50 inter-normal-black-13px">{asian2}</div>
            <img className="vector-787" src={vector5} />
            <div className="address-101 arial">
              <span className="span0-95 arial">{spanText1}</span>
              <span className="span1-235 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-74"></div>
            <div className="rectangle-75"></div>
            <div className="rectangle-78"></div>
            <div className="fastfood-58 inter-normal-black-7px">{fastfood}</div>
            <img className="x2" src={x2} />
            <Link to="/main">
              <img className="line-29-58" src={line29} />
            </Link>
            <div className="rectangle-85-8"></div>
            <div className="rectangle-30"></div>
            <div className="distance-139 inter-normal-white-14px">{distance}</div>
            <img className="vector-788" src={vector6} />
            <div className="rectangle-86 border-0-5px-c4c4c4"></div>
            <Link to="/list-half">
              <div className="reset-40 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <img className="line-34-24" src={line34} />
            <img className="line-35-24" src={line35} />
            <img className="line-37-24" src={line37} />
            <img className="line-38-24" src={line38} />
            <img className="line-36-24" src={line36} />
            <div className="ellipse-18-39"></div>
            <div className="ellipse-19-19"></div>
            <div className="rectangle-87"></div>
            <div className="surname-16 inter-normal-black-13px">{surname}</div>
            <div className="meat-69 inter-normal-flamingo-13px">{meat}</div>
            <div className="dessert-16 inter-normal-black-13px">{dessert}</div>
            <div className="salad-16 inter-normal-black-13px">{salad}</div>
            <div className="lunch-16 inter-normal-black-13px">{lunch}</div>
          </div>
          <img className="rectangle-29-40" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory4;
