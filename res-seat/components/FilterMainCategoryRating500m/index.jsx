import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategoryRating500m.css";

function FilterMainCategoryRating500m(props) {
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
      <div className="filter-main-category-rating-500m screen">
        <img className="component-29-39" src={component29} />
        <div className="overlap-group5-149">
          <img className="image-1-37" src={image1} />
          <div className="ellipse-16-31 border-1px-malibu"></div>
          <div className="ellipse-17-31 border-2px-white"></div>
          <img className="polygon-2-31" src={polygon2} />
          <div className="group-64-30">
            <div className="group-container-168">
              <div className="group-62-30">
                <img className="vector-523" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-rating-500m">
                <div className="group-63-38">
                  <div className="overlap-group-965">
                    <img className="vector-524" src={vector2} />
                    <div className="see-list-31 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-169 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-rating-500m">
                <div className="group-47-96">
                  <div className="overlap-group1-563">
                    <div className="category-136 inter-normal-white-13px">{category}</div>
                    <img className="vector-525" src={vector3} />
                  </div>
                </div>
              </Link>
              <div className="group-49-89">
                <div className="overlap-group2-436">
                  <div className="rectangle-33-10 border-1px-c4c4c4"></div>
                  <div className="seats-147 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group-966">
                    <div className="seats-148 inter-normal-white-14px">{seats2}</div>
                  </div>
                  <Link to="/filter-main-all-500m">
                    <div className="group-50-88">
                      <div className="overlap-group1-564 border-1px-c4c4c4">
                        <div className="seats-149 inter-normal-spicy-pink-14px">{seats3}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/filter-main-category-seats-500m">
                <div className="group-50-89">
                  <div className="overlap-group3-355 border-1px-c4c4c4">
                    <div className="rating-108 inter-normal-spicy-pink-14px">{rating1}</div>
                    <div className="overlap-group-967">
                      <div className="rating-109 inter-normal-white-14px">{rating2}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/select-restaurant-hanam-bbq">
            <div className="ellipse-1-32 border-1px-black"></div>
          </Link>
          <div className="hanam-bbq-118 inter-medium-black-8px">{hanamBbq}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategoryRating500m;
