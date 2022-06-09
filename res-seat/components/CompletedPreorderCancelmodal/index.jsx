import React from "react";
import { Link } from "react-router-dom";
import Group239 from "../Group239";
import "./CompletedPreorderCancelmodal.css";

function CompletedPreorderCancelmodal(props) {
  const {
    myBook,
    iconClose,
    line2,
    cancelOrder1,
    writeReview,
    spanText1,
    spanText2,
    iconCaution,
    cancelOrder2,
    backToMypage,
    group239Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-cancelmodal-7 screen">
        <div className="overlap-group4">
          <div className="my-book applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
          <Link to="/main">
            <img className="icon-close" src={iconClose} />
          </Link>
          <img className="line-2" src={line2} />
          <div className="overlap-group">
            <div className="cancel-order applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1">
            <div className="write-review applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Group239
            freeIconCelebration15177461={group239Props.freeIconCelebration15177461}
            spanText1={group239Props.spanText1}
            line3={group239Props.line3}
          />
          <div className="rectangle-28"></div>
          <div className="overlap-group3">
            <div className="rectangle-26"></div>
            <div className="rectangle-24"></div>
            <div className="rectangle-27"></div>
            <div className="cancel-order-1 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText1}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText2}</span>
            </div>
            <img className="icon-caution" src={iconCaution} />
            <div className="rectangle-23"></div>
            <Link to="/main">
              <div className="cancel-order-2 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome3">
              <div className="rectangle-27-1 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal;
