import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup4 from "../PumpkinSoup4";
import "./IPhone1313ProSeoyoung6.css";

function IPhone1313ProSeoyoung6(props) {
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
    star1,
    text369,
    line5,
    areGoing,
    number,
    info,
    map,
    review,
    restaurantInformation,
    line9,
    line13,
    line14,
    vector2,
    line19,
    line12,
    line18,
    menu,
    pumpkinSoup4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-6 screen">
        <div className="overlap-group7-81">
          <img className="search-26" src={search} />
          <img className="image-2-54" src={image2} />
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-880" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group6-110" style={{ backgroundImage: `url(${overlapGroup6})` }}>
          <div className="a-soup-shop-115 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group8-57">
            <div className="text-368 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-38 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-146" src={line1} />
          </div>
          <div className="flex-row-614 inter-thin-black-18px">
            <div className="overlap-group10-43">
              <div className="x250m-7">{x250M}</div>
              <img className="line-4-36" src={line4} />
            </div>
            <img className="star-1-17" src={star1} />
            <div className="text-369">{text369}</div>
            <img className="line-5-102" src={line5} />
            <div className="overlap-group9-61">
              <div className="are-going-44 inter-thin-black-18px">{areGoing}</div>
              <div className="number-259 inter-extra-bold-persian-red-24px">{number}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-container-75">
          <div className="overlap-group1-664">
            <div className="info-75 inter-normal-white-24px">{info}</div>
          </div>
          <div className="overlap-group12-9">
            <Link to="/restaurant-details-map">
              <div className="group-22-29">
                <div className="overlap-group2-516">
                  <div className="map-41 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-30">
                <div className="overlap-group3-468">
                  <div className="rectangle-39-39"></div>
                  <div className="review-92 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <div className="restaurant-information-4 inter-semi-bold-black-24px">{restaurantInformation}</div>
            <PumpkinSoup4 {...pumpkinSoup4Props} />
            <div className="overlap-group5-200">
              <img className="line-9-34" src={line9} />
              <img className="line-13-34" src={line13} />
              <img className="line-14-34" src={line14} />
              <Link to="/shopping-cart-home">
                <div className="group-27-2">
                  <img className="vector-881" src={vector2} />
                </div>
              </Link>
            </div>
            <div className="line-container-106">
              <img className="line-19-24" src={line19} />
              <img className="line-12-34" src={line12} />
              <img className="line-18-11" src={line18} />
            </div>
            <Link to="/restaurant-details-menu1">
              <div className="group-19-13">
                <div className="overlap-group-1143">
                  <div className="menu-108 inter-thin-black-24px">{menu}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung6;
