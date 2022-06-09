import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
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
    component1642Props,
    component16321Props,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-category-1 screen">
        <div className="flex-row-603">
          <div className="overlap-group4-283">
            <img className="search-24" src={search} />
          </div>
          <div className="flex-col-487">
            <Link to="/completed-preorder-home">
              <img className="group-105" src={group} />
            </Link>
            <div className="my-order-35 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-604">
          <div className="overlap-group3-462">
            <img className="image-1-72" src={image1} />
            <div className="ellipse-1-56 border-1px-black"></div>
            <div className="ellipse-2-7 border-1px-black"></div>
            <div className="ellipse-3-32 border-1px-black"></div>
            <div className="ellipse-4-7 border-1px-black"></div>
            <div className="ellipse-9-9 border-1px-black"></div>
            <div className="ellipse-10-9 border-1px-black"></div>
            <div className="ellipse-11-13 border-1px-black"></div>
            <div className="ellipse-5-37 border-1px-black"></div>
            <div className="ellipse-6-23 border-1px-black"></div>
            <div className="ellipse-7-9 border-1px-black"></div>
            <div className="ellipse-8-7 border-1px-black"></div>
            <img className="vector-853" src="/img/vector-170@2x.png" />
            <div className="rectangle-63-7 border-1px-c4c4c4"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-24 border-1px-c4c4c4"></div>
            </Link>
            <div className="seats-215 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-21 border-1px-c4c4c4"></div>
            </Link>
            <div className="rating-169 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-48" src={line27} />
            <div className="rectangle-59-6 border-1px-orange"></div>
            <div className="category-206 inter-normal-flamingo-13px">{category}</div>
            <img className="vector-854" src={"/img/vector-134@2x.png"} />
            <div className="rectangle-61-7"></div>
            <img className="vector-855" src={vector3} />
            <Link to="/list">
              <div className="rectangle-62-7"></div>
            </Link>
            <img className="vector-856" src={"/img/vector-134@2x.png"} />
            <div className="see-list-65 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-48" src={line30} />
            <Component1642 star1={component1642Props.star1} className={component1642Props.className} />
            <div className="asian-57 inter-normal-black-13px">{asian1}</div>
            <div className="asian-57 inter-normal-black-13px">{asian2}</div>
            <img className="vector-857" src={vector5} />
            <Component1632
              aSoupShop={component16321Props.aSoupShop}
              spanText1={component16321Props.spanText1}
              spanText2={component16321Props.spanText2}
              spanText3={component16321Props.spanText3}
              spanText4={component16321Props.spanText4}
              star1={component16321Props.star1}
              className={component16321Props.className}
            />
            <div className="rectangle-72-6"></div>
            <div className="asian-58 inter-normal-black-7px">{asian3}</div>
            <img className="vector-858" src={vector6} />
            <div className="address-114 arial">
              <span className="span0-111 arial">{spanText1}</span>
              <span className="span1-259 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73-3"></div>
            <div className="rectangle-74-4"></div>
            <div className="rectangle-75-4"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-76-3"></div>
            <div className="language-96 inter-normal-black-7px">{language1}</div>
            <div className="rectangle-77-3"></div>
            <img className="vector-859" src={"/img/vector-134@2x.png"} />
            <div className="rectangle-78-4"></div>
            <div className="fastfood-64 inter-normal-black-7px">{fastfood1}</div>
            <img className="x2-10" src={x21} />
            <img className="x2-11" src={x22} />
            <img className="x2-12" src={x23} />
            <Link to="/main">
              <img className="line-29-66" src={line29} />
            </Link>
            <div className="rectangle-85-11"></div>
            <div className="rectangle-30-6"></div>
            <div className="distance-146 inter-normal-white-14px">{distance}</div>
            <img className="vector-860" src={"/img/vector-134@2x.png"} />
            <div className="rectangle-86-2 border-0-5px-c4c4c4"></div>
            <div className="language-97 inter-normal-black-13px">{language2}</div>
            <div className="language-98 inter-normal-black-13px">{language3}</div>
            <div className="asian-59 inter-normal-black-13px">{asian4}</div>
            <div className="fastfood-65 inter-normal-black-13px">{fastfood2}</div>
            <div className="language-99 inter-normal-black-13px">{language4}</div>
            <div className="snack-8 inter-normal-black-13px">{snack}</div>
            <div className="pizza-24 inter-normal-black-13px">{pizza}</div>
            <div className="place-31 inter-normal-black-13px">{place}</div>
            <div className="western-47 inter-normal-black-13px">{western}</div>
            <img className="line-34-26" src={line34} />
            <img className="line-35-26" src={line35} />
            <img className="line-37-26" src={line37} />
            <img className="line-38-26" src={line38} />
            <img className="line-36-26" src={line36} />
            <div className="ellipse-18-41"></div>
            <div className="ellipse-19-21"></div>
            <Link to="/list-half">
              <div className="reset-42 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
          </div>
          <img className="rectangle-29-50" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory1;
