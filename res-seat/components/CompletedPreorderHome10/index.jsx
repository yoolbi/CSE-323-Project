import React from "react";
import { Link } from "react-router-dom";
import Group69 from "../Group69";
import "./CompletedPreorderHome10.css";

function CompletedPreorderHome10(props) {
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
      <div className="completedpreorderhome8 screen">
        <div className="flex-row-371">
          <div className="flex-col-343">
            <div className="my-order-11 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-127" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-152" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-60">
          <img className="free-icon-celebration-1517746-1-27" src={freeIconCelebration15177461} />
          <div className="successfully-completed-11 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group5-112">
          <div className="hanam-bbq-1216pm-co-18 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-78" src={line3} />
        <Group69 component11Props={group69Props.component11Props} component12Props={group69Props.component12Props} />
        <div className="group-container-110">
          <div className="overlap-group1-455">
            <div className="write-review-27 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Link to="/completedpreordercancelmodal8">
            <div className="group-29-10">
              <div className="overlap-group-701">
                <div className="cancel-order-45 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome10;
