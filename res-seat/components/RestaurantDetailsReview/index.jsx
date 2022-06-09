import React from "react";
import { Link } from "react-router-dom";
import Component22 from "../Component22";
import Group26222 from "../Group26222";
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
    text348,
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
    text349,
    iconStar7,
    iconStar8,
    iconStar9,
    iconStar10,
    component22Props,
    group26222Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-review screen">
        <div className="overlap-group6-100">
          <img className="image-9" src={image9} />
          <img className="search-13" src={search} />
          <img className="rectangle-38-24" src={rectangle38} />
          <img className="icon-star-415" src={iconStar1} />
          <div className="are-going-34 inter-thin-black-18px">{areGoing}</div>
          <div className="text-347 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-27 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-139" src={line1} />
          <div className="hanam-bbq-154 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-7 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-31" src={line4} />
          <img className="line-5-95" src={line5} />
          <div className="text-348 inter-thin-black-18px">{text348}</div>
          <div className="number-246 inter-extra-bold-persian-red-24px">{number1}</div>
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-780" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group9-57">
          <div className="overlap-group7-72">
            <img className="line-9-31" src={line9} />
            <img className="line-13-31" src={line13} />
            <img className="line-14-31" src={line14} />
            <img className="rectangle-52-3" src={rectangle52} />
            <img className="icon-user-7" src={iconUser} />
            <Component22 {...component22Props} />
            <div className="see-detail-7 inter-normal-suva-gray-10px">{seeDetail}</div>
            <img className="pork-belly-g3d0983c26_1920-1-14" src={porkBellyG3D0983C26_19201} />
            <div className="date-3 inter-normal-dove-gray-12px">{date}</div>
            <div className="color-7 inter-medium-black-16px">{color}</div>
            <img className="icon-star-416" src={iconStar2} />
            <img className="icon-star-417" src={iconStar3} />
            <img className="icon-star-418" src={iconStar4} />
            <img className="icon-star-419" src={iconStar5} />
            <Group26222 src={group26222Props.src} className={group26222Props.className} />
            <div className="always-good-3 inter-medium-black-14px">{alwaysGood}</div>
          </div>
          <div className="line-container-102">
            <img className="line-19-14" src={line19} />
            <img className="line-12-31" src={line12} />
            <img className="line-18-6" src={line18} />
          </div>
          <Link to="/restaurant-details-menu1">
            <div className="group-19-9">
              <div className="overlap-group-1122">
                <div className="menu-101 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-info">
            <div className="group-20-26">
              <div className="overlap-group1-650">
                <div className="info-70 inter-thin-black-24px">{info}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-map">
            <div className="group-22-26">
              <div className="overlap-group2-497">
                <div className="map-34 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group3-451">
            <div className="rectangle-39-34"></div>
            <div className="review-86 inter-normal-white-24px">{review}</div>
          </div>
          <img className="vector-781" src={vector2} />
          <div className="number-247 inter-light-black-24px">{number2}</div>
          <div className="overlap-group4-272">
            <img className="icon-star-420" src={iconStar6} />
            <div className="group-37-2">
              <div className="overlap-group-1123">
                <div className="text-349 inter-light-saffron-24px">{text349}</div>
                <img className="icon-star-421" src={iconStar7} />
              </div>
              <img className="icon-star-422" src={iconStar8} />
              <img className="icon-star-423" src={iconStar9} />
              <img className="icon-star-424" src={iconStar10} />
              <div className="rectangle-54-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsReview;
