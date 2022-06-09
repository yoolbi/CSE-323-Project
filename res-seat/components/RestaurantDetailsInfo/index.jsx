import React from "react";
import { Link } from "react-router-dom";
import Group26222 from "../Group26222";
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
    text355,
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
    group26222Props,
    pumpkinSoup2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-info screen">
        <div className="overlap-group4-278">
          <img className="image-8-118" src={image8} />
          <img className="search-20" src={search} />
          <img className="rectangle-38-26" src={rectangle38} />
          <div className="are-going-36 inter-thin-black-18px">{areGoing}</div>
          <div className="text-354 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-29 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-142" src={line1} />
          <div className="hanam-bbq-158 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-9 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-33" src={line4} />
          <img className="line-5-98" src={line5} />
          <div className="text-355 inter-thin-black-18px">{text355}</div>
          <div className="number-251 inter-extra-bold-persian-red-24px">{number}</div>
          <img className="icon-star-430" src={iconStar} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-830" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="group-container-246">
          <div className="overlap-group5-192">
            <img className="line-9-32" src={line9} />
            <img className="line-13-32" src={line13} />
            <img className="line-14-32" src={line14} />
            <div className="restaurant-information-3 inter-semi-bold-black-24px">{restaurantInformation}</div>
            <Group26222 src={group26222Props.src} className={group26222Props.className} />
            <div className="rectangle-99-3"></div>
            <div className="rectangle-100"></div>
            <div className="rectangle-101-3"></div>
            <PumpkinSoup2
              spanText1={pumpkinSoup2Props.spanText1}
              spanText2={pumpkinSoup2Props.spanText2}
              spanText3={pumpkinSoup2Props.spanText3}
            />
            <div className="call-032-123-1234-1 inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText4}</span>
              <span className="inter-light-black-20px">{spanText5}</span>
              <span className="span2-16 inter-light-black-20px">{spanText6}</span>
            </div>
            <div className="location-119-songdo inter-light-black-20px">
              <span className="inter-light-black-20px">{spanText7}</span>
              <span className="inter-light-black-20px">{spanText8}</span>
            </div>
          </div>
          <div className="line-container-105">
            <img className="line-19-18" src={line19} />
            <img className="line-12-32" src={line12} />
            <img className="line-18-7" src={line18} />
          </div>
          <Link to="/restaurant-details-menu1">
            <div className="group-19-11">
              <div className="overlap-group-1129">
                <div className="menu-104 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group1-656">
            <div className="info-72 inter-normal-white-24px">{info}</div>
          </div>
          <Link to="/restaurant-details-map">
            <div className="group-22-27">
              <div className="overlap-group2-506">
                <div className="map-36 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <Link to="/restaurant-details-review">
            <div className="group-21-27">
              <div className="overlap-group3-458">
                <div className="rectangle-39-36"></div>
                <div className="review-88 inter-thin-black-24px">{review}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsInfo;
