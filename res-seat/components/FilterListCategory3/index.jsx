import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component163 from "../Component163";
import Component16 from "../Component16";
import Component162 from "../Component162";
import "./FilterListCategory3.css";

function FilterListCategory3(props) {
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
    asian,
    vector4,
    spanText1,
    spanText2,
    fastfood,
    x11,
    x12,
    surname,
    meat1,
    dessert,
    salad,
    lunch,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    language,
    vector5,
    x13,
    image6,
    meat2,
    vector6,
    vector7,
    western,
    vector8,
    x14,
    vector9,
    bhc1,
    place,
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
      <div className="filter-list-category-3 screen">
        <div className="flex-row-67">
          <div className="overlap-group7-22">
            <img className="search-16" src={search} />
          </div>
          <div className="flex-col-54">
            <Link to="/completed-preorder-home">
              <img className="group-31" src={group} />
            </Link>
            <div className="my-order-15 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-68">
          <div className="overlap-group6-20 border-1px-black">
            <img className="line-27-6" src={line27} />
            <img className="line-29-6" src={line29} />
            <div className="overlap-group-container-11">
              <div className="overlap-group13-1">
                <div className="distance-9 inter-normal-white-14px">{distance}</div>
                <img className="vector-85" src="/img/vector-48@2x.png" />
              </div>
              <div className="overlap-group9-12 border-1px-orange">
                <div className="category-10 inter-normal-flamingo-13px">{category}</div>
                <Link to="/filter-list-category-4" className="align-self-flex-center">
                  <img className="vector-86" src={vector2} />
                </Link>
              </div>
              <div className="overlap-group15-1 border-1px-mist-gray">
                <div className="seats-9 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
              <div className="overlap-group16-2 border-1px-mist-gray">
                <div className="rating-9 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
            <div className="overlap-group10-5">
              <img className="line-28-4" src={line28} />
              <Component164 star1={component164Props.star1} className={component164Props.className} />
              <img className="vector-87" src={vector3} />
              <Component163
                aSoupShop={component1631Props.aSoupShop}
                spanText1={component1631Props.spanText1}
                spanText2={component1631Props.spanText2}
                spanText3={component1631Props.spanText3}
                spanText4={component1631Props.spanText4}
                star1={component1631Props.star1}
                className={component1631Props.className}
              />
              <div className="rectangle-67-2"></div>
              <div className="asian-4 inter-normal-black-7px">{asian}</div>
              <img className="vector-88" src={vector4} />
              <div className="address-19 arial">
                <span className="span0-42 arial">{spanText1}</span>
                <span className="span1-89 inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="rectangle-27-23"></div>
              <div className="rectangle-28-3"></div>
              <div className="rectangle-66-2"></div>
              <div className="fastfood-4 inter-normal-black-7px">{fastfood}</div>
              <img className="x1-8" src={x11} />
              <img className="x1-9" src={x12} />
              <div className="rectangle-89-1 border-0-5px-mist-gray"></div>
              <div className="rectangle-87-1"></div>
              <div className="surname-1 inter-normal-black-13px">{surname}</div>
              <div className="meat-8 inter-normal-flamingo-13px">{meat1}</div>
              <div className="dessert-1 inter-normal-black-13px">{dessert}</div>
              <div className="salad-1 inter-normal-black-13px">{salad}</div>
              <div className="lunch-1 inter-normal-black-13px">{lunch}</div>
              <img className="line-34-2" src={line34} />
              <img className="line-35-2" src={line35} />
              <img className="line-37-2" src={line37} />
              <img className="line-38-2" src={line38} />
              <img className="line-36-2" src={line36} />
              <div className="ellipse-18-2"></div>
              <div className="ellipse-19-2"></div>
              <Link to="/filter-list-category-1">
                <div className="reset-2 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
            </div>
            <div className="overlap-group-92">
              <div className="rectangle-29-13"></div>
              <Component163
                aSoupShop={component1632Props.aSoupShop}
                spanText1={component1632Props.spanText1}
                spanText2={component1632Props.spanText2}
                spanText3={component1632Props.spanText3}
                spanText4={component1632Props.spanText4}
                star1={component1632Props.star1}
                className={component1632Props.className}
              />
              <div className="rectangle-68-4"></div>
              <div className="language-5 inter-normal-black-7px">{language}</div>
              <div className="rectangle-2"></div>
              <img className="vector-89" src={vector5} />
              <img className="x1-10" src={x13} />
            </div>
            <div className="overlap-group-92">
              <Component16 image3={component16Props.image3} star1={component16Props.star1} />
              <img className="image-6-7" src={image6} />
              <div className="rectangle-69-7"></div>
              <div className="meat-9 inter-normal-black-7px">{meat2}</div>
              <Link to="/restaurant-details-menu1">
                <img className="vector-90" src={vector6} />
              </Link>
            </div>
            <div className="overlap-group-92">
              <img className="vector-91" src={vector7} />
              <Component162 star1={component162Props.star1} />
              <div className="rectangle-70-4"></div>
              <div className="western-3 inter-normal-black-7px">{western}</div>
              <div className="rectangle-2"></div>
              <img className="vector-92" src={vector8} />
              <img className="x1-11" src={x14} />
            </div>
            <div className="overlap-group-92">
              <Component163
                aSoupShop={component1633Props.aSoupShop}
                spanText1={component1633Props.spanText1}
                spanText2={component1633Props.spanText2}
                spanText3={component1633Props.spanText3}
                spanText4={component1633Props.spanText4}
                star1={component1633Props.star1}
                className={component1633Props.className}
              />
              <div className="rectangle-32-2"></div>
              <img className="vector-93" src={vector9} />
              <img className="bhc-1-2" src={bhc1} />
              <div className="rectangle-71-4"></div>
              <div className="place-3 inter-normal-black-7px">{place}</div>
            </div>
          </div>
          <img className="rectangle-29-14" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory3;
