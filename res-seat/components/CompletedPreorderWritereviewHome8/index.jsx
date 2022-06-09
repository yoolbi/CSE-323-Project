import React from "react";
import { Link } from "react-router-dom";
import Group69 from "../Group69";
import "./CompletedPreorderWritereviewHome8.css";

function CompletedPreorderWritereviewHome8(props) {
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
    group69Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereviewhome7 screen">
        <div className="flex-row-327">
          <div className="flex-col-301">
            <div className="my-order-9 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-112" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-149" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-105">
          <img className="free-icon-celebration-1517746-1-25" src={freeIconCelebration15177461} />
          <div className="successfully-completed-9 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group6-59">
          <div className="hanam-bbq-1216pm-co-16 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-76" src={line3} />
        <Group69 component11Props={group69Props.component11Props} component12Props={group69Props.component12Props} />
        <div className="group-container-106">
          <div className="group-32-16">
            <div className="overlap-group1-331">
              <div className="write-review-25 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
            </div>
          </div>
          <div className="overlap-group-629">
            <div className="cancel-order-43 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome8;
