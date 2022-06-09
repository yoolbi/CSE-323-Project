import React from "react";
import { Link } from "react-router-dom";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereviewHome12.css";

function CompletedPreorderWritereviewHome12(props) {
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
      <div className="completedpreorderwritereviewhome11 screen">
        <div className="flex-row-424">
          <div className="flex-col-429">
            <div className="my-order-16 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-141" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-157" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group4-179">
          <img className="free-icon-celebration-1517746-1-32" src={freeIconCelebration15177461} />
          <div className="successfully-completed-16 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group3-227">
          <div className="hanam-bbq-1216pm-co-23 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-84" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-128">
          <div className="group-32-20">
            <div className="overlap-group1-480">
              <div className="write-review-32 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
            </div>
          </div>
          <div className="overlap-group-774">
            <div className="cancel-order-50 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome12;
