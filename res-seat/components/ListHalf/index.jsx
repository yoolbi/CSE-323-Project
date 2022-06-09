import React from "react";
import { Link } from "react-router-dom";
import Component1642 from "../Component1642";
import Component1632 from "../Component1632";
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
    component1642Props,
    component16321Props,
    component16322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="list-half screen">
        <div className="flex-row-589">
          <div className="overlap-group8-50">
            <img className="search-18" src={search} />
          </div>
          <div className="flex-col-482">
            <Link to="/completed-preorder-home">
              <img className="group-100" src={group} />
            </Link>
            <div className="my-order-30 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-590">
          <div className="overlap-group7-74">
            <img className="image-1-68" src={image1} />
            <div className="ellipse-1-52 border-1px-black"></div>
            <div className="ellipse-2-3 border-1px-black"></div>
            <div className="ellipse-3-28 border-1px-black"></div>
            <div className="ellipse-4-3 border-1px-black"></div>
            <div className="ellipse-9-5 border-1px-black"></div>
            <div className="ellipse-10-5 border-1px-black"></div>
            <div className="ellipse-11-9 border-1px-black"></div>
            <div className="ellipse-5-33 border-1px-black"></div>
            <div className="ellipse-6-19 border-1px-black"></div>
            <div className="ellipse-7-5 border-1px-black"></div>
            <div className="ellipse-8-3 border-1px-black"></div>
            <img className="vector-814" src="/img/vector@2x.png" />
            <div className="rectangle-63-4 border-1px-c4c4c4"></div>
            <div className="group-51-66">
              <Link to="/filter-half-distance">
                <div className="group-48-77">
                  <div className="overlap-group-1128">
                    <div className="distance-143 inter-normal-white-14px">{distance}</div>
                    <img className="vector-815" src={vector2} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-half-category-1">
                <div className="group-47-140">
                  <div className="overlap-group1-654 border-1px-c4c4c4">
                    <div className="category-202 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-816" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-half-seats">
                <div className="group-49-123">
                  <div className="overlap-group2-504 border-1px-c4c4c4">
                    <div className="seats-211 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <div className="group-50-127">
                <div className="overlap-group3-456">
                  <Link to="/filter-half-rating">
                    <div className="rectangle-60-18 border-1px-c4c4c4"></div>
                  </Link>
                  <div className="rating-165 inter-normal-spicy-pink-14px">{rating}</div>
                </div>
              </div>
            </div>
            <img className="line-27-52" src={line27} />
            <div className="rectangle-61-4"></div>
            <img className="vector-817" src={vector4} />
            <Link to="/list">
              <div className="rectangle-62-4"></div>
            </Link>
            <img className="vector-818" src={vector5} />
            <div className="see-list-61 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
            <img className="line-30-4" src={line30} />
            <Component1642 star1={component1642Props.star1} className={component1642Props.className} />
            <img className="vector-819" src={vector6} />
            <Component1632
              aSoupShop={component16321Props.aSoupShop}
              spanText1={component16321Props.spanText1}
              spanText2={component16321Props.spanText2}
              spanText3={component16321Props.spanText3}
              spanText4={component16321Props.spanText4}
              star1={component16321Props.star1}
              className={component16321Props.className}
            />
            <div className="rectangle-72-2"></div>
            <div className="asian-52 inter-normal-black-7px">{asian}</div>
            <img className="vector-820" src={vector7} />
            <div className="address-109 arial">
              <span className="span0-106 arial">{spanText1}</span>
              <span className="span1-254 inter-normal-black-20px">{spanText2}</span>
            </div>
            <div className="rectangle-73"></div>
            <div className="rectangle-74-1"></div>
            <div className="rectangle-75-1"></div>
            <Component1632
              aSoupShop={component16322Props.aSoupShop}
              spanText1={component16322Props.spanText1}
              spanText2={component16322Props.spanText2}
              spanText3={component16322Props.spanText3}
              spanText4={component16322Props.spanText4}
              star1={component16322Props.star1}
              className={component16322Props.className}
            />
            <div className="rectangle-76"></div>
            <div className="language-92 inter-normal-black-7px">{language}</div>
            <div className="rectangle-77"></div>
            <img className="vector-821" src={vector8} />
            <div className="rectangle-78-1"></div>
            <div className="fastfood-60 inter-normal-black-7px">{fastfood}</div>
            <img className="x2-1" src={x21} />
            <img className="x2-2" src={x22} />
            <img className="x2-3" src={x23} />
            <Link to="/main">
              <img className="line-29-62" src={line29} />
            </Link>
          </div>
          <img className="rectangle-29-44" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default ListHalf;
