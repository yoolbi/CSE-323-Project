import React from "react";
import { Link } from "react-router-dom";
import Group273 from "../Group273";
import "./SeansDetailsInfo.css";

function SeansDetailsInfo(props) {
  const {
    search,
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
    text1,
    number,
    iconStar,
    line9,
    line13,
    line14,
    line19,
    line12,
    line18,
    map,
    review,
    restaurantInformation,
    open09002200,
    menu,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    info,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sean-s-details-info screen">
        <div className="overlap-group6-4">
          <img className="search" src={search} />
          <div className="overlap-group4-23" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <Link to="/select-restaurant-sean-s">
              <img className="vector-102" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <div className="overlap-group5-5">
            <img className="rectangle-38" src={rectangle38} />
            <div className="are-going inter-thin-black-18px">{areGoing}</div>
            <div className="number inter-extra-bold-white-40px">
              <span className="inter-extra-bold-spicy-pink-40px">{spanText1}</span>
              <span className="inter-extra-bold-black-40px">{spanText2}</span>
            </div>
            <div className="mins-waiting inter-extra-bold-black-25px-2">{minsWaiting}</div>
            <img className="line-1" src={line1} />
            <div className="seans-restaurant-5 inter-extra-bold-black-25px">{seansRestaurant}</div>
            <div className="x120m inter-thin-black-18px">{x120M}</div>
            <img className="line-4" src={line4} />
            <img className="line-5" src={line5} />
            <div className="text-1 inter-thin-black-18px">{text1}</div>
            <div className="number-1 inter-extra-bold-apple-24px">{number}</div>
            <img className="icon-star-27" src={iconStar} />
          </div>
        </div>
        <div className="overlap-group-container-12">
          <div className="group-container-5">
            <div className="line-container-3">
              <img className="line-9" src={line9} />
              <img className="line-13" src={line13} />
              <img className="line-14" src={line14} />
            </div>
            <div className="line-container-4">
              <img className="line-19" src={line19} />
              <img className="line-12" src={line12} />
              <img className="line-18" src={line18} />
            </div>
            <Link to="/sean-s-details-map">
              <div className="group-22">
                <div className="overlap-group2-51">
                  <div className="map inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21">
                <div className="overlap-group3-38">
                  <div className="rectangle-39"></div>
                  <div className="review-1 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <div className="overlap-group9-4">
              <div className="restaurant-information inter-semi-bold-black-24px">{restaurantInformation}</div>
              <div className="rectangle-99"></div>
              <div className="open-0900-2200 inter-light-black-20px-2">{open09002200}</div>
            </div>
            <Link to="/sean-s-details-menu1">
              <div className="group-19">
                <div className="overlap-group-81">
                  <div className="menu inter-thin-black-24px">{menu}</div>
                </div>
              </div>
            </Link>
            <div className="overlap-group10-6">
              <div className="call-032-321-4321 inter-light-black-20px">
                <span className="inter-light-black-20px">{spanText3}</span>
                <span className="inter-light-black-20px">{spanText4}</span>
                <span className="span2 inter-light-black-20px">{spanText5}</span>
              </div>
            </div>
            <div className="overlap-group11-4">
              <div className="rectangle-101"></div>
              <div className="location-33-3-song inter-light-black-20px">
                <span className="inter-light-black-20px">{spanText6}</span>
                <span className="inter-light-black-20px">{spanText7}</span>
              </div>
              <Group273 />
            </div>
          </div>
          <div className="overlap-group1-58">
            <div className="info-5 inter-normal-white-24px">{info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsInfo;
