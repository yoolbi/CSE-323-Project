import React from "react";
import { Link } from "react-router-dom";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereviewHome9.css";

function CompletedPreorderWritereviewHome9(props) {
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
      <div className="completedpreorderwritereviewhome8 screen">
        <div className="flex-row-355">
          <div className="flex-col-315">
            <div className="my-order-10 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-122" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-151" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group3-178">
          <img className="free-icon-celebration-1517746-1-26" src={freeIconCelebration15177461} />
          <div className="successfully-completed-10 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group4-144">
          <div className="hanam-bbq-1216pm-co-17 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-77" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-108">
          <div className="group-32-17">
            <div className="overlap-group1-335">
              <div className="write-review-26 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
            </div>
          </div>
          <div className="overlap-group-641">
            <div className="cancel-order-44 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome9;
