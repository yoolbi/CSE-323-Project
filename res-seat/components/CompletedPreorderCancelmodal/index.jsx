import React from "react";
import { Link } from "react-router-dom";
import Group23 from "../Group23";
import Component169 from "../Component169";
import "./CompletedPreorderCancelmodal.css";

function CompletedPreorderCancelmodal(props) {
  const {
    myOrder,
    close,
    line2,
    line3,
    freeIconCelebration15177461,
    successfullyCompleted,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    cancelOrder1,
    writeReview,
    image2,
    loadedBakedPotatoSoupRecipe32,
    loadedBakedPotatoSoupRecipe33,
    spanText6,
    spanText7,
    iconCaution,
    cancelOrder2,
    backToMypage,
    group23Props,
    component169Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-cancelmodal screen">
        <div className="overlap-group8-5">
          <div className="my-order-5 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <Link to="/main">
            <img className="close" src={close} />
          </Link>
          <img className="line-2-3" src={line2} />
          <img className="line-3-1" src={line3} />
          <img className="free-icon-celebration-1517746-1-1" src={freeIconCelebration15177461} />
          <div className="successfully-completed-1 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
          <div className="rectangle-23-4"></div>
          <div className="a-soup-shop-1216pm applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="overlap-group-62">
            <div className="cancel-order-1 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-20">
            <div className="write-review-1 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <div className="overlap-group6-7">
            <Group23
              component11Props={group23Props.component11Props}
              component12Props={group23Props.component12Props}
              component13Props={group23Props.component13Props}
            />
            <img className="image-2-8" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3" src={loadedBakedPotatoSoupRecipe32} />
            <img className="loaded-baked-potato-soup-recipe-3" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <Component169 className={component169Props.className} />
          <div className="overlap-group7-8">
            <div className="rectangle-26"></div>
            <div className="rectangle-24"></div>
            <div className="rectangle-27-20"></div>
            <div className="cancel-order-2 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="icon-caution" src={iconCaution} />
            <div className="rectangle-23-5"></div>
            <Link to="/main">
              <div className="cancel-order-3 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completed-preorder-home">
              <div className="rectangle-27-21 border-1px-orange"></div>
            </Link>
            <Link to="/completed-preorder-writereview-home">
              <div className="back-to-mypage applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal;
