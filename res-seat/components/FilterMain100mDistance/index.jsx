import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMain100mDistance.css";

function FilterMain100mDistance(props) {
  const {
    component29,
    image1,
    polygon2,
    vector2,
    vector3,
    seeList1,
    vector4,
    vector5,
    seeList2,
    distance1,
    vector6,
    distance2,
    vector7,
    category,
    vector8,
    seats1,
    seats2,
    rating1,
    rating2,
    x100M,
    line31,
    x200M,
    line32,
    x500M,
    x1Km,
    line33,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-100m-distance screen">
        <div className="flex-col-463">
          <img className="component-29-77" src={component29} />
          <div className="overlap-group9-48">
            <img className="image-1-58" src={image1} />
            <img className="vector-728" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-52 border-1px-malibu"></div>
            <div className="ellipse-17-52 border-2px-white"></div>
            <img className="polygon-2-52" src={polygon2} />
            <div className="group-64-44">
              <div className="group-container-222">
                <div className="group-62-51">
                  <img className="vector-726" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-59">
                    <div className="overlap-group-1075">
                      <img className="vector-727" src={vector3} />
                      <div className="see-list-52 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-223 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-65-24">
              <div className="group-container-222">
                <div className="group-62-51">
                  <img className="vector-726" src={vector4} />
                </div>
                <Link to="/filter-list-100m-distance">
                  <div className="group-63-59">
                    <div className="overlap-group-1075">
                      <img className="vector-727" src={vector5} />
                      <div className="see-list-52 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-224 border-1px-mercury">
                <div className="overlap-group1-623">
                  <div className="rectangle-80-4"></div>
                  <div className="distance-134 inter-normal-white-14px">{distance1}</div>
                  <img className="vector-729" src={vector6} />
                  <Link to="/filter-main-100m">
                    <div className="group-48-74">
                      <div className="overlap-group-1076 border-1px-orange">
                        <div className="distance-135 inter-normal-flamingo-14px">{distance2}</div>
                        <img className="vector-730" src={vector7} />
                      </div>
                    </div>
                  </Link>
                </div>
                <Link to="/filter-main-category-5-100m">
                  <div className="group-47-134">
                    <div className="overlap-group2-481 border-1px-c4c4c4">
                      <div className="category-186 inter-normal-spicy-pink-13px">{category}</div>
                      <img className="vector-731" src={vector8} />
                    </div>
                  </div>
                </Link>
                <div className="overlap-group3-433">
                  <div className="rectangle-33-16 border-1px-c4c4c4"></div>
                  <div className="seats-199 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-seats-100m">
                    <div className="group-93">
                      <div className="overlap-group-1077 border-1px-c4c4c4">
                        <div className="seats-200 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group-container-225">
                  <div className="overlap-group4-251 border-1px-c4c4c4">
                    <div className="rating-153 inter-normal-spicy-pink-14px">{rating1}</div>
                  </div>
                  <Link to="/filter-main-rating-100m">
                    <div className="group-93">
                      <div className="overlap-group5-174 border-1px-c4c4c4">
                        <div className="rating-154 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group8-41 border-1px-c4c4c4">
              <div className="overlap-group1-624">
                <Link to="/filter-main-100m">
                  <div className="x100m-6 inter-normal-flamingo-14px">{x100M}</div>
                </Link>
                <Link to="/filter-main-100m">
                  <div className="rectangle-85-6"></div>
                </Link>
              </div>
              <img className="line-31-5" src={line31} />
              <Link to="/filter-main-200m">
                <div className="x200m-6 inter-normal-black-14px">{x200M}</div>
              </Link>
              <img className="line-32-7" src={line32} />
              <div className="x500m-6 inter-normal-black-14px">{x500M}</div>
              <div className="overlap-group-1078">
                <Link to="/main">
                  <div className="x1-km-6 inter-normal-black-14px">{x1Km}</div>
                </Link>
                <img className="line-33-5" src={line33} />
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle-29-35" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMain100mDistance;
