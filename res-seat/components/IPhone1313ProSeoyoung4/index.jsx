import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup from "../PumpkinSoup";
import "./IPhone1313ProSeoyoung4.css";

function IPhone1313ProSeoyoung4(props) {
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
    text44,
    line5,
    areGoing,
    number,
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
    line9,
    pumpkinSoupProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-4 screen">
        <div className="overlap-group6-33">
          <img className="search-30" src={search} />
          <img className="image-2-24" src={image2} />
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-195" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group4-44" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="a-soup-shop-54 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group8-26">
            <div className="text-43 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-18 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-18" src={line1} />
          </div>
          <div className="flex-row-109 inter-thin-black-18px">
            <div className="overlap-group9-19">
              <div className="x250m-6">{x250M}</div>
              <img className="line-4-10" src={line4} />
            </div>
            <img className="star-2-10" src={star2} />
            <div className="text-44">{text44}</div>
            <img className="line-5-18" src={line5} />
            <div className="overlap-group10-9">
              <div className="are-going-15 inter-thin-black-18px">{areGoing}</div>
              <div className="number-47 inter-extra-bold-persian-red-24px">{number}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group11-5">
          <div className="overlap-group-114">
            <div className="menu-20 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-11">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20-6">
                <div className="overlap-group1-54">
                  <div className="info-10 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-6">
                <div className="overlap-group3-42">
                  <div className="rectangle-39-10"></div>
                  <div className="review-14 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22-6">
                <div className="overlap-group2-35">
                  <div className="map-12 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group13-7">
            <div className="overlap-group12-7 inter-light-black-24px">
              <div className="onion-soup-1">{onionSoup}</div>
              <div className="tomato-soup-1">{tomatoSoup}</div>
              <div className="potato-soup-1">{potatoSoup}</div>
              <div className="overlap-group7-35">
                <img className="line-12-8" src={line12} />
                <PumpkinSoup>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15-4" src={line15} />
                <img className="line-16-4" src={line16} />
                <img className="line-17-4" src={line17} />
              </div>
              <div className="overlap-group5-35">
                <img className="line-13-8" src={line13} />
                <img className="line-14-8" src={line14} />
                <Link to="/shopping-cart-home">
                  <div className="group-26-12">
                    <img className="vector-196" src={vector2} />
                  </div>
                </Link>
              </div>
            </div>
            <img className="line-9-8" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung4;
