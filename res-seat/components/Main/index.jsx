import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group48 from "../Group48";
import Group47 from "../Group47";
import Group49 from "../Group49";
import Group5042 from "../Group5042";
import Group325 from "../Group325";
import "./Main.css";

function Main(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    polygon2,
    vector2,
    seeList1,
    vector3,
    seeList2,
    distance,
    category,
    vector4,
    seats,
    rating,
    hanamBbq,
    uncles,
    seansRestaurant,
    group3181Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main screen">
        <div className="group-234">
          <div className="info-container">
            <Link to="/about">
              <img className="icon-information" src={iconInformation} />
            </Link>
            <div className="info applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group6">
            <Link to="/search-map">
              <div className="rectangle-15"></div>
            </Link>
            <img className="icon-search" src={iconSearch} />
          </div>
          <div className="flex-col">
            <Link to="/completedpreorderhome3">
              <img className="group" src={group} />
            </Link>
            <div className="my-book-1 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group7">
          <img className="image-1" src={image1} />
          <Group320 />
          <Group318>{group3181Props.children}</Group318>
          <img className="vector-1" src="/img/vector-4@2x.png" />
          <div className="ellipse-16 border-1px-malibu"></div>
          <div className="ellipse-17 border-2px-white"></div>
          <img className="polygon-2" src={polygon2} />
          <div className="group-64">
            <Link to="/list">
              <div className="group-63">
                <div className="overlap-group-1">
                  <img className="vector" src={vector2} />
                  <div className="see-list applesdgothicneo-regular-normal-black-12px">{seeList1}</div>
                </div>
              </div>
            </Link>
            <div className="group-container border-1px-mercury">
              <Group48 />
              <Group47 />
              <Group49 />
              <Group5042 />
            </div>
          </div>
          <div className="group-65">
            <Link to="/list">
              <div className="group-63">
                <div className="overlap-group-1">
                  <img className="vector" src={vector3} />
                  <div className="see-list applesdgothicneo-regular-normal-black-12px">{seeList2}</div>
                </div>
              </div>
            </Link>
            <div className="group-container-1 border-1px-mercury">
              <div className="group-48">
                <div className="overlap-group-2">
                  <div className="distance inter-normal-white-14px">{distance}</div>
                </div>
              </div>
              <Link to="/filter-main-category">
                <div className="group-47">
                  <div className="overlap-group1-3 border-1px-c4c4c4">
                    <div className="category inter-normal-spicy-pink-13px">{category}</div>
                    <img className="vector-2" src={vector4} />
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-seats">
                <div className="group-49">
                  <div className="overlap-group2-2 border-1px-c4c4c4">
                    <div className="seats inter-normal-spicy-pink-14px">{seats}</div>
                  </div>
                </div>
              </Link>
              <Link to="/filter-main-rating">
                <div className="group-50">
                  <div className="overlap-group3-1 border-1px-c4c4c4">
                    <div className="rating inter-normal-spicy-pink-14px">{rating}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="group-324">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 />
          <div className="group-327">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5 border-1px-black"></div>
            </Link>
            <div className="uncles inter-medium-black-8px">{uncles}</div>
          </div>
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-321">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant inter-medium-black-8px">{seansRestaurant}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
