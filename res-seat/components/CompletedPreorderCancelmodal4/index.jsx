import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderCancelmodal4.css";

function CompletedPreorderCancelmodal4(props) {
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
      <div className="completedpreordercancelmodal3 screen">
        <div className="overlap-group4-67">
          <div className="my-book-33 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
          <Link to="/main">
            <img className="icon-close-19" src={iconClose} />
          </Link>
          <img className="line-2-15" src={line2} />
          <div className="overlap-group-325">
            <div className="cancel-order-9 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-179">
            <div className="write-review-3 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Group237
            spanText1={group237Props.spanText1}
            spanText4={group237Props.spanText4}
            className={group237Props.className}
          />
          <div className="rectangle-28-3"></div>
          <div className="overlap-group3-100">
            <div className="rectangle-26-3"></div>
            <div className="rectangle-24-3"></div>
            <div className="rectangle-27-6"></div>
            <div className="cancel-order-10 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText1}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText2}</span>
            </div>
            <img className="icon-caution-3" src={iconCaution} />
            <div className="rectangle-23-3"></div>
            <Link to="/main">
              <div className="cancel-order-11 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome">
              <div className="rectangle-27-7 border-1px-orange"></div>
            </Link>
            <div className="back-to-mypage-3 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal4;
