import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./UnclesDetailsTCBM.css";

function UnclesDetailsTCBM(props) {
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
    text79,
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
      <div className="uncle-s-details-tc-bm screen">
        <div className="overlap-group4-175">
          <img className="x1-46" src={x1} />
          <img className="rectangle-38-14" src={rectangle38} />
          <div className="are-going-24 inter-thin-black-18px">{areGoing}</div>
          <div className="text-78 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-16 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-121" src={line1} />
          <div className="uncles-53 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-10 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-21" src={line4} />
          <img className="line-5-77" src={line5} />
          <div className="text-79 inter-thin-black-18px">{text79}</div>
          <div className="number-219 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-403" src={iconStar} />
          <a href="javascript:history.back()">
            <img className="vector-277" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group8-27">
          <div className="overlap-group-740">
            <div className="menu-78 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-124">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-16">
                <div className="overlap-group1-475">
                  <div className="info-57 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-review">
              <div className="group-21-16">
                <div className="overlap-group3-217">
                  <div className="rectangle-39-21"></div>
                  <div className="review-72 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-16">
                <div className="overlap-group2-325">
                  <div className="map-21 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-22">
            <div className="overlap-group9-31">
              <div className="tomahawk-cutlet-3 inter-light-flamingo-28px">{tomahawkCutlet}</div>
              <Link to="/menu-detail2-buncha-3">
                <div className="bun-cha-3 inter-light-black-28px">{bunCha}</div>
              </Link>
              <div className="pork-banh-mi-3 inter-light-flamingo-28px">{porkBanhMi}</div>
              <div className="line-container-52">
                <img className="line-12-18" src={line12} />
                <img className="line-15-12" src={line15} />
                <img className="line-16-12" src={line16} />
              </div>
              <div className="line-container-53">
                <img className="line-13-18" src={line13} />
                <img className="line-14-18" src={line14} />
              </div>
            </div>
            <img className="line-9-18" src={line9} />
          </div>
        </div>
        <div className="overlap-group7-37">
          <Group2622 src={group2622Props.src} />
          <div className="number-220 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsTCBM;
