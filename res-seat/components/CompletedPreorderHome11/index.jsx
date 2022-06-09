import React from "react";
import { Link } from "react-router-dom";
import Frame3 from "../Frame3";
import "./CompletedPreorderHome11.css";

function CompletedPreorderHome11(props) {
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
      <div className="completedpreorderhome9 screen">
        <div className="flex-row-395">
          <div className="flex-col-389">
            <div className="my-order-13 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-137" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-154" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-115">
          <img className="free-icon-celebration-1517746-1-29" src={freeIconCelebration15177461} />
          <div className="successfully-completed-13 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group6-61">
          <div className="hanam-bbq-1216pm-co-20 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-80" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-116">
          <div className="overlap-group4-164">
            <div className="write-review-29 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Link to="/completedpreordercancelmodal9">
            <div className="group-29-11">
              <div className="overlap-group3-198">
                <div className="cancel-order-47 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome11;
