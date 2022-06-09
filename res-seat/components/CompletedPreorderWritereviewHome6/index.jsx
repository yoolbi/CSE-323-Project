import React from "react";
import { Link } from "react-router-dom";
import Group69 from "../Group69";
import "./CompletedPreorderWritereviewHome6.css";

function CompletedPreorderWritereviewHome6(props) {
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
      <div className="completedpreorderwritereviewhome5 screen">
        <div className="flex-row-275">
          <div className="flex-col-283">
            <div className="my-order-7 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-89" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-137" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-53">
          <img className="free-icon-celebration-1517746-1-23" src={freeIconCelebration15177461} />
          <div className="successfully-completed-7 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group5-97">
          <div className="hanam-bbq-1216pm-co-14 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-69" src={line3} />
        <Group69 component11Props={group69Props.component11Props} component12Props={group69Props.component12Props} />
        <div className="group-container-99">
          <div className="group-32-14">
            <div className="overlap-group1-322">
              <div className="write-review-23 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
            </div>
          </div>
          <div className="overlap-group-606">
            <div className="cancel-order-41 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome6;
