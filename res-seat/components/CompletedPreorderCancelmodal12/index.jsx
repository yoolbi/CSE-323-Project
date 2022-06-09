import React from "react";
import { Link } from "react-router-dom";
import Component1 from "../Component1";
import "./CompletedPreorderCancelmodal12.css";

function CompletedPreorderCancelmodal12(props) {
  const {
    myOrder,
    iconClose,
    line2,
    line3,
    freeIconCelebration15177461,
    successfullyCompleted,
    rectangle23,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    cancelOrder1,
    writeReview,
    image12,
    loadedBakedPotatoSoupRecipe34,
    spanText6,
    spanText7,
    iconCaution,
    cancelOrder2,
    backToMypage,
    rectangle28,
    component1Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreordercancelmodal10 screen">
        <div className="overlap-group4-193">
          <div className="my-order-20 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <Link to="/main">
            <img className="icon-close-161" src={iconClose} />
          </Link>
          <img className="line-2-147" src={line2} />
          <img className="line-3-88" src={line3} />
          <img className="free-icon-celebration-1517746-1-36" src={freeIconCelebration15177461} />
          <div className="successfully-completed-20 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
          <img className="rectangle-23-14" src={rectangle23} />
          <div className="a-soup-shop-1216pm-3 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="overlap-group-816">
            <div className="cancel-order-58 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-507">
            <div className="write-review-36 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <div className="overlap-group2-377">
            <Component1 porkBelly={component1Props.porkBelly} className={component1Props.className} />
            <img className="image-12-23" src={image12} />
            <img className="loaded-baked-potato-soup-recipe-3-4-61" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="rectangle-29-7"></div>
          <div className="overlap-group3-258">
            <div className="rectangle-26-11"></div>
            <div className="rectangle-24-11"></div>
            <div className="rectangle-27-141"></div>
            <div className="cancel-order-59 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="icon-caution-11" src={iconCaution} />
            <div className="rectangle-23-15"></div>
            <Link to="/main">
              <div className="cancel-order-60 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome10">
              <div className="rectangle-27-142 border-1px-orange"></div>
            </Link>
            <Link to="/completedpreorderwritereviewhome11">
              <div className="back-to-mypage-11 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
            </Link>
          </div>
        </div>
        <img className="rectangle-28-11" src={rectangle28} />
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal12;
