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
    text375,
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
        <div className="overlap-group6-114">
          <img className="search-28" src={search} />
          <img className="image-2-57" src={image2} />
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-887" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group4-292" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="a-soup-shop-118 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group9-63">
            <div className="text-374 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-40 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-148" src={line1} />
          </div>
          <div className="flex-row-622 inter-thin-black-18px">
            <div className="overlap-group8-60">
              <div className="x250m-9">{x250M}</div>
              <img className="line-4-38" src={line4} />
            </div>
            <img className="star-2-8" src={star2} />
            <div className="text-375">{text375}</div>
            <img className="line-5-104" src={line5} />
            <div className="overlap-group10-45">
              <div className="are-going-46 inter-thin-black-18px">{areGoing}</div>
              <div className="number-263 inter-extra-bold-persian-red-24px">{number}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group11-24">
          <div className="overlap-group-1147">
            <div className="menu-110 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-249">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20-31">
                <div className="overlap-group1-666">
                  <div className="info-77 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-31">
                <div className="overlap-group3-471">
                  <div className="rectangle-39-41"></div>
                  <div className="review-94 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22-31">
                <div className="overlap-group2-519">
                  <div className="map-43 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group13-6">
            <div className="overlap-group12-11 inter-light-black-24px">
              <div className="onion-soup-1">{onionSoup}</div>
              <div className="tomato-soup-1">{tomatoSoup}</div>
              <div className="potato-soup-1">{potatoSoup}</div>
              <div className="overlap-group5-203">
                <img className="line-12-36" src={line12} />
                <PumpkinSoup>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15-26" src={line15} />
                <img className="line-16-26" src={line16} />
                <img className="line-17-5" src={line17} />
              </div>
              <div className="overlap-group7-84">
                <img className="line-13-36" src={line13} />
                <img className="line-14-36" src={line14} />
                <Link to="/shopping-cart-home">
                  <div className="group-26-20">
                    <img className="vector-888" src={vector2} />
                  </div>
                </Link>
              </div>
            </div>
            <img className="line-9-36" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung4;
