import React from "react";
import { Link } from "react-router-dom";
import Component12 from "../Component12";
import Component169 from "../Component169";
import "./IPhone1313ProHaEunPark.css";

function IPhone1313ProHaEunPark(props) {
  const {
    image2,
    loadedBakedPotatoSoupRecipe32,
    myOrder,
    iconClose,
    line2,
    line3,
    freeIconCelebration15177461,
    reservationCompleted,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    cancleOrder,
    spanText6,
    spanText7,
    warningAmber,
    cancelOrder,
    backToMypage,
    component121Props,
    component122Props,
    component123Props,
    component169Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-ha-eun-park-3 screen">
        <div className="overlap-group8-19">
          <div className="overlap-group6-25">
            <div className="group-23-7">
              <Component12 pumkinSoup={component121Props.pumkinSoup} />
              <Component12 pumkinSoup={component122Props.pumkinSoup} />
              <Component12 pumkinSoup={component123Props.pumkinSoup} />
            </div>
            <img className="image-2-15" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3-2-4" src={loadedBakedPotatoSoupRecipe32} />
          </div>
          <div className="my-order-25 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <img className="icon-close-4" src={iconClose} />
          <img className="line-2-14" src={line2} />
          <img className="line-3-7" src={line3} />
          <img className="free-icon-celebration-1517746-1-3" src={freeIconCelebration15177461} />
          <div className="reservation-completed applesdgothicneob00-regular-normal-black-40px">
            {reservationCompleted}
          </div>
          <div className="rectangle-23-6"></div>
          <div className="restuarant-name-121 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="rectangle-23-7"></div>
          <div className="cancle-order applesdgothicneob00-regular-normal-flamingo-15px">{cancleOrder}</div>
          <Component169 className={component169Props.className} />
          <div className="overlap-group7-26">
            <div className="rectangle-26-1"></div>
            <div className="rectangle-24-1"></div>
            <div className="rectangle-27-26"></div>
            <div className="cancel-order-5 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="warning-amber" src={warningAmber} />
            <div className="rectangle-23-8"></div>
            <div className="cancel-order-6 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder}</div>
            <Link to="/completed-preorder-home">
              <div className="rectangle-27-27 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage-1 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark;
