import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./HanamDetailsMenuPB.css";

function HanamDetailsMenuPB(props) {
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
    text127,
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
    number2,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hanam-details-menu-pb screen">
        <div className="overlap-group5-125">
          <img className="image-11-2" src={image11} />
          <img className="search-8" src={search} />
          <img className="rectangle-38-16" src={rectangle38} />
          <div className="are-going-26 inter-thin-black-18px">{areGoing}</div>
          <div className="text-126 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-18 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-125" src={line1} />
          <div className="hanam-bbq-94 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x250m-2 inter-thin-black-18px">{x250M}</div>
          <img className="line-4-23" src={line4} />
          <img className="line-5-81" src={line5} />
          <div className="text-127 inter-thin-black-18px">{text127}</div>
          <div className="number-223 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-405" src={iconStar} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-306" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group8-29">
          <div className="overlap-group-807">
            <div className="menu-82 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="overlap-group-container-54">
            <div className="overlap-group1-505">
              <div className="info-59 inter-thin-black-24px">{info}</div>
            </div>
            <div className="overlap-group3-246">
              <div className="rectangle-39-23"></div>
              <div className="review-74 inter-thin-black-24px">{review}</div>
            </div>
            <div className="overlap-group2-375">
              <div className="map-23 inter-thin-black-24px">{map}</div>
            </div>
          </div>
          <div className="overlap-group10-24">
            <div className="overlap-group9-33">
              <div className="pork-belly-182 inter-light-flamingo-28px">{porkBelly}</div>
              <Link to="/menu-detail2pn2">
                <div className="pork-neck-4 inter-light-black-28px">{porkNeck}</div>
              </Link>
              <Link to="/menu-detail3porkrib6">
                <div className="pork-lib-2 inter-light-black-28px">{porkLib}</div>
              </Link>
              <div className="line-container-56">
                <img className="line-12-20" src={line12} />
                <img className="line-15-14" src={line15} />
                <img className="line-16-14" src={line16} />
              </div>
              <div className="line-container-57">
                <img className="line-13-20" src={line13} />
                <img className="line-14-20" src={line14} />
              </div>
            </div>
            <img className="line-9-20" src={line9} />
          </div>
        </div>
        <div className="overlap-group7-39">
          <Group2622 src={group2622Props.src} />
          <div className="number-224 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsMenuPB;
