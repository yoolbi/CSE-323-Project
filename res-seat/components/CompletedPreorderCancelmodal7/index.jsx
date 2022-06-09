import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderCancelmodal7.css";

function CompletedPreorderCancelmodal7(props) {
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
      <div className="completedpreordercancelmodal6 screen">
        <div className="overlap-group4-75">
          <div className="my-book-45 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
          <Link to="/main">
            <img className="icon-close-28" src={iconClose} />
          </Link>
          <img className="line-2-23" src={line2} />
          <div className="overlap-group-358">
            <div className="cancel-order-21 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-204">
            <div className="write-review-9 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Group237
            spanText1={group237Props.spanText1}
            spanText4={group237Props.spanText4}
            className={group237Props.className}
          />
          <div className="rectangle-28-6"></div>
          <div className="overlap-group3-110">
            <div className="rectangle-26-6"></div>
            <div className="rectangle-24-6"></div>
            <div className="rectangle-27-12"></div>
            <div className="cancel-order-22 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText1}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText2}</span>
            </div>
            <img className="icon-caution-6" src={iconCaution} />
            <div className="rectangle-23-6"></div>
            <Link to="/main">
              <div className="cancel-order-23 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome6">
              <div className="rectangle-27-13 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage-6 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal7;
