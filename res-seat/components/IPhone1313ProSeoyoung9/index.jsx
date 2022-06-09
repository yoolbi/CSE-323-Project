import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup3 from "../PumpkinSoup3";
import "./IPhone1313ProSeoyoung9.css";

function IPhone1313ProSeoyoung9(props) {
  const {
    search,
    image2,
    overlapGroup4,
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
    text365,
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
        <div className="overlap-group7-79">
          <img className="search-25" src={search} />
          <img className="image-2-52" src={image2} />
          <Link to="/menu-detail1-porkbelly-sideadd">
            <img className="vector-876" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group4-287" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="a-soup-shop-113 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group9-59">
            <div className="text-364 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-36 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-143" src={line1} />
          </div>
          <div className="flex-row-607 inter-thin-black-18px">
            <div className="overlap-group8-55">
              <div className="x250m-5">{x250M}</div>
              <img className="line-4-34" src={line4} />
            </div>
            <img className="star-2-6" src={star2} />
            <div className="text-365">{text365}</div>
            <img className="line-5-99" src={line5} />
            <div className="overlap-group10-42">
              <div className="are-going-42 inter-thin-black-18px">{areGoing}</div>
              <div className="number-256 inter-extra-bold-persian-red-24px">{number1}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group11-22">
          <div className="overlap-group-1139">
            <div className="menu-105 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-248">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20-28">
                <div className="overlap-group1-662">
                  <div className="info-73 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-28">
                <div className="overlap-group3-466">
                  <div className="rectangle-39-37"></div>
                  <div className="review-90 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22-28">
                <div className="overlap-group2-514">
                  <div className="map-39 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group13-4">
            <div className="overlap-group12-8 inter-light-black-24px">
              <div className="onion-soup">{onionSoup}</div>
              <div className="tomato-soup">{tomatoSoup}</div>
              <div className="potato-soup">{potatoSoup}</div>
              <div className="overlap-group6-108">
                <img className="line-12-33" src={line12} />
                <PumpkinSoup3>{pumpkinSoup3Props.children}</PumpkinSoup3>
                <img className="line-15-25" src={line15} />
                <img className="line-16-25" src={line16} />
                <img className="line-17-4" src={line17} />
              </div>
              <div className="overlap-group5-198">
                <img className="line-13-33" src={line13} />
                <img className="line-14-33" src={line14} />
                <Link to="/shopping-cart-home">
                  <div className="group-26-16">
                    <img className="vector-877" src={vector2} />
                  </div>
                </Link>
                <div className="number-257 inter-medium-derby-22px">{number2}</div>
              </div>
            </div>
            <img className="line-9-33" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung9;
