import React from "react";
import { Link } from "react-router-dom";
import "./UnclesDetailsBC.css";

function UnclesDetailsBC(props) {
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
    text187,
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
      <div className="uncle-s-details-bc screen">
        <div className="overlap-group4-194">
          <img className="x1-54" src={x1} />
          <img className="rectangle-38-19" src={rectangle38} />
          <div className="are-going-29 inter-thin-black-18px">{areGoing}</div>
          <div className="text-186 inter-extra-bold-white-40px">
            <span className="inter-extra-bold-harlequin-40px">{spanText1}</span>
            <span className="inter-extra-bold-saffron-40px">{spanText2}</span>
            <span className="inter-extra-bold-black-40px">{spanText3}</span>
          </div>
          <div className="seat-left-21 inter-extra-bold-black-25px-2">{seatLeft}</div>
          <img className="line-1-128" src={line1} />
          <div className="uncles-72 inter-extra-bold-black-25px">{uncles}</div>
          <div className="x120m-13 inter-thin-black-18px">{x120M}</div>
          <img className="line-4-26" src={line4} />
          <img className="line-5-84" src={line5} />
          <div className="text-187 inter-thin-black-18px">{text187}</div>
          <div className="number-232 inter-extra-bold-persian-red-24px">{number1}</div>
          <img className="icon-star-408" src={iconStar} />
          <a href="javascript:history.back()">
            <img className="vector-336" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group8-33">
          <div className="overlap-group-835">
            <div className="menu-88 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-136">
            <Link to="/uncle-s-details-info" className="align-self-flex-center">
              <div className="group-20-23">
                <div className="overlap-group1-512">
                  <div className="info-65 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-review">
              <div className="group-21-23">
                <div className="overlap-group3-278">
                  <div className="rectangle-39-29"></div>
                  <div className="review-80 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/uncle-s-details-map" className="align-self-flex-end">
              <div className="group-22-23">
                <div className="overlap-group2-382">
                  <div className="map-29 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group10-30">
            <div className="overlap-group9-39">
              <Link to="/menu-detail1tomahawk">
                <div className="tomahawk-cutlet-6 inter-light-black-28px">{tomahawkCutlet}</div>
              </Link>
              <div className="bun-cha-6 inter-light-flamingo-28px">{bunCha}</div>
              <Link to="/menu-detail3banhmi2">
                <div className="pork-banh-mi-6 inter-light-black-28px">{porkBanhMi}</div>
              </Link>
              <div className="line-container-68">
                <img className="line-12-26" src={line12} />
                <img className="line-15-20" src={line15} />
                <img className="line-16-20" src={line16} />
              </div>
              <div className="line-container-69">
                <img className="line-13-26" src={line13} />
                <img className="line-14-26" src={line14} />
              </div>
            </div>
            <img className="line-9-26" src={line9} />
          </div>
        </div>
        <div className="overlap-group5-131">
          <div className="group-26-6">
            <img className="icon-cart-17" src={iconCart} />
          </div>
          <div className="number-233 inter-medium-derby-22px">{number2}</div>
        </div>
      </div>
    </div>
  );
}

export default UnclesDetailsBC;
