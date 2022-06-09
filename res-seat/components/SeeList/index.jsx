import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
import Component164 from "../Component164";
import Component162 from "../Component162";
import Group4822 from "../Group4822";
import "./SeeList.css";

function SeeList(props) {
  const {
    search,
    line27,
    line28,
    vector2,
    asian,
    vector3,
    spanText1,
    spanText2,
    language,
    image5,
    image6,
    meat,
    western,
    vector4,
    vector5,
    vector6,
    vector7,
    fastfood,
    x11,
    x12,
    x13,
    line29,
    x14,
    bhc1,
    place,
    category,
    vector8,
    seats,
    rating,
    myOrder,
    group,
    rectangle29,
    component1642Props,
    component16321Props,
    component16322Props,
    component164Props,
    component162Props,
    component16323Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="see-list-62 screen">
        <div className="group-container-245">
          <div className="overlap-group6-102">
            <div className="rectangle-94 border-1px-black"></div>
            <img className="vector-822" src="/img/star-2@2x.png" />
            <Link to="/search-list">
              <div className="rectangle-15-36"></div>
            </Link>
            <img className="search-19" src={search} />
            <img className="line-27-53" src={line27} />
            <img className="line-28-66" src={line28} />
            <Component1642 star1={component1642Props.star1} className={component1642Props.className} />
            <img className="vector-823" src={vector2} />
            <Component1632
              aSoupShop={component16321Props.aSoupShop}
              spanText1={component16321Props.spanText1}
              spanText2={component16321Props.spanText2}
              spanText3={component16321Props.spanText3}
              spanText4={component16321Props.spanText4}
              star1={component16321Props.star1}
              className={component16321Props.className}
            />
            <div className="rectangle-67-18"></div>
            <div className="asian-53 inter-normal-black-7px">{asian}</div>
            <img className="vector-824" src={vector3} />
            <div className="address-110 arial">
              <span className="span0-107 arial">{spanText1}</span>
              <span className="span1-255 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-27-150"></div>
            <div className="rectangle-28-16"></div>
            <div className="rectangle-29-45"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-68-17"></div>
            <div className="language-93 inter-normal-black-7px">{language}</div>
            <Component164 {...component164Props} />
            <img className="image-5-37" src={image5} />
            <img className="image-6-50" src={image6} />
            <div className="rectangle-69-26"></div>
            <div className="meat-72 inter-normal-black-7px">{meat}</div>
            <Component162 star1={component162Props.star1} className={component162Props.className} />
            <div className="rectangle-70-7"></div>
            <div className="western-45 inter-normal-black-7px">{western}</div>
            <div className="rectangle-31-1"></div>
            <Component1632
              aSoupShop={component16323Props.aSoupShop}
              spanText1={component16323Props.spanText1}
              spanText2={component16323Props.spanText2}
              spanText3={component16323Props.spanText3}
              spanText4={component16323Props.spanText4}
              star1={component16323Props.star1}
              className={component16323Props.className}
            />
            <div className="rectangle-65-2"></div>
            <div className="rectangle-32"></div>
            <img className="vector-825" src={vector4} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-826" src={vector5} />
            </Link>
            <img className="vector-827" src={vector6} />
            <img className="vector-828" src={vector7} />
            <div className="rectangle-66-33"></div>
            <div className="fastfood-61 inter-normal-black-7px">{fastfood}</div>
            <img className="x1-109" src={x11} />
            <img className="x1-110" src={x12} />
            <img className="x1-111" src={x13} />
            <Link to="/list-half">
              <img className="line-29-63" src={line29} />
            </Link>
            <img className="x1-112" src={x14} />
            <img className="bhc-1-1" src={bhc1} />
            <div className="rectangle-71-6"></div>
            <div className="place-30 inter-normal-black-7px">{place}</div>
            <div className="group-51-67">
              <Group4822 />
              <Link to="/filter-list-category">
                <div className="group-47-141">
                  <div className="overlap-group1-655 border-1px-c4c4c4">
                    <div className="category-203 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-829" src={vector8} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats">
                <div className="group-49-124">
                  <div className="overlap-group2-505 border-1px-c4c4c4">
                    <div className="seats-212 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating">
                <div className="group-50-128">
                  <div className="overlap-group3-457 border-1px-c4c4c4">
                    <div className="rating-166 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="my-order-31 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
          <Link to="/completed-preorder-home">
            <img className="group-101" src={group} />
          </Link>
        </div>
        <img className="rectangle-29-46" src={rectangle29} />
      </div>
    </div>
  );
}

export default SeeList;
