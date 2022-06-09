import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./HanamDetailsPBPL.css";

function HanamDetailsPBPL(props) {
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
    text45,
    number1,
    iconStar,
    menu,
    info,
    review,
    map,
    porkBelly,
    porkNeck,
    porkRib,
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
      <div className="hanam-details-pb-pl screen">
        <div className="overlap-group5-111">
          <img className="image-7-1" src={image7} />
          <img className="rectangle-38-11" src={rectangle38} />
          <div className="are-going-14 inter-thin-black-18px">{areGoing}</div>
          <div className="text-44 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-13 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-102" src={line1} />
          <div className="hanam-bbq-84 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x180m-4 inter-thin-black-18px">{x180M}</div>
          <img className="line-4-11" src={line4} />
          <img className="line-5-58" src={line5} />
          <div className="text-45 inter-thin-black-18px">{text45}</div>
          <div className="number-202 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-393" src={iconStar} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-253" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group8-22">
          <div className="overlap-group-700">
            <div className="menu-62 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-109">
            <Link to="/restaurant-details-info" className="align-self-flex-center">
              <div className="group-20-9">
                <div className="overlap-group1-454">
                  <div className="info-50 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-review">
              <div className="group-21-9">
                <div className="overlap-group3-189">
                  <div className="rectangle-39-14"></div>
                  <div className="review-65 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/restaurant-details-map" className="align-self-flex-end">
              <div className="group-22-9">
                <div className="overlap-group2-256">
                  <div className="map-14 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-14">
            <div className="overlap-group9-23">
              <Link to="/menu-detail1porkbelly2">
                <div className="pork-belly-181 inter-light-flamingo-28px">{porkBelly}</div>
              </Link>
              <Link to="/menu-detail2collarbutt3">
                <div className="pork-neck-3 inter-light-black-28px">{porkNeck}</div>
              </Link>
              <div className="pork-rib-1 inter-light-flamingo-28px">{porkRib}</div>
              <div className="line-container-38">
                <img className="line-12-11" src={line12} />
                <img className="line-15-5" src={line15} />
                <img className="line-16-5" src={line16} />
              </div>
              <div className="line-container-39">
                <img className="line-13-11" src={line13} />
                <img className="line-14-11" src={line14} />
              </div>
            </div>
            <img className="line-9-11" src={line9} />
          </div>
        </div>
        <div className="group-232">
          <div className="overlap-group4-155">
            <Group2622 src={group2622Props.src} />
            <div className="number-203 inter-medium-derby-22px">{number2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsPBPL;
