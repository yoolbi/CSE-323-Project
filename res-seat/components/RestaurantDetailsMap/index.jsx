import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
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
    text22,
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
    vector2,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-map screen">
        <div className="overlap-group4-29">
          <img className="image-10" src={image10} />
          <img className="rectangle-38-4" src={rectangle38} />
          <img className="icon-star-21" src={iconStar} />
          <div className="are-going-4 inter-thin-black-18px">{areGoing}</div>
          <div className="text-21 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-6 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-11" src={line1} />
          <div className="hanam-bbq-16 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-2 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-4" src={line4} />
          <img className="line-5-11" src={line5} />
          <div className="text-22 inter-thin-black-18px">{text22}</div>
          <div className="number-34 inter-extra-bold-persian-red-24px">{number}</div>
          <Link to="/select-restaurant-1">
            <img className="vector-111" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="flex-row-73">
          <div className="group-container-6">
            <div className="line-container-1">
              <img className="line-19-8" src={line19} />
              <img className="line-20" src={line201} />
            </div>
            <Link to="/restaurant-details-menu1">
              <div className="group-19-1">
                <div className="overlap-group-93">
                  <div className="menu-13 inter-thin-black-24px">{menu}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-info">
              <div className="group-20-2">
                <div className="overlap-group1-40">
                  <div className="info-4 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-1">
                <div className="overlap-group3-25">
                  <div className="rectangle-39-4"></div>
                  <div className="review-7 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group2-19">
            <div className="map-4 inter-normal-white-24px">{map}</div>
          </div>
          <div className="line-container-2">
            <img className="line-21" src={line21} />
            <img className="line-20-1" src={line202} />
          </div>
        </div>
        <div className="overlap-group5-22">
          <Link to="/main">
            <img className="image-7-1" src={image7} />
          </Link>
          <img className="vector-112" src={vector2} />
          <div className="ellipse-12 border-1px-black"></div>
        </div>
        <Group2622 src={group2622Props.src} className={group2622Props.className} />
      </div>
    </div>
  );
}

export default RestaurantDetailsMap;
