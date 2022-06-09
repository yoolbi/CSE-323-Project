import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategoryRating100m.css";

function FilterMainCategoryRating100m(props) {
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-rating-100m screen">
        <img className="component-29-43" src={component29} />
        <div className="overlap-group5-152">
          <img className="image-1-40" src={image1} />
          <div className="ellipse-16-34 border-1px-malibu"></div>
          <div className="ellipse-17-34 border-2px-white"></div>
          <img className="polygon-2-34" src={polygon2} />
          <div className="group-64-33">
            <div className="group-container-175">
              <div className="group-62-33">
                <img className="vector-541" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-rating-100m">
                <div className="group-63-41">
                  <div className="overlap-group-976">
                    <img className="vector-542" src={vector2} />
                    <div className="see-list-34 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-176 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-rating-100m">
                <div className="group-47-100">
                  <div className="overlap-group1-568">
                    <div className="category-140 inter-normal-white-13px">{category}</div>
                    <img className="vector-543" src={vector3} />
                  </div>
                </div>
              </Link>
              <div className="group-49-93">
                <div className="overlap-group2-440">
                  <div className="rectangle-33-11 border-1px-c4c4c4"></div>
                  <div className="seats-154 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group-977">
                    <div className="seats-155 inter-normal-white-14px">{seats2}</div>
                  </div>
                  <Link to="/filter-main-all-100m">
                    <div className="group-50-93">
                      <div className="overlap-group1-569 border-1px-c4c4c4">
                        <div className="seats-156 inter-normal-spicy-pink-14px">{seats3}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/filter-main-category-seats-100m">
                <div className="group-50-94">
                  <div className="overlap-group3-364 border-1px-c4c4c4">
                    <div className="rating-113 inter-normal-spicy-pink-14px">{rating1}</div>
                    <div className="overlap-group-978">
                      <div className="rating-114 inter-normal-white-14px">{rating2}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainCategoryRating100m;
