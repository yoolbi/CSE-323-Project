import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderCancelmodal8.css";

function CompletedPreorderCancelmodal8(props) {
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
      <div className="completedpreordercancelmodal7 screen">
        <div className="overlap-group4-83">
          <div className="my-book-48 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
          <Link to="/main">
            <img className="icon-close-41" src={iconClose} />
          </Link>
          <img className="line-2-36" src={line2} />
          <div className="overlap-group-373">
            <div className="cancel-order-26 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-217">
            <div className="write-review-12 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Group237
            spanText1={group237Props.spanText1}
            spanText4={group237Props.spanText4}
            className={group237Props.className}
          />
          <div className="rectangle-28-7"></div>
          <div className="overlap-group3-118">
            <div className="rectangle-26-7"></div>
            <div className="rectangle-24-7"></div>
            <div className="rectangle-27-14"></div>
            <div className="cancel-order-27 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText1}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText2}</span>
            </div>
            <img className="icon-caution-7" src={iconCaution} />
            <div className="rectangle-23-7"></div>
            <Link to="/main">
              <div className="cancel-order-28 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome7">
              <div className="rectangle-27-15 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage-7 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal8;