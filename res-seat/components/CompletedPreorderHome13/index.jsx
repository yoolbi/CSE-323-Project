import React from "react";
import { Link } from "react-router-dom";
import Frame3 from "../Frame3";
import "./CompletedPreorderHome13.css";

function CompletedPreorderHome13(props) {
  const {
    myOrder,
    line2,
    iconClose,
    freeIconCelebration15177461,
    successfullyCompleted,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    line3,
    writeReview,
    cancelOrder,
    frame3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome11 screen">
        <div className="flex-row-450">
          <div className="flex-col-454">
            <div className="my-order-19 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-146" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-160" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-126">
          <img className="free-icon-celebration-1517746-1-35" src={freeIconCelebration15177461} />
          <div className="successfully-completed-19 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group6-67">
          <div className="hanam-bbq-1216pm-co-24 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-87" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-131">
          <div className="overlap-group4-192">
            <div className="write-review-35 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Link to="/completedpreordercancelmodal11">
            <div className="group-29-13">
              <div className="overlap-group3-252">
                <div className="cancel-order-57 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome13;
