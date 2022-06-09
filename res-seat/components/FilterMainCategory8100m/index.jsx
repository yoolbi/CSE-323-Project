import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainCategory8100m.css";

function FilterMainCategory8100m(props) {
  const { component29, image1, polygon2, vector2, seeList, category, vector3, seats, rating } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-8-100m screen">
        <img className="component-29-28" src={component29} />
        <div className="overlap-group5-143">
          <img className="image-1-30" src={image1} />
          <div className="ellipse-16-24 border-1px-malibu"></div>
          <div className="ellipse-17-24 border-2px-white"></div>
          <img className="polygon-2-24" src={polygon2} />
          <div className="group-64-23">
            <div className="group-container-154">
              <div className="group-62-23">
                <img className="vector-481" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-category-8-100m">
                <div className="group-63-31">
                  <div className="overlap-group-932">
                    <img className="vector-482" src={vector2} />
                    <div className="see-list-24 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-155 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-category-7-100m">
                <div className="group-47-85">
                  <div className="overlap-group1-545">
                    <div className="category-120 inter-normal-white-13px">{category}</div>
                    <img className="vector-483" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-seats-100m">
                <div className="group-49-78">
                  <div className="overlap-group2-424 border-1px-c4c4c4">
                    <div className="seats-118 inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-rating-100m">
                <div className="group-50-76">
                  <div className="overlap-group3-344 border-1px-c4c4c4">
                    <div className="rating-93 inter-normal-spicy-pink-14px">{rating}</div>
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

export default FilterMainCategory8100m;
