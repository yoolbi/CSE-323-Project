import React from "react";
import { Link } from "react-router-dom";
import "./UnclesDetailsInfo.css";

function UnclesDetailsInfo(props) {
  const {
    group432,
    search,
    number1,
    overlapGroup4,
    line1,
    uncles,
    seatLeft,
    x120M,
    line4,
    iconStar,
    text14,
    line5,
    areGoing,
    number2,
    spanText1,
    spanText2,
    spanText3,
    line9,
    line13,
    line14,
    spanText4,
    spanText5,
    kakaotalk_Photo_202205302108421,
    line19,
    line12,
    line18,
    menu,
    info,
    map,
    review,
    restaurantInformation,
    open11002100,
    spanText6,
    spanText7,
    spanText8,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="uncle-s-details-info screen">
        <div className="overlap-group6-9">
          <div className="group-432" style={{ backgroundImage: `url(${group432})` }}>
            <Link to="/select-restaurant-uncle-s">
              <img className="vector-112" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <img className="search-4" src={search} />
          <div className="number-11 inter-extra-bold-saffron-40px">{number1}</div>
          <div className="overlap-group4-30" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <div className="overlap-group1-66">
              <img className="line-1-6" src={line1} />
              <div className="uncles-6 inter-extra-bold-black-25px">{uncles}</div>
            </div>
            <div className="seat-left-3 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <div className="flex-row-26 inter-thin-black-18px">
              <div className="x120m-3">{x120M}</div>
              <img className="line" src={line4} />
              <img className="icon-star-69" src={iconStar} />
              <div className="text-14">{text14}</div>
              <img className="line" src={line5} />
              <div className="overlap-group-90">
                <div className="are-going-6 inter-thin-black-18px">{areGoing}</div>
                <div className="number-12 inter-extra-bold-persian-red-24px">{number2}</div>
              </div>
            </div>
          </div>
          <div className="text-15 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
        </div>
        <div className="group-container-9">
          <div className="overlap-group5-11">
            <img className="line-9-4" src={line9} />
            <img className="line-13-4" src={line13} />
            <img className="line-14-4" src={line14} />
            <div className="rectangle-101-2"></div>
            <div className="location-33-3-song-2 inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText4}</span>
              <span className="inter-light-black-20px">{spanText5}</span>
            </div>
            <Link to="/shopping-cartpeople1">
              <div className="group-274">
                <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-7" src={kakaotalk_Photo_202205302108421} />
              </div>
            </Link>
          </div>
          <div className="line-container-13">
            <img className="line-19-6" src={line19} />
            <img className="line-12-4" src={line12} />
            <img className="line-18-4" src={line18} />
          </div>
          <Link to="/uncle-s-details-menu1">
            <div className="group-19-6">
              <div className="overlap-group-91">
                <div className="menu-6 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group1-67">
            <div className="info-12 inter-normal-white-24px">{info}</div>
          </div>
          <Link to="/uncle-s-details-map">
            <div className="group-22-4">
              <div className="overlap-group2-59">
                <div className="map-6 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <Link to="/uncle-s-details-review">
            <div className="group-21-4">
              <div className="overlap-group3-45">
                <div className="rectangle-39-6"></div>
                <div className="review-7 inter-thin-black-24px">{review}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group8-6">
            <div className="restaurant-information-2 inter-semi-bold-black-24px">{restaurantInformation}</div>
            <div className="rectangle-99-2"></div>
            <div className="open-1100-2100 inter-light-black-20px-2">{open11002100}</div>
          </div>
          <div className="overlap-group7-8">
            <div className="call-032-234-5432 inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText6}</span>
              <span className="inter-light-black-20px">{spanText7}</span>
              <span className="span2-2 inter-light-black-20px">{spanText8}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsInfo;
