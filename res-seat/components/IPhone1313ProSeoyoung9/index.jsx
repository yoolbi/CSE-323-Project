import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup3 from "../PumpkinSoup3";
import "./IPhone1313ProSeoyoung9.css";

function IPhone1313ProSeoyoung9(props) {
  const {
    search,
    image2,
    overlapGroup6,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    seatLeft,
    line1,
    x250M,
    line4,
    star2,
    text34,
    line5,
    areGoing,
    number1,
    menu,
    info,
    review,
    map,
    onionSoup,
    tomatoSoup,
    potatoSoup,
    line12,
    line15,
    line16,
    line17,
    line13,
    line14,
    vector2,
    number2,
    line9,
    pumpkinSoup3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-9 screen">
        <div className="overlap-group4-39">
          <img className="search-27" src={search} />
          <img className="image-2-19" src={image2} />
          <Link to="/menu-detail1-porkbelly-sideadd">
            <img className="vector-184" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group6-28" style={{ backgroundImage: `url(${overlapGroup6})` }}>
          <div className="a-soup-shop-49 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group9-15">
            <div className="text-33 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-14 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-13" src={line1} />
          </div>
          <div className="flex-row-94 inter-thin-black-18px">
            <div className="overlap-group8-21">
              <div className="x250m-2">{x250M}</div>
              <img className="line-4-6" src={line4} />
            </div>
            <img className="star-2-8" src={star2} />
            <div className="text-34">{text34}</div>
            <img className="line-5-13" src={line5} />
            <div className="overlap-group10-7">
              <div className="are-going-11 inter-thin-black-18px">{areGoing}</div>
              <div className="number-40 inter-extra-bold-persian-red-24px">{number1}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group11-3">
          <div className="overlap-group-106">
            <div className="menu-15 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-10">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20-3">
                <div className="overlap-group1-50">
                  <div className="info-6 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-3">
                <div className="overlap-group3-37">
                  <div className="rectangle-39-6"></div>
                  <div className="review-10 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22-3">
                <div className="overlap-group2-30">
                  <div className="map-8 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group13-5">
            <div className="overlap-group12-4 inter-light-black-24px">
              <div className="onion-soup">{onionSoup}</div>
              <div className="tomato-soup">{tomatoSoup}</div>
              <div className="potato-soup">{potatoSoup}</div>
              <div className="overlap-group5-29">
                <img className="line-12-5" src={line12} />
                <PumpkinSoup3>{pumpkinSoup3Props.children}</PumpkinSoup3>
                <img className="line-15-3" src={line15} />
                <img className="line-16-3" src={line16} />
                <img className="line-17-3" src={line17} />
              </div>
              <div className="overlap-group7-29">
                <img className="line-13-5" src={line13} />
                <img className="line-14-5" src={line14} />
                <Link to="/shopping-cart-home">
                  <div className="group-26-8">
                    <img className="vector-185" src={vector2} />
                  </div>
                </Link>
                <div className="number-41 inter-medium-derby-22px">{number2}</div>
              </div>
            </div>
            <img className="line-9-5" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung9;
