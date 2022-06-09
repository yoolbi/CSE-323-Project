import React from "react";
import { Link } from "react-router-dom";
import Component1 from "../Component1";
import "./CompletedPreorderCancelmodal11.css";

function CompletedPreorderCancelmodal11(props) {
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
      <div className="completedpreordercancelmodal9 screen">
        <div className="overlap-group4-180">
          <div className="my-order-18 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <Link to="/main">
            <img className="icon-close-159" src={iconClose} />
          </Link>
          <img className="line-2-143" src={line2} />
          <img className="line-3-86" src={line3} />
          <img className="free-icon-celebration-1517746-1-34" src={freeIconCelebration15177461} />
          <div className="successfully-completed-18 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
          <div className="rectangle-23-12"></div>
          <div className="a-soup-shop-1216pm-2 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="overlap-group-776">
            <div className="cancel-order-54 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-482">
            <div className="write-review-34 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <div className="overlap-group2-363">
            <Component1 porkBelly={component1Props.porkBelly} className={component1Props.className} />
            <img className="image-12-22" src={image12} />
            <img className="loaded-baked-potato-soup-recipe-3-4-58" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="rectangle-29-6"></div>
          <div className="overlap-group3-228">
            <div className="rectangle-26-10"></div>
            <div className="rectangle-24-10"></div>
            <div className="rectangle-27-139"></div>
            <div className="cancel-order-55 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="icon-caution-10" src={iconCaution} />
            <div className="rectangle-23-13"></div>
            <Link to="/main">
              <div className="cancel-order-56 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completedpreorderhome9">
              <div className="rectangle-27-140 border-1px-orange"></div>
            </Link>
            <Link to="/completedpreorderwritereviewhome10">
              <div className="back-to-mypage-10 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
            </Link>
          </div>
        </div>
        <img className="rectangle-28-10" src={rectangle28} />
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal11;
