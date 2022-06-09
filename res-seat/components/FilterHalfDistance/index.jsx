import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
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
    component1642Props,
    component16321Props,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-distance screen">
        <div className="flex-row-597">
          <div className="overlap-group4-281">
            <img className="search-21" src={search} />
          </div>
          <div className="flex-col-484">
            <Link to="/completed-preorder-home">
              <img className="group-102" src={group} />
            </Link>
            <div className="my-order-32 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-598">
          <div className="overlap-group3-460">
            <img className="image-1-69" src={image1} />
            <div className="ellipse-1-53 border-1px-black"></div>
            <div className="ellipse-2-4 border-1px-black"></div>
            <div className="ellipse-3-29 border-1px-black"></div>
            <div className="ellipse-4-4 border-1px-black"></div>
            <div className="ellipse-9-6 border-1px-black"></div>
            <div className="ellipse-10-6 border-1px-black"></div>
            <div className="ellipse-11-10 border-1px-black"></div>
            <div className="ellipse-5-34 border-1px-black"></div>
            <div className="ellipse-6-20 border-1px-black"></div>
            <div className="ellipse-7-6 border-1px-black"></div>
            <div className="ellipse-8-4 border-1px-black"></div>
            <img className="vector-833" src="/img/vector-150@2x.png" />
            <div className="rectangle-63-5 border-1px-c4c4c4"></div>
            <Link to="/filter-half-seats">
              <div className="rectangle-33-22 border-1px-c4c4c4"></div>
            </Link>
            <div className="seats-213 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/filter-half-rating">
              <div className="rectangle-60-19 border-1px-c4c4c4"></div>
            </Link>
            <div className="rating-167 inter-normal-spicy-pink-14px">{rating}</div>
            <img className="line-27-54" src={line27} />
            <div className="rectangle-30-4 border-1px-orange"></div>
            <div className="distance-144 inter-normal-flamingo-14px">{distance}</div>
            <Link to="/list-half">
              <img className="vector-834" src={vector2} />
            </Link>
            <Link to="/filter-half-category-1">
              <div className="rectangle-59-4 border-1px-c4c4c4"></div>
            </Link>
            <div className="category-204 inter-normal-spicy-pink-13px">{category}</div>
            <img className="vector-835" src={vector3} />
            <div className="rectangle-61-5"></div>
            <img className="vector-836" src={vector4} />
            <Link to="/list">
              <div className="rectangle-62-5"></div>
            </Link>
            <img className="vector-837" src={vector5} />
            <div className="see-list-63 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-5" src={line30} />
            <Component1642 star1={component1642Props.star1} className={component1642Props.className} />
            <img className="vector-838" src={vector6} />
            <Component1632
              aSoupShop={component16321Props.aSoupShop}
              spanText1={component16321Props.spanText1}
              spanText2={component16321Props.spanText2}
              spanText3={component16321Props.spanText3}
              spanText4={component16321Props.spanText4}
              star1={component16321Props.star1}
              className={component16321Props.className}
            />
            <div className="rectangle-72-3"></div>
            <div className="asian-54 inter-normal-black-7px">{asian}</div>
            <img className="vector-839" src={vector7} />
            <div className="address-111 arial">
              <span className="span0-109 arial">{spanText1}</span>
              <span className="span1-257 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73-1"></div>
            <div className="rectangle-74-2"></div>
            <div className="rectangle-75-2"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-76-1"></div>
            <div className="language-94 inter-normal-black-7px">{language}</div>
            <div className="rectangle-77-1"></div>
            <img className="vector-840" src={vector8} />
            <div className="rectangle-78-2"></div>
            <div className="fastfood-62 inter-normal-black-7px">{fastfood}</div>
            <img className="x2-4" src={x21} />
            <img className="x2-5" src={x22} />
            <img className="x2-6" src={x23} />
            <Link to="/main">
              <img className="line-29-64" src={line29} />
            </Link>
            <div className="rectangle-84 border-1px-c4c4c4"></div>
            <div className="x200m-8 inter-normal-black-14px">{x200M}</div>
            <div className="x500m-8 inter-normal-black-14px">{x500M}</div>
            <div className="x1-km-8 inter-normal-flamingo-14px">{x1Km}</div>
            <div className="x100m-8 inter-normal-black-14px">{x100M}</div>
            <img className="line-31-7" src={line31} />
            <img className="line-32-9" src={line32} />
            <img className="line-33-7" src={line33} />
            <div className="rectangle-85-9"></div>
          </div>
          <img className="rectangle-29-47" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfDistance;
