import React from "react";
import { Link } from "react-router-dom";
import Component12 from "../Component12";
import "./IPhone1313ProHaEunPark3.css";

function IPhone1313ProHaEunPark3(props) {
  const {
    myOrder,
    line2,
    close,
    freeIconCelebration15177461,
    successfullyCompleted,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    line3,
    image2,
    loadedBakedPotatoSoupRecipe32,
    cancelOrder,
    component121Props,
    component122Props,
    component123Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-haeun-park2 screen">
        <div className="flex-row-106">
          <div className="flex-col-69">
            <div className="my-order-26 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-16" src={line2} />
          </div>
          <img className="close-7" src={close} />
        </div>
        <div className="overlap-group7-33">
          <img className="free-icon-celebration-1517746-1-4" src={freeIconCelebration15177461} />
          <div className="successfully-completed-3 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group8-24">
          <div className="rectangle-23-9"></div>
          <div className="restuarant-name-121-1 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-8" src={line3} />
        <div className="frame-1-1">
          <div className="overlap-group6-31">
            <div className="group-23-8">
              <Component12 pumkinSoup={component121Props.pumkinSoup} />
              <Component12 pumkinSoup={component122Props.pumkinSoup} />
              <Component12 pumkinSoup={component123Props.pumkinSoup} />
            </div>
            <img className="image-2-22" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3-2-5" src={loadedBakedPotatoSoupRecipe32} />
          </div>
        </div>
        <Link to="/iphone-13-13-pro-ha-eun-park-3">
          <div className="group-29-1">
            <div className="overlap-group-111">
              <div className="cancel-order-7 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark3;
