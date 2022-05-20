import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup from "../PumpkinSoup";
import Group2622 from "../Group2622";
import "./RestaurantDetailsMenu1.css";

function RestaurantDetailsMenu1(props) {
  const {
    image7,
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
    text11,
    number,
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
    line9,
    pumpkinSoupProps,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-menu1 screen">
        <div className="overlap-group4-9">
          <img className="image-7" src={image7} />
          <img className="search-6" src={search} />
          <img className="rectangle-38-2" src={rectangle38} />
          <div className="are-going-2 inter-thin-black-18px">{areGoing}</div>
          <div className="text-10 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-3 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-2" src={line1} />
          <div className="hanam-bbq-5 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m inter-thin-black-18px">{x180M}</div>
          <img className="line-4-2" src={line4} />
          <img className="line-5-2" src={line5} />
          <div className="text-11 inter-thin-black-18px">{text11}</div>
          <div className="number-7 inter-extra-bold-persian-red-24px">{number}</div>
          <img className="icon-star-5" src={iconStar} />
          <Link to="/select-restaurant-1">
            <img className="vector-26" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group7-4">
          <div className="overlap-group-23">
            <div className="menu-4 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20">
                <div className="overlap-group1-19">
                  <div className="info-2 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21">
                <div className="overlap-group3-14">
                  <div className="rectangle-39-2"></div>
                  <div className="review-2 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22">
                <div className="overlap-group2-8">
                  <div className="map-2 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group9-4">
            <div className="overlap-group8-3 inter-light-black-24px">
              <Link to="/menu-detail1-porkbelly">
                <div className="pork-belly-5 inter-light-black-24px">{porkBelly}</div>
              </Link>
              <div className="pork-neck-2">{porkNeck}</div>
              <div className="pork-cheek-2">{porkCheek}</div>
              <div className="overlap-group5-7">
                <img className="line-12-2" src={line12} />
                <PumpkinSoup className={pumpkinSoupProps.className}>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15-2" src={line15} />
                <img className="line-16-2" src={line16} />
                <img className="line-17-2" src={line17} />
              </div>
              <div className="overlap-group6-5">
                <img className="line-13-2" src={line13} />
                <img className="line-14-2" src={line14} />
                <Group2622 src={group2622Props.src} />
              </div>
            </div>
            <img className="line-9-2" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsMenu1;
