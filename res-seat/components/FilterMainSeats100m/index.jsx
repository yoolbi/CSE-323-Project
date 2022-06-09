import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import "./FilterMainSeats100m.css";

function FilterMainSeats100m(props) {
  const { component29, image1, vector2, seeList, category, vector3, seats, rating, polygon2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-100m screen">
        <img className="component-29-47" src={component29} />
        <div className="overlap-group5-153">
          <img className="image-1-43" src={image1} />
          <div className="group-64-36">
            <div className="group-container-183">
              <div className="group-62-36">
                <img className="vector-575" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-seats-100m">
                <div className="group-63-44">
                  <div className="overlap-group-999">
                    <img className="vector-576" src={vector2} />
                    <div className="see-list-37 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-184 border-1px-mercury">
              <Group48 />
              <Link to="/filter-main-category-seats-100m">
                <div className="group-47-104">
                  <div className="overlap-group1-576 border-1px-c4c4c4">
                    <div className="category-145 inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-577" src={vector3} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-100m">
                <div className="group-49-97">
                  <div className="overlap-group2-444">
                    <div className="seats-161 inter-normal-white-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats-rating-100m">
                <div className="group-50-98">
                  <div className="overlap-group3-382 border-1px-c4c4c4">
                    <div className="rating-118 inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="ellipse-16-37 border-1px-malibu"></div>
          <div className="ellipse-17-37 border-2px-white"></div>
          <img className="polygon-2-37" src={polygon2} />
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeats100m;
