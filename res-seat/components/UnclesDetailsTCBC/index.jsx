import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./UnclesDetailsTCBC.css";

function UnclesDetailsTCBC(props) {
  const {
    x1,
    rectangle38,
    areGoing,
    spanText1,
    spanText2,
    spanText3,
    seatLeft,
    line1,
    uncles,
    x120M,
    line4,
    line5,
    text75,
    number1,
    iconStar,
    menu,
    info,
    review,
    map,
    tomahawkCutlet,
    bunCha,
    porkBanhMi,
    line12,
    line15,
    line16,
    line13,
    line14,
    line9,
    number2,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="uncle-s-details-tc-bc screen">
        <div className="overlap-group5-119">
          <img className="x1-44" src={x1} />
          <img className="rectangle-38-12" src={rectangle38} />
          <div className="are-going-22 inter-thin-black-18px">{areGoing}</div>
          <div className="text-74 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-14 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-119" src={line1} />
          <div className="uncles-51 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-8 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-19" src={line4} />
          <img className="line-5-75" src={line5} />
          <div className="text-75 inter-thin-black-18px">{text75}</div>
          <div className="number-215 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-401" src={iconStar} />
          <a href="javascript:history.back()">
            <img className="vector-275" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group8-25">
          <div className="overlap-group-738">
            <div className="menu-76 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-122">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-14">
                <div className="overlap-group1-473">
                  <div className="info-55 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-review">
              <div className="group-21-14">
                <div className="overlap-group3-215">
                  <div className="rectangle-39-19"></div>
                  <div className="review-70 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-14">
                <div className="overlap-group2-323">
                  <div className="map-19 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-20">
            <div className="overlap-group9-29">
              <div className="tomahawk-cutlet-1 inter-light-flamingo-28px">{tomahawkCutlet}</div>
              <div className="bun-cha-1 inter-light-flamingo-28px">{bunCha}</div>
              <Link to="/menu-detail3-banhmi-3">
                <div className="pork-banh-mi-1 inter-light-black-28px">{porkBanhMi}</div>
              </Link>
              <div className="line-container-48">
                <img className="line-12-16" src={line12} />
                <img className="line-15-10" src={line15} />
                <img className="line-16-10" src={line16} />
              </div>
              <div className="line-container-49">
                <img className="line-13-16" src={line13} />
                <img className="line-14-16" src={line14} />
              </div>
            </div>
            <img className="line-9-16" src={line9} />
          </div>
        </div>
        <div className="overlap-group6-62">
          <Group2622 src={group2622Props.src} />
          <div className="number-216 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsTCBC;
