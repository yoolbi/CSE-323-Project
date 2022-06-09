import React from "react";
import { Link } from "react-router-dom";
import "./UnclesDetailsBM.css";

function UnclesDetailsBM(props) {
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
    text197,
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
    iconCart,
    number2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="uncle-s-details-bm screen">
        <div className="overlap-group4-195">
          <img className="x1-55" src={x1} />
          <img className="rectangle-38-20" src={rectangle38} />
          <div className="are-going-30 inter-thin-black-18px">{areGoing}</div>
          <div className="text-196 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-22 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-129" src={line1} />
          <div className="uncles-77 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-14 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-27" src={line4} />
          <img className="line-5-85" src={line5} />
          <div className="text-197 inter-thin-black-18px">{text197}</div>
          <div className="number-234 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-409" src={iconStar} />
          <a href="javascript:history.back()">
            <img className="vector-341" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group8-34">
          <div className="overlap-group-840">
            <div className="menu-89 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-137">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-24">
                <div className="overlap-group1-513">
                  <div className="info-66 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-review">
              <div className="group-21-24">
                <div className="overlap-group3-283">
                  <div className="rectangle-39-30"></div>
                  <div className="review-81 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-24">
                <div className="overlap-group2-383">
                  <div className="map-30 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-31">
            <div className="overlap-group9-40">
              <Link to="/menu-detail1tomahawk2">
                <div className="tomahawk-cutlet-7 inter-light-black-28px">{tomahawkCutlet}</div>
              </Link>
              <Link to="/menu-detail2buncha2">
                <div className="bun-cha-7 inter-light-black-28px">{bunCha}</div>
              </Link>
              <div className="pork-banh-mi-7 inter-light-flamingo-28px">{porkBanhMi}</div>
              <div className="line-container-70">
                <img className="line-12-27" src={line12} />
                <img className="line-15-21" src={line15} />
                <img className="line-16-21" src={line16} />
              </div>
              <div className="line-container-71">
                <img className="line-13-27" src={line13} />
                <img className="line-14-27" src={line14} />
              </div>
            </div>
            <img className="line-9-27" src={line9} />
          </div>
        </div>
        <div className="overlap-group6-69">
          <div className="group-26-7">
            <img className="icon-cart-18" src={iconCart} />
          </div>
          <div className="number-235 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsBM;
