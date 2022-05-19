import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component163 from "../Component163";
import Component16 from "../Component16";
import Component162 from "../Component162";
import Component169 from "../Component169";
import "./FilterListCategory1.css";

function FilterListCategory1(props) {
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
    asian1,
    vector4,
    spanText1,
    spanText2,
    fastfood1,
    x11,
    x12,
    language1,
    language2,
    asian2,
    fastfood2,
    language3,
    snack,
    pizza,
    place1,
    western1,
    line34,
    line35,
    line37,
    line38,
    line36,
    reset,
    language4,
    vector5,
    x13,
    image6,
    meat,
    vector6,
    vector7,
    western2,
    vector8,
    x14,
    vector9,
    bhc1,
    place2,
    rectangle29,
    component164Props,
    component1631Props,
    component1632Props,
    component16Props,
    component162Props,
    component1633Props,
    component169Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-1 screen">
        <div className="flex-row-65">
          <div className="overlap-group7-21">
            <img className="search-15" src={search} />
          </div>
          <div className="flex-col-53">
            <Link to="/completed-preorder-home">
              <img className="group-30" src={group} />
            </Link>
            <div className="my-order-14 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-66">
          <div className="overlap-group6-19 border-1px-black">
            <img className="line-27-5" src={line27} />
            <img className="line-29-5" src={line29} />
            <div className="overlap-group-container-10">
              <div className="overlap-group10-4">
                <div className="distance-8 inter-normal-white-14px">{distance}</div>
                <img className="vector-76" src="/img/vector-48@2x.png" />
              </div>
              <div className="overlap-group16-1 border-1px-orange">
                <div className="category-9 inter-normal-flamingo-13px">{category}</div>
                <img className="vector-77" src={vector2} />
              </div>
              <div className="overlap-group15 border-1px-mist-gray">
                <div className="seats-8 inter-normal-spicy-pink-14px">{seats}</div>
              </div>
              <div className="overlap-group12-1 border-1px-mist-gray">
                <div className="rating-8 inter-normal-spicy-pink-14px">{rating}</div>
              </div>
            </div>
            <div className="overlap-group8-14">
              <img className="line-28-3" src={line28} />
              <Component164 star1={component164Props.star1} className={component164Props.className} />
              <img className="vector-78" src={vector3} />
              <Component163
                aSoupShop={component1631Props.aSoupShop}
                spanText1={component1631Props.spanText1}
                spanText2={component1631Props.spanText2}
                spanText3={component1631Props.spanText3}
                spanText4={component1631Props.spanText4}
                star1={component1631Props.star1}
                className={component1631Props.className}
              />
              <div className="rectangle-67-1"></div>
              <div className="asian-2 inter-normal-black-7px">{asian1}</div>
              <img className="vector-79" src={vector4} />
              <div className="address-18 arial">
                <span className="span0-40 arial">{spanText1}</span>
                <span className="span1-88 inter-normal-black-20px">{spanText2}</span>
              </div>
              <div className="rectangle-27-22"></div>
              <div className="rectangle-28-2"></div>
              <div className="rectangle-66-1"></div>
              <div className="fastfood-2 inter-normal-black-7px">{fastfood1}</div>
              <img className="x1-4" src={x11} />
              <img className="x1-5" src={x12} />
              <div className="rectangle-89 border-0-5px-mist-gray"></div>
              <div className="language-1 inter-normal-black-13px">{language1}</div>
              <div className="language-2 inter-normal-black-13px">{language2}</div>
              <div className="asian-3 inter-normal-black-13px">{asian2}</div>
              <div className="fastfood-3 inter-normal-black-13px">{fastfood2}</div>
              <div className="language-3 inter-normal-black-13px">{language3}</div>
              <div className="snack inter-normal-black-13px">{snack}</div>
              <div className="pizza inter-normal-black-13px">{pizza}</div>
              <div className="place-1 inter-normal-black-13px">{place1}</div>
              <div className="western-1 inter-normal-black-13px">{western1}</div>
              <img className="line-34-1" src={line34} />
              <img className="line-35-1" src={line35} />
              <img className="line-37-1" src={line37} />
              <img className="line-38-1" src={line38} />
              <img className="line-36-1" src={line36} />
              <div className="ellipse-18-1"></div>
              <div className="ellipse-19-1"></div>
              <div className="reset-1 inter-normal-spicy-pink-10px">{reset}</div>
            </div>
            <div className="overlap-group-91">
              <div className="rectangle-29-11"></div>
              <Component163
                aSoupShop={component1632Props.aSoupShop}
                spanText1={component1632Props.spanText1}
                spanText2={component1632Props.spanText2}
                spanText3={component1632Props.spanText3}
                spanText4={component1632Props.spanText4}
                star1={component1632Props.star1}
                className={component1632Props.className}
              />
              <div className="rectangle-68-3"></div>
              <div className="language-4 inter-normal-black-7px">{language4}</div>
              <div className="rectangle-1"></div>
              <img className="vector-80" src={vector5} />
              <img className="x1-6" src={x13} />
            </div>
            <div className="overlap-group-91">
              <Component16 image3={component16Props.image3} star1={component16Props.star1} />
              <img className="image-6-6" src={image6} />
              <div className="rectangle-69-6"></div>
              <div className="meat-7 inter-normal-black-7px">{meat}</div>
              <Link to="/restaurant-details-menu1">
                <img className="vector-81" src={vector6} />
              </Link>
            </div>
            <div className="overlap-group-91">
              <img className="vector-82" src={vector7} />
              <Component162 star1={component162Props.star1} />
              <div className="rectangle-70-3"></div>
              <div className="western-2 inter-normal-black-7px">{western2}</div>
              <div className="rectangle-1"></div>
              <img className="vector-83" src={vector8} />
              <img className="x1-7" src={x14} />
            </div>
            <div className="overlap-group-91">
              <Component163
                aSoupShop={component1633Props.aSoupShop}
                spanText1={component1633Props.spanText1}
                spanText2={component1633Props.spanText2}
                spanText3={component1633Props.spanText3}
                spanText4={component1633Props.spanText4}
                star1={component1633Props.star1}
                className={component1633Props.className}
              />
              <div className="rectangle-32-1"></div>
              <img className="vector-84" src={vector9} />
              <img className="bhc-1-1" src={bhc1} />
              <div className="rectangle-71-3"></div>
              <div className="place-2 inter-normal-black-7px">{place2}</div>
            </div>
            <Component169 className={component169Props.className} />
          </div>
          <img className="rectangle-29-12" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default FilterListCategory1;
