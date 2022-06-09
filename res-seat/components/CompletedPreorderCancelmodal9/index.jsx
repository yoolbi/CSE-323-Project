import React from "react";
import { Link } from "react-router-dom";
import Frame22 from "../Frame22";
import "./CompletedPreorderCancelmodal9.css";

function CompletedPreorderCancelmodal9(props) {
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
    frame22Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-cancelmodal-11 screen">
        <div className="overlap-group3-136">
          <div className="my-order-4 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <Link to="/main">
            <img className="icon-close-85" src={iconClose} />
          </Link>
          <img className="line-2-62" src={line2} />
          <img className="line-3-56" src={line3} />
          <img className="free-icon-celebration-1517746-1-20" src={freeIconCelebration15177461} />
          <div className="successfully-completed-4 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
          <div className="rectangle-23-8"></div>
          <div className="a-soup-shop-1216pm applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="overlap-group-579">
            <div className="cancel-order-36 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-308">
            <div className="write-review-20 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Frame22 component1Props={frame22Props.component1Props} />
          <div className="rectangle-28-8"></div>
          <div className="overlap-group2-177">
            <div className="rectangle-26-8"></div>
            <div className="rectangle-24-8"></div>
            <div className="rectangle-27-133"></div>
            <div className="cancel-order-37 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="icon-caution-8" src={iconCaution} />
            <div className="rectangle-23-9"></div>
            <Link to="/main">
              <div className="cancel-order-38 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completed-preorder-home-11">
              <div className="rectangle-27-134 border-1px-orange"></div>
            </Link>
            <Link to="/completedpreorderwritereviewhome">
              <div className="back-to-mypage-8 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal9;
