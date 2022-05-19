import React from "react";
import { Link } from "react-router-dom";
import Component163 from "../Component163";
import Component16 from "../Component16";
import Component164 from "../Component164";
import "./FilterHalfSeats.css";

function FilterHalfSeats(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    language,
    vector2,
    x11,
    image5,
    image6,
    meat,
    vector3,
    line27,
    distance,
    vector4,
    category,
    vector5,
    seats,
    rating,
    vector6,
    vector7,
    seeList,
    line30,
    line29,
    vector8,
    spanText1,
    spanText2,
    fastfood,
    x12,
    rectangle29,
    component163Props,
    component16Props,
    component164Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-half-seats screen">
        <div className="flex-row-69">
          <div className="overlap-group4-27">
            <img className="search-17" src={search} />
          </div>
          <div className="flex-col-55">
            <Link to="/completed-preorder-home">
              <img className="group-33" src={group} />
            </Link>
            <div className="my-order-16 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-70">
          <div className="overlap-group3-23">
            <img className="image-1-5" src={image1} />
            <div className="ellipse-1-5 border-1px-black"></div>
            <div className="ellipse-2-5 border-1px-black"></div>
            <div className="ellipse-3-5 border-1px-black"></div>
            <div className="ellipse-4-5 border-1px-black"></div>
            <div className="ellipse-9-7 border-1px-black"></div>
            <div className="ellipse-10-7 border-1px-black"></div>
            <div className="ellipse-11-7 border-1px-black"></div>
            <div className="ellipse-5-5 border-1px-black"></div>
            <div className="ellipse-6-5 border-1px-black"></div>
            <div className="ellipse-7-8 border-1px-black"></div>
            <div className="ellipse-8-5 border-1px-black"></div>
            <img className="vector-94" src="/img/vector-7@2x.png" />
            <div className="rectangle-63-3 border-1px-mist-gray"></div>
            <div className="rectangle-70-5"></div>
            <Component163
              aSoupShop={component163Props.aSoupShop}
              spanText1={component163Props.spanText1}
              spanText2={component163Props.spanText2}
              spanText3={component163Props.spanText3}
              spanText4={component163Props.spanText4}
              star1={component163Props.star1}
              className={component163Props.className}
            />
            <div className="rectangle-68-5"></div>
            <div className="language-6 inter-normal-black-7px">{language}</div>
            <div className="rectangle-65"></div>
            <img className="vector-95" src={vector2} />
            <img className="x1-12" src={x11} />
            <Component16
              image3={component16Props.image3}
              star1={component16Props.star1}
              className={component16Props.className}
            />
            <img className="image-5-1" src={image5} />
            <img className="image-6-8" src={image6} />
            <div className="rectangle-69-8"></div>
            <div className="meat-10 inter-normal-black-7px">{meat}</div>
            <Link to="/restaurant-details-menu1">
              <img className="vector-96" src={vector3} />
            </Link>
            <img className="line-27-7" src={line27} />
            <div className="rectangle-30-3"></div>
            <div className="distance-10 inter-normal-white-14px">{distance}</div>
            <img className="vector-97" src={vector4} />
            <div className="rectangle-59-5 border-1px-mist-gray"></div>
            <div className="category-11 inter-normal-spicy-pink-13px">{category}</div>
            <img className="vector-98" src={vector5} />
            <Link to="/list-half">
              <div className="rectangle-33-5"></div>
            </Link>
            <div className="seats-10 inter-normal-white-14px">{seats}</div>
            <div className="rectangle-60-5 border-1px-mist-gray"></div>
            <div className="rating-10 inter-normal-spicy-pink-14px">{rating}</div>
            <div className="rectangle-61-3"></div>
            <img className="vector-99" src={vector6} />
            <Link to="/see-list">
              <div className="rectangle-62-3"></div>
            </Link>
            <img className="vector-100" src={vector7} />
            <div className="see-list-6 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-2" src={line30} />
            <Link to="/main">
              <img className="line-29-7" src={line29} />
            </Link>
            <Component164 star1={component164Props.star1} className={component164Props.className} />
            <img className="vector-101" src={vector8} />
            <div className="address-20 arial">
              <span className="span0-43 arial">{spanText1}</span>
              <span className="span1-90 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-28-4"></div>
            <div className="rectangle-66-3"></div>
            <div className="fastfood-5 inter-normal-black-7px">{fastfood}</div>
            <img className="x1-13" src={x12} />
          </div>
          <img className="rectangle-29-15" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterHalfSeats;
