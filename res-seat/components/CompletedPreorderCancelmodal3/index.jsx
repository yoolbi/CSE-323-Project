import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderCancelmodal3.css";

function CompletedPreorderCancelmodal3(props) {
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
    group237Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreordercancelmodal2 screen">
        <div className="overlap-group4-66">
          <div className="my-book-32 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
          <Link to="/main">
            <img className="icon-close-18" src={iconClose} />
          </Link>
          <img className="line-2-14" src={line2} />
          <div className="overlap-group-298">
            <div className="cancel-order-6 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-150">
            <div className="write-review-2 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Group237 spanText1={group237Props.spanText1} spanText4={group237Props.spanText4} />
          <div className="rectangle-28-2"></div>
          <div className="overlap-group3-98">
            <div className="rectangle-26-2"></div>
            <div className="rectangle-24-2"></div>
            <div className="rectangle-27-4"></div>
            <div className="cancel-order-7 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText1}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText2}</span>
            </div>
            <img className="icon-caution-2" src={iconCaution} />
            <div className="rectangle-23-2"></div>
            <Link to="/main">
              <div className="cancel-order-8 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completed-preorder-home-7">
              <div className="rectangle-27-5 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage-2 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal3;
