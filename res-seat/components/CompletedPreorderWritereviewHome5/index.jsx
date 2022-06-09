import React from "react";
import { Link } from "react-router-dom";
import Group67 from "../Group67";
import "./CompletedPreorderWritereviewHome5.css";

function CompletedPreorderWritereviewHome5(props) {
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereviewhome4 screen">
        <div className="flex-row-272">
          <div className="flex-col-282">
            <div className="my-order-6 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-86" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-134" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-96">
          <img className="free-icon-celebration-1517746-1-22" src={freeIconCelebration15177461} />
          <div className="successfully-completed-6 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group4-118">
          <div className="hanam-bbq-1216pm-co-13 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-66" src={line3} />
        <Group67 />
        <div className="group-container-96">
          <div className="group-32-13">
            <div className="overlap-group1-319">
              <div className="write-review-22 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
            </div>
          </div>
          <div className="overlap-group-603">
            <div className="cancel-order-40 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome5;
