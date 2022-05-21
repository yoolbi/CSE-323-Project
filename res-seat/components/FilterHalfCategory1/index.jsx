import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component163 from "../Component163";
import "./FilterHalfCategory1.css";

function FilterHalfCategory1(props) {
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
    asian3,
    vector6,
    spanText1,
    spanText2,
    language1,
    vector7,
    fastfood1,
    x21,
    x22,
    x23,
    line29,
    distance,
    vector8,
    language2,
    language3,
    asian4,
    fastfood2,
    language4,
    snack,
    pizza,
    place,
    western,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    rectangle29,
    component164Props,
    component1631Props,
    component1632Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-category-1 screen">
        <div className="flex-row-90">
          <div className="overlap-group4-35">
            <img className="search-26" src={search} />
          </div>
          <div className="flex-col-64">
            <Link to="/completed-preorder-home">
              <img className="group-56" src={group} />
            </Link>
            <div className="my-order-24 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-91">
          <div className="overlap-group3-33">
            <img className="image-1-11" src={image1} />
            <div className="ellipse-1-11 border-1px-black"></div>
            <div className="ellipse-2-11 border-1px-black"></div>
            <div className="ellipse-3-11 border-1px-black"></div>
            <div className="ellipse-4-11 border-1px-black"></div>
            <div className="ellipse-9-13 border-1px-black"></div>
            <div className="ellipse-10-13 border-1px-black"></div>
            <div className="ellipse-11-13 border-1px-black"></div>
            <div className="ellipse-5-11 border-1px-black"></div>
            <div className="ellipse-6-11 border-1px-black"></div>
            <div className="ellipse-7-14 border-1px-black"></div>
            <div className="ellipse-8-11 border-1px-black"></div>
            <img className="vector-161" src="/img/vector-170@2x.png" />
            <div className="rectangle-63-8 border-1px-mist-gray"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-10 border-1px-mist-gray"></div>
            </Link>
            <div className="seats-17 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-10 border-1px-mist-gray"></div>
            </Link>
            <div className="rating-17 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-8" src={line27} />
            <div className="rectangle-59-9 border-1px-orange"></div>
            <div className="category-18 inter-normal-flamingo-13px">{category}</div>
            <img className="vector-162" src={vector2} />
            <div className="rectangle-61-8"></div>
            <img className="vector-163" src={vector3} />
            <Link to="/see-list">
              <div className="rectangle-62-8"></div>
            </Link>
            <img className="vector-164" src={vector4} />
            <div className="see-list-12 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-8" src={line30} />
            <Component164 star1={component164Props.star1} className={component164Props.className} />
            <div className="asian-12 inter-normal-black-13px">{asian1}</div>
            <div className="asian-12 inter-normal-black-13px">{asian2}</div>
            <img className="vector-165" src={vector5} />
            <Component163
              aSoupShop={component1631Props.aSoupShop}
              spanText1={component1631Props.spanText1}
              spanText2={component1631Props.spanText2}
              spanText3={component1631Props.spanText3}
              spanText4={component1631Props.spanText4}
              star1={component1631Props.star1}
              className={component1631Props.className}
            />
            <div className="rectangle-72-6"></div>
            <div className="asian-13 inter-normal-black-7px">{asian3}</div>
            <img className="vector-166" src={vector6} />
            <div className="address-27 arial">
              <span className="span0-54 arial">{spanText1}</span>
              <span className="span1-98 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73-3"></div>
            <div className="rectangle-74-4"></div>
            <div className="rectangle-75-4"></div>
            <Component163
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-76-3"></div>
            <div className="language-13 inter-normal-black-7px">{language1}</div>
            <div className="rectangle-77-3"></div>
            <img className="vector-167" src={vector7} />
            <div className="rectangle-78-4"></div>
            <div className="fastfood-11 inter-normal-black-7px">{fastfood1}</div>
            <img className="x2-10" src={x21} />
            <img className="x2-11" src={x22} />
            <img className="x2-12" src={x23} />
            <Link to="/main">
              <img className="line-29-14" src={line29} />
            </Link>
            <div className="rectangle-85-3"></div>
            <div className="rectangle-30-7"></div>
            <div className="distance-17 inter-normal-white-14px">{distance}</div>
            <img className="vector-168" src={vector8} />
            <div className="rectangle-86-2 border-0-5px-mist-gray"></div>
            <div className="language-14 inter-normal-black-13px">{language2}</div>
            <div className="language-15 inter-normal-black-13px">{language3}</div>
            <div className="asian-14 inter-normal-black-13px">{asian4}</div>
            <div className="fastfood-12 inter-normal-black-13px">{fastfood2}</div>
            <div className="language-16 inter-normal-black-13px">{language4}</div>
            <div className="snack-1 inter-normal-black-13px">{snack}</div>
            <div className="pizza-1 inter-normal-black-13px">{pizza}</div>
            <div className="place-6 inter-normal-black-13px">{place}</div>
            <div className="western-8 inter-normal-black-13px">{western}</div>
            <img className="line-34-4" src={line34} />
            <img className="line-35-4" src={line35} />
            <img className="line-37-4" src={line37} />
            <img className="line-38-4" src={line38} />
            <img className="line-36-4" src={line36} />
            <div className="ellipse-18-4"></div>
            <Link to = "/filter-half-category-2">
            <div className="ellipse-19-4"></div>
            </Link>
            <Link to="/list-half">
              <div className="reset-4 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <img className="rectangle-29-24" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory1;
