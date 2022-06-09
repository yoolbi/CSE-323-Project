import React from "react";
import { Link } from "react-router-dom";
import Group239 from "../Group239";
import "./CompletedPreorderCancelmodal2.css";

function CompletedPreorderCancelmodal2(props) {
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
      <div className="completedpreordercancelmodal screen">
        <div className="overlap-group4-2">
          <div className="my-book-3 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
          <Link to="/main">
            <img className="icon-close-1" src={iconClose} />
          </Link>
          <img className="line-2-1" src={line2} />
          <div className="overlap-group-64">
            <div className="cancel-order-3 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-44">
            <div className="write-review-1 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Group239
            freeIconCelebration15177461={group239Props.freeIconCelebration15177461}
            spanText1={group239Props.spanText1}
            line3={group239Props.line3}
          />
          <div className="rectangle-28-1"></div>
          <div className="overlap-group3-25">
            <div className="rectangle-26-1"></div>
            <div className="rectangle-24-1"></div>
            <div className="rectangle-27-2"></div>
            <div className="cancel-order-4 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText1}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText2}</span>
            </div>
            <img className="icon-caution-1" src={iconCaution} />
            <div className="rectangle-23-1"></div>
            <Link to="/main">
              <div className="cancel-order-5 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome5">
              <div className="rectangle-27-3 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage-1 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal2;
