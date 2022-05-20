import React from "react";
import { Link } from "react-router-dom";
import Component9 from "../Component9";
import Bubble from "../Bubble";
import Bubble2 from "../Bubble2";
import Bubble3 from "../Bubble3";
import Component169 from "../Component169";
import Group44 from "../Group44";
import "./IPhone13HomeSuhyunChun.css";

function IPhone13HomeSuhyunChun(props) {
  const {
    list,
    iconSearch,
    my,
    group1,
    overlapGroup10,
    iconLocation_Pin,
    vector2,
    vector3,
    vector4,
    spanText1,
    spanText2,
    seatLeft,
    x250MAway,
    image2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    address,
    spanText9,
    spanText10,
    group2,
    bubble1Props,
    bubble2Props,
    bubble3Props,
    bubble2Props2,
    component169Props,
    group44Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-home-suhyun-chun-2 screen">
        <div className="flex-col-65">
          <div className="overlap-group-container-13 applesdgothicneo-regular-normal-flamingo-12px">
            <div className="overlap-group11-2">
              <div className="list">{list}</div>
              <img className="vector-172" src="/img/vector-2@2x.png" />
            </div>
            <div className="overlap-group12-2">
              <div className="rectangle-15-5"></div>
              <img className="icon-search" src={iconSearch} />
            </div>
            <div className="overlap-group13-3">
              <div className="my">{my}</div>
              <Link to="/completed-preorder-home">
                <img className="group-62" src={group1} />
              </Link>
            </div>
          </div>
          <Component9 />
          <div className="overlap-group10-6" style={{ backgroundImage: `url(${overlapGroup10})` }}>
            <div className="bubble-container">
              <Bubble {...bubble1Props} />
              <Bubble2 {...bubble2Props} />
            </div>
            <div className="overlap-group15-3">
              <img className="icon-location_pin" src={iconLocation_Pin} />
              <div className="overlap-group14-2">
                <img className="vector-173" src={vector2} />
                <Bubble3
                  bubble={bubble3Props.bubble}
                  sushiBest={bubble3Props.sushiBest}
                  spanText3={bubble3Props.spanText3}
                  spanText4={bubble3Props.spanText4}
                  spanText5={bubble3Props.spanText5}
                  spanText8={bubble3Props.spanText8}
                />
                <Bubble {...bubble2Props2} />
                <Component169 className={component169Props.className} />
                <div className="rectangle-21"></div>
                <Link to="/iphone-13-home-suhyun-chun">
                  <img className="vector-174" src={vector3} />
                </Link>
                <Link to="/restaurant-details-menu1">
                  <img className="vector-175" src={vector4} />
                </Link>
                <div className="text-31 inter-extra-bold-white-48px">
                  <span className="inter-extra-bold-apple-48px">{spanText1}</span>
                  <span className="inter-extra-bold-black-48px">{spanText2}</span>
                </div>
                <div className="seat-left-8 inter-bold-black-20px">{seatLeft}</div>
                <div className="rectangle-36"></div>
                <Group44 text7={group44Props.text7} className={group44Props.className} />
                <div className="x250m-away inter-normal-black-20px">{x250MAway}</div>
                <img className="image-2-18" src={image2} />
                <div className="rectangle-54-1"></div>
                <div className="open-1000-am-close-2 inter-light-black-24px">
                  <span className="inter-light-black-24px">{spanText3}</span>
                  <span className="inter-light-black-24px">{spanText4}</span>
                  <span className="inter-light-black-24px">{spanText5}</span>
                  <span className="inter-light-black-24px">{spanText6}</span>
                  <span className="inter-light-black-24px">{spanText7}</span>
                  <span className="inter-light-black-24px">{spanText8}</span>
                </div>
                <div className="address-28 inter-normal-blue-ribbon-14px">{address}</div>
                <div className="a-soup-shop-45 inter-extra-bold-black-25px">
                  <span className="inter-extra-bold-black-25px">{spanText9}</span>
                  <span className="inter-extra-bold-black-10px">{spanText10}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="group-63" src={group2} />
      </div>
    </div>
  );
}

export default IPhone13HomeSuhyunChun;
