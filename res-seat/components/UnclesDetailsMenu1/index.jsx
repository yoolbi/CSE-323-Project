import React from "react";
import { Link } from "react-router-dom";
import "./UnclesDetailsMenu1.css";

function UnclesDetailsMenu1(props) {
  const {
    group431,
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
    text31,
    number,
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
    kakaotalk_Photo_202205302108421,
    line9,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="uncle-s-details-menu1 screen">
        <div className="overlap-group5-59">
          <div className="group-431" style={{ backgroundImage: `url(${group431})` }}>
            <Link to="/select-restaurant-uncle-s">
              <img className="vector-223" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <img className="rectangle-38-8" src={rectangle38} />
          <div className="are-going-11 inter-thin-black-18px">{areGoing}</div>
          <div className="text-30 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-10 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-51" src={line1} />
          <div className="uncles-32 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-7 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-8" src={line4} />
          <img className="line-5-8" src={line5} />
          <div className="text-31 inter-thin-black-18px">{text31}</div>
          <div className="number-126 inter-extra-bold-persian-red-24px">{number}</div>
          <img className="icon-star-202" src={iconStar} />
        </div>
        <div className="overlap-group7-25">
          <div className="overlap-group-376">
            <div className="menu-11 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-61">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-8">
                <div className="overlap-group1-219">
                  <div className="info-47 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>

            <Link to="/uncle-s-details-review">
              <div className="group-21-8">
                <div className="overlap-group3-119">
                  <div className="rectangle-39-11"></div>
                  <div className="review-34 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-8">
                <div className="overlap-group2-145">
                  <div className="map-11 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group9-19">
            <div className="overlap-group8-18 inter-light-black-28px">
              <div className="tomahawk-cutlet">{tomahawkCutlet}</div>
              <div className="bun-cha">{bunCha}</div>
              <div className="pork-banh-mi">{porkBanhMi}</div>
              <div className="line-container-32">
                <img className="line-12-8" src={line12} />
                <img className="line-15-2" src={line15} />
                <img className="line-16-2" src={line16} />
              </div>
              <div className="overlap-group4-84">
                <img className="line-13-8" src={line13} />
                <img className="line-14-8" src={line14} />
                <Link to="/shopping-cartpeople1">
                  <div className="group-273">
                    <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-11" src={kakaotalk_Photo_202205302108421} />
                  </div>
                </Link>
              </div>
            </div>
            <img className="line-9-8" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsMenu1;
