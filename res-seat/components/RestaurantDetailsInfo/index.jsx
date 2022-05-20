import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import PumpkinSoup2 from "../PumpkinSoup2";
import "./RestaurantDetailsInfo.css";

function RestaurantDetailsInfo(props) {
  const {
    image8,
    search,
    rectangle38,
    areGoing,
    spanText1,
    spanText2,
    spanText3,
    seatLeft,
    line1,
    hanamBbq,
    x180M,
    line4,
    line5,
    text24,
    number,
    iconStar,
    line9,
    line13,
    line14,
    restaurantInformation,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    line19,
    line12,
    line18,
    menu,
    info,
    map,
    review,
    group2622Props,
    pumpkinSoup2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-info screen">
        <div className="overlap-group4-30">
          <img className="image-8-15" src={image8} />
          <img className="search-21" src={search} />
          <img className="rectangle-38-5" src={rectangle38} />
          <div className="are-going-5 inter-thin-black-18px">{areGoing}</div>
          <div className="text-23 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-7 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-12" src={line1} />
          <div className="hanam-bbq-17 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-3 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-5" src={line4} />
          <img className="line-5-12" src={line5} />
          <div className="text-24 inter-thin-black-18px">{text24}</div>
          <div className="number-35 inter-extra-bold-persian-red-24px">{number}</div>
          <img className="icon-star-22" src={iconStar} />
          <Link to="/select-restaurant-1">
            <img className="vector-130" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="group-container-8">
          <div className="overlap-group5-23">
            <img className="line-9-4" src={line9} />
            <img className="line-13-4" src={line13} />
            <img className="line-14-4" src={line14} />
            <div className="restaurant-information inter-semi-bold-black-24px">{restaurantInformation}</div>
            <Group2622 src={group2622Props.src} className={group2622Props.className} />
            <div className="rectangle-99"></div>
            <div className="rectangle-100"></div>
            <div className="rectangle-101"></div>
            <PumpkinSoup2
              spanText1={pumpkinSoup2Props.spanText1}
              spanText2={pumpkinSoup2Props.spanText2}
              spanText3={pumpkinSoup2Props.spanText3}
            />
            <div className="call-032-123-1234 inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText4}</span>
              <span className="inter-light-black-20px">{spanText5}</span>
              <span className="span2-6 inter-light-black-20px">{spanText6}</span>
            </div>
            <div className="location-119-songdo inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText7}</span>
              <span className="inter-light-black-20px">{spanText8}</span>
            </div>
          </div>
          <div className="line-container-3">
            <img className="line-19-9" src={line19} />
            <img className="line-12-4" src={line12} />
            <img className="line-18-1" src={line18} />
          </div>
          <Link to="/restaurant-details-menu1">
            <div className="group-19-2">
              <div className="overlap-group-96">
                <div className="menu-14 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group1-43">
            <div className="info-5 inter-normal-white-24px">{info}</div>
          </div>
          <Link to="/restaurant-details-map">
            <div className="group-22-2">
              <div className="overlap-group2-22">
                <div className="map-5 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-review">
            <div className="group-21-2">
              <div className="overlap-group3-28">
                <div className="rectangle-39-5"></div>
                <div className="review-8 inter-thin-black-24px">{review}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsInfo;
