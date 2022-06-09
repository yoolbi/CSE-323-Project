import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./UnclesDetailsTCBCBM.css";

function UnclesDetailsTCBCBM(props) {
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
    text77,
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
      <div className="uncle-s-details-tc-bc-bm screen">
        <div className="overlap-group4-174">
          <img className="x1-45" src={x1} />
          <img className="rectangle-38-13" src={rectangle38} />
          <div className="are-going-23 inter-thin-black-18px">{areGoing}</div>
          <div className="text-76 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-15 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-120" src={line1} />
          <div className="uncles-52 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-9 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-20" src={line4} />
          <img className="line-5-76" src={line5} />
          <div className="text-77 inter-thin-black-18px">{text77}</div>
          <div className="number-217 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-402" src={iconStar} />
          <a href="javascript:history.back()">
            <img className="vector-276" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group8-26">
          <div className="overlap-group-739">
            <div className="menu-77 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-123">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-15">
                <div className="overlap-group1-474">
                  <div className="info-56 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-review">
              <div className="group-21-15">
                <div className="overlap-group3-216">
                  <div className="rectangle-39-20"></div>
                  <div className="review-71 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-15">
                <div className="overlap-group2-324">
                  <div className="map-20 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-21">
            <div className="overlap-group9-30 inter-light-flamingo-28px">
              <div className="tomahawk-cutlet-2">{tomahawkCutlet}</div>
              <div className="bun-cha-2">{bunCha}</div>
              <div className="pork-banh-mi-2">{porkBanhMi}</div>
              <div className="line-container-50">
                <img className="line-12-17" src={line12} />
                <img className="line-15-11" src={line15} />
                <img className="line-16-11" src={line16} />
              </div>
              <div className="line-container-51">
                <img className="line-13-17" src={line13} />
                <img className="line-14-17" src={line14} />
              </div>
            </div>
            <img className="line-9-17" src={line9} />
          </div>
        </div>
        <div className="overlap-group5-120">
          <Group2622 src={group2622Props.src} />
          <div className="number-218 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsTCBCBM;
