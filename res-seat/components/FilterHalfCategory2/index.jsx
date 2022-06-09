import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
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
    component1642Props,
    component16321Props,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-category-2 screen">
        <div className="flex-row-599">
          <div className="overlap-group4-282">
            <img className="search-22" src={search} />
          </div>
          <div className="flex-col-485">
            <Link to="/completed-preorder-home">
              <img className="group-103" src={group} />
            </Link>
            <div className="my-order-33 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-600">
          <div className="overlap-group3-461">
            <img className="image-1-70" src={image1} />
            <div className="ellipse-1-54 border-1px-black"></div>
            <div className="ellipse-2-5 border-1px-black"></div>
            <div className="ellipse-3-30 border-1px-black"></div>
            <div className="ellipse-4-5 border-1px-black"></div>
            <div className="ellipse-9-7 border-1px-black"></div>
            <div className="ellipse-10-7 border-1px-black"></div>
            <div className="ellipse-11-11 border-1px-black"></div>
            <div className="ellipse-5-35 border-1px-black"></div>
            <div className="ellipse-6-21 border-1px-black"></div>
            <div className="ellipse-7-7 border-1px-black"></div>
            <div className="ellipse-8-5 border-1px-black"></div>
            <img className="vector-841" src="/img/vector-150@2x.png" />
            <div className="rectangle-63-6 border-1px-c4c4c4"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-23 border-1px-c4c4c4"></div>
            </Link>
            <div className="seats-214 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-20 border-1px-c4c4c4"></div>
            </Link>
            <div className="rating-168 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-55" src={line27} />
            <div className="rectangle-59-5 border-1px-orange"></div>
            <div className="category-205 inter-normal-flamingo-13px">{category}</div>
            <img className="vector-842" src={vector2} />
            <div className="rectangle-61-6"></div>
            <img className="vector-843" src={vector3} />
            <Link to="/list">
              <div className="rectangle-62-6"></div>
            </Link>
            <img className="vector-844" src={vector4} />
            <div className="see-list-64 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-6" src={line30} />
            <Component1642 star1={component1642Props.star1} className={component1642Props.className} />
            <div className="asian-55 inter-normal-black-13px">{asian1}</div>
            <div className="asian-55 inter-normal-black-13px">{asian2}</div>
            <img className="vector-845" src={vector5} />
            <Component1632
              aSoupShop={component16321Props.aSoupShop}
              spanText1={component16321Props.spanText1}
              spanText2={component16321Props.spanText2}
              spanText3={component16321Props.spanText3}
              spanText4={component16321Props.spanText4}
              star1={component16321Props.star1}
              className={component16321Props.className}
            />
            <div className="rectangle-72-4"></div>
            <div className="asian-56 inter-normal-black-7px">{asian3}</div>
            <img className="vector-846" src={vector6} />
            <div className="address-112 arial">
              <span className="span0-110 arial">{spanText1}</span>
              <span className="span1-258 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73-2"></div>
            <div className="rectangle-74-3"></div>
            <div className="rectangle-75-3"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-76-2"></div>
            <div className="language-95 inter-normal-black-7px">{language}</div>
            <div className="rectangle-77-2"></div>
            <img className="vector-847" src={vector7} />
            <div className="rectangle-78-3"></div>
            <div className="fastfood-63 inter-normal-black-7px">{fastfood}</div>
            <img className="x2-7" src={x21} />
            <img className="x2-8" src={x22} />
            <img className="x2-9" src={x23} />
            <Link to="/main">
              <img className="line-29-65" src={line29} />
            </Link>
            <div className="rectangle-85-10"></div>
            <div className="rectangle-30-5"></div>
            <div className="distance-145 inter-normal-white-14px">{distance}</div>
            <img className="vector-848" src={vector8} />
            <div className="rectangle-86-1 border-0-5px-c4c4c4"></div>
            <Link to="/list-half">
              <div className="reset-41 inter-normal-spicy-pink-10px">{reset}</div>
            </Link>
            <div className="surname-17 inter-normal-black-13px">{surname}</div>
            <Link to="/filter-half-category-3">
              <div className="meat-73 inter-normal-black-13px">{meat}</div>
            </Link>
            <div className="dessert-17 inter-normal-black-13px">{dessert}</div>
            <div className="salad-17 inter-normal-black-13px">{salad}</div>
            <div className="lunch-17 inter-normal-black-13px">{lunch}</div>
            <img className="line-34-25" src={line34} />
            <img className="line-35-25" src={line35} />
            <img className="line-37-25" src={line37} />
            <img className="line-38-25" src={line38} />
            <img className="line-36-25" src={line36} />
            <div className="ellipse-18-40"></div>
            <div className="ellipse-19-20"></div>
          </div>
          <img className="rectangle-29-48" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfCategory2;
