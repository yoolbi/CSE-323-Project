import React from "react";
import { Link } from "react-router-dom";
import Group26222 from "../Group26222";
import "./RestaurantDetailsMap.css";

function RestaurantDetailsMap(props) {
  const {
    image10,
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
    text353,
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
    group26222Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-map screen">
        <div className="overlap-group4-277">
          <img className="image-10" src={image10} />
          <img className="rectangle-38-25" src={rectangle38} />
          <img className="icon-star-429" src={iconStar} />
          <div className="are-going-35 inter-thin-black-18px">{areGoing}</div>
          <div className="text-352 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-28 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-141" src={line1} />
          <div className="hanam-bbq-157 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-8 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-32" src={line4} />
          <img className="line-5-97" src={line5} />
          <div className="text-353 inter-thin-black-18px">{text353}</div>
          <div className="number-250 inter-extra-bold-persian-red-24px">{number}</div>
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-813" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="flex-row-588">
          <div className="group-container-244">
            <div className="line-container-103">
              <img className="line-19-17" src={line19} />
              <img className="line-20-141" src={line201} />
            </div>
            <Link to="/restaurant-details-menu1">
              <div className="group-19-10">
                <div className="overlap-group-1127">
                  <div className="menu-103 inter-thin-black-24px">{menu}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-info">
              <div className="group-20-27">
                <div className="overlap-group1-653">
                  <div className="info-71 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-26">
                <div className="overlap-group3-455">
                  <div className="rectangle-39-35"></div>
                  <div className="review-87 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group2-503">
            <div className="map-35 inter-normal-white-24px">{map}</div>
          </div>
          <div className="line-container-104">
            <img className="line-21-3" src={line21} />
            <img className="line-20-142" src={line202} />
          </div>
        </div>
        <div className="overlap-group5-191">
          <Link to="/main">
            <img className="image-7-4" src={image7} />
          </Link>
          <img className="icon-location_pin-6" src={iconLocation_Pin} />
          <div className="ellipse-12-1 border-1px-black"></div>
        </div>
        <Group26222 src={group26222Props.src} className={group26222Props.className} />
      </div>
    </div>
  );
}

export default RestaurantDetailsMap;
