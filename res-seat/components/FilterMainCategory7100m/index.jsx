import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory7100m.css";

function FilterMainCategory7100m(props) {
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
    distance,
    vector6,
    category1,
    vector7,
    category2,
    vector8,
    category3,
    vector9,
    seats1,
    seats2,
    rating1,
    rating2,
    rectangle92,
    reset,
    surname,
    meat,
    dessert,
    salad,
    lunch,
    line39,
    line40,
    line41,
    line42,
    line43,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-7-100m screen">
        <div className="flex-col-457">
          <img className="component-29-24" src={component29} />
          <div className="overlap-group8-37">
            <img className="image-1-27" src={image1} />
            <img className="vector-441" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-21 border-1px-malibu"></div>
            <div className="ellipse-17-21 border-2px-white"></div>
            <img className="polygon-2-21" src={polygon2} />
            <div className="group-6-3">
              <div className="group-container-147">
                <div className="group-62-20">
                  <img className="vector-439" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-28">
                    <div className="overlap-group-899">
                      <img className="vector-440" src={vector3} />
                      <div className="see-list-21 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-148 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-6-3">
              <div className="group-container-147">
                <div className="group-62-20">
                  <img className="vector-439" src={vector4} />
                </div>
                <Link to="/list">
                  <div className="group-63-28">
                    <div className="overlap-group-899">
                      <img className="vector-440" src={vector5} />
                      <div className="see-list-21 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-59 border-1px-mercury">
                <div className="overlap-group-900">
                  <div className="distance-105 inter-normal-white-14px">{distance}</div>
                  <img className="vector-442" src={vector6} />
                </div>
                <div className="group-container-149">
                  <div className="overlap-group1-540">
                    <div className="rectangle-81-13 border-1px-c4c4c4"></div>
                    <div className="category-114 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-443" src={vector7} />
                    <Link to="/filter-main-100m">
                      <div className="group-47-81">
                        <div className="overlap-group-901">
                          <div className="category-115 inter-normal-white-13px">{category2}</div>
                          <img className="vector-444" src={vector8} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link to="/filter-main-category-8-100m">
                    <div className="group-51-38">
                      <div className="overlap-group4-212 border-1px-orange">
                        <div className="category-116 inter-normal-flamingo-13px">{category3}</div>
                        <img className="vector-445" src={vector9} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group2-409">
                  <div className="rectangle-6 border-1px-c4c4c4"></div>
                  <div className="seats-113 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-category-seats-100m">
                    <div className="group-78">
                      <div className="overlap-group-902 border-1px-c4c4c4">
                        <div className="seats-114 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group3-315">
                  <div className="rectangle-6 border-1px-c4c4c4"></div>
                  <div className="rating-88 inter-normal-spicy-pink-14px">{rating1}</div>
                  <Link to="/filter-main-category-rating-100m">
                    <div className="group-78">
                      <div className="overlap-group-903 border-1px-c4c4c4">
                        <div className="rating-89 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group7-46">
              <div className="rectangle-91-4 border-0-5px-c4c4c4"></div>
              <img className="rectangle-92-10" src={rectangle92} />
              <Link to="/filter-main-100m">
                <div className="reset-24 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
              <div className="surname-4 inter-normal-black-13px">{surname}</div>
              <Link to="/filter-list-category-8-100m">
                <div className="meat-45 inter-normal-flamingo-13px">{meat}</div>
              </Link>
              <div className="dessert-4 inter-normal-black-13px">{dessert}</div>
              <div className="salad-4 inter-normal-black-13px">{salad}</div>
              <div className="lunch-4 inter-normal-black-13px">{lunch}</div>
              <img className="line-39-5" src={line39} />
              <img className="line-40-5" src={line40} />
              <img className="line-41-5" src={line41} />
              <img className="line-42-5" src={line42} />
              <img className="line-43-5" src={line43} />
              <div className="ellipse-20-36"></div>
              <div className="ellipse-21-5"></div>
            </div>
          </div>
        </div>
        <img className="rectangle-29-15" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainCategory7100m;
