import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./UnclesDetailsBCBM.css";

function UnclesDetailsBCBM(props) {
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
    text91,
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
      <div className="uncle-s-details-bc-bm screen">
        <div className="overlap-group5-121">
          <img className="x1-47" src={x1} />
          <img className="rectangle-38-15" src={rectangle38} />
          <div className="are-going-25 inter-thin-black-18px">{areGoing}</div>
          <div className="text-90 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-17 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-122" src={line1} />
          <div className="uncles-56 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-11 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-22" src={line4} />
          <img className="line-5-78" src={line5} />
          <div className="text-91 inter-thin-black-18px">{text91}</div>
          <div className="number-221 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-404" src={iconStar} />
          <a href="javascript:history.back()">
            <img className="vector-283" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group8-28">
          <div className="overlap-group-770">
            <div className="menu-79 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-125">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-17">
                <div className="overlap-group1-476">
                  <div className="info-58 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-review">
              <div className="group-21-17">
                <div className="overlap-group3-223">
                  <div className="rectangle-39-22"></div>
                  <div className="review-73 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-17">
                <div className="overlap-group2-360">
                  <div className="map-22 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-23">
            <div className="overlap-group9-32">
              <Link to="/menu-detail1-tomahawk-3">
                <div className="tomahawk-cutlet-4 inter-light-black-28px">{tomahawkCutlet}</div>
              </Link>
              <div className="bun-cha-4 inter-light-flamingo-28px">{bunCha}</div>
              <div className="pork-banh-mi-4 inter-light-flamingo-28px">{porkBanhMi}</div>
              <div className="line-container-54">
                <img className="line-12-19" src={line12} />
                <img className="line-15-13" src={line15} />
                <img className="line-16-13" src={line16} />
              </div>
              <div className="line-container-55">
                <img className="line-13-19" src={line13} />
                <img className="line-14-19" src={line14} />
              </div>
            </div>
            <img className="line-9-19" src={line9} />
          </div>
        </div>
        <div className="overlap-group7-38">
          <Group2622 src={group2622Props.src} />
          <div className="number-222 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsBCBM;
