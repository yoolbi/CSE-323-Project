import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component163 from "../Component163";
import Component16 from "../Component16";
import Component162 from "../Component162";
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
    distance,
    vector8,
    category,
    vector9,
    seats,
    rating,
    myOrder,
    group,
    rectangle29,
    component164Props,
    component1631Props,
    component1632Props,
    component16Props,
    component162Props,
    component1633Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="see-list-9 screen">
        <div className="group-container-7">
          <div className="overlap-group6-21">
            <div className="rectangle-94 border-1px-black"></div>
            <img className="vector-121" src="/img/star-2@2x.png" />
            <Link to="/search-list">
              <div className="rectangle-15-4"></div>
            </Link>
            <img className="search-20" src={search} />
            <img className="line-27-9" src={line27} />
            <img className="line-28-5" src={line28} />
            <Component164 star1={component164Props.star1} className={component164Props.className} />
            <img className="vector-122" src={vector2} />
            <Component163
              aSoupShop={component1631Props.aSoupShop}
              spanText1={component1631Props.spanText1}
              spanText2={component1631Props.spanText2}
              spanText3={component1631Props.spanText3}
              spanText4={component1631Props.spanText4}
              star1={component1631Props.star1}
              className={component1631Props.className}
            />
            <div className="rectangle-67-4"></div>
            <div className="asian-7 inter-normal-black-7px">{asian}</div>
            <img className="vector-123" src={vector3} />
            <div className="address-22 arial">
              <span className="span0-46 arial">{spanText1}</span>
              <span className="span1-92 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-27-25"></div>
            <div className="rectangle-28-5"></div>
            <div className="rectangle-29-18"></div>
            <Component163
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-68-7"></div>
            <div className="language-9 inter-normal-black-7px">{language}</div>
            <Component16
              image3={component16Props.image3}
              star1={component16Props.star1}
              className={component16Props.className}
            />
            <img className="image-5-2" src={image5} />
            <img className="image-6-9" src={image6} />
            <div className="rectangle-69-9"></div>
            <div className="meat-11 inter-normal-black-7px">{meat}</div>
            <Component162 star1={component162Props.star1} className={component162Props.className} />
            <div className="rectangle-70-7"></div>
            <div className="western-5 inter-normal-black-7px">{western}</div>
            <div className="rectangle-31-1"></div>
            <Component163
              aSoupShop={component1633Props.aSoupShop}
              spanText1={component1633Props.spanText1}
              spanText2={component1633Props.spanText2}
              spanText3={component1633Props.spanText3}
              spanText4={component1633Props.spanText4}
              star1={component1633Props.star1}
              className={component1633Props.className}
            />
            <div className="rectangle-65-2"></div>
            <div className="rectangle-32-3"></div>
            <img className="vector-124" src={vector4} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-125" src={vector5} />
            </Link>
            <img className="vector-126" src={vector6} />
            <img className="vector-127" src={vector7} />
            <div className="rectangle-66-4"></div>
            <div className="fastfood-7 inter-normal-black-7px">{fastfood}</div>
            <img className="x1-17" src={x11} />
            <img className="x1-18" src={x12} />
            <img className="x1-19" src={x13} />
            <Link to="/list-half">
              <img className="line-29-10" src={line29} />
            </Link>
            <img className="x1-20" src={x14} />
            <img className="bhc-1-3" src={bhc1} />
            <div className="rectangle-71-6"></div>
            <div className="place-4 inter-normal-black-7px">{place}</div>
            <div className="group-51-2">
              <div className="group-48-2">
                <div className="overlap-group-95">
                  <div className="distance-13 inter-normal-white-14px">{distance}</div>
                  <img className="vector-128" src={vector8} />
                </div>
              </div>
              <Link to="/filter-list-category-1">
                <div className="group-47-2">
                  <div className="overlap-group1-42 border-1px-mist-gray">
                    <div className="category-14 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-129" src={vector9} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-seats">
                <div className="group-49-2">
                  <div className="overlap-group2-21 border-1px-mist-gray">
                    <div className="seats-13 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-list-rating">
                <div className="group-50-2">
                  <div className="overlap-group3-27 border-1px-mist-gray">
                    <div className="rating-13 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="my-order-19 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
          <Link to="/completed-preorder-home">
            <img className="group-36" src={group} />
          </Link>
        </div>
        <img className="rectangle-29-19" src={rectangle29} />
      </div>
    </div>
  );
}

export default SeeList;
