import React from "react";
import { Link } from "react-router-dom";
import "./UnclesDetailsTC.css";

function UnclesDetailsTC(props) {
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
    text185,
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
      <div className="uncle-s-details-tc screen">
        <div className="overlap-group5-130">
          <img className="x1-53" src={x1} />
          <img className="rectangle-38-18" src={rectangle38} />
          <div className="are-going-28 inter-thin-black-18px">{areGoing}</div>
          <div className="text-184 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-20 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-127" src={line1} />
          <div className="uncles-71 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-12 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-25" src={line4} />
          <img className="line-5-83" src={line5} />
          <div className="text-185 inter-thin-black-18px">{text185}</div>
          <div className="number-230 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-407" src={iconStar} />
          <a href="javascript:history.back()">
            <img className="vector-335" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group8-32">
          <div className="overlap-group-834">
            <div className="menu-87 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-135">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-22">
                <div className="overlap-group1-511">
                  <div className="info-64 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map">
              <div className="group-21-22">
                <div className="overlap-group3-277">
                  <div className="rectangle-39-28"></div>
                  <div className="review-79 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-22">
                <div className="overlap-group2-381">
                  <div className="map-28 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-29">
            <div className="overlap-group9-38">
              <div className="tomahawk-cutlet-5 inter-light-flamingo-28px">{tomahawkCutlet}</div>
              <Link to="/menu-detail2buncha">
                <div className="bun-cha-5 inter-light-black-28px">{bunCha}</div>
              </Link>
              <Link to="/menu-detail3banhmi">
                <div className="pork-banh-mi-5 inter-light-black-28px">{porkBanhMi}</div>
              </Link>
              <div className="line-container-66">
                <img className="line-12-25" src={line12} />
                <img className="line-15-19" src={line15} />
                <img className="line-16-19" src={line16} />
              </div>
              <div className="line-container-67">
                <img className="line-13-25" src={line13} />
                <img className="line-14-25" src={line14} />
              </div>
            </div>
            <img className="line-9-25" src={line9} />
          </div>
        </div>
        <div className="overlap-group7-41">
          <div className="group-26-5">
            <img className="icon-cart-16" src={iconCart} />
          </div>
          <div className="number-231 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsTC;
