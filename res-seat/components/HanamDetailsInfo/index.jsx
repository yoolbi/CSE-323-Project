import React from "react";
import { Link } from "react-router-dom";
import "./HanamDetailsInfo.css";

function HanamDetailsInfo(props) {
  const {
    overlapGroup,
    search,
    rectangle38,
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
    text8,
    number,
    iconStar,
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
    open10002200,
    spanText6,
    spanText7,
    spanText8,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hanam-details-info screen">
        <div className="overlap-group6-6">
          <div className="overlap-group-86" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <Link to="/select-restaurant-hanam-bbq">
              <img className="vector-108" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <img className="search-2" src={search} />
          <img className="rectangle-38-3" src={rectangle38} />
          <div className="are-going-3 inter-thin-black-18px">{areGoing}</div>
          <div className="text-7 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-3" src={line1} />
          <div className="hanam-bbq-7 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m inter-thin-black-18px">{x180M}</div>
          <img className="line-4-3" src={line4} />
          <img className="line-5-3" src={line5} />
          <div className="text-8 inter-thin-black-18px">{text8}</div>
          <div className="number-7 inter-extra-bold-persian-red-24px">{number}</div>
          <img className="icon-star-47" src={iconStar} />
        </div>
        <div className="group-container-7">
          <div className="overlap-group5-8">
            <img className="line-9-2" src={line9} />
            <img className="line-13-2" src={line13} />
            <img className="line-14-2" src={line14} />
            <div className="rectangle-101-1"></div>
            <div className="location-33-3-song-1 inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText4}</span>
              <span className="inter-light-black-20px">{spanText5}</span>
            </div>
            <Link to="/shopping-cart-people1-39">
              <div className="group-282">
                <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-4" src={kakaotalk_Photo_202205302108421} />
              </div>
            </Link>
          </div>
          <div className="line-container-9">
            <img className="line-19-3" src={line19} />
            <img className="line-12-2" src={line12} />
            <img className="line-18-2" src={line18} />
          </div>
          <Link to="/hanam-details-menu1">
            <div className="group-19-3">
              <div className="overlap-group1-63">
                <div className="menu-3 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group2-56">
            <div className="info-9 inter-normal-white-24px">{info}</div>
          </div>
          <Link to="/hanam-details-map">
            <div className="group-22-2">
              <div className="overlap-group3-42">
                <div className="map-3 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <Link to="/hanam-details-review">
            <div className="group-21-2">
              <div className="overlap-group4-27">
                <div className="rectangle-39-3"></div>
                <div className="review-4 inter-thin-black-24px">{review}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group9-6">
            <div className="restaurant-information-1 inter-semi-bold-black-24px">{restaurantInformation}</div>
            <div className="rectangle-99-1"></div>
            <div className="open-1000-2200 inter-light-black-20px-2">{open10002200}</div>
          </div>
          <div className="overlap-group8-4">
            <div className="call-032-123-1234 inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText6}</span>
              <span className="inter-light-black-20px">{spanText7}</span>
              <span className="span2-1 inter-light-black-20px">{spanText8}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsInfo;
