import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component163 from "../Component163";
import "./FilterHalfDistance.css";

function FilterHalfDistance(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    seats,
    rating,
    line27,
    distance,
    vector2,
    category,
    vector3,
    vector4,
    vector5,
    seeList,
    line30,
    vector6,
    asian,
    vector7,
    spanText1,
    spanText2,
    language,
    vector8,
    fastfood,
    x21,
    x22,
    x23,
    line29,
    x200M,
    x500M,
    x1Km,
    x100M,
    line31,
    line32,
    line33,
    rectangle29,
    component164Props,
    component1631Props,
    component1632Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-distance screen">
        <div className="flex-row-84">
          <div className="overlap-group4-33">
            <img className="search-23" src={search} />
          </div>
          <div className="flex-col-61">
            <Link to="/completed-preorder-home">
              <img className="group-41" src={group} />
            </Link>
            <div className="my-order-21 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-85">
          <div className="overlap-group3-31">
            <img className="image-1-8" src={image1} />
            <div className="ellipse-1-8 border-1px-black"></div>
            <div className="ellipse-2-8 border-1px-black"></div>
            <div className="ellipse-3-8 border-1px-black"></div>
            <div className="ellipse-4-8 border-1px-black"></div>
            <div className="ellipse-9-10 border-1px-black"></div>
            <div className="ellipse-10-10 border-1px-black"></div>
            <div className="ellipse-11-10 border-1px-black"></div>
            <div className="ellipse-5-8 border-1px-black"></div>
            <div className="ellipse-6-8 border-1px-black"></div>
            <div className="ellipse-7-11 border-1px-black"></div>
            <div className="ellipse-8-8 border-1px-black"></div>
            <img className="vector-141" src="/img/vector-150@2x.png" />
            <div className="rectangle-63-6 border-1px-mist-gray"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-8 border-1px-mist-gray"></div>
            </Link>
            <div className="seats-15 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-8 border-1px-mist-gray"></div>
            </Link>
            <div className="rating-15 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-11" src={line27} />
            <div className="rectangle-30-5 border-1px-orange"></div>
            <div className="distance-15 inter-normal-flamingo-14px">{distance}</div>
            <Link to="/list-half">
              <img className="vector-142" src={vector2} />
            </Link>
            <Link to="/filter-half-category-1">
              <div className="rectangle-59-7 border-1px-mist-gray"></div>
            </Link>
            <div className="category-16 inter-normal-spicy-pink-13px">{category}</div>
            <img className="vector-143" src={vector3} />
            <div className="rectangle-61-6"></div>
            <img className="vector-144" src={vector4} />
            <Link to="/see-list">
              <div className="rectangle-62-6"></div>
            </Link>
            <img className="vector-145" src={vector5} />
            <div className="see-list-10 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-4" src={line30} />
            <Component164 star1={component164Props.star1} className={component164Props.className} />
            <img className="vector-146" src={vector6} />
            <Component163
              aSoupShop={component1631Props.aSoupShop}
              spanText1={component1631Props.spanText1}
              spanText2={component1631Props.spanText2}
              spanText3={component1631Props.spanText3}
              spanText4={component1631Props.spanText4}
              star1={component1631Props.star1}
              className={component1631Props.className}
            />
            <div className="rectangle-72-3"></div>
            <div className="asian-9 inter-normal-black-7px">{asian}</div>
            <img className="vector-147" src={vector7} />
            <div className="address-24 arial">
              <span className="span0-52 arial">{spanText1}</span>
              <span className="span1-95 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73-1"></div>
            <div className="rectangle-74-2"></div>
            <div className="rectangle-75-2"></div>
            <Component163
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-76-1"></div>
            <div className="language-11 inter-normal-black-7px">{language}</div>
            <div className="rectangle-77-1"></div>
            <img className="vector-148" src={vector8} />
            <div className="rectangle-78-2"></div>
            <div className="fastfood-9 inter-normal-black-7px">{fastfood}</div>
            <img className="x2-4" src={x21} />
            <img className="x2-5" src={x22} />
            <img className="x2-6" src={x23} />
            <Link to="/main">
              <img className="line-29-12" src={line29} />
            </Link>
            <div className="rectangle-84 border-1px-mist-gray"></div>
            <div className="x200m inter-normal-black-14px">{x200M}</div>
            <div className="x500m inter-normal-black-14px">{x500M}</div>
            <div className="x1-km inter-normal-flamingo-14px">{x1Km}</div>
            <div className="x100m inter-normal-black-14px">{x100M}</div>
            <img className="line-31" src={line31} />
            <img className="line-32" src={line32} />
            <img className="line-33" src={line33} />
            <div className="rectangle-85-1"></div>
          </div>
          <img className="rectangle-29-21" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfDistance;
