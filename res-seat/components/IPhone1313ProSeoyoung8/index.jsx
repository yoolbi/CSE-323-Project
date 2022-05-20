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
    text36,
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
        <div className="overlap-group6-29">
          <img className="image-2-20" src={image2} />
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-186" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group4-40" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="a-soup-shop-50 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group8-22">
            <div className="text-35 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-15 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-15" src={line1} />
          </div>
          <div className="flex-row-99 inter-thin-black-18px">
            <div className="overlap-group7-30">
              <div className="x250m-3">{x250M}</div>
              <img className="line-4-7" src={line4} />
            </div>
            <img className="star-1-37" src={star1} />
            <div className="text-36">{text36}</div>
            <img className="line-5-15" src={line5} />
            <div className="overlap-group9-16">
              <div className="are-going-12 inter-thin-black-18px">{areGoing}</div>
              <div className="number-42 inter-extra-bold-persian-red-24px">{number}</div>
            </div>
          </div>
        </div>
        <div className="flex-row-100">
          <Link to="/restaurant-details-menu1">
            <div className="group-19-3">
              <div className="overlap-group-109">
                <div className="menu-17 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-info">
            <div className="group-20-4">
              <div className="overlap-group1-51">
                <div className="info-7 inter-thin-black-24px">{info}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-review">
            <div className="group-21-4">
              <div className="overlap-group3-38">
                <div className="rectangle-39-7"></div>
                <div className="review-11 inter-thin-black-24px">{review}</div>
              </div>
            </div>
          </Link>
          <img className="line-19-14" src={line19} />
          <div className="overlap-group2-31">
            <div className="map-9 inter-normal-white-24px">{map}</div>
          </div>
        </div>
        <div className="overlap-group5-31">
          <img className="x2022-04-18-956-1" src={x202204189561} />
          <div className="ellipse-1-17 border-1px-black"></div>
          <Link to="/shopping-cart-home">
            <div className="group-26-9">
              <img className="vector-187" src={vector2} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProSeoyoung8;
