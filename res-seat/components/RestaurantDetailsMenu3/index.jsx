import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup from "../PumpkinSoup";
import Group2622 from "../Group2622";
import "./RestaurantDetailsMenu3.css";

function RestaurantDetailsMenu3(props) {
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
    text336,
    number1,
    star2,
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
    number2,
    line9,
    pumpkinSoupProps,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="restaurant-details-menu3 screen">
        <div className="overlap-group4-261">
          <img className="image-11-3" src={image11} />
          <img className="search-9" src={search} />
          <img className="rectangle-38-21" src={rectangle38} />
          <div className="are-going-31 inter-thin-black-18px">{areGoing}</div>
          <div className="text-335 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-23 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-130" src={line1} />
          <div className="a-soup-shop-97 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText4}</span>
            <span className="inter-extra-bold-black-10px">{spanText5}</span>
          </div>
          <div className="x250m-3 inter-thin-black-18px">{x250M}</div>
          <img className="line-4-28" src={line4} />
          <img className="line-5-86" src={line5} />
          <div className="text-336 inter-thin-black-18px">{text336}</div>
          <div className="number-237 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="star-2" src={star2} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-765" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group7-60">
          <div className="overlap-group-1102">
            <div className="menu-91 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="overlap-group-container-70">
            <div className="overlap-group1-643">
              <div className="info-67 inter-thin-black-24px">{info}</div>
            </div>
            <div className="overlap-group3-441">
              <div className="rectangle-39-31"></div>
              <div className="review-82 inter-thin-black-24px">{review}</div>
            </div>
            <div className="overlap-group2-489">
              <div className="map-31 inter-thin-black-24px">{map}</div>
            </div>
          </div>
          <div className="overlap-group9-51">
            <div className="overlap-group8-43">
              <div className="pork-belly-184 inter-light-flamingo-24px">{porkBelly}</div>
              <div className="pork-neck-6 inter-light-flamingo-24px">{porkNeck}</div>
              <div className="pork-cheek inter-light-black-24px">{porkCheek}</div>
              <div className="overlap-group6-90">
                <img className="line-12-28" src={line12} />
                <PumpkinSoup>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15-22" src={line15} />
                <img className="line-16-22" src={line16} />
                <img className="line-17-1" src={line17} />
              </div>
              <div className="overlap-group5-178">
                <img className="line-13-28" src={line13} />
                <img className="line-14-28" src={line14} />
                <Group2622 src={group2622Props.src} className={group2622Props.className} />
                <div className="number-238 inter-medium-derby-22px">{number2}</div>
              </div>
            </div>
            <img className="line-9-28" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsMenu3;
