import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategoryRating200m.css";

function FilterMainCategoryRating200m(props) {
  const {
    component29,
    image1,
    polygon2,
    vector2,
    seeList,
    category,
    vector3,
    seats1,
    seats2,
    seats3,
    rating1,
    rating2,
    hanamBbq,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-rating-200m screen">
        <img className="component-29-32" src={component29} />
        <div className="overlap-group5-145">
          <img className="image-1-33" src={image1} />
          <div className="ellipse-16-27 border-1px-malibu"></div>
          <div className="ellipse-17-27 border-2px-white"></div>
          <img className="polygon-2-27" src={polygon2} />
          <div className="group-64-26">
            <div className="group-container-160">
              <div className="group-62-26">
                <img className="vector-495" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-rating-200m">
                <div className="group-63-34">
                  <div className="overlap-group-943">
                    <img className="vector-496" src={vector2} />
                    <div className="see-list-27 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-161 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-rating-200m">
                <div className="group-47-89">
                  <div className="overlap-group1-551">
                    <div className="category-126 inter-normal-white-13px">{category}</div>
                    <img className="vector-497" src={vector3} />
                  </div>
                </div>
              </Link>
              <div className="group-49-82">
                <div className="overlap-group2-428">
                  <div className="rectangle-33-7 border-1px-c4c4c4"></div>
                  <div className="seats-128 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group-944">
                    <div className="seats-129 inter-normal-white-14px">{seats2}</div>
                  </div>
                  <Link to="/filter-main-all-200m">
                    <div className="group-50-80">
                      <div className="overlap-group1-552 border-1px-c4c4c4">
                        <div className="seats-130 inter-normal-spicy-pink-14px">{seats3}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/filter-main-category-seats-200m">
                <div className="group-50-81">
                  <div className="overlap-group3-348 border-1px-c4c4c4">
                    <div className="rating-98 inter-normal-spicy-pink-14px">{rating1}</div>
                    <div className="overlap-group-945">
                      <div className="rating-99 inter-normal-white-14px">{rating2}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-29 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-115 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategoryRating200m;
