import React from "react";
import { Link } from "react-router-dom";
import Component22 from "../Component22";
import "./HanamDetailsReview.css";

function HanamDetailsReview(props) {
  const {
    overlapGroup,
    search,
    rectangle38,
    iconStar1,
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
    text10,
    number1,
    line9,
    line13,
    line14,
    rectangle52,
    iconUser,
    seeDetail,
    porkBellyG3D0983C26_19201,
    date,
    color,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    alwaysGood,
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
    iconStar6,
    text11,
    iconStar7,
    iconStar8,
    iconStar9,
    iconStar10,
    component22Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hanam-details-review screen">
        <div className="overlap-group7-7">
          <div className="overlap-group-87" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <Link to="/select-restaurant-hanam-bbq">
              <img className="vector-109" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <img className="search-3" src={search} />
          <img className="rectangle-38-4" src={rectangle38} />
          <img className="icon-star-48" src={iconStar1} />
          <div className="are-going-4 inter-thin-black-18px">{areGoing}</div>
          <div className="text-9 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-1 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-4" src={line1} />
          <div className="hanam-bbq-8 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-1 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-4" src={line4} />
          <img className="line-5-4" src={line5} />
          <div className="text-10 inter-thin-black-18px">{text10}</div>
          <div className="number-8 inter-extra-bold-persian-red-24px">{number1}</div>
        </div>
        <div className="overlap-group10-7">
          <div className="overlap-group8-5">
            <img className="line-9-3" src={line9} />
            <img className="line-13-3" src={line13} />
            <img className="line-14-3" src={line14} />
            <img className="rectangle-52-1" src={rectangle52} />
            <img className="icon-user-2" src={iconUser} />
            <Component22 {...component22Props} />
            <div className="see-detail-2 inter-normal-suva-gray-10px">{seeDetail}</div>
            <img className="pork-belly-g3d0983c26_1920-1-1" src={porkBellyG3D0983C26_19201} />
            <div className="date-1 inter-normal-dove-gray-12px">{date}</div>
            <div className="color-2 inter-medium-black-16px">{color}</div>
            <img className="icon-star-49" src={iconStar2} />
            <img className="icon-star-50" src={iconStar3} />
            <img className="icon-star-51" src={iconStar4} />
            <img className="icon-star-52" src={iconStar5} />
            <div className="always-good-1 inter-medium-black-14px">{alwaysGood}</div>
            <Link to="/shopping-cart-people1-39">
              <div className="group-283">
                <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-5" src={kakaotalk_Photo_202205302108421} />
              </div>
            </Link>
          </div>
          <div className="line-container-10">
            <img className="line-19-4" src={line19} />
            <img className="line-12-3" src={line12} />
            <img className="line-18-3" src={line18} />
          </div>
          <Link to="/hanam-details-menu1">
            <div className="group-19-4">
              <div className="overlap-group1-64">
                <div className="menu-4 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <Link to="/hanam-details-info">
            <div className="group-20-2">
              <div className="overlap-group2-57">
                <div className="info-10 inter-thin-black-24px">{info}</div>
              </div>
            </div>
          </Link>
          <Link to="/hanam-details-map">
            <div className="group-22-3">
              <div className="overlap-group3-43">
                <div className="map-4 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group4-28">
            <div className="rectangle-39-4"></div>
            <div className="review-5 inter-normal-white-24px">{review}</div>
          </div>
          <img className="vector-110" src={vector2} />
          <div className="number-9 inter-light-black-24px">{number2}</div>
          <div className="overlap-group5-9">
            <img className="icon-star-53" src={iconStar6} />
            <div className="group-37">
              <div className="overlap-group-88">
                <div className="text-11 inter-light-saffron-24px">{text11}</div>
                <img className="icon-star-54" src={iconStar7} />
              </div>
              <img className="icon-star-55" src={iconStar8} />
              <img className="icon-star-56" src={iconStar9} />
              <img className="icon-star-57" src={iconStar10} />
              <div className="rectangle-54"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsReview;
