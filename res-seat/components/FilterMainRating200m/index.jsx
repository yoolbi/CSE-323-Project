import React from "react";
import { Link } from "react-router-dom";
import Group497 from "../Group497";
import "./FilterMainRating200m.css";

function FilterMainRating200m(props) {
  const {
    component29,
    image1,
    polygon2,
    vector2,
    seeList,
    distance,
    vector3,
    category,
    vector4,
    rating,
    shakeShack,
    uncles,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-rating-200m screen">
        <img className="component-29-68" src={component29} />
        <div className="overlap-group5-166 inter-medium-black-8px">
          <img className="image-1-52" src={image1} />
          <div className="ellipse-16-46 border-1px-malibu"></div>
          <div className="ellipse-17-46 border-2px-white"></div>
          <img className="polygon-2-46" src={polygon2} />
          <div className="group-65-20">
            <div className="group-container-207">
              <div className="group-62-45">
                <img className="vector-689" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-rating-200m">
                <div className="group-63-53">
                  <div className="overlap-group-1061">
                    <img className="vector-690" src={vector2} />
                    <div className="see-list-46 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-208 border-1px-mercury">
              <Link to="/main">
                <div className="group-48-68">
                  <div className="overlap-group-1062">
                    <div className="distance-127 inter-normal-white-14px">{distance}</div>
                    <img className="vector-691" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-rating-200m">
                <div className="group-47-125">
                  <div className="overlap-group1-610 border-1px-c4c4c4">
                    <div className="category-177 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-692" src={vector4} />
                  </div>
                </div>
              </Link>
              <Group497 />
              <div className="group-50-115">
                <div className="overlap-group3-422">
                  <Link to="/filter-main-200m">
                    <div className="rectangle-60-11"></div>
                  </Link>
                  <div className="rating-143 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-18-28 border-1px-black"></div>
          <div className="shake-shack-24">{shakeShack}</div>
          <div className="uncles-112">{uncles}</div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-41 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-138">{hanamBbq}</div>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-23 border-1px-black"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterMainRating200m;
