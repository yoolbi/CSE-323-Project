import React from "react";
import { Link } from "react-router-dom";
import Group2622 from "../Group2622";
import "./HanamDetailsPBPN.css";

function HanamDetailsPBPN(props) {
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
    text43,
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
      <div className="hanam-details-pb-pn screen">
        <div className="overlap-group4-154">
          <img className="image-11-1" src={image11} />
          <img className="search-7" src={search} />
          <img className="rectangle-38-10" src={rectangle38} />
          <div className="are-going-13 inter-thin-black-18px">{areGoing}</div>
          <div className="text-42 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-apple-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-12 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-101" src={line1} />
          <div className="hanam-bbq-83 inter-extra-bold-black-25px">{hanamBbq}</div>
          <div className="x250m-1 inter-thin-black-18px">{x250M}</div>
          <img className="line-4-10" src={line4} />
          <img className="line-5-57" src={line5} />
          <div className="text-43 inter-thin-black-18px">{text43}</div>
          <div className="number-200 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-392" src={iconStar} />
          <Link to="/select-restaurant-hanam-bbq">
            <img className="vector-252" src="/img/vector-6@2x.png" />
          </Link>
        </div>
        <div className="overlap-group8-21">
          <div className="overlap-group-699">
            <div className="menu-61 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="overlap-group-container-51">
            <div className="overlap-group1-453">
              <div className="info-49 inter-thin-black-24px">{info}</div>
            </div>
            <div className="overlap-group3-188">
              <div className="rectangle-39-13"></div>
              <div className="review-64 inter-thin-black-24px">{review}</div>
            </div>
            <div className="overlap-group2-255">
              <div className="map-13 inter-thin-black-24px">{map}</div>
            </div>
          </div>
          <div className="overlap-group10-13">
            <div className="overlap-group9-22">
              <div className="pork-belly-180 inter-light-flamingo-28px">{porkBelly}</div>
              <div className="pork-neck-2 inter-light-flamingo-28px">{porkNeck}</div>
              <Link to="/menu-detail3porkrib3">
                <div className="pork-rib inter-light-black-28px">{porkRib}</div>
              </Link>
              <div className="line-container-36">
                <img className="line-12-10" src={line12} />
                <img className="line-15-4" src={line15} />
                <img className="line-16-4" src={line16} />
              </div>
              <div className="line-container-37">
                <img className="line-13-10" src={line13} />
                <img className="line-14-10" src={line14} />
              </div>
            </div>
            <img className="line-9-10" src={line9} />
          </div>
        </div>
        <div className="overlap-group5-110">
          <Group2622 src={group2622Props.src} />
          <div className="number-201 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default HanamDetailsPBPN;
