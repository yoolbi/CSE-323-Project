import React from "react";
import { Link } from "react-router-dom";
import Component22 from "../Component22";
import Group2622 from "../Group2622";
import "./RestaurantDetailsReview.css";

function RestaurantDetailsReview(props) {
  const {
    image9,
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
    text15,
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
    text16,
    iconStar7,
    iconStar8,
    iconStar9,
    iconStar10,
    component22Props,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-review screen">
        <div className="overlap-group6-15">
          <img className="image-9" src={image9} />
          <img className="search-8" src={search} />
          <img className="rectangle-38-3" src={rectangle38} />
          <img className="icon-star-6" src={iconStar1} />
          <div className="are-going-3 inter-thin-black-18px">{areGoing}</div>
          <div className="text-14 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-4 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-9" src={line1} />
          <div className="hanam-bbq-10 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-1 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-3" src={line4} />
          <img className="line-5-9" src={line5} />
          <div className="text-15 inter-thin-black-18px">{text15}</div>
          <div className="number-30 inter-extra-bold-persian-red-24px">{number1}</div>
          <Link to="/select-restaurant-1">
            <img className="vector-38" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group9-9">
          <div className="overlap-group7-15">
            <img className="line-9-3" src={line9} />
            <img className="line-13-3" src={line13} />
            <img className="line-14-3" src={line14} />
            <img className="rectangle-52" src={rectangle52} />
            <img className="icon-user" src={iconUser} />
            <Component22 {...component22Props} />
            <div className="see-detail inter-normal-suva-gray-10px">{seeDetail}</div>
            <img className="pork-belly-g3d0983c26_1920-1-1" src={porkBellyG3D0983C26_19201} />
            <div className="date inter-normal-dove-gray-12px">{date}</div>
            <div className="color inter-medium-black-16px">{color}</div>
            <img className="icon-star-7" src={iconStar2} />
            <img className="icon-star-8" src={iconStar3} />
            <img className="icon-star-9" src={iconStar4} />
            <img className="icon-star-10" src={iconStar5} />
            <Group2622 src={group2622Props.src} className={group2622Props.className} />
            <div className="always-good inter-medium-black-14px">{alwaysGood}</div>
          </div>
          <div className="line-container">
            <img className="line-19-5" src={line19} />
            <img className="line-12-3" src={line12} />
            <img className="line-18" src={line18} />
          </div>
          <Link to="/restaurant-details-menu1">
            <div className="group-19">
              <div className="overlap-group-75">
                <div className="menu-11 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-info">
            <div className="group-20-1">
              <div className="overlap-group1-25">
                <div className="info-3 inter-thin-black-24px">{info}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-map">
            <div className="group-22-1">
              <div className="overlap-group2-11">
                <div className="map-3 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group3-18">
            <div className="rectangle-39-3"></div>
            <div className="review-5 inter-normal-white-24px">{review}</div>
          </div>
          <img className="vector-39" src={vector2} />
          <div className="number-31 inter-light-black-24px">{number2}</div>
          <div className="overlap-group4-17">
            <img className="icon-star-11" src={iconStar6} />
            <div className="group-37">
              <div className="overlap-group-76">
                <div className="text-16 inter-light-saffron-24px">{text16}</div>
                <img className="icon-star-12" src={iconStar7} />
              </div>
              <img className="icon-star-13" src={iconStar8} />
              <img className="icon-star-14" src={iconStar9} />
              <img className="icon-star-15" src={iconStar10} />
              <div className="rectangle-54"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsReview;
