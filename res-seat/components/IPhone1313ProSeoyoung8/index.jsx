import React from "react";
import { Link } from "react-router-dom";
import "./IPhone1313ProSeoyoung8.css";

function IPhone1313ProSeoyoung8(props) {
  const {
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
    star1,
    text367,
    line5,
    areGoing,
    number,
    menu,
    info,
    review,
    line19,
    map,
    x202204189561,
    vector2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-seoyoung-8 screen">
        <div className="overlap-group5-199">
          <img className="image-2-53" src={image2} />
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-878" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group4-289" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="a-soup-shop-114 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group9-60">
            <div className="text-366 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-37 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-145" src={line1} />
          </div>
          <div className="flex-row-612 inter-thin-black-18px">
            <div className="overlap-group8-56">
              <div className="x250m-6">{x250M}</div>
              <img className="line-4-35" src={line4} />
            </div>
            <img className="star-1-16" src={star1} />
            <div className="text-367">{text367}</div>
            <img className="line-5-101" src={line5} />
            <div className="overlap-group7-80">
              <div className="are-going-43 inter-thin-black-18px">{areGoing}</div>
              <div className="number-258 inter-extra-bold-persian-red-24px">{number}</div>
            </div>
          </div>
        </div>
        <div className="flex-row-613">
          <Link to="/restaurant-details-menu1">
            <div className="group-19-12">
              <div className="overlap-group-1142">
                <div className="menu-107 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-info">
            <div className="group-20-29">
              <div className="overlap-group1-663">
                <div className="info-74 inter-thin-black-24px">{info}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-review">
            <div className="group-21-29">
              <div className="overlap-group3-467">
                <div className="rectangle-39-38"></div>
                <div className="review-91 inter-thin-black-24px">{review}</div>
              </div>
            </div>
          </Link>
          <img className="line-19-23" src={line19} />
          <div className="overlap-group2-515">
            <div className="map-40 inter-normal-white-24px">{map}</div>
          </div>
        </div>
        <div className="overlap-group6-109">
          <img className="x2022-04-18-956-1" src={x202204189561} />
          <div className="ellipse-1-62 border-1px-black"></div>
          <Link to="/shopping-cart-home">
            <div className="group-26-17">
              <img className="vector-879" src={vector2} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung8;
