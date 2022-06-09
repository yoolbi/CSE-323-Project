import React from "react";
import { Link } from "react-router-dom";
import Group273 from "../Group273";
import "./SeansDetailsReview.css";

function SeansDetailsReview(props) {
  const {
    search,
    overlapGroup4,
    rectangle38,
    areGoing,
    spanText1,
    spanText2,
    minsWaiting,
    line1,
    seansRestaurant,
    x120M,
    line4,
    line5,
    text5,
    number1,
    iconStar1,
    line9,
    line13,
    line14,
    rectangle52,
    overlapGroup6,
    iconUser1,
    yesterday,
    color1,
    iconStar2,
    iconStar3,
    cookingDoneAttenti,
    iconStar4,
    iconStar5,
    iconStar6,
    seeDetail1,
    porkBellyG3D0983C26_19201,
    iconUser2,
    seeDetail2,
    date,
    color2,
    iconStar7,
    iconStar8,
    iconStar9,
    iconStar10,
    alwaysGood,
    line19,
    line12,
    line18,
    menu,
    info,
    map,
    review,
    vector2,
    number2,
    text4,
    iconStar11,
    iconStar12,
    iconStar13,
    iconStar14,
    iconStar15,
    group273Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sean-s-details-review screen">
        <div className="overlap-group9-5">
          <img className="search-1" src={search} />
          <div className="overlap-group4-25" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <Link to="/select-restaurant-sean-s">
              <img className="vector-105" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <div className="overlap-group7-5">
            <img className="rectangle-38-1" src={rectangle38} />
            <div className="are-going-1 inter-thin-black-18px">{areGoing}</div>
            <div className="number-2 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-spicy-pink-40px">{spanText1}</span>
              <span className="inter-extra-bold-black-40px">{spanText2}</span>
            </div>
            <div className="mins-waiting-1 inter-extra-bold-black-25px-2">{minsWaiting}</div>
            <img className="line-1-1" src={line1} />
            <div className="seans-restaurant-8 inter-extra-bold-black-25px">{seansRestaurant}</div>
            <div className="x120m-1 inter-thin-black-18px">{x120M}</div>
            <img className="line-4-1" src={line4} />
            <img className="line-5-1" src={line5} />
            <div className="text-5 inter-thin-black-18px">{text5}</div>
            <div className="number-3 inter-extra-bold-apple-24px">{number1}</div>
            <img className="icon-star-33" src={iconStar1} />
          </div>
        </div>
        <div className="overlap-group13">
          <div className="overlap-group-container-13">
            <div className="line-container-5">
              <img className="line-9-1" src={line9} />
              <img className="line-13-1" src={line13} />
              <img className="line-14-1" src={line14} />
            </div>
            <div className="overlap-group11-5">
              <img className="rectangle-52" src={rectangle52} />
              <div className="overlap-group6-5" style={{ backgroundImage: `url(${overlapGroup6})` }}>
                <img className="icon-user" src={iconUser1} />
                <div className="overlap-group2-53">
                  <div className="overlap-group1-60">
                    <div className="yesterday inter-normal-dove-gray-12px">{yesterday}</div>
                    <div className="color inter-medium-black-16px">{color1}</div>
                    <img className="icon-star-34" src={iconStar2} />
                    <img className="icon-star-35" src={iconStar3} />
                    <p className="cooking-done-attenti inter-medium-black-14px">{cookingDoneAttenti}</p>
                  </div>
                  <div className="icon-star-container">
                    <img className="icon-star-36" src={iconStar4} />
                    <img className="icon-star-37" src={iconStar5} />
                    <img className="icon-star-38" src={iconStar6} />
                  </div>
                  <div className="see-detail inter-normal-suva-gray-10px">{seeDetail1}</div>
                  <img className="pork-belly-g3d0983c26_1920-1" src={porkBellyG3D0983C26_19201} />
                </div>
              </div>
              <img className="icon-user-1" src={iconUser2} />
              <Group273 className={group273Props.className} />
              <div className="see-detail-1 inter-normal-suva-gray-10px">{seeDetail2}</div>
              <div className="date inter-normal-dove-gray-12px">{date}</div>
              <div className="color-1 inter-medium-black-16px">{color2}</div>
              <img className="icon-star-39" src={iconStar7} />
              <img className="icon-star-40" src={iconStar8} />
              <img className="icon-star-41" src={iconStar9} />
              <img className="icon-star-42" src={iconStar10} />
              <div className="always-good inter-medium-black-14px">{alwaysGood}</div>
            </div>
          </div>
          <div className="line-container-6">
            <img className="line-19-1" src={line19} />
            <img className="line-12-1" src={line12} />
            <img className="line-18-1" src={line18} />
          </div>
          <Link to="/sean-s-details-menu1">
            <div className="group-19-1">
              <div className="overlap-group-83">
                <div className="menu-1 inter-thin-black-24px">{menu}</div>
              </div>
            </div>
          </Link>
          <Link to="/sean-s-details-info">
            <div className="group-20">
              <div className="overlap-group1-61">
                <div className="info-7 inter-thin-black-24px">{info}</div>
              </div>
            </div>
          </Link>
          <Link to="/sean-s-details-map">
            <div className="group-22-1">
              <div className="overlap-group2-54">
                <div className="map-1 inter-thin-black-24px">{map}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group3-40">
            <div className="rectangle-39-1"></div>
            <div className="review-2 inter-normal-white-24px">{review}</div>
          </div>
          <img className="vector-106" src={vector2} />
          <div className="number-4 inter-light-black-24px">{number2}</div>
          <div className="overlap-group5-6">
            <div className="group-44">
              <div className="overlap-group-84">
                <div className="text-4">{text4}</div>
                <img className="icon-star-43" src={iconStar11} />
              </div>
              <img className="icon-star-44" src={iconStar12} />
              <img className="icon-star-45" src={iconStar13} />
              <img className="icon-star-32" src={iconStar14} />
              <img className="icon-star-32" src={iconStar15} />
            </div>
            <div className="rectangle-103"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsReview;
