import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup from "../PumpkinSoup";
import Group26222 from "../Group26222";
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
    text344,
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
    group26222Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-menu1 screen">
        <div className="overlap-group4-265">
          <img className="image-7-3" src={image7} />
          <img className="search-12" src={search} />
          <img className="rectangle-38-23" src={rectangle38} />
          <div className="are-going-33 inter-thin-black-18px">{areGoing}</div>
          <div className="text-343 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-26 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-132" src={line1} />
          <div className="hanam-bbq-150 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-6 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-30" src={line4} />
          <img className="line-5-88" src={line5} />
          <div className="text-344 inter-thin-black-18px">{text344}</div>
          <div className="number-243 inter-extra-bold-persian-red-24px">{number}</div>
          <img className="icon-star-414" src={iconStar} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-774" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group7-63">
          <div className="overlap-group-1106">
            <div className="menu-94 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-240">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20-25">
                <div className="overlap-group1-646">
                  <div className="info-69 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-25">
                <div className="overlap-group3-448">
                  <div className="rectangle-39-33"></div>
                  <div className="review-84 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22-25">
                <div className="overlap-group2-494">
                  <div className="map-33 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group9-54">
            <div className="overlap-group8-45 inter-light-black-24px">
              <Link to="/menu-detail1porkbelly2">
                <div className="pork-belly-189 inter-light-black-24px">{porkBelly}</div>
              </Link>
              <div className="pork-neck-8">{porkNeck}</div>
              <div className="pork-cheek-2">{porkCheek}</div>
              <div className="overlap-group5-182">
                <img className="line-12-30" src={line12} />
                <PumpkinSoup className={pumpkinSoupProps.className}>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15-24" src={line15} />
                <img className="line-16-24" src={line16} />
                <img className="line-17-3" src={line17} />
              </div>
              <div className="overlap-group6-93">
                <img className="line-13-30" src={line13} />
                <img className="line-14-30" src={line14} />
                <Group26222 src={group26222Props.src} />
              </div>
            </div>
            <img className="line-9-30" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsMenu1;
