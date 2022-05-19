import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component163 from "../Component163";
import "./FilterHalfCategory2.css";

function FilterHalfCategory2(props) {
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
    language,
    vector7,
    fastfood,
    x21,
    x22,
    x23,
    line29,
    distance,
    vector8,
    reset,
    surname,
    meat,
    dessert,
    salad,
    lunch,
    line34,
    line35,
    line37,
    line38,
    line36,
    rectangle29,
    component164Props,
    component1631Props,
    component1632Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-category-2 screen">
        <div className="flex-row-86">
          <div className="overlap-group4-34">
            <img className="search-24" src={search} />
          </div>
          <div className="flex-col-62">
            <Link to="/completed-preorder-home">
              <img className="group-42" src={group} />
            </Link>
            <div className="my-order-22 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-87">
          <div className="overlap-group3-32">
            <img className="image-1-9" src={image1} />
            <div className="ellipse-1-9 border-1px-black"></div>
            <div className="ellipse-2-9 border-1px-black"></div>
            <div className="ellipse-3-9 border-1px-black"></div>
            <div className="ellipse-4-9 border-1px-black"></div>
            <div className="ellipse-9-11 border-1px-black"></div>
            <div className="ellipse-10-11 border-1px-black"></div>
            <div className="ellipse-11-11 border-1px-black"></div>
            <div className="ellipse-5-9 border-1px-black"></div>
            <div className="ellipse-6-9 border-1px-black"></div>
            <div className="ellipse-7-12 border-1px-black"></div>
            <div className="ellipse-8-9 border-1px-black"></div>
            <img className="vector-149" src="/img/vector-150@2x.png" />
            <div className="rectangle-63-7 border-1px-mist-gray"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-9 border-1px-mist-gray"></div>
            </Link>
            <div className="seats-16 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-9 border-1px-mist-gray"></div>
            </Link>
            <div className="rating-16 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-12" src={line27} />
            <div className="rectangle-59-8 border-1px-orange"></div>
            <div className="category-17 inter-normal-flamingo-13px">{category}</div>
            <img className="vector-150" src={vector2} />
            <div className="rectangle-61-7"></div>
            <img className="vector-151" src={vector3} />
            <Link to="/see-list">
              <div className="rectangle-62-7"></div>
            </Link>
            <img className="vector-152" src={vector4} />
            <div className="see-list-11 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-5" src={line30} />
            <Component164 star1={component164Props.star1} className={component164Props.className} />
            <div className="asian-10 inter-normal-black-13px">{asian1}</div>
            <div className="asian-10 inter-normal-black-13px">{asian2}</div>
            <img className="vector-153" src={vector5} />
            <Component163
              aSoupShop={component1631Props.aSoupShop}
              spanText1={component1631Props.spanText1}
              spanText2={component1631Props.spanText2}
              spanText3={component1631Props.spanText3}
              spanText4={component1631Props.spanText4}
              star1={component1631Props.star1}
              className={component1631Props.className}
            />
            <div className="rectangle-72-4"></div>
            <div className="asian-11 inter-normal-black-7px">{asian3}</div>
            <img className="vector-154" src={vector6} />
            <div className="address-25 arial">
              <span className="span0-53 arial">{spanText1}</span>
              <span className="span1-96 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73-2"></div>
            <div className="rectangle-74-3"></div>
            <div className="rectangle-75-3"></div>
            <Component163
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-76-2"></div>
            <div className="language-12 inter-normal-black-7px">{language}</div>
            <div className="rectangle-77-2"></div>
            <img className="vector-155" src={vector7} />
            <div className="rectangle-78-3"></div>
            <div className="fastfood-10 inter-normal-black-7px">{fastfood}</div>
            <img className="x2-7" src={x21} />
            <img className="x2-8" src={x22} />
            <img className="x2-9" src={x23} />
            <Link to="/main">
              <img className="line-29-13" src={line29} />
            </Link>
            <div className="rectangle-85-2"></div>
            <div className="rectangle-30-6"></div>
            <div className="distance-16 inter-normal-white-14px">{distance}</div>
            <img className="vector-156" src={vector8} />
            <div className="rectangle-86-1 border-0-5px-mist-gray"></div>
            <Link to="/list-half">
              <div className="reset-3 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <div className="surname-2 inter-normal-black-13px">{surname}</div>
            <Link to="/filter-half-category-3">
              <div className="meat-13 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="dessert-2 inter-normal-black-13px">{dessert}</div>
            <div className="salad-2 inter-normal-black-13px">{salad}</div>
            <div className="lunch-2 inter-normal-black-13px">{lunch}</div>
            <img className="line-34-3" src={line34} />
            <img className="line-35-3" src={line35} />
            <img className="line-37-3" src={line37} />
            <img className="line-38-3" src={line38} />
            <img className="line-36-3" src={line36} />
            <Link to = "/filter-half-category-1">
            <div className="ellipse-18-3"></div>
            </Link>
            <div className="ellipse-19-3"></div>
          </div>
          <img className="rectangle-29-22" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory2;
