import React from "react";
import { Link } from "react-router-dom";
import Group497 from "../Group497";
import "./FilterMainRating100m.css";

function FilterMainRating100m(props) {
  const { component29, image1, polygon2, vector2, seeList, distance, vector3, category, vector4, rating } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-rating-100m screen">
        <img className="component-29-72" src={component29} />
        <div className="overlap-group5-169">
          <img className="image-1-55" src={image1} />
          <div className="ellipse-16-49 border-1px-malibu"></div>
          <div className="ellipse-17-49 border-2px-white"></div>
          <img className="polygon-2-49" src={polygon2} />
          <div className="group-65-22">
            <div className="group-container-213">
              <div className="group-62-48">
                <img className="vector-702" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-rating-100m">
                <div className="group-63-56">
                  <div className="overlap-group-1067">
                    <img className="vector-703" src={vector2} />
                    <div className="see-list-49 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-214 border-1px-mercury">
              <Link to="/main">
                <div className="group-48-71">
                  <div className="overlap-group-1068">
                    <div className="distance-130 inter-normal-white-14px">{distance}</div>
                    <img className="vector-704" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-category-rating-100m">
                <div className="group-47-129">
                  <div className="overlap-group1-614 border-1px-c4c4c4">
                    <div className="category-181 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-705" src={vector4} />
                  </div>
                </div>
              </Link>
              <Group497 />
              <div className="group-50-119">
                <div className="overlap-group3-426">
                  <Link to="/filter-main-100m">
                    <div className="rectangle-60-13"></div>
                  </Link>
                  <div className="rating-147 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainRating100m;
