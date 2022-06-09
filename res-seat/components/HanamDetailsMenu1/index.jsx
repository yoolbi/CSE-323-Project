import React from "react";
import { Link } from "react-router-dom";
import "./HanamDetailsMenu1.css";

function HanamDetailsMenu1(props) {
  const {
    group439,
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
    text29,
    number,
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
    kakaotalk_Photo_202205302108421,
    line9,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hanam-details-menu1 screen">
        <div className="overlap-group4-76">
          <div className="group-439" style={{ backgroundImage: `url(${group439})` }}>
            <Link to="/select-restaurant-hanam-bbq">
              <img className="vector-222" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <img className="rectangle-38-7" src={rectangle38} />
          <div className="are-going-10 inter-thin-black-18px">{areGoing}</div>
          <div className="text-28 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-9 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-46" src={line1} />
          <div className="hanam-bbq-53 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-3 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-7" src={line4} />
          <img className="line-5-7" src={line5} />
          <div className="text-29 inter-thin-black-18px">{text29}</div>
          <div className="number-125 inter-extra-bold-persian-red-24px">{number}</div>
          <img className="icon-star-161" src={iconStar} />
        </div>
        <div className="overlap-group7-24">
          <div className="overlap-group-361">
            <div className="menu-10 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-48">
            <Link to="/hanam-details-info" className="align-self-flex-center">
              <div className="group-20-7">
                <div className="overlap-group1-206">
                  <div className="info-46 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/hanam-details-review">
              <div className="group-21-7">
                <div className="overlap-group3-111">
                  <div className="rectangle-39-10"></div>
                  <div className="review-23 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/hanam-details-map" className="align-self-flex-end">
              <div className="group-22-7">
                <div className="overlap-group2-133">
                  <div className="map-10 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group9-18">
            <div className="overlap-group8-17 inter-light-black-28px">
              <div className="pork-belly">{porkBelly}</div>
              <div className="pork-neck">{porkNeck}</div>
              <div className="pork-lib">{porkLib}</div>
              <div className="line-container-31">
                <img className="line-12-7" src={line12} />
                <img className="line-15-1" src={line15} />
                <img className="line-16-1" src={line16} />
              </div>
              <div className="overlap-group6-32">
                <img className="line-13-7" src={line13} />
                <img className="line-14-7" src={line14} />
                <Link to="/shopping-cart-people1-39">
                  <div className="group-281">
                    <img className="kakao-talk_-photo_2022-05-30-21-08-42-1-10" src={kakaotalk_Photo_202205302108421} />
                  </div>
                </Link>
              </div>
            </div>
            <img className="line-9-7" src={line9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsMenu1;
