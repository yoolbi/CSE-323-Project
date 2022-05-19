import React from "react";
import { Link } from "react-router-dom";
import Component16 from "../Component16";
import Component163 from "../Component163";
import Component164 from "../Component164";
import Component162 from "../Component162";
import "./FilterListSeats.css";

function FilterListSeats(props) {
  const {
    search,
    group,
    myOrder,
    line27,
    line29,
    distance,
    category,
    vector2,
    seats,
    rating,
    line28,
    image6,
    meat,
    vector3,
    language,
    vector4,
    x11,
    vector5,
    spanText1,
    spanText2,
    fastfood,
    x12,
    asian,
    vector6,
    x13,
    vector7,
    bhc1,
    place,
    vector8,
    western,
    vector9,
    x14,
    rectangle29,
    component16Props,
    component1631Props,
    component164Props,
    component1632Props,
    component1633Props,
    component162Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-seats screen">
        <div className="flex-row-76">
          <div className="overlap-group7-24">
            <img className="search-22" src={search} />
          </div>
          <div className="flex-col-58">
            <Link to="/completed-preorder-home">
              <img className="group-39" src={group} />
            </Link>
            <div className="my-order-20 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-77">
          <div className="flex-col-59">
            <img className="line-27-10" src={line27} />
            <div className="overlap-group6-22 border-1px-black">
              <img className="line-29-11" src={line29} />
              <div className="overlap-group-container-12">
                <div className="overlap-group14-1">
                  <div className="distance-14 inter-normal-white-14px">{distance}</div>
                  <img className="vector-132" src="/img/vector-137@2x.png" />
                </div>
                <div className="overlap-group13-2 border-1px-mist-gray">
                  <div className="category-15 inter-normal-spicy-pink-13px">{category}</div>
                  <img className="vector-133" src={vector2} />
                </div>
                <div className="overlap-group16-3">
                  <Link to="/see-list">
                    <div className="rectangle-33-7"></div>
                  </Link>
                  <div className="seats-14 inter-normal-white-14px">{seats}</div>
                </div>
                <div className="overlap-group8-16 border-1px-mist-gray">
                  <div className="rating-14 inter-normal-spicy-pink-14px">{rating}</div>
                </div>
              </div>
              <img className="line-28-6" src={line28} />
              <div className="overlap-group15-2">
                <Component16 image3={component16Props.image3} star1={component16Props.star1} />
                <img className="image-6-10" src={image6} />
                <div className="rectangle-69-10"></div>
                <div className="meat-12 inter-normal-black-7px">{meat}</div>
                <Link to="/restaurant-details-menu1">
                  <img className="vector-134" src={vector3} />
                </Link>
              </div>
              <div className="overlap-group1-44">
                <div className="rectangle-96"></div>
                <Component163
                  aSoupShop={component1631Props.aSoupShop}
                  spanText1={component1631Props.spanText1}
                  spanText2={component1631Props.spanText2}
                  spanText3={component1631Props.spanText3}
                  spanText4={component1631Props.spanText4}
                  star1={component1631Props.star1}
                  className={component1631Props.className}
                />
                <div className="rectangle-97"></div>
                <div className="language-10 inter-normal-black-7px">{language}</div>
                <div className="rectangle-3"></div>
                <img className="vector-131" src={vector4} />
                <img className="x1-21" src={x11} />
              </div>
              <div className="overlap-group1-44">
                <Component164 star1={component164Props.star1} />
                <img className="vector-135" src={vector5} />
                <div className="address-23 arial">
                  <span className="span0-48 arial">{spanText1}</span>
                  <span className="span1-93 inter-normal-black-20px">{spanText2}</span>
                </div>
                <div className="rectangle-3"></div>
                <div className="rectangle-66-5"></div>
                <div className="fastfood-8 inter-normal-black-7px">{fastfood}</div>
                <img className="x1-22" src={x12} />
              </div>
              <div className="overlap-group9-13">
                <Component163
                  aSoupShop={component1632Props.aSoupShop}
                  spanText1={component1632Props.spanText1}
                  spanText2={component1632Props.spanText2}
                  spanText3={component1632Props.spanText3}
                  spanText4={component1632Props.spanText4}
                  star1={component1632Props.star1}
                />
                <div className="rectangle-92"></div>
                <div className="asian-8 inter-normal-black-7px">{asian}</div>
                <img className="vector-131" src={vector6} />
                <div className="rectangle-3"></div>
                <img className="x1-23" src={x13} />
              </div>
              <div className="overlap-group1-44">
                <Component163
                  aSoupShop={component1633Props.aSoupShop}
                  spanText1={component1633Props.spanText1}
                  spanText2={component1633Props.spanText2}
                  spanText3={component1633Props.spanText3}
                  spanText4={component1633Props.spanText4}
                  star1={component1633Props.star1}
                  className={component1633Props.className}
                />
                <div className="rectangle-32-4"></div>
                <img className="vector-136" src={vector7} />
                <img className="bhc-1-4" src={bhc1} />
                <div className="rectangle-95"></div>
                <div className="place-5 inter-normal-black-7px">{place}</div>
              </div>
              <div className="overlap-group1-44">
                <img className="vector-137" src={vector8} />
                <Component162 star1={component162Props.star1} />
                <div className="rectangle-93"></div>
                <div className="western-6 inter-normal-black-7px">{western}</div>
                <div className="rectangle-3"></div>
                <img className="vector-138" src={vector9} />
                <img className="x1-24" src={x14} />
              </div>
            </div>
          </div>
          <img className="rectangle-29-20" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterListSeats;
