import React from "react";
import { Link } from "react-router-dom";
import "./HanamDetailsPL.css";

function HanamDetailsPL(props) {
  const {
    image7,
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
    text137,
    number1,
    iconStar,
    menu,
    info,
    review,
    map,
    porkBelly,
    porkNeck,
    porkLib,
    line12,
    line15,
    line16,
    line13,
    line14,
    line9,
    iconCart,
    number2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hanam-details-pl screen">
        <div className="overlap-group6-66">
          <img className="image-7-2" src={image7} />
          <img className="rectangle-38-17" src={rectangle38} />
          <div className="are-going-27 inter-thin-black-18px">{areGoing}</div>
          <div className="text-136 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-19 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-126" src={line1} />
          <div className="hanam-bbq-99 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-5 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-24" src={line4} />
          <img className="line-5-82" src={line5} />
          <div className="text-137 inter-thin-black-18px">{text137}</div>
          <div className="number-225 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-406" src={iconStar} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-311" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group8-30">
          <div className="overlap-group-810">
            <div className="menu-83 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-130">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20-18">
                <div className="overlap-group1-506">
                  <div className="info-60 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-18">
                <div className="overlap-group3-251">
                  <div className="rectangle-39-24"></div>
                  <div className="review-75 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22-18">
                <div className="overlap-group2-376">
                  <div className="map-24 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-25">
            <div className="overlap-group9-34">
              <Link to="/menu-detail1porkbelly4">
                <div className="pork-belly-183 inter-light-black-28px">{porkBelly}</div>
              </Link>
              <Link to="/menu-detail2collarbutt6">
                <div className="pork-neck-5 inter-light-black-28px">{porkNeck}</div>
              </Link>
              <div className="pork-lib-3 inter-light-flamingo-28px">{porkLib}</div>
              <div className="line-container-58">
                <img className="line-12-21" src={line12} />
                <img className="line-15-15" src={line15} />
                <img className="line-16-15" src={line16} />
              </div>
              <div className="line-container-59">
                <img className="line-13-21" src={line13} />
                <img className="line-14-21" src={line14} />
              </div>
            </div>
            <img className="line-9-21" src={line9} />
          </div>
        </div>
        <div className="group-231">
          <div className="overlap-group4-191">
            <div className="group-26-4">
              <img className="icon-cart-15" src={iconCart} />
            </div>
            <div className="number-226 inter-medium-derby-22px">{number2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsPL;
