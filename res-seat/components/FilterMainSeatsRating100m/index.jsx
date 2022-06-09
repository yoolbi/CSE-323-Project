import React from "react";
import { Link } from "react-router-dom";
import "./FilterMainSeatsRating100m.css";

function FilterMainSeatsRating100m(props) {
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
    seats1,
    seats2,
    seats3,
    seats4,
    seats5,
    seats6,
    rating,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-seats-rating-100m screen">
        <img className="component-29-58" src={component29} />
        <div className="overlap-group7-50">
          <img className="image-1-47" src={image1} />
          <div className="ellipse-16-41 border-1px-malibu"></div>
          <div className="ellipse-17-41 border-2px-white"></div>
          <img className="polygon-2-41" src={polygon2} />
          <div className="group-65-17">
            <div className="group-container-192">
              <div className="group-62-40">
                <img className="vector-613" src="/img/vector@2x.png" />
              </div>
              <Link to="/filter-list-seats-rating-100m">
                <div className="group-63-48">
                  <div className="overlap-group-1023">
                    <img className="vector-614" src={vector2} />
                    <div className="see-list-41 applesdgothicneo-regular-normal-black-12px">{seeList}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group-container-193 border-1px-mercury">
              <Link to="/main">
                <div className="group-48-63">
                  <div className="overlap-group-1024">
                    <div className="distance-119 inter-normal-white-14px">{distance}</div>
                    <img className="vector-615" src={vector3} />
                  </div>
                </div>
              </Link>
              <div className="group-47-115">
                <div className="overlap-group1-594">
                  <Link to="/filter-main-all-100m">
                    <div className="rectangle-81-17 border-1px-c4c4c4"></div>
                  </Link>
                  <div className="category-161 inter-normal-spicy-pink-13px">{category}</div>
                  <img className="vector-616" src={vector4} />
                </div>
              </div>
              <Link to="/filter-main-rating-100m">
                <div className="group-49-107">
                  <div className="overlap-group4-235 border-1px-c4c4c4">
                    <div className="seats-178 inter-normal-spicy-pink-14px">{seats1}</div>
                    <div className="overlap-group-1021 border-1px-c4c4c4">
                      <div className="seats-178 inter-normal-spicy-pink-14px">{seats2}</div>
                      <div className="overlap-group-1022">
                        <div className="seats-179 inter-normal-white-14px">{seats3}</div>
                      </div>
                      <div className="overlap-group1-595 border-1px-c4c4c4">
                        <div className="seats-179 inter-normal-spicy-pink-14px">{seats4}</div>
                      </div>
                      <div className="overlap-group-1021 border-1px-c4c4c4">
                        <div className="seats-178 inter-normal-spicy-pink-14px">{seats5}</div>
                        <div className="overlap-group-1022">
                          <div className="seats-179 inter-normal-white-14px">{seats6}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="group-50-108">
                <div className="overlap-group5-159">
                  <Link to="/filter-main-seats-100m">
                    <div className="rectangle-60-10"></div>
                  </Link>
                  <div className="rating-130 inter-normal-white-14px">{rating}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMainSeatsRating100m;
