import React from "react";
import { Link } from "react-router-dom";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereviewHome7.css";

function CompletedPreorderWritereviewHome7(props) {
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
    frame2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereviewhome6 screen">
        <div className="flex-row-312">
          <div className="flex-col-297">
            <div className="my-order-8 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-103" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-138" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group4-133">
          <img className="free-icon-celebration-1517746-1-24" src={freeIconCelebration15177461} />
          <div className="successfully-completed-8 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group3-168">
          <div className="hanam-bbq-1216pm-co-15 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-70" src={line3} />
        <Frame2 component1Props={frame2Props.component1Props} />
        <div className="group-container-100">
          <Link to="/completed-preorder-writereview1-2">
            <div className="group-32-15">
              <div className="overlap-group1-325">
                <div className="write-review-24 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-620">
            <div className="cancel-order-42 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome7;
