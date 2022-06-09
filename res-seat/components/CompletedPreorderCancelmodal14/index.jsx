import React from "react";
import { Link } from "react-router-dom";
import Group23 from "../Group23";
import Component1692 from "../Component1692";
import "./CompletedPreorderCancelmodal14.css";

function CompletedPreorderCancelmodal14(props) {
  const {
    myOrder,
    close,
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
    image2,
    loadedBakedPotatoSoupRecipe32,
    loadedBakedPotatoSoupRecipe33,
    spanText6,
    spanText7,
    iconCaution,
    cancelOrder2,
    backToMypage,
    group23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-cancelmodal screen">
        <div className="overlap-group8-47">
          <div className="my-order-24 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
          <Link to="/main">
            <img className="close" src={close} />
          </Link>
          <img className="line-2-160" src={line2} />
          <img className="line-3-92" src={line3} />
          <img className="free-icon-celebration-1517746-1-39" src={freeIconCelebration15177461} />
          <div className="successfully-completed-23 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
          <div className="rectangle-23-22"></div>
          <div className="a-soup-shop-1216pm-5 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
          <div className="overlap-group-1111">
            <div className="cancel-order-65 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder1}</div>
          </div>
          <div className="overlap-group1-647">
            <div className="write-review-39 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <div className="overlap-group6-95">
            <Group23
              component11Props={group23Props.component11Props}
              component12Props={group23Props.component12Props}
              component13Props={group23Props.component13Props}
            />
            <img className="image-2-43" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3" src={loadedBakedPotatoSoupRecipe32} />
            <img className="loaded-baked-potato-soup-recipe-3" src={loadedBakedPotatoSoupRecipe33} />
          </div>
          <Component1692 />
          <div className="overlap-group7-67">
            <div className="rectangle-26-13"></div>
            <div className="rectangle-24-13"></div>
            <div className="rectangle-27-147"></div>
            <div className="cancel-order-66 applesdgothicneob00-regular-normal-flamingo-15px">
              <span className="applesdgothicneob00-regular-normal-flamingo-15px">{spanText6}</span>
              <span className="applesdgothicneob00-regular-normal-flamingo-25px">{spanText7}</span>
            </div>
            <img className="icon-caution-13" src={iconCaution} />
            <div className="rectangle-23-23"></div>
            <Link to="/main">
              <div className="cancel-order-67 applesdgothicneob00-regular-normal-derby-13px">{cancelOrder2}</div>
            </Link>
            <Link to="/completed-preorder-home">
              <div className="rectangle-27-148 border-1px-orange"></div>
            </Link>
            <Link to="/completed-preorder-writereview-home">
              <div className="back-to-mypage-13 applesdgothicneob00-regular-normal-flamingo-13px">{backToMypage}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderCancelmodal14;
