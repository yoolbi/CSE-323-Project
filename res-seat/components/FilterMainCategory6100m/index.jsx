import React from "react";
import { Link } from "react-router-dom";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import "./FilterMainCategory6100m.css";

function FilterMainCategory6100m(props) {
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
    reset,
    surname,
    dessert,
    salad,
    lunch,
    line39,
    line40,
    line41,
    line42,
    line43,
    meat,
    rectangle29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-main-category-6-100m screen">
        <div className="flex-col-460">
          <img className="component-29-65" src={component29} />
          <div className="overlap-group10-36">
            <Link to="/filter-main-category-8-100m">
              <div className="rectangle-102-3"></div>
            </Link>
            <img className="image-1-49" src={image1} />
            <img className="vector-658" src="/img/vector-4@2x.png" />
            <div className="ellipse-16-43 border-1px-malibu"></div>
            <div className="ellipse-17-43 border-2px-white"></div>
            <img className="polygon-2-43" src={polygon2} />
            <div className="group-64-39">
              <div className="group-container-199">
                <div className="group-62-42">
                  <img className="vector-656" src={vector2} />
                </div>
                <Link to="/list">
                  <div className="group-63-50">
                    <div className="overlap-group-1037">
                      <img className="vector-657" src={vector3} />
                      <div className="see-list-43 applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group-container-200 border-1px-mercury">
                <Group48 />
                <Group47 />
                <Group49 />
                <Group5042 />
              </div>
            </div>
            <div className="group-65-19">
              <div className="group-container-199">
                <div className="group-62-42">
                  <img className="vector-656" src={vector4} />
                </div>
                <Link to="/list">
                  <div className="group-63-50">
                    <div className="overlap-group-1037">
                      <img className="vector-657" src={vector5} />
                      <div className="see-list-43 applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group-container-64 border-1px-mercury">
                <div className="overlap-group-1038">
                  <div className="distance-125 inter-normal-white-14px">{distance}</div>
                  <img className="vector-659" src={vector6} />
                </div>
                <div className="overlap-group-container-65">
                  <div className="overlap-group1-607">
                    <div className="rectangle-81-19 border-1px-c4c4c4"></div>
                    <div className="category-170 inter-normal-spicy-pink-13px">{category1}</div>
                    <img className="vector-660" src={vector7} />
                    <Link to="/filter-main-100m">
                      <div className="group-47-122">
                        <div className="overlap-group-1039">
                          <div className="category-171 inter-normal-white-13px">{category2}</div>
                          <img className="vector-661" src={vector8} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="overlap-group4-242 border-1px-orange">
                    <div className="category-172 inter-normal-flamingo-13px">{category3}</div>
                    <img className="vector-662" src={vector9} />
                  </div>
                </div>
                <div className="overlap-group2-464">
                  <div className="rectangle-33-14 border-1px-c4c4c4"></div>
                  <div className="seats-187 inter-normal-spicy-pink-14px">{seats1}</div>
                  <Link to="/filter-main-seats-100m">
                    <div className="group-82">
                      <div className="overlap-group-1040 border-1px-c4c4c4">
                        <div className="seats-188 inter-normal-spicy-pink-14px">{seats2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group-container-201">
                  <div className="overlap-group3-404 border-1px-c4c4c4">
                    <div className="rating-138 inter-normal-spicy-pink-14px">{rating1}</div>
                  </div>
                  <Link to="/filter-main-rating-100m">
                    <div className="group-82">
                      <div className="overlap-group5-164 border-1px-c4c4c4">
                        <div className="rating-139 inter-normal-spicy-pink-14px">{rating2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overlap-group9-46">
              <div className="rectangle-91-11 border-0-5px-c4c4c4"></div>
              <Link to="/filter-main-100m">
                <div className="reset-31 inter-normal-spicy-pink-10px">{reset}</div>
              </Link>
              <div className="surname-11 inter-normal-black-13px">{surname}</div>
              <div className="dessert-11 inter-normal-black-13px">{dessert}</div>
              <div className="salad-11 inter-normal-black-13px">{salad}</div>
              <div className="lunch-11 inter-normal-black-13px">{lunch}</div>
              <img className="line-39-12" src={line39} />
              <img className="line-40-12" src={line40} />
              <img className="line-41-12" src={line41} />
              <img className="line-42-12" src={line42} />
              <img className="line-43-12" src={line43} />
              <Link to="/filter-main-category-5-100m">
                <div className="ellipse-20-43"></div>
              </Link>
              <div className="ellipse-21-12"></div>
              <Link to="/filter-main-category-8-100m">
                <div className="meat-62 inter-normal-black-13px">{meat}</div>
              </Link>
            </div>
          </div>
        </div>
        <img className="rectangle-29-29" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterMainCategory6100m;
