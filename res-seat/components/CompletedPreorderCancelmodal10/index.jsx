import React from "react";
import { Link } from "react-router-dom";
import Group69 from "../Group69";
import "./CompletedPreorderCancelmodal10.css";

function CompletedPreorderCancelmodal10(props) {
  const {
    myOrder,
    iconClose,
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
    spanText6,
    spanText7,
    iconCaution,
    cancelOrder2,
    backToMypage,
    group69Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreordercancelmodal8 screen">
        <div className="overlap-group6-65">
          <div className="my-order-17 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <Link to="/main">
            <img className="icon-close-158" src={iconClose} />
          </Link>
          <img className="line-2-142" src={line2} />
          <img className="line-3-85" src={line3} />
          <img className="free-icon-celebration-1517746-1-33" src={freeIconCelebration15177461} />
          <div className="successfully-completed-17 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
          <div className="rectangle-23-10"></div>
          <div className="a-soup-shop-1216pm-1 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="overlap-group-775">
            <div className="cancel-order-51 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-481">
            <div className="write-review-33 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Group69
            className={group69Props.className}
            component11Props={group69Props.component11Props}
            component12Props={group69Props.component12Props}
          />
          <div className="rectangle-28-9"></div>
          <div className="overlap-group5-124">
            <div className="rectangle-26-9"></div>
            <div className="rectangle-24-9"></div>
            <div className="rectangle-27-137"></div>
            <div className="cancel-order-52 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="icon-caution-9" src={iconCaution} />
            <div className="rectangle-23-11"></div>
            <Link to="/main">
              <div className="cancel-order-53 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome8">
              <div className="rectangle-27-138 border-1px-orange"></div>
            </Link>
            <Link to="/completedpreorderwritereviewhome4">
              <div className="back-to-mypage-9 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal10;
