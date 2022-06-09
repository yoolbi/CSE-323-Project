import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./HanamDetailsPBPNPL.css";

function HanamDetailsPBPNPL(props) {
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
    hanamBbq,
    x250M,
    line4,
    line5,
    text41,
    number1,
    iconStar,
    vector2,
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
    number2,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hanam-details-pb-pn-pl screen">
        <div className="overlap-group4-153">
          <img className="image-11" src={image11} />
          <img className="search-6" src={search} />
          <img className="rectangle-38-9" src={rectangle38} />
          <div className="are-going-12 inter-thin-black-18px">{areGoing}</div>
          <div className="text-40 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-11 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-100" src={line1} />
          <div className="hanam-bbq-82 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x250m inter-thin-black-18px">{x250M}</div>
          <img className="line-4-9" src={line4} />
          <img className="line-5-56" src={line5} />
          <div className="text-41 inter-thin-black-18px">{text41}</div>
          <div className="number-198 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-391" src={iconStar} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-249" src="/img/vector-6@2x.png" />
          </Link>
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-249" src={vector2} />
          </Link>
        </div>
        <div className="overlap-group8-20">
          <div className="overlap-group-698">
            <div className="menu-60 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="overlap-group-container-50">
            <div className="overlap-group1-452">
              <div className="info-48 inter-thin-black-24px">{info}</div>
            </div>
            <div className="overlap-group3-187">
              <div className="rectangle-39-12"></div>
              <div className="review-63 inter-thin-black-24px">{review}</div>
            </div>
            <div className="overlap-group2-254">
              <div className="map-12 inter-thin-black-24px">{map}</div>
            </div>
          </div>
          <div className="overlap-group10-12">
            <div className="overlap-group9-21 inter-light-flamingo-28px">
              <div className="pork-belly-179">{porkBelly}</div>
              <div className="pork-neck-1">{porkNeck}</div>
              <div className="pork-lib-1">{porkLib}</div>
              <div className="line-container-34">
                <img className="line-12-9" src={line12} />
                <img className="line-15-3" src={line15} />
                <img className="line-16-3" src={line16} />
              </div>
              <div className="line-container-35">
                <img className="line-13-9" src={line13} />
                <img className="line-14-9" src={line14} />
              </div>
            </div>
            <img className="line-9-9" src={line9} />
          </div>
        </div>
        <div className="overlap-group7-33">
          <Group2622 src={group2622Props.src} />
          <div className="number-199 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsPBPNPL;
