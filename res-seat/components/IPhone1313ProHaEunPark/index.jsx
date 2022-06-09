import React from "react";
import { Link } from "react-router-dom";
import Component122 from "../Component122";
import Component1692 from "../Component1692";
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
    component1221Props,
    component1222Props,
    component1223Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-ha-eun-park-3 screen">
        <div className="overlap-group8-53">
          <div className="overlap-group6-105">
            <div className="group-23-7">
              <Component122 pumkinSoup={component1221Props.pumkinSoup} />
              <Component122 pumkinSoup={component1222Props.pumkinSoup} />
              <Component122 pumkinSoup={component1223Props.pumkinSoup} />
            </div>
            <img className="image-2-48" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3-2-11" src={loadedBakedPotatoSoupRecipe32} />
          </div>
          <div className="my-order-36 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <img className="icon-close-164" src={iconClose} />
          <img className="line-2-169" src={line2} />
          <img className="line-3-96" src={line3} />
          <img className="free-icon-celebration-1517746-1-41" src={freeIconCelebration15177461} />
          <div className="reservation-completed applesdgothicneob00-regular-normal-black-40px">
            {reservationCompleted}
          </div>
          <div className="rectangle-23-24"></div>
          <div className="restuarant-name-121 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="rectangle-23-25"></div>
          <div className="cancle-order applesdgothicneob00-regular-normal-flamingo-15px">{cancleOrder}</div>
          <Component1692 />
          <div className="overlap-group7-76">
            <div className="rectangle-26-14"></div>
            <div className="rectangle-24-14"></div>
            <div className="rectangle-27-151"></div>
            <div className="cancel-order-69 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="warning-amber" src={warningAmber} />
            <div className="rectangle-23-26"></div>
            <div className="cancel-order-70 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder}</div>
            <Link to="/completed-preorder-home">
              <div className="rectangle-27-152 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage-14 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark;
