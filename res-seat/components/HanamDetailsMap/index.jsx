import React from "react";
import { Link } from "react-router-dom";
import "./HanamDetailsMap.css";

function HanamDetailsMap(props) {
  const {
    group442,
    rectangle38,
    iconStar,
    areGoing,
    spanText1,
    spanText2,
    spanText3,
    seatLeft,
    line1,
    hanamBbq,
    x180M,
    line4,
    line5,
    text13,
    number,
    line19,
    line201,
    menu,
    info,
    review,
    map,
    line21,
    line202,
    image7,
    iconLocation_Pin,
    kakaotalk_Photo_202205302108421,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hanam-details-map screen">
        <div className="overlap-group4-29">
          <div className="group-442" style={{ backgroundImage: `url(${group442})` }}>
            <Link to="/select-restaurant-hanam-bbq">
              <img className="vector-111" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <img className="rectangle-38-5" src={rectangle38} />
          <img className="icon-star-68" src={iconStar} />
          <div className="are-going-5 inter-thin-black-18px">{areGoing}</div>
          <div className="text-12 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-2 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-5" src={line1} />
          <div className="hanam-bbq-9 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-2 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-5" src={line4} />
          <img className="line-5-5" src={line5} />
          <div className="text-13 inter-thin-black-18px">{text13}</div>
          <div className="number-10 inter-extra-bold-persian-red-24px">{number}</div>
        </div>
        <div className="flex-row-25">
          <div className="group-container-8">
            <div className="line-container-11">
              <img className="line-19-5" src={line19} />
              <img className="line-20-2" src={line201} />
            </div>
            <Link to="/hanam-details-menu1">
              <div className="group-19-5">
                <div className="overlap-group-89">
                  <div className="menu-5 inter-thin-black-24px">{menu}</div>
                </div>
              </div>
            </Link>
            <Link to="/hanam-details-info">
              <div className="group-20-3">
                <div className="overlap-group1-65">
                  <div className="info-11 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/hanam-details-review">
              <div className="group-21-3">
                <div className="overlap-group3-44">
                  <div className="rectangle-39-5"></div>
                  <div className="review-6 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group2-58">
            <div className="map-5 inter-normal-white-24px">{map}</div>
          </div>
          <div className="line-container-12">
            <img className="line-21-1" src={line21} />
            <img className="line-20-3" src={line202} />
          </div>
        </div>
        <div className="overlap-group6-8">
          <Link to="/main">
            <img className="image-7" src={image7} />
          </Link>
          <img className="icon-location_pin-2" src={iconLocation_Pin} />
          <Link to="/search-map">
            <div className="ellipse-12 border-1px-black"></div>
          </Link>
        </div>
        <Link to="/shopping-cart-people1-39">
          <div className="group-284">
            <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-6" src={kakaotalk_Photo_202205302108421} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HanamDetailsMap;
