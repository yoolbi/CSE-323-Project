import React from "react";
import { Link } from "react-router-dom";
import "./UnclesDetailsReview.css";

function UnclesDetailsReview(props) {
  const {
    search,
    overlapGroup5,
    overlapGroup6,
    line1,
    uncles,
    seatLeft,
    x120M,
    line4,
    iconStar1,
    text17,
    line5,
    areGoing,
    number1,
    spanText1,
    spanText2,
    spanText3,
    line9,
    line13,
    line14,
    rectangle52,
    iconUser1,
    seeDetail1,
    date,
    color1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    alwaysGood,
    overlapGroup7,
    iconUser2,
    yesterday,
    color2,
    iconStar6,
    iconStar7,
    aPleasantPlaceWit,
    iconStar8,
    iconStar9,
    iconStar10,
    seeDetail2,
    porkBellyG3D0983C26_19201,
    kakaotalk_Photo_202205302108421,
    line19,
    line12,
    line18,
    menu,
    info,
    map,
    review,
    vector2,
    number2,
    iconStar11,
    text16,
    iconStar12,
    iconStar13,
    iconStar14,
    iconStar15,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="uncle-s-details-review screen">
        <div className="overlap-group9-7">
          <img className="search-5" src={search} />
          <div className="overlap-group5-12" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <Link to="/select-restaurant-uncle-s">
              <img className="vector-113" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <div className="overlap-group6-10" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <div className="overlap-group-92">
              <img className="line-1-7" src={line1} />
              <div className="uncles-7 inter-extra-bold-black-25px">{uncles}</div>
            </div>
            <div className="seat-left-4 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <div className="flex-row-27 inter-thin-black-18px">
              <div className="x120m-4">{x120M}</div>
              <img className="line-6" src={line4} />
              <img className="icon-star-70" src={iconStar1} />
              <div className="text-17">{text17}</div>
              <img className="line-6" src={line5} />
              <div className="overlap-group1-68">
                <div className="are-going-7 inter-thin-black-18px">{areGoing}</div>
                <div className="number-13 inter-extra-bold-persian-red-24px">{number1}</div>
              </div>
            </div>
          </div>
          <div className="text-18 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
        </div>
        <div className="overlap-group11-6">
          <div className="overlap-group8-7">
            <img className="line-9-5" src={line9} />
            <img className="line-13-5" src={line13} />
            <img className="line-14-5" src={line14} />
            <img className="rectangle-52-2" src={rectangle52} />
            <img className="icon-user-5" src={iconUser1} />
            <div className="see-detail-5 inter-normal-suva-gray-10px">{seeDetail1}</div>
            <div className="date-2 inter-normal-dove-gray-12px">{date}</div>
            <div className="color-5 inter-medium-black-16px">{color1}</div>
            <img className="icon-star-71" src={iconStar2} />
            <img className="icon-star-72" src={iconStar3} />
            <img className="icon-star-73" src={iconStar4} />
            <img className="icon-star-74" src={iconStar5} />
            <div className="always-good-2 inter-medium-black-14px">{alwaysGood}</div>
            <div className="overlap-group7-9" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <img className="icon-user-6" src={iconUser2} />
              <div className="overlap-group2-60">
                <div className="overlap-group1-69">
                  <div className="yesterday-3 inter-normal-dove-gray-12px">{yesterday}</div>
                  <div className="color-6 inter-medium-black-16px">{color2}</div>
                  <img className="icon-star-75" src={iconStar6} />
                  <img className="icon-star-76" src={iconStar7} />
                  <p className="a-pleasant-place-wit inter-medium-black-14px">{aPleasantPlaceWit}</p>
                </div>
                <div className="icon-star-container-1">
                  <img className="icon-star-77" src={iconStar8} />
                  <img className="icon-star-78" src={iconStar9} />
                  <img className="icon-star-79" src={iconStar10} />
                </div>
                <div className="see-detail-6 inter-normal-suva-gray-10px">{seeDetail2}</div>
                <img className="pork-belly-g3d0983c26_1920-1-2" src={porkBellyG3D0983C26_19201} />
              </div>
            </div>
            <Link to="/shopping-cartpeople1">
              <div className="group-275">
                <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-8" src={kakaotalk_Photo_202205302108421} />
              </div>
            </Link>
          </div>
          <div className="line-container-14">
            <img className="line-19-7" src={line19} />
            <img className="line-12-5" src={line12} />
            <img className="line-18-5" src={line18} />
          </div>
          <Link to="/uncle-s-details-menu1">
            <div className="group-19-7">
              <div className="overlap-group-93">
                <div className="menu-7 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <Link to="/uncle-s-details-info">
            <div className="group-20-4">
              <div className="overlap-group1-70">
                <div className="info-13 inter-thin-black-24px">{info}</div>
              </div>
            </div>
          </Link>
          <Link to="/uncle-s-details-map">
            <div className="group-22-5">
              <div className="overlap-group2-61">
                <div className="map-7 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group3-46">
            <div className="rectangle-39-7"></div>
            <div className="review-8 inter-normal-white-24px">{review}</div>
          </div>
          <img className="vector-114" src={vector2} />
          <div className="number-14 inter-light-black-24px">{number2}</div>
          <div className="overlap-group4-31">
            <img className="icon-star-80" src={iconStar11} />
            <div className="group-37-1">
              <div className="overlap-group-94">
                <div className="text-16 inter-light-saffron-24px">{text16}</div>
                <img className="icon-star-81" src={iconStar12} />
              </div>
              <img className="icon-star-82" src={iconStar13} />
              <img className="icon-star-83" src={iconStar14} />
              <img className="icon-star-84" src={iconStar15} />
              <div className="rectangle-54-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsReview;
