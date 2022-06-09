import React from "react";
import { Link } from "react-router-dom";
import Group4822 from "../Group4822";
import Component164 from "../Component164";
import "./FilterListALL500m.css";

function FilterListALL500m(props) {
  const {
    component29,
    line27,
    line29,
    category1,
    category2,
    vector2,
    seats1,
    seats2,
    seats3,
    rating,
    line28,
    vector3,
    image6,
    component164Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-all-500m screen">
        <img className="component-29-53" src={component29} />
        <div className="group-90-20">
          <div className="line-container-93">
            <img className="line-27-39" src={line27} />
            <img className="line-29-46" src={line29} />
          </div>
          <div className="group-51-53">
            <Group4822 />
            <Link to="/filter-list-seats-rating-500m">
              <div className="group-47-110">
                <div className="overlap-group1-586 border-1px-c4c4c4">
                  <div className="category-152 inter-normal-spicy-pink-13px">{category1}</div>
                  <img className="vector-596" src="/img/vector-134@2x.png" />
                  <div className="overlap-group-1009">
                    <div className="category-153 inter-normal-white-13px">{category2}</div>
                    <img className="vector-597" src={vector2} />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/filter-list-category-rating-500m">
              <div className="group-49-103">
                <div className="overlap-group2-451 border-1px-c4c4c4">
                  <div className="seats-169 inter-normal-spicy-pink-14px">{seats1}</div>
                  <div className="overlap-group1-587 border-1px-c4c4c4">
                    <div className="seats-169 inter-normal-spicy-pink-14px">{seats2}</div>
                    <div className="overlap-group-1010">
                      <div className="seats-170 inter-normal-white-14px">{seats3}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/filter-list-category-seats-500m">
              <div className="group-50-104">
                <div className="overlap-group3-389">
                  <div className="rating-124 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </Link>
          </div>
          <img className="line-28-49" src={line28} />
        </div>
        <div className="overlap-group6-82">
          <div className="overlap-group5-156">
            <Component164 {...component164Props} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-598" src={vector3} />
            </Link>
          </div>
          <img className="image-6-38" src={image6} />
        </div>
      </div>
    </div>
  );
}

export default FilterListALL500m;
