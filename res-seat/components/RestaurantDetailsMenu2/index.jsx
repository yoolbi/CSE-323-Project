import React from "react";
import { Link } from "react-router-dom";
import PumpkinSoup from "../PumpkinSoup";
import Group2622 from "../Group2622";
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
    text342,
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
      <div className="restaurant-details-menu2 screen">
        <div className="overlap-group6-92">
          <img className="image-11-4" src={image11} />
          <img className="search-11" src={search} />
          <img className="rectangle-38-22" src={rectangle38} />
          <div className="are-going-32 inter-thin-black-18px">{areGoing}</div>
          <div className="text-341 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-25 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-131" src={line1} />
          <div className="a-soup-shop-98 inter-extra-bold-black-25px">
            <span className="inter-extra-bold-black-25px">{spanText4}</span>
            <span className="inter-extra-bold-black-10px">{spanText5}</span>
          </div>
          <div className="x250m-4 inter-thin-black-18px">{x250M}</div>
          <img className="line-4-29" src={line4} />
          <img className="line-5-87" src={line5} />
          <div className="text-342 inter-thin-black-18px">{text342}</div>
          <div className="number-241 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="star-2-3" src={star2} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-773" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group7-62">
          <div className="overlap-group-1105">
            <div className="menu-92 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="overlap-group-container-72">
            <div className="overlap-group1-645">
              <div className="info-68 inter-thin-black-24px">{info}</div>
            </div>
            <div className="overlap-group3-447">
              <div className="rectangle-39-32"></div>
              <div className="review-83 inter-thin-black-24px">{review}</div>
            </div>
            <div className="overlap-group2-493">
              <div className="map-32 inter-thin-black-24px">{map}</div>
            </div>
          </div>
          <div className="overlap-group9-53">
            <div className="overlap-group8-44">
              <div className="pork-belly-188 inter-light-flamingo-24px">{porkBelly}</div>
              <Link to="/menu-detail2-porkneck">
                <div className="pork-neck-7 inter-light-black-24px">{porkNeck}</div>
              </Link>
              <div className="pork-cheek-1 inter-light-black-24px">{porkCheek}</div>
              <div className="overlap-group5-181">
                <img className="line-12-29" src={line12} />
                <PumpkinSoup className={pumpkinSoupProps.className}>{pumpkinSoupProps.children}</PumpkinSoup>
                <img className="line-15-23" src={line15} />
                <img className="line-16-23" src={line16} />
                <img className="line-17-2" src={line17} />
              </div>
              <div className="overlap-group4-264">
                <img className="line-13-29" src={line13} />
                <img className="line-14-29" src={line14} />
                <Group2622 src={group2622Props.src} className={group2622Props.className} />
                <div className="number-242 inter-medium-derby-22px">{number2}</div>
              </div>
            </div>
            <img className="line-9-29" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsMenu2;
