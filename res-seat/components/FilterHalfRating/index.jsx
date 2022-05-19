import React from "react";
import { Link } from "react-router-dom";
import Component163 from "../Component163";
import Component162 from "../Component162";
import "./FilterHalfRating.css";

function FilterHalfRating(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    language,
    vector2,
    x11,
    asian,
    vector3,
    x12,
    vector4,
    western,
    vector5,
    x13,
    line27,
    distance,
    vector6,
    category,
    vector7,
    seats,
    rating,
    vector8,
    vector9,
    seeList,
    line30,
    line29,
    rectangle29,
    component1631Props,
    component1632Props,
    component162Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-rating screen">
        <div className="flex-row-71">
          <div className="overlap-group4-28">
            <img className="search-18" src={search} />
          </div>
          <div className="flex-col-56">
            <Link to="/completed-preorder-home">
              <img className="group-34" src={group} />
            </Link>
            <div className="my-order-17 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-72">
          <div className="overlap-group3-24">
            <img className="image-1-6" src={image1} />
            <div className="ellipse-1-6 border-1px-black"></div>
            <div className="ellipse-2-6 border-1px-black"></div>
            <div className="ellipse-3-6 border-1px-black"></div>
            <div className="ellipse-4-6 border-1px-black"></div>
            <div className="ellipse-9-8 border-1px-black"></div>
            <div className="ellipse-10-8 border-1px-black"></div>
            <div className="ellipse-11-8 border-1px-black"></div>
            <div className="ellipse-5-6 border-1px-black"></div>
            <div className="ellipse-6-6 border-1px-black"></div>
            <div className="ellipse-7-9 border-1px-black"></div>
            <div className="ellipse-8-6 border-1px-black"></div>
            <img className="vector-102" src="/img/vector-33@2x.png" />
            <div className="rectangle-63-4 border-1px-mist-gray"></div>
            <div className="rectangle-71-5"></div>
            <Component163
              aSoupShop={component1631Props.aSoupShop}
              spanText1={component1631Props.spanText1}
              spanText2={component1631Props.spanText2}
              spanText3={component1631Props.spanText3}
              spanText4={component1631Props.spanText4}
              star1={component1631Props.star1}
              className={component1631Props.className}
            />
            <div className="rectangle-68-6"></div>
            <div className="language-7 inter-normal-black-7px">{language}</div>
            <div className="rectangle-65-1"></div>
            <img className="vector-103" src={vector2} />
            <img className="x1-14" src={x11} />
            <Component163
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-67-3"></div>
            <div className="asian-5 inter-normal-black-7px">{asian}</div>
            <img className="vector-104" src={vector3} />
            <div className="rectangle-27-24"></div>
            <img className="x1-15" src={x12} />
            <img className="vector-105" src={vector4} />
            <Component162 star1={component162Props.star1} className={component162Props.className} />
            <div className="rectangle-70-6"></div>
            <div className="western-4 inter-normal-black-7px">{western}</div>
            <div className="rectangle-31"></div>
            <img className="vector-106" src={vector5} />
            <img className="x1-16" src={x13} />
            <img className="line-7" src={line27} />
            <div className="rectangle-30-4"></div>
            <div className="distance-11 inter-normal-white-14px">{distance}</div>
            <img className="vector-107" src={vector6} />
            <div className="rectangle-59-6 border-1px-mist-gray"></div>
            <div className="category-12 inter-normal-spicy-pink-13px">{category}</div>
            <img className="vector-108" src={vector7} />
            <div className="rectangle-33-6 border-1px-mist-gray"></div>
            <div className="seats-11 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/list-half">
              <div className="rectangle-60-6"></div>
            </Link>
            <div className="rating-11 inter-normal-white-14px">{rating}</div>
            <div className="rectangle-61-4"></div>
            <img className="vector-109" src={vector8} />
            <Link to="/see-list">
              <div className="rectangle-62-4"></div>
            </Link>
            <img className="vector-110" src={vector9} />
            <div className="see-list-7 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-7" src={line30} />
            <Link to="/main">
              <img className="line-29-8" src={line29} />
            </Link>
          </div>
          <img className="rectangle-29-16" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfRating;
