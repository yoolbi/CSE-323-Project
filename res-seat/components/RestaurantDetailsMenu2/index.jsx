import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup from "../PumpkinSoup";
import "./RestaurantDetailsMenu2.css";

function RestaurantDetailsMenu2(props) {
  const {
    image11,
    search,
    rectangle38,
    areGoing,
    spanText1,
    spanText2,
    spanText3,
    seatLeft,
    line1,
    spanText4,
    spanText5,
    x250M,
    line4,
    line5,
    text9,
    number1,
    iconStar,
    menu,
    info,
    review,
    map,
    porkBelly,
    porkNeck,
    porkCheek,
    line12,
    line15,
    line16,
    line17,
    line13,
    line14,
    iconCart,
    number2,
    line9,
    pumpkinSoupProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-menu2 screen">
        <div className="overlap-group5-6">
          <img className="image-11-1" src={image11} />
          <img className="search-5" src={search} />
          <img className="rectangle-38-1" src={rectangle38} />
          <div className="are-going-1 inter-thin-black-18px">{areGoing}</div>
          <div className="text-8 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-2 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-1" src={line1} />
          <div className="a-soup-shop-9 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText4}</span>
            <span className="inter-extra-bold-black-10px">{spanText5}</span>
          </div>
          <div className="x250m-1 inter-thin-black-18px">{x250M}</div>
          <img className="line-4-1" src={line4} />
          <img className="line-5-1" src={line5} />
          <div className="text-9 inter-thin-black-18px">{text9}</div>
          <div className="number-5 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-4" src={iconStar} />
          <Link to="/select-restaurant-1">
            <img className="vector-25" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group7-3">
          <div className="overlap-group-22">
            <div className="menu-2 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="overlap-group-container-3">
            <div className="overlap-group1-18">
              <div className="info-1 inter-thin-black-24px">{info}</div>
            </div>
            <div className="overlap-group3-13">
              <div className="rectangle-39-1"></div>
              <div className="review-1 inter-thin-black-24px">{review}</div>
            </div>
            <div className="overlap-group2-7">
              <div className="map-1 inter-thin-black-24px">{map}</div>
            </div>
          </div>
          <div className="overlap-group9-3">
            <div className="overlap-group8-2">
              <div className="pork-belly-4 inter-light-flamingo-24px">{porkBelly}</div>
              <Link to="/menu-detail2-porkneck">
                <div className="pork-neck-1 inter-light-black-24px">{porkNeck}</div>
              </Link>
              <div className="pork-cheek-1 inter-light-black-24px">{porkCheek}</div>
              <div className="overlap-group4-8">
                <img className="line-12-1" src={line12} />
                <PumpkinSoup className={pumpkinSoupProps.className}>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15-1" src={line15} />
                <img className="line-16-1" src={line16} />
                <img className="line-17-1" src={line17} />
              </div>
              <div className="overlap-group6-4">
                <img className="line-13-1" src={line13} />
                <img className="line-14-1" src={line14} />
                <div className="group-26-2">
                  <img className="icon-cart" src={iconCart} />
                </div>
                <div className="number-6 inter-medium-derby-22px">{number2}</div>
              </div>
            </div>
            <img className="line-9-1" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsMenu2;
