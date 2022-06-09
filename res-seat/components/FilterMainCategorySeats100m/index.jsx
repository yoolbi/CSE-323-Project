import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategorySeats100m.css";

function FilterMainCategorySeats100m(props) {
  const { component29, image1, polygon2, vector2, seeList, category, vector3, seats1, seats2, rating } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-seats-100m screen">
        <img className="component-29-42" src={component29} />
        <div className="overlap-group5-151">
          <img className="image-1-39" src={image1} />
          <div className="ellipse-16-33 border-1px-malibu"></div>
          <div className="ellipse-17-33 border-2px-white"></div>
          <img className="polygon-2-33" src={polygon2} />
          <div className="group-64-32">
            <div className="group-container-173">
              <div className="group-62-32">
                <img className="vector-538" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-seats-100m">
                <div className="group-63-40">
                  <div className="overlap-group-974">
                    <img className="vector-539" src={vector2} />
                    <div className="see-list-33 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-174 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-seats-100m">
                <div className="group-47-99">
                  <div className="overlap-group1-567">
                    <div className="category-139 inter-normal-white-13px">{category}</div>
                    <img className="vector-540" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-8-100m">
                <div className="group-49-92">
                  <div className="overlap-group2-439 border-1px-c4c4c4">
                    <div className="seats-152 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-975">
                      <div className="seats-153 inter-normal-white-14px">{seats2}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-all-100m">
                <div className="group-50-92">
                  <div className="overlap-group3-363 border-1px-c4c4c4">
                    <div className="rating-112 inter-normal-spicy-pink-14px">{rating}</div>
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

export default FilterMainCategorySeats100m;
