import React from "react";
import { Link } from "react-router-dom";
import Component162 from "../Component162";
import Component163 from "../Component163";
import Component16 from "../Component16";
import Component164 from "../Component164";
import "./FilterListRating.css";

function FilterListRating(props) {
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
    vector3,
    western,
    vector4,
    x11,
    asian,
    vector5,
    x12,
    language,
    vector6,
    x13,
    image6,
    meat,
    vector7,
    vector8,
    spanText1,
    spanText2,
    fastfood,
    x14,
    vector9,
    bhc1,
    place,
    component162Props,
    component1631Props,
    component1632Props,
    component16Props,
    component164Props,
    component1633Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-rating screen">
        <div className="flex-row-51">
          <div className="overlap-group7-16">
            <img className="search-9" src={search} />
          </div>
          <div className="flex-col-45">
            <Link to="/completed-preorder-home">
              <img className="group-5" src={group} />
            </Link>
            <div className="my-order-8 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="overlap-group6-16 border-1px-black">
          <img className="line-27-1" src={line27} />
          <img className="line-29-1" src={line29} />
          <div className="overlap-group-container-6">
            <div className="overlap-group17">
              <div className="distance-4 inter-normal-white-14px">{distance}</div>
              <img className="vector-41" src="/img/vector-48@2x.png" />
            </div>
            <div className="overlap-group12 border-1px-mist-gray">
              <div className="category-4 inter-normal-spicy-pink-13px">{category}</div>
              <img className="vector-42" src={vector2} />
            </div>
            <div className="overlap-group14 border-1px-mist-gray">
              <div className="seats-4 inter-normal-spicy-pink-14px">{seats}</div>
            </div>
            <div className="overlap-group16">
              <Link to="/see-list">
                <div className="rectangle-60-2"></div>
              </Link>
              <div className="rating-4 inter-normal-white-14px">{rating}</div>
            </div>
          </div>
          <img className="line-28-1" src={line28} />
          <div className="overlap-group13">
            <img className="vector-43" src={vector3} />
            <Component162 star1={component162Props.star1} />
            <div className="rectangle-70-1"></div>
            <div className="western inter-normal-black-7px">{western}</div>
            <div className="rectangle"></div>
            <img className="vector-44" src={vector4} />
            <img className="x1" src={x11} />
          </div>
          <div className="overlap-group-77">
            <Component163
              aSoupShop={component1631Props.aSoupShop}
              spanText1={component1631Props.spanText1}
              spanText2={component1631Props.spanText2}
              spanText3={component1631Props.spanText3}
              spanText4={component1631Props.spanText4}
              star1={component1631Props.star1}
            />
            <div className="rectangle-67"></div>
            <div className="asian inter-normal-black-7px">{asian}</div>
            <img className="vector-40" src={vector5} />
            <div className="rectangle"></div>
            <img className="x1-1" src={x12} />
          </div>
          <div className="overlap-group-77">
            <div className="rectangle-29-5"></div>
            <Component163
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-68-1"></div>
            <div className="language inter-normal-black-7px">{language}</div>
            <div className="rectangle"></div>
            <img className="vector-40" src={vector6} />
            <img className="x1-2" src={x13} />
          </div>
          <div className="overlap-group8-11">
            <Component16 image3={component16Props.image3} star1={component16Props.star1} />
            <img className="image-6-2" src={image6} />
            <div className="rectangle-69-2"></div>
            <div className="meat-2 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-45" src={vector7} />
            </Link>
          </div>
          <div className="overlap-group-77">
            <Component164 star1={component164Props.star1} />
            <img className="vector-46" src={vector8} />
            <div className="address-9 arial">
              <span className="span0-20 arial">{spanText1}</span>
              <span className="span1-28 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle"></div>
            <div className="rectangle-66"></div>
            <div className="fastfood inter-normal-black-7px">{fastfood}</div>
            <img className="x1-3" src={x14} />
          </div>
          <div className="overlap-group11-1">
            <Component163
              aSoupShop={component1633Props.aSoupShop}
              spanText1={component1633Props.spanText1}
              spanText2={component1633Props.spanText2}
              spanText3={component1633Props.spanText3}
              spanText4={component1633Props.spanText4}
              star1={component1633Props.star1}
              className={component1633Props.className}
            />
            <div className="rectangle-32"></div>
            <img className="vector-47" src={vector9} />
            <img className="bhc-1" src={bhc1} />
            <div className="rectangle-71-1"></div>
            <div className="place inter-normal-black-7px">{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterListRating;
