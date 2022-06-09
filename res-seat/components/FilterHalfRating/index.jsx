import React from "react";
import { Link } from "react-router-dom";
import Component1632 from "../Component1632";
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
    component16321Props,
    component16322Props,
    component162Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-rating screen">
        <div className="flex-row-586">
          <div className="overlap-group4-275">
            <img className="search-17" src={search} />
          </div>
          <div className="flex-col-481">
            <Link to="/completed-preorder-home">
              <img className="group-99" src={group} />
            </Link>
            <div className="my-order-29 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-587">
          <div className="overlap-group3-454">
            <img className="image-1-67" src={image1} />
            <div className="ellipse-1-51 border-1px-black"></div>
            <div className="ellipse-2-2 border-1px-black"></div>
            <div className="ellipse-3-27 border-1px-black"></div>
            <div className="ellipse-4-2 border-1px-black"></div>
            <div className="ellipse-9-4 border-1px-black"></div>
            <div className="ellipse-10-4 border-1px-black"></div>
            <div className="ellipse-11-8 border-1px-black"></div>
            <div className="ellipse-5-32 border-1px-black"></div>
            <div className="ellipse-6-18 border-1px-black"></div>
            <div className="ellipse-7-4 border-1px-black"></div>
            <div className="ellipse-8-2 border-1px-black"></div>
            <img className="vector-804" src="/img/vector-33@2x.png" />
            <div className="rectangle-63-3 border-1px-c4c4c4"></div>
            <div className="rectangle-71-5"></div>
            <Component1632
              aSoupShop={component16321Props.aSoupShop}
              spanText1={component16321Props.spanText1}
              spanText2={component16321Props.spanText2}
              spanText3={component16321Props.spanText3}
              spanText4={component16321Props.spanText4}
              star1={component16321Props.star1}
              className={component16321Props.className}
            />
            <div className="rectangle-68-16"></div>
            <div className="language-91 inter-normal-black-7px">{language}</div>
            <div className="rectangle-65-1"></div>
            <img className="vector-805" src={vector2} />
            <img className="x1-106" src={x11} />
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-67-17"></div>
            <div className="asian-51 inter-normal-black-7px">{asian}</div>
            <img className="vector-806" src={vector3} />
            <div className="rectangle-27-149"></div>
            <img className="x1-107" src={x12} />
            <img className="vector-807" src={vector4} />
            <Component162 star1={component162Props.star1} />
            <div className="rectangle-70-6"></div>
            <div className="western-44 inter-normal-black-7px">{western}</div>
            <div className="rectangle-31"></div>
            <img className="vector-808" src={vector5} />
            <img className="x1-108" src={x13} />
            <img className="line-47" src={line27} />
            <div className="rectangle-30-3"></div>
            <div className="distance-142 inter-normal-white-14px">{distance}</div>
            <img className="vector-809" src={vector6} />
            <div className="rectangle-59-3 border-1px-c4c4c4"></div>
            <div className="category-201 inter-normal-spicy-pink-13px">{category}</div>
            <img className="vector-810" src={vector7} />
            <div className="rectangle-33-21 border-1px-c4c4c4"></div>
            <div className="seats-210 inter-normal-spicy-pink-14px">{seats}</div>
            <Link to="/list-half">
              <div className="rectangle-60-17"></div>
            </Link>
            <div className="rating-164 inter-normal-white-14px">{rating}</div>
            <div className="rectangle-61-3"></div>
            <img className="vector-811" src={vector8} />
            <Link to="/list">
              <div className="rectangle-62-3"></div>
            </Link>
            <img className="vector-812" src={vector9} />
            <div className="see-list-60 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-47" src={line30} />
            <Link to="/main">
              <img className="line-29-61" src={line29} />
            </Link>
          </div>
          <img className="rectangle-29-43" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfRating;
