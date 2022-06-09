import React from "react";
import { Link } from "react-router-dom";
import "./UnclesDetailsMap.css";

function UnclesDetailsMap(props) {
  const {
    group434,
    overlapGroup4,
    line1,
    uncles,
    seatLeft,
    x120M,
    line4,
    iconStar,
    text19,
    line5,
    areGoing,
    number,
    spanText1,
    spanText2,
    spanText3,
    line19,
    line201,
    menu,
    info,
    review,
    map,
    line21,
    line202,
    image1,
    vector2,
    kakaotalk_Photo_202205302108421,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="uncle-s-details-map screen">
        <div className="overlap-group7-10">
          <div className="group-434" style={{ backgroundImage: `url(${group434})` }}>
            <Link to="/select-restaurant-uncle-s">
              <img className="vector-115" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <div className="overlap-group4-32" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <div className="overlap-group1-71">
              <img className="line-1-8" src={line1} />
              <div className="uncles-8 inter-extra-bold-black-25px">{uncles}</div>
            </div>
            <div className="seat-left-5 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <div className="flex-row-28 inter-thin-black-18px">
              <div className="x120m-5">{x120M}</div>
              <img className="line-7" src={line4} />
              <img className="icon-star-85" src={iconStar} />
              <div className="text-19">{text19}</div>
              <img className="line-7" src={line5} />
              <div className="overlap-group-95">
                <div className="are-going-8 inter-thin-black-18px">{areGoing}</div>
                <div className="number-15 inter-extra-bold-persian-red-24px">{number}</div>
              </div>
            </div>
          </div>
          <div className="text-20 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
        </div>
        <div className="flex-row-29">
          <div className="group-container-10">
            <div className="line-container-15">
              <img className="line-19-8" src={line19} />
              <img className="line-20-4" src={line201} />
            </div>
            <Link to="/uncle-s-details-menu1">
              <div className="group-19-8">
                <div className="overlap-group-96">
                  <div className="menu-8 inter-thin-black-24px">{menu}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-info">
              <div className="group-20-5">
                <div className="overlap-group1-72">
                  <div className="info-14 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-review">
              <div className="group-21-5">
                <div className="overlap-group3-47">
                  <div className="rectangle-39-8"></div>
                  <div className="review-9 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group2-62">
            <div className="map-8 inter-normal-white-24px">{map}</div>
          </div>
          <div className="line-container-16">
            <img className="line-21-2" src={line21} />
            <img className="line-20-5" src={line202} />
          </div>
        </div>
        <div className="overlap-group6-11">
          <Link to="/main">
            <img className="image-1-4" src={image1} />
          </Link>
          <Link to="/select-restaurant-uncle-s">
            <div className="ellipse-5-3 border-1px-black"></div>
          </Link>
          <img className="vector-116" src={vector2} />
        </div>
        <Link to="/shopping-cartpeople1">
          <div className="group-276">
            <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-9" src={kakaotalk_Photo_202205302108421} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UnclesDetailsMap;
