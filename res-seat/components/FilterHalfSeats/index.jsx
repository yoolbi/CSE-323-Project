import React from "react";
import { Link } from "react-router-dom";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import Component1642 from "../Component1642";
import "./FilterHalfSeats.css";

function FilterHalfSeats(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    language,
    vector2,
    x11,
    image5,
    image6,
    meat,
    vector3,
    line27,
    distance,
    vector4,
    category,
    vector5,
    seats,
    rating,
    vector6,
    vector7,
    seeList,
    line30,
    line29,
    vector8,
    spanText1,
    spanText2,
    fastfood,
    x12,
    rectangle29,
    component1632Props,
    component164Props,
    component1642Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-seats screen">
        <div className="flex-row-584">
          <div className="overlap-group4-274">
            <img className="search-16" src={search} />
          </div>
          <div className="flex-col-480">
            <Link to="/completed-preorder-home">
              <img className="group-98" src={group} />
            </Link>
            <div className="my-order-28 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-585">
          <div className="overlap-group3-453">
            <img className="image-1-66" src={image1} />
            <div className="ellipse-1-50 border-1px-black"></div>
            <div className="ellipse-2-1 border-1px-black"></div>
            <div className="ellipse-3-26 border-1px-black"></div>
            <div className="ellipse-4-1 border-1px-black"></div>
            <div className="ellipse-9-3 border-1px-black"></div>
            <div className="ellipse-10-3 border-1px-black"></div>
            <div className="ellipse-11-7 border-1px-black"></div>
            <div className="ellipse-5-31 border-1px-black"></div>
            <div className="ellipse-6-17 border-1px-black"></div>
            <div className="ellipse-7-3 border-1px-black"></div>
            <div className="ellipse-8-1 border-1px-black"></div>
            <img className="vector-796" src="/img/vector-7@2x.png" />
            <div className="rectangle-63-2 border-1px-c4c4c4"></div>
            <div className="rectangle-70-5"></div>
            <Component1632
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-68-15"></div>
            <div className="language-90 inter-normal-black-7px">{language}</div>
            <div className="rectangle-65"></div>
            <img className="vector-797" src={vector2} />
            <img className="x1-104" src={x11} />
            <Component164 {...component164Props} />
            <img className="image-5-36" src={image5} />
            <img className="image-6-49" src={image6} />
            <div className="rectangle-69-25"></div>
            <div className="meat-71 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-798" src={vector3} />
            </Link>
            <img className="line-27-51" src={line27} />
            <div className="rectangle-30-2"></div>
            <div className="distance-141 inter-normal-white-14px">{distance}</div>
            <img className="vector-799" src={vector4} />
            <div className="rectangle-59-2 border-1px-c4c4c4"></div>
            <div className="category-200 inter-normal-spicy-pink-13px">{category}</div>
            <img className="vector-800" src={vector5} />
            <Link to="/list-half">
              <div className="rectangle-33-20"></div>
            </Link>
            <div className="seats-209 inter-normal-white-14px">{seats}</div>
            <div className="rectangle-60-16 border-1px-c4c4c4"></div>
            <div className="rating-163 inter-normal-spicy-pink-14px">{rating}</div>
            <div className="rectangle-61-2"></div>
            <img className="vector-801" src={vector6} />
            <Link to="/list">
              <div className="rectangle-62-2"></div>
            </Link>
            <img className="vector-802" src={vector7} />
            <div className="see-list-59 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-3" src={line30} />
            <Link to="/main">
              <img className="line-29-60" src={line29} />
            </Link>
            <Component1642 star1={component1642Props.star1} className={component1642Props.className} />
            <img className="vector-803" src={vector8} />
            <div className="address-108 arial">
              <span className="span0-103 arial">{spanText1}</span>
              <span className="span1-249 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-28-15"></div>
            <div className="rectangle-66-32"></div>
            <div className="fastfood-59 inter-normal-black-7px">{fastfood}</div>
            <img className="x1-105" src={x12} />
          </div>
          <img className="rectangle-29-42" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfSeats;
