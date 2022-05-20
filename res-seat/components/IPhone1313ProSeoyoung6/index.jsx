import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup4 from "../PumpkinSoup4";
import "./IPhone1313ProSeoyoung6.css";

function IPhone1313ProSeoyoung6(props) {
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
    star1,
    text38,
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
        <div className="overlap-group5-32">
          <img className="search-28" src={search} />
          <img className="image-2-21" src={image2} />
          <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
            <img className="vector-188" src="/img/vector-4@2x.png" />
          </Link>
        </div>
        <div className="overlap-group4-41" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="a-soup-shop-51 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText1}</span>
            <span className="inter-extra-bold-black-10px">{spanText2}</span>
          </div>
          <div className="overlap-group9-17">
            <div className="text-37 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-harlequin-40px">{spanText3}</span>
              <span className="inter-extra-bold-apple-40px">{spanText4}</span>
              <span className="inter-extra-bold-black-40px">{spanText5}</span>
            </div>
            <div className="seat-left-16 inter-extra-bold-black-25px-2">{seatLeft}</div>
            <img className="line-1-16" src={line1} />
          </div>
          <div className="flex-row-101 inter-thin-black-18px">
            <div className="overlap-group8-23">
              <div className="x250m-4">{x250M}</div>
              <img className="line-4-8" src={line4} />
            </div>
            <img className="star-1-38" src={star1} />
            <div className="text-38">{text38}</div>
            <img className="line-5-16" src={line5} />
            <div className="overlap-group10-8">
              <div className="are-going-13 inter-thin-black-18px">{areGoing}</div>
              <div className="number-43 inter-extra-bold-persian-red-24px">{number}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-container-14">
          <div className="overlap-group1-52">
            <div className="info-8 inter-normal-white-24px">{info}</div>
          </div>
          <div className="overlap-group12-5">
            <Link to="/restaurant-details-map">
              <div className="group-22-4">
                <div className="overlap-group2-32">
                  <div className="map-10 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-5">
                <div className="overlap-group3-39">
                  <div className="rectangle-39-8"></div>
                  <div className="review-12 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <div className="restaurant-information-1 inter-semi-bold-black-24px">{restaurantInformation}</div>
            <PumpkinSoup4 {...pumpkinSoup4Props} />
            <div className="overlap-group7-31">
              <img className="line-9-6" src={line9} />
              <img className="line-13-6" src={line13} />
              <img className="line-14-6" src={line14} />
              <Link to="/shopping-cart-home">
                <div className="group-27-1">
                  <img className="vector-189" src={vector2} />
                </div>
              </Link>
            </div>
            <div className="line-container-4">
              <img className="line-19-15" src={line19} />
              <img className="line-12-6" src={line12} />
              <img className="line-18-5" src={line18} />
            </div>
            <Link to="/restaurant-details-menu1">
              <div className="group-19-4">
                <div className="overlap-group-110">
                  <div className="menu-18 inter-thin-black-24px">{menu}</div>
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
