import React from "react";
import { Link } from "react-router-dom";
import Component122 from "../Component122";
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
    component1221Props,
    component1222Props,
    component1223Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-haeun-park2 screen">
        <div className="flex-row-619">
          <div className="flex-col-492">
            <div className="my-order-37 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-171" src={line2} />
          </div>
          <img className="close-5" src={close} />
        </div>
        <div className="overlap-group8-58">
          <img className="free-icon-celebration-1517746-1-42" src={freeIconCelebration15177461} />
          <div className="successfully-completed-25 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group7-83">
          <div className="rectangle-23-27"></div>
          <div className="restuarant-name-121-1 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-97" src={line3} />
        <div className="frame-1-9">
          <div className="overlap-group6-112">
            <div className="group-23-8">
              <Component122 pumkinSoup={component1221Props.pumkinSoup} />
              <Component122 pumkinSoup={component1222Props.pumkinSoup} />
              <Component122 pumkinSoup={component1223Props.pumkinSoup} />
            </div>
            <img className="image-2-55" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3-2-12" src={loadedBakedPotatoSoupRecipe32} />
          </div>
        </div>
        <Link to="/iphone-13-13-pro-ha-eun-park-3">
          <div className="group-29-15">
            <div className="overlap-group-1144">
              <div className="cancel-order-71 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone1313ProHaEunPark3;
