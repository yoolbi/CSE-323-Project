import React from "react";
import { Link } from "react-router-dom";
import Group273 from "../Group273";
import "./SeansDetailsMap.css";

function SeansDetailsMap(props) {
  const {
    overlapGroup4,
    rectangle38,
    areGoing,
    spanText1,
    spanText2,
    minsWaiting,
    line1,
    seansRestaurant,
    x120M,
    line4,
    line5,
    text6,
    number,
    iconStar,
    line19,
    line201,
    menu,
    info,
    review,
    map,
    line21,
    line202,
    image1,
    iconLocation_Pin,
    group273Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sean-s-details-map screen">
        <div className="overlap-group-container-14">
          <div className="overlap-group4-26" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <Link to="/select-restaurant-sean-s">
              <img className="vector-107" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <div className="overlap-group5-7">
            <img className="rectangle-38-2" src={rectangle38} />
            <div className="are-going-2 inter-thin-black-18px">{areGoing}</div>
            <div className="number-5 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-spicy-pink-40px">{spanText1}</span>
              <span className="inter-extra-bold-black-40px">{spanText2}</span>
            </div>
            <div className="mins-waiting-2 inter-extra-bold-black-25px-2">{minsWaiting}</div>
            <img className="line-1-2" src={line1} />
            <div className="seans-restaurant-9 inter-extra-bold-black-25px">{seansRestaurant}</div>
            <div className="x120m-2 inter-thin-black-18px">{x120M}</div>
            <img className="line-4-2" src={line4} />
            <img className="line-5-2" src={line5} />
            <div className="text-6 inter-thin-black-18px">{text6}</div>
            <div className="number-6 inter-extra-bold-apple-24px">{number}</div>
            <img className="icon-star-46" src={iconStar} />
          </div>
        </div>
        <div className="flex-row-24">
          <div className="group-container-6">
            <div className="line-container-7">
              <img className="line-19-2" src={line19} />
              <img className="line-20" src={line201} />
            </div>
            <Link to="/sean-s-details-menu1">
              <div className="group-19-2">
                <div className="overlap-group-85">
                  <div className="menu-2 inter-thin-black-24px">{menu}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-info">
              <div className="group-20-1">
                <div className="overlap-group1-62">
                  <div className="info-8 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-1">
                <div className="overlap-group3-41">
                  <div className="rectangle-39-2"></div>
                  <div className="review-3 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group2-55">
            <div className="map-2 inter-normal-white-24px">{map}</div>
          </div>
          <div className="line-container-8">
            <img className="line-21" src={line21} />
            <img className="line-20-1" src={line202} />
          </div>
        </div>
        <div className="overlap-group7-6">
          <Link to="/main">
            <img className="image-1-3" src={image1} />
          </Link>
          <Link to="/select-restaurant-sean-s">
            <div className="ellipse-3-3 border-1px-black"></div>
          </Link>
          <img className="icon-location_pin-1" src={iconLocation_Pin} />
        </div>
        <Group273 className={group273Props.className} />
      </div>
    </div>
  );
}

export default SeansDetailsMap;
