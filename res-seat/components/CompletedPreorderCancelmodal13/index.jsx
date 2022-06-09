import React from "react";
import { Link } from "react-router-dom";
import Component1 from "../Component1";
import "./CompletedPreorderCancelmodal13.css";

function CompletedPreorderCancelmodal13(props) {
  const {
    myOrder,
    iconClose,
    line2,
    line3,
    freeIconCelebration15177461,
    successfullyCompleted,
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
      <div className="completedpreordercancelmodal11 screen">
        <div className="overlap-group4-213">
          <div className="my-order-21 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <Link to="/main">
            <img className="icon-close-162" src={iconClose} />
          </Link>
          <img className="line-2-150" src={line2} />
          <img className="line-3-89" src={line3} />
          <img className="free-icon-celebration-1517746-1-37" src={freeIconCelebration15177461} />
          <div className="successfully-completed-21 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
          <div className="rectangle-23-16"></div>
          <div className="a-soup-shop-1216pm-4 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="overlap-group-911">
            <div className="cancel-order-61 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-541">
            <div className="write-review-37 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <div className="overlap-group2-413">
            <Component1 porkBelly={component1Props.porkBelly} className={component1Props.className} />
            <img className="image-12-24" src={image12} />
            <img className="loaded-baked-potato-soup-recipe-3-4-62" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="rectangle-29-16"></div>
          <div className="overlap-group3-323">
            <div className="rectangle-26-12"></div>
            <div className="rectangle-24-12"></div>
            <div className="rectangle-27-143"></div>
            <div className="cancel-order-62 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="icon-caution-12" src={iconCaution} />
            <div className="rectangle-23-17"></div>
            <Link to="/main">
              <div className="cancel-order-63 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome11">
              <div className="rectangle-27-144 border-1px-orange"></div>
            </Link>
            <Link to="/completedpreorderwritereviewhome9">
              <div className="back-to-mypage-12 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
            </Link>
          </div>
        </div>
        <img className="rectangle-28-12" src={rectangle28} />
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal13;
