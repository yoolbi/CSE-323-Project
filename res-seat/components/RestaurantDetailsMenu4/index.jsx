import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup from "../PumpkinSoup";
import "./RestaurantDetailsMenu3.css";

function RestaurantDetailsMenu3(props) {
  const {
    image11,
    search,
    rectangle38,
    areGoing,
    spanText1,
    spanText2,
    spanText3,
    seatLeft,
    line1,
    spanText4,
    spanText5,
    x250M,
    line4,
    line5,
    text3,
    number1,
    star2,
    menu,
    info,
    review,
    map,
    porkBelly,
    porkNeck,
    porkCheek,
    line12,
    line15,
    line16,
    line17,
    line13,
    line14,
    vector2,
    number2,
    line9,
    pumpkinSoupProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-menu3 screen">
        <div className="overlap-group4-4">
          <img className="image-11" src={image11} />
          <img className="search-2" src={search} />
          <img className="rectangle-38" src={rectangle38} />
          <div className="are-going inter-thin-black-18px">{areGoing}</div>
          <div className="text-2 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1" src={line1} />
          <div className="a-soup-shop inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText4}</span>
            <span className="inter-extra-bold-black-10px">{spanText5}</span>
          </div>
          <div className="x250m inter-thin-black-18px">{x250M}</div>
          <img className="line-4" src={line4} />
          <img className="line-5" src={line5} />
          <div className="text-3 inter-thin-black-18px">{text3}</div>
          <div className="number-1 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="star-2" src={star2} />
          <Link to="/select-restaurant-1">
            <img className="vector-12" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group7-1">
          <div className="overlap-group-14">
            <div className="menu-1 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group1-14">
              <div className="info inter-thin-black-24px">{info}</div>
            </div>
            <div className="overlap-group3-2">
              <div className="rectangle-39"></div>
              <div className="review inter-thin-black-24px">{review}</div>
            </div>
            <div className="overlap-group2-2">
              <div className="map inter-thin-black-24px">{map}</div>
            </div>
          </div>
          <div className="overlap-group9-1">
            <div className="overlap-group8-1">
              <div className="pork-belly inter-light-flamingo-24px">{porkBelly}</div>
              <div className="pork-neck inter-light-flamingo-24px">{porkNeck}</div>
              <div className="pork-cheek inter-light-black-24px">{porkCheek}</div>
              <div className="overlap-group6-1">
                <img className="line-12" src={line12} />
                <PumpkinSoup>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15" src={line15} />
                <img className="line-16" src={line16} />
                <img className="line-17" src={line17} />
              </div>
              <div className="overlap-group5-2">
                <img className="line-13" src={line13} />
                <img className="line-14" src={line14} />
                <div className="group-26">
                  <img className="vector-13" src={vector2} />
                </div>
                <div className="number-2 inter-medium-derby-22px">{number2}</div>
              </div>
            </div>
            <img className="line-9" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsMenu3;
