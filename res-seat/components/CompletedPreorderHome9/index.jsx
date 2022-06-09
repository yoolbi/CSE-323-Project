import React from "react";
import { Link } from "react-router-dom";
import Frame2 from "../Frame2";
import "./CompletedPreorderHome9.css";

function CompletedPreorderHome9(props) {
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
      <div className="completed-preorder-home-11 screen">
        <div className="flex-row-142">
          <div className="flex-col-123">
            <div className="my-order-1 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-54" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-64" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-74">
          <img className="free-icon-celebration-1517746-1-17" src={freeIconCelebration15177461} />
          <div className="successfully-completed-1 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group6-42">
          <div className="hanam-bbq-1216pm-co-9 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-53" src={line3} />
        <Frame2 component1Props={frame2Props.component1Props} />
        <div className="group-container-81">
          <div className="overlap-group4-96">
            <div className="write-review-17 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Link to="/completed-preorder-cancelmodal-11">
            <div className="group-29-9">
              <div className="overlap-group3-129">
                <div className="cancel-order-33 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome9;
