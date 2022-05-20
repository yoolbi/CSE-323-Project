import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component163 from "../Component163";
import "./ListHalf.css";

function ListHalf(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    distance,
    vector2,
    category,
    vector3,
    seats,
    rating,
    line27,
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
    rectangle29,
    component164Props,
    component1631Props,
    component1632Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="list-half screen">
        <div className="flex-row-74">
          <div className="overlap-group8-15">
            <img className="search-19" src={search} />
          </div>
          <div className="flex-col-57">
            <Link to="/completed-preorder-home">
              <img className="group-35" src={group} />
            </Link>
            <div className="my-order-18 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-75">
          <div className="overlap-group7-23">
            <img className="image-1-7" src={image1} />
            <div className="ellipse-1-7 border-1px-black"></div>
            <div className="ellipse-2-7 border-1px-black"></div>
            <div className="ellipse-3-7 border-1px-black"></div>
            <div className="ellipse-4-7 border-1px-black"></div>
            <div className="ellipse-9-9 border-1px-black"></div>
            <div className="ellipse-10-9 border-1px-black"></div>
            <div className="ellipse-11-9 border-1px-black"></div>
            <div className="ellipse-5-7 border-1px-black"></div>
            <div className="ellipse-6-7 border-1px-black"></div>
            <div className="ellipse-7-10 border-1px-black"></div>
            <div className="ellipse-8-7 border-1px-black"></div>
            <img className="vector-113" src="/img/vector@2x.png" />
            <div className="rectangle-63-5 border-1px-mist-gray"></div>
            <div className="group-51-1">
              <Link to="/filter-half-distance">
                <div className="group-48-1">
                  <div className="overlap-group-94">
                    <div className="distance-12 inter-normal-white-14px">{distance}</div>
                    <img className="vector-114" src={vector2} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-half-category-1">
                <div className="group-47-1">
                  <div className="overlap-group1-41 border-1px-mist-gray">
                    <div className="category-13 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-115" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-half-seats">
                <div className="group-49-1">
                  <div className="overlap-group2-20 border-1px-mist-gray">
                    <div className="seats-12 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <div className="group-50-1">
                <div className="overlap-group3-26">
                  <Link to="/filter-half-rating">
                    <div className="rectangle-60-7 border-1px-mist-gray"></div>
                  </Link>
                  <div className="rating-12 inter-normal-spicy-pink-14px">{rating}</div>
                </div>
              </div>
            </div>
            <img className="line-27-8" src={line27} />
            <div className="rectangle-61-5"></div>
            <img className="vector-116" src={vector4} />
            <Link to="/see-list">
              <div className="rectangle-62-5"></div>
            </Link>
            <img className="vector-117" src={vector5} />
            <div className="see-list-8 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-3" src={line30} />
            <Component164 star1={component164Props.star1} className={component164Props.className} />
            <img className="vector-118" src={vector6} />
            <Component163
              aSoupShop={component1631Props.aSoupShop}
              spanText1={component1631Props.spanText1}
              spanText2={component1631Props.spanText2}
              spanText3={component1631Props.spanText3}
              spanText4={component1631Props.spanText4}
              star1={component1631Props.star1}
              className={component1631Props.className}
            />
            <div className="rectangle-72-2"></div>
            <div className="asian-6 inter-normal-black-7px">{asian}</div>
            <img className="vector-119" src={vector7} />
            <div className="address-21 arial">
              <span className="span0-44 arial">{spanText1}</span>
              <span className="span1-91 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73"></div>
            <div className="rectangle-74-1"></div>
            <div className="rectangle-75-1"></div>
            <Component163
              aSoupShop={component1632Props.aSoupShop}
              spanText1={component1632Props.spanText1}
              spanText2={component1632Props.spanText2}
              spanText3={component1632Props.spanText3}
              spanText4={component1632Props.spanText4}
              star1={component1632Props.star1}
              className={component1632Props.className}
            />
            <div className="rectangle-76"></div>
            <div className="language-8 inter-normal-black-7px">{language}</div>
            <div className="rectangle-77"></div>
            <img className="vector-120" src={vector8} />
            <div className="rectangle-78-1"></div>
            <div className="fastfood-6 inter-normal-black-7px">{fastfood}</div>
            <img className="x2-1" src={x21} />
            <img className="x2-2" src={x22} />
            <img className="x2-3" src={x23} />
            <Link to="/main">
              <img className="line-29-9" src={line29} />
            </Link>
          </div>
          <img className="rectangle-29-17" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default ListHalf;
